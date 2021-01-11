
 #define LOG_OUT 1 // use the log output function
 #define OCTAVE 1
 #define OCT_NORM 0
 #define FHT_N 256 // set to 256 point fht
 
 #include <FHT.h> // include the library

 int k = 0;
 const int vibraPin = 9;
 float volume = 1.0;
 int noise[] = {204, 198, 100, 85, 85, 80, 80, 80};
 float noise_fact[] = {15, 7, 1.5, 1, 1.2, 1.4, 1.7, 3}; // noise level determined by playing pink noise and seeing levels [trial and error]{204,188,68,73,150,98,88,68}
 float noise_fact_adj[] = {15, 7, 1.5, 1, 1.2, 1.4, 1.7, 3}; // noise level determined by playing pink noise and seeing levels [trial and error]{204,188,68,73,150,98,88,68}
 
 void setup() {
   Serial.begin(9600); // use the serial port
   delay(1000);
   //TIMSK0 = 0; // turn off timer0 for lower jitter
   ADCSRA = 0xe5; // set the adc to free running mode
   ADMUX = 0x40; // use adc0
   DIDR0 = 0x01; // turn off the digital input for adc0
   for (int i = 1; i < 8; i++) {
    noise_fact_adj[i] = noise_fact[i] * volume;
   }

   pinMode(vibraPin, OUTPUT);
 }
 
void loop() {
   //while(1) { // reduces jitter
     cli();  // UDRE interrupt slows this way down on arduino1.0
     for (int i = 0 ; i < FHT_N ; i++) { // save 256 samples
       while(!(ADCSRA & 0x10)); // wait for adc to be ready
         ADCSRA = 0xf5; // restart adc
         byte m = ADCL; // fetch adc data
         byte j = ADCH;
         int k = (j << 8) | m; // form into an int
         k -= 0x0200; // form into a signed int
         k <<= 6; // form into a 16b signed int
         fht_input[i] = k; // put real data into bins
       }
       fht_window(); // window the data for better frequency response
       fht_reorder(); // reorder the data before doing the fht
       fht_run(); // process the data in the fht
       fht_log_out; // take the output of the fht
       sei();
       // Serial.println(255); // send a start byte
      // for (int i=0; i< FHT_N; i++){
///        if (fht_log_out[i] == 0) {
///         
///        } else {
          //Serial.print(i);
      //    Serial.write(i);
          //Serial.print(": ");
       //   Serial.write(": ");
          //Serial.print(fht_log_out[i]);
          Serial.print(fht_oct_out[2]);
          Serial.print(" - ");  
          Serial.print(" ");
       // }
          Serial.println();
 
       }
       //Serial.println(fht_log_out[1]); // send out the data
       //Serial.println(fht_log_out[2]);
       //Serial.println(FHT_N/2);
       

   
