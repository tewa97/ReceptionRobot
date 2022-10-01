
for this we choose the joy Robot (Robô Da Alegria) - Open Source 3D Printed, Arduino Powered Robot! 
<p align="center">
<img src="https://content.instructables.com/ORIG/FRI/2NPV/JBQUHJ6V/FRI2NPVJBQUHJ6V.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=d5e0711bb4802cbf00f5b26e7f0f79f5" width="40%"/>
</p>

The robot is controlled using an Arduino Uno at it's core. The Arduino interfaces an ESP8266-01 module, which is used to remote control the robot over an Wi-Fi network.

An 16-channel servo controller is connected to the Arduino using I2C communication and controls 6 servomotors (two for the neck and two for each arm). An array of five 8x8 LED matrices is powered and controlled by the Arduino. Four Arduino's digital outputs are used for the control of two DC motors, using an h-bridge.

The circuits are powered using two USB power banks: one for the motors and one for the Arduino. I've tryed to power the whole robot using a signle power pack. But ESP8266 used to lost connection due to spikes when DC motors turned on/off.

The chest of the robot has a smartphone. It's used to broadcast video and audio to/from the control interface, hosted on an ordinary computer. It can also send commands to the ESP6288, thus controlling the body of the robot itself. for more details about the robot mecanical parts and hardware control sctak see <a href="https://www.instructables.com/Joy-Robot-Robô-Da-Alegria-Open-Source-3D-Printed-A/">here</a> 

react-siri-ware works on @babel/runtime@7.12.18

