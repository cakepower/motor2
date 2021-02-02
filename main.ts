basic.forever(function () {
    motorbit.turnright(pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    0,
    100
    ))
    motorbit.turnleft(pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    0,
    100
    ))
})
