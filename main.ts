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
    }
    if (name == "interact" && value == 3) {
        showNr = true
        basic.showNumber(codelockNr)
    }
})
let yPosition = 0
let xPosition = 0
let showNr = false
let codelockNr = 0
let Lightlevel = input.lightLevel()
basic.pause(100)
radio.setGroup(10)
let objectiveX = 1
let objectiveY = 2
codelockNr = 0
showNr = false
basic.forever(function () {
    if (input.lightLevel() > 180) {
        led.plot(objectiveX, objectiveY)
        radio.sendValue("xTarget", objectiveX)
        radio.sendValue("yTarget", objectiveY + 5)
    }
    led.plot(xPosition, yPosition - 5)
    if (showNr) {
        if (xPosition > 5 || yPosition < 5) {
            basic.showNumber(codelockNr)
        }
    }
})
