input.onButtonPressed(Button.A, function () {
    radio.sendString("stop")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("left")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "left") {
        basic.showArrow(ArrowNames.West)
    } else if (receivedString == "right") {
        basic.showArrow(ArrowNames.East)
    } else if (receivedString == "stop") {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.clearScreen()
    }
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
})
basic.showIcon(IconNames.Umbrella)
radio.setGroup(42)
