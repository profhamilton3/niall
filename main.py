xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.show_leds("""
    # # . # #
        # . . . #
        . # . # .
        # . # . #
        . # # # .
""")

def on_forever():
    xgo.execution_action(xgo.action_enum.LOOKING_FOR_FOOD)
    basic.pause(6)
    xgo.execution_action(xgo.action_enum.STRETCH_ONESELF)
    basic.pause(6)
    xgo.execution_action(xgo.action_enum.REQUEST_FEEDING)
    basic.pause(6)
    xgo.execution_action(xgo.action_enum.HANDSHAKE)
    basic.pause(6)
    xgo.execution_action(xgo.action_enum.PEE)
    basic.pause(6)
basic.forever(on_forever)
