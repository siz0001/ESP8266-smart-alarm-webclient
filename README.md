# ESP8266-smart-alarm-webclient
![](https://github.com/siz0001/ESP8266-smart-alarm-webclient/blob/master/src/assets/schematics.png)
- ESP8266 를 웹 서버로 만들고, 
- Ultrasonic Sensor(HC-SR04)를 통해 받은 거리값의 변화를 통해 
- 엘리베이터 문이 열리고 손님이 입장하는 것을 감지후 
- 거리값을 REST API로 송신하는 시스템

## router 세팅
- ESP8266과 연결되는 라우터 옵션 설정으로 ESP8266의 접속 IP를 내부 IP로 고정
- server IP 기본값은 192.169.1.200 이나, 이미 사용하고 있어 다른 IP를 사용해야 할 경우  store/index.js 에서 수정 가능

## build & run
- build후 dist 폴더에 run.bat 를 실행하면 local server가 시작됨. 이때 ESP8266과 같은 라우터로 연결되어있어야 함. 
- 외부에서 ESP8266에 연결할 경우 포트가 차단되어 정상적으로 값이 수신되지 않을 수 있음.


