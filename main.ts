input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 8) {
        basic.showString("B")
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.playMelody("- C5 - C5 - C5 - C5 ", 120)
    }
    while (input.temperature() > 30) {
        basic.showString("A")
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.playMelody("C C5 C C5 C C5 C C5 ", 120)
    }
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    while (pins.analogReadPin(AnalogPin.P1) < 200) {
        basic.showString("-H")
        music.playMelody("C5 B A G F E D C ", 120)
        if (pins.analogReadPin(AnalogPin.P1) < 200 && input.temperature() < 8) {
            music.playMelody("B C5 B C5 B C5 B C5 ", 240)
        }
    }
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    while (pins.analogReadPin(AnalogPin.P1) > 600) {
        basic.showString("+H")
        music.playMelody("C D E F G A B C5 ", 120)
        if (pins.analogReadPin(AnalogPin.P1) > 600 && input.temperature() > 30) {
            music.playMelody("B C5 B C5 B C5 B C5 ", 240)
        }
        basic.pause(1000)
    }
})
