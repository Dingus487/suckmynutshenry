controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    bussyfridge,
    [img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
        8 f 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
        8 8 f 8 8 8 8 8 8 8 8 8 8 f 8 8 
        8 8 8 f 8 8 8 8 8 8 8 8 f 8 8 8 
        8 8 8 8 f 8 8 8 8 8 8 f 8 8 8 8 
        8 8 8 8 8 f 8 8 8 8 f 8 8 8 8 8 
        8 8 8 8 8 8 f 8 8 f 8 8 8 8 8 8 
        8 8 8 8 8 8 8 f f 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 f f 8 8 8 8 8 8 8 
        8 8 8 8 8 8 f 8 8 f 8 8 8 8 8 8 
        8 8 8 8 8 f 8 8 8 8 f 8 8 8 8 8 
        8 8 8 8 f 8 8 8 8 8 8 f 8 8 8 8 
        8 8 8 f 8 8 8 8 8 8 8 8 f 8 8 8 
        8 8 f 8 8 8 8 8 8 8 8 8 8 f 8 8 
        8 f 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
        f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
        `,img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `],
    100,
    false
    )
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (bussyfridge.vy <= 0) {
        bussyfridge.setVelocity(0, -50)
        pause(500)
        bussyfridge.vy += 100
        pause(500)
        bussyfridge.vy += -50
    }
})
let bussyfridge: Sprite = null
bussyfridge = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Player)
bussyfridge.setStayInScreen(true)
controller.player2.moveSprite(bussyfridge, 100, 0)
bussyfridge.setPosition(0, 112)
