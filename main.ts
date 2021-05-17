input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(100)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Target)
})
input.onButtonPressed(Button.A, function () {
    basic.showString(lettres.charAt(randint(0, lettres.length - 1)))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(100)
    basic.showIcon(IconNames.Ghost)
    basic.pause(100)
    basic.clearScreen()
})
let lettres = ""
input.setSoundThreshold(SoundThreshold.Loud, 155)
lettres = "ABCDEFGHIJKLMNOPRSTUVZ"
basic.forever(function () {
	
})
