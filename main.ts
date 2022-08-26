let max_t = input.temperature()
basic.forever(function () {
    if (input.temperature() > max_t) {
        max_t = input.temperature()
    }
    basic.showNumber(max_t)
})
