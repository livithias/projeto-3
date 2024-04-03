basic.forever(function () {
    basic.showIcon(IconNames.StickFigure)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Butterfly)
    basic.pause(500)
    basic.showLeds(`
        # # . # #
        # # # # #
        . . # . .
        # # # # #
        # # . # #
        `)
})
