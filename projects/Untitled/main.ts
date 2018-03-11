SensorSystem.connect("tiger")
SensorSystem.sample_rate(5)
for (let i = 0; i < 10; i++) {
    sensors.tempF()
    sensors.humidity()
    Data.LightLED(0)
    Data.makeNoise(100)
    loops.pause(5000)
}
SensorSystem.upload("datafile")
