basic.forever(function () {
    motorbit.freestyle(pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    -100,
    100
    ), pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    -100,
    100
    ))
    pins.servoWritePin(AnalogPin.P4, pins.map(
    pins.analogReadPin(AnalogPin.P13),
    0,
    1023,
    -180,
    180
    ))
})
