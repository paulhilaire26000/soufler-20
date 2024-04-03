basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            music.play(music.stringPlayable("D E D E D E D F ", 120), music.PlaybackMode.InBackground)
            basic.clearScreen()
            basic.pause(5000)
            basic.showIcon(IconNames.Ghost)
        }
    }
})
