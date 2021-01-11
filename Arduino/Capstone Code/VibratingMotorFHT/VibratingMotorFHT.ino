/*
fht_codec.pde
guest openmusiclabs.com 9.5.12
example sketch for running an fht on data collected
with the codecshield.  this will send out 128 bins of
data over the serial port at 115.2kb.  there is a
pure data patch for visualizing the data.

note: be sure to download the latest AudioCodec library
if yours is older than 8.16.12.  there were modifications
made that allow for code outside of the interrupt.
*/

#define SAMPLE_RATE 44 // 44.1Khz
#define ADCS 0// no ADCs are being used
#define LOG_OUT 1 // use the log output function
#define OCTAVE 1
#define FHT_N 256 // set to 256 point fht

// include necessary libraries
#include "FHT.h"
#include <Wire.h>
#include <SPI.h>
#include <AudioCodec.h>

// create data variables for audio transfer
int left_in = 0x0000;
int left_out = 0x0000;
int right_in = 0x0000;
int right_out = 0x0000;
unsigned int count = 0;
volatile byte flag = 1;

//int voltage; //Voltage level received from the serial port
//Serial myPort; //Create object from Serial class
////Port settings in the Arduino environment
//myPort = new Serial(this, "/dev/cu.usbmodem1411", 115200);

void setup() {
  Serial.begin(115200); // use serial port
  AudioCodec_init();
  ADCSRA = 0xe5;
  ADMUX = 0X40;
  DIDR0 = 0x01;
}



void loop() {
  while(1) { // reduces clock jitter
    //while(flag); // wait for samples to be collected
    cli(); //collect data
    for(int i = 0; i<FHT_N; i++){
      while(!(ADCSRA & 0x10)); //wait for ADC to be ready
       ADCSRA = 0xf5; //restart the ADC
       byte a = ADCL; //fetch the date from ADC
       byte b = ADCH;
       int j = (b<<8)|a; //form value of byte into an int
       j -= 0x0200; //form into a signed int
       j <<= 6; //form into a 16byte signed int
       fht_input[i] = j; //put real data into bins
    }
    
    //Process the data
    fht_window(); // window the data
    fht_reorder(); // reorder for fht input
    fht_run(); // process fht
    fht_mag_log(); // take output of fht 
    sei();
    Serial.println("start");
    for (int i = 0; i < LOG_N; i++) {
      Serial.println(fht_log_out[i]);
    }
   // delay(1000);
  

    //Serial.write(255); // send out a start byte
    //Serial.write(fht_log_out, FHT_N/2); // send out data bytes
//    flag = 1; // tell the codec that processing is done
  }
}

//// timer1 interrupt routine - data collected here
//ISR(TIMER1_COMPA_vect) { // store registers (NAKED removed)
//
//  // &'s are necessary on data_in variables
//  AudioCodec_data(&left_in, &right_in, left_out, right_out);
//  left_out = left_in; // pass audio through
//  right_out = right_in;
//  if (flag) { // check if the fht is ready for more data
//    fht_input[count] = left_in; // put real data into bins
//    count++; // increment to next bin
//    if (count >= FHT_N) { // check if all bins are full
//      flag = 0; // tell the fht to start running
//      count = 0; // reset the bin counter
//    }
//  }
//}


