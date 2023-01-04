let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    basic.showNumber(bearing)
    basic.pause(1000)
})
