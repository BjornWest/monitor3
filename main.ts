function position (x: number, y: number) {
    led.unplot(xPosition, yPosition - 5)
    xPosition = x
    yPosition = y
}
radio.onReceivedValue(function (name, value) {
    if (name == "xPos") {
        position(value, yPosition)
    } else if (name == "yPos") {
        position(xPosition, value)
    } else {
    	
    }
})
let yPosition = 0
let xPosition = 0
radio.setGroup(1)
xPosition = 0
yPosition = 0
basic.forever(function () {
    led.plot(xPosition, yPosition - 5)
})
