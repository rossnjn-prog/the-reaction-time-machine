input.onButtonPressed(Button.A, function () {
    basic.showString("Game starts in 3...2...1...Go")
})
basic.forever(function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
