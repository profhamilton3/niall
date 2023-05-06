input.onButtonPressed(Button.A, function () {
    xgo.execution_action(xgo.action_enum.Crawl_forward)
    xgo.body_height(60)
    xgo.move_xgo(xgo.direction_enum.Forward, 51)
    basic.pause(5000)
    xgo.execution_action(xgo.action_enum.Stretch_oneself)
    xgo.body_height(6)
    xgo.move_xgo(xgo.direction_enum.Backward, 51)
    basic.pause(5000)
    xgo.execution_action(xgo.action_enum.Request_feeding)
    basic.pause(5000)
    xgo.execution_action(xgo.action_enum.Handshake)
    basic.pause(5000)
    xgo.execution_action(xgo.action_enum.Pee)
    basic.pause(5000)
})
input.onSound(DetectedSound.Loud, function () {
    xgo.body_height(81)
    basic.pause(5000)
    xgo.move_xgo(xgo.direction_enum.Forward, 51)
    basic.pause(5000)
    xgo.move_xgo(xgo.direction_enum.Backward, 51)
    basic.pause(5000)
    xgo.move_xgo(xgo.direction_enum.Left, 51)
    basic.pause(5000)
    xgo.move_xgo(xgo.direction_enum.Forward, 51)
    basic.pause(5000)
    xgo.move_xgo(xgo.direction_enum.Backward, 51)
    basic.pause(5000)
    xgo.execution_action(xgo.action_enum.Twirl_Pitch)
    basic.pause(5000)
})
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.showLeds(`
    . . . . .
    # . . . #
    . # . # .
    # . # . #
    . # . # .
    `)
