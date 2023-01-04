let bearing = 0
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    bearing = input.compassHeading()
    basic.showNumber(bearing)
    basic.pause(1000)
})
