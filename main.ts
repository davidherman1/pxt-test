let number1 = 0
let shake = 0
let number6 = 0
input.onGesture(Gesture.Shake, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    number1 = randint(1, 6)
    shake += 1
    if (number1 == 6) {
        number6 += 1
    }
    if (number6 == 3) {
         music.playTone(Note.C, music.beat(BeatFraction.Whole))
        basic.showNumber(shake)
    }
})
