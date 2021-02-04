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
})
