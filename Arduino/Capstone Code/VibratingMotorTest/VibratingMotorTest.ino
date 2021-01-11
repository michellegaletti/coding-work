#include <Wire.h>
#include "Adafruit_DRV2605.h"
#include "FHT.h" 

int vibraState;
int changeState;
Adafruit_DRV2605 drv;

void setup() {
  int32_t frequency = 4;
  //pinMode(4, INPUT);
  pinMode(5, OUTPUT); 
  
  Serial.begin(9600);
  Serial.println("DRV2605 Audio responsive test");
  drv.begin();

  drv.setMode(DRV2605_MODE_AUDIOVIBE);
  
  // ac coupled input, puts in 0.9V bias
  drv.writeRegister8(DRV2605_REG_CONTROL1, 0x20);  
 
  // analog input
  drv.writeRegister8(DRV2605_REG_CONTROL3, 0xA3);  
}


void loop() {
  //Checks to see whether or not the vibrating motor is on or not
  vibraState = digitalRead(4);
  changeState = digitalRead(5);

  Serial.print("vibrating: ");
  //print each value on a new line
  Serial.print(vibraState);
  Serial.print("     change: ");
  Serial.println(changeState);

  if(vibraState == HIGH){
    digitalWrite(5, HIGH);
  }else{
    digitalWrite(5, LOW);
  }
}
