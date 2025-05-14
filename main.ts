basic.forever(function () {
    input.onGesture(Gesture.Shake, function () {
        basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
    `)
    })
input.onButtonPressed(Button.A, function () {
        basic.showNumber(5)
    })
input.onButtonPressed(Button.B, function () {
        basic.showIcon(IconNames.Happy)
    })
})
