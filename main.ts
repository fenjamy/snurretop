input.onButtonPressed(Button.A, function () {
    hastighed = hastighed - 1
})
input.onButtonPressed(Button.AB, function () {
    hastighed = 0
})
input.onButtonPressed(Button.B, function () {
    hastighed = hastighed + 1
})
let hastighed = 0
basic.showIcon(IconNames.Heart)
let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.showRainbow(1, 360)
hastighed = 0
basic.forever(function () {
    haloDisplay.rotate(hastighed)
    haloDisplay.show()
})
