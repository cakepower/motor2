serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P4, pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    -180,
    180
    ))
    pins.servoWritePin(AnalogPin.P10, pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    0,
    180
    ))
    serial.writeNumber(pins.analogReadPin(AnalogPin.P3))
    serial.writeLine("")
})
