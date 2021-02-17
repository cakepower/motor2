serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P5, pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    -180,
    180
    ))
    pins.servoWritePin(AnalogPin.P6, pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    -180,
    180
    ))
    if (input.soundLevel() > 50 && input.soundLevel() < 160) {
        serial.writeNumber(input.soundLevel())
        serial.writeLine("")
        pins.servoWritePin(AnalogPin.P13, 120)
        pins.servoWritePin(AnalogPin.P11, 120)
        motorbit.freestyle(30, 30)
    } else {
        motorbit.freestyle(0, 0)
        pins.servoWritePin(AnalogPin.P13, 0)
        pins.servoWritePin(AnalogPin.P11, 0)
    }
})
