namespace SpriteKind {
    export const Food2 = SpriteKind.create()
    export const Food3 = SpriteKind.create()
    export const Food4 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food4, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.showLongText("This is no time to watch TV", DialogLayout.Bottom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GiveSpoon == 1) {
        mySprite.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .........fffffffffffff..........
            ........ffeeeeeeeeeeeff.........
            ........feeeeeeeeeeeeef.........
            ........feedddddddddddf.........
            ........feddddddddddddf.........
            ........fedddddbbffdddf.........
            ........fedddddbbffdddf.........
            ........fdddddd11ffdddf.........
            ........fdddddd11ffdddf.........
            ........fdddddddddddddf.........
            ........fdddddddddddddf.........
            .........ffdddddddddddf.........
            .........f444444444ddf..........
            ........ff444444444ffffff.......
            ........fffff44444444dddf.......
            ........fdddf44444444dddf.......
            ........fdddf444444ffffff.......
            ........fdddf444444f............
            ........fffff444444f............
            ............f4444fffff..........
            ............f4444f444f..........
            ............f44444444f..........
            ............ffffffffff..........
            `)
        spoon = sprites.createProjectileFromSprite(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ........................f.......
            .......................fbf......
            .......................fbf......
            .......................fbf......
            .......................fbf......
            .......................fbf......
            .......................fbf......
            .......................fbf......
            ........................f.......
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, mySprite, 0, 0)
    }
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food3, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.showLongText("Hmm there seems to be something here...", DialogLayout.Bottom)
    pause(500)
    game.showLongText("You received a spoon", DialogLayout.Bottom)
    GiveSpoon = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.showLongText("This bed is nice and soft", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.showLongText("Sorry I'm not escaping through there", DialogLayout.Bottom)
})
let spoon: Sprite = null
let mySprite: Sprite = null
let GiveSpoon = 0
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    44444444444444444444444555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ddddddddddd44444444444444444444444
    444444444444444444444444445444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ddddddddd444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ddddd44444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444b4444444444444bb4bbbbbbbbbbbbbbbbbbbbbb
    444444444444444444444444444444444444444444444444444444444444444444444444444b4444444444b444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4444444444444444b4444444444444444444444444444bb44b444bb4bbbbb4bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    4b444444bbbbbb4bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbe22222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbe2222222222222222222222ebbbbbbbbbbbbbbbbbbbbbbbbbbb22222222222222222222222ebbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbb222222222222222222222222ebbbbbbbbbbbbbbbbbbbbbbbbbbe2222222222222222222222ebbbbbbbbbbbbbbbbbbbbbbbbbbe22222222222222222222222ebbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeee222ebbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeee22ebbbbbbbbbbbbbbbbbbbbbbbbbbee2eeeeeeeeeeeeeeeeeee2eebbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbebeeeeeeeeeebeeeebeeee22ebbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeebeeeebeeeeebeee22ebbbbbbbbbbbbbbbbbbbbbbbbbbee2eeeebeeeebeeeeeeeee2eebbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbeeeceeeeeeeebeeeebeeee22ebbbbbbbbbbbbbbbbbbbbbbbbbbbeeceebeeeebeeeeebeee22ebbbbbbbbbbbbbbbbbbbbbbbbbbeb2eceebeeeebeeeeebeee2eebbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbeeceeebeeeebeeeebeeee22ebbbbbbbbbbbbbbbbbbbbbbbbbbb2eccebeeeebeeeeebeee22ebbbbbbbbbbbbbbbbbbbbbbbbbbeb2eceebeeeebeeeeebeee2eebbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbb22ecceebeeeebeeeebeeee22ebbbbbbbbbbbbbbbbbbbbbbbbbbe2eccebeeeebeeeeebeee22ebbbbbbbbbbbbbbbbbbbbbbbbbbe22eccebeeeebeeeeebeee2eebbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbb22ecceebeeeebeeeebeeee22ebbbbbbbbbbbbbbbbbbbbbbbbbbe2eccebceeebeeeeebeeee2ebbbbbbbbbbbbbbbbbbbbbbbbbbe22eccebeeeebeeeeebeee2eebbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbb22ecccebeeeebeeeebeeee22ebbbbbbbbbbbbbbbbbbbbbbbbbbe2ecccbceeebeeeeebeeee2ebbbbbbbbbbbbbbbbbbbbbbbbbbe22ecccbeeeebeeeeebeee2eebbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbb22eccccbeeeebeeeebeeee22ebbbbbbbbbbbbbbbbbbbbbbbbbbe2ecccbceeebceeeebeeee2ebbbbbbbbbbbbbbbbbbbbbbbbbbe22ecccbeeeebeeeeebeee2eebbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeee22eccccbeeeebeeeebeeee22ceeeeeeeeeebbeeeeeeeeeeeeeee2ecccbceeebceeeebeeee2eeeeeeeeeeeeeeeeeeebbeeeeeee22ecccbeeeebeeeeebeee2eeeeeeeeeeeeeeeeeee
    cccccccccccccccce2eccccbeeeebeeeebeeee22ccccccccccccccccccccccccccce2ecccbceeebceeeebeeee2eccccccccccccccccccccccccccc22ecccbeeeebeeeeebeee2eeccccccccccccccccc
    cccccccccccccccce2eccccbeeeebeeeebeeee22ccccccccccccccccccccccccccce2ecccbceeebceeeebeeee2eccccccccccccccccccccccccccc22ecccbeeeebeeeeebeee2eeccccccccccccccccc
    cccccccccccccccce22eeeeeeeeeeeeeeeeee222ccccccccccccccccccccccccccce2eeeeeeeeeeeeeeeeeee22eccccccccccccccccccccccccccc22eeeeeeeeeeeeeeeeeee2eeccccccccccccccccc
    cccccccccccccccce22eeeeeeeeeeeeeeeeee222ccccccccccccccccccccccccccce2eeeeeeeeeeeeeeeeeee22eccccccccccccccccccccccccccc22eeeeeeeeeeeeeeeeeee2eeccccccccccccccccc
    cccccccccccccccce2efcccccccccccccbccce22ccccccccccccccccccccccccccce2efccbccccbcccccbccce2eccccccccccccccccccccccccccc22ccccbccccbccccccccc2eeccccccccccccccccc
    cccccccccccccccce2ecccccccccbccccbccce22ccccccccccccccccccccccccccce2ecccbccccbcccccbccce2eccccccccccccccccccccccccccc22ccccbccccbccccccccc2eeccccccccccccccccc
    cccccccccccccccce2ecccccccccbccccbccce22ccccccccccccccccccccccccccce2ecccbccccbcccccbccce2eccccccccccccccccccccccccccc22ccccbccccbccccccccc2eeccccccccccccccccc
    cccccccccccccccce2efccccccccbccccbccce22ccccccccccccccccccccccccccce2ecccbccccbcccccbccce2eccccccccccccccccccccccccccc22ccccbccccbcccccbccc2eeccccccccccccccccc
    cccccccccccccccce2efcccbccccbccccbccce22ccccccccccccccccccccccccccce2ecccbccccbcccccbccce2eccccccccccccccccccccccccccc22ccccbccccbcccccbccc2eeccccccccccccccccc
    cccccccccccccccce2efcccbccccbccccbccce22ccccccccccccccccccccccccccce2ecccbccccbcccccbccce2eccccccccccccccccccccccccccc22ccccbccccbcccccbccc2eeccccccccccccccccc
    cccccccccccccccce2efcccbccccbccccbccce22ccccccccccccccccccccccccccce2efccbccccbcccccbccce2eccccccccccccccccccccccccccc22cfccbccccbcccccbccc2eeccccccccccccccccc
    cccccccccccccccce2efcccbccccbccccbccce22ccccccccccccccccccccccccccce2efccbccccbcccccbccce2eccccccccccccccccccccccccccc22cfccbccccbccccccccc2eeccccccccccccccccc
    cccccccccccccccceeefcccbccccbccccbccce22ccccccccccccccccccccccccccce2efccbccccbcccccbccce2eccccccccccccccccccccccccccc22cfccbccccbcccccbccc2eeccccccccccccccccc
    cccccccccccccccceeecccccccccbccceeeee222ccccccccccccccccccccccccccce2efccbccccbcccceeeee22eccccccccccccccccccccccccccc22cfccbccccbcccceeeee2eeccccccccccccccccc
    ccccccccccccccccebecccccccccbccceebdde22ccccccccccccccccccccccccccceeefccbccccbccccebbdbe2eccccccccccccccccccccccccccce2cfccbccccbccccebbdb2eeccccccccccccccccc
    cccccccccccccccceb2eeeeeeeeeeeee2bdbbe22ccccccccccccccccccccccccccceeeeeeeeeeeeeeee2bdbbe2eccccccccccccccccccccccccccce2eeeeeeeeeeeeeeebbbb2eeccccccccccccccccc
    ccccccccccccccccbeeeeeeeeeeeeeeeeebdbe22cccccccccccccccccccccccccccb2eeeeeeeeeeeeee2bbdbe2ecccccccccccccccccccccccccccb2eeeeeeeeeeeeee2bbbb2eeccccccccccccccccc
    cccccccccccccccceeeccccccccccccceebbde22ccccccccccccccccccccccccccce2effcbccccbccccebbbbe2eccccccccccccccccccccccccccce2cffccccccbcccc2bbbb2eeccccccccccccccccc
    cccccccccccccccce2efcccccccccccceebbde22ccccccccccccccccccccccccccce2effcbccccbccccebbbbe2eccccccccccccccccccccccccccc22cffcbccccbcccc2bdbb2eeccccccccccccccccc
    cccccccccccccccce2effcccccccbccce2eee222ccccccccccccccccccccccccccce2effcbccccbcccceeeee22eccccccccccccccccccccccccccc22cffcbccccbcccc2eeee2eeccccccccccccccccc
    cccccccccccccccce2effccbccccbcccceeeee22ccccccccccccccccccccccccccce2efffbccccbccccebeee22eccccccccccccccccccccccccccc22cffcbccccbcccceeeee2eeccccccccccccccccc
    cccccccccccccccce2efffccccccbccccbccce22ccccccccccccccccccccccccccce2efffbccccbcccccbccce2eccccccccccccccccccccccccccc22ffffbccccbccccccccc2eecbccccccccccccccc
    cccccccccccccccce2efffccccccbccccbccce22ccccccccccccccccccccccccccce2ffffbccccbcccccbccce2eccccccccccccccccccccccccccc22ffffbccccbccccccccc2eeccccccccccccccccc
    cccccccccccccccce2efffccccccbccccbccce22ccccccccccccccccccccccccccce2ffffbccccbcccccbccce2eccccccccccccccccccccccccccc22ffffbccccbccccccccc2eeccccccccccccccccc
    cccccccccccccccce2efffccccccbccccbccce22ccccccccccccccccccccccccccce2ffffbccccbcccccbccce2eccccccccccccccccccccccccccc22ffffbccccbccccccccc2eeccccccccccccccccc
    cccccccccccccccce2efffccccccbccccbccce22ccccccccccccccccccccccccccce2ffffbccccbcccccbccce2eccccccccccccccccccccccccccc22ffffbccccbccccccccc2eeccccccccccccccccc
    cccccccccccccccce2efffccccccbccccbccce22ccccccccccccccccccccccccccce2ffffbcfccbcccccbccce2eccccccccccccccccccccccccccc22ffffbcfccbccccccccc2eeccccccccccccccccc
    cccccccccccccccce2efffccffcccccccbccce22ccccccccccccccccccccccccccce2ffffbcfffbcccccbccce2eccccccccccccccccccccccccccc22ffffbcfffbccccccccc2eeccccccccccccccccc
    cccccccccccccccce22eeeeeeeeeeeeeeeeee222ccccccccccccccccccccccccccce2eeeeeeeeeeeeeeeeeee22eccccccccccccccccccccccccccc22eeeeeeeeeeeeeeeeeee2eeccccccccccccccccc
    cccccccccccccccce2effceeccceecccceccce22ccccccccccccccccccccccccccce2efffeeccceeccceeccce2eccccccccccccccccccccccccccc22ffffeccccecccceeccc2eeccccccccccccccccc
    cccccccccccccccce2efffccfffccffffbcffe22ccccccccccccccccccccccccccce2ffffccfffbcfffcbfffe2eccccccccccccccccccccccccccc22ffffccfffccfffccccf2eeccccccccccccccccc
    cccccccccccccccce2efffccfffccffffbfffe22ccccccccccccccccccccccccccce2ffffbcffcbcfffcbfffe2eccccccccccccccccccccccccccc22ffffbcfffbffffccfff2eeccccccccccccccccc
    cccccccccccccccce2efffccfffccffffbfffe22ccccccccccccccccccccccccccce2ffffbcfffbcfffcbfffe2eccccccccccccccccccccccccccc22ffffbcfffbffffccfff2eeccccccccccccccccc
    cccccccccccccccce2efffccfffccffffbfffe22ccccccccccccccccccccccccccce2ffffbccffbcfffcbfffe2eccccccccccccccccccccccccccc22ffffbcfffbfffcccfff2eeccccccccccccccccc
    cccccccccccccccce2efffccfffccffffbfffe22ccccccccccccccccccccccccccce2ffffbcfffbcfffcbfffe2eccccccccccccccccccccccccccc22ffffbffffbffffccfff2eeccccccccccccccccc
    cccccccccccccccce2efffccfffccffffbfffe22ccccccccccccccccccccccccccce2ffffbcfffbcfffcbfffe2eccccccccccccccccccccccccccc22ffffbffffbffffccfff2eeccccccccccccccccc
    cccccccccccccccce2efffccfffccffffbfffe22ccccccccccccccccccccccccccce2ffffbcfffbcfffcbfffe2eccccccccccccccccccccccccccc22ffffbffffbcfffccfff2eeccccccccccccccccc
    ccccccccccccccccebefffccfffccffffbffff22ccccccccccccccccccccccccccceeffffbcfffbcfffcbfffe2eccccccccccccccccccccccccccce2ffffbffffbffffccfff2eeccccccccccccccccc
    ccccccccccccccccebefffccfffccffffbffff22ccccccccccccccccccccccccccceeffffbcfffbcfffcbfffe2eccccccccccccccccccccccccccce2ffffbffffbffffccfff2eeccccccccccccccccc
    ccccccccccccccccbeefffccfffccffffbffff22cccccccccccccccccccccccccccbeffffccfffccfffcbfffe2ecccccccccccccccccccccccccccb2ffffbffffbffffccfff2eeccccccccccccccccc
    ccccccccccccccccee2eee2eeee22eeeeeeee222ccccccccccccccccccccccccccce22eeee2eee22eee2eeee22eccccccccccccccccccccccccccce22eeee2eeeeeeee22eee2eeccccccccccccccccc
    bbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeecbbbbbbbbbbbbbbbbbbbbbbbbbceeeeeeeeeeeeeeeeeeeeeeeecbbbbbbbbbbbbbbbbbbbbbbbbbceeeeeeeeeeeeeeeeeeeeeeeecbbbbbbbbbbbbbbbb
    dddbbbbddddddddddbbbbbbbbbbbbbbbbbbbbbdbbddddddbddddddbbbbbbddbbbbbbdbbbbbbbbbbbbbbbbbbbbdbddddddddddddbddbbddddddddddddbbbbbbbbbbbbbbbbbbbbdddbbbbddddbbbbdddd
    dddddddddddddddddddd1dddddd1ddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddd1ddddddddddddddd1ddddddddddddddddddddddd1dddddd11dddddd11dddd
    dddddddddddddddddddddddddddddddddddbbbbbddddddddddddddddddddddddddddbbbbbbbdddddddddddddddddddddddddbbbbbbbddbbbbbbdddddddddddddddddddddddddddddddddddddddddd1d
    ddddddddddddddbbbbbbbddbbbbbbbdddddddddddddddddddbbbbbbbbdbbbbbbbddddddddddddddddddddddddddddbbbbbbbddddddddddbbbbbbbbddbbbbbbddbbbbbbbdddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddbdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddddbbbbbbbbdddddddddddddddddddddbbbbbbbbdddddddddddbbbbbbbbddddddddddddddddddddddbbbbbb
    ddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbddbbbbbbbbbdddddddddddddddddddddbbbbbbbbdddddddddddddddddddddddbbbbbbbdddddddddddddddddddddddddd
    dbbbbbbbbbddddddddddddddddddddddbbbbbbbbbbdddddddddddbbbbbbbbbbdbbbbbbbbbbdddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddbbbbbbbbbddddddddddddbbbbbbbbbdd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    bbbbdddddddddddddbbbbbbbbbddddddddddddddddddddddddddddbdbbbddddbbbbbbbbbbdbbbbbbbbbbdbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbddddddddddddddbbbbbbbbbdbbbbbbbbbbbdddddd
    bddddddddddddddbbbbbbbbbddddddddddddddddddddddddddddddddddbdddbbbbbbbbbbbdbbbbbbbbbbdddddddddddddbbbbbbbbbbbdbbbbbbbbbbbdddddddddddddddddddddddddbbbbbbbbbbdddd
    dddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbddddddddddddddbbbbbbbbbbddbbbbbbbbbbbdbbbbbbbbbbbdddddddddddddddbbbbbbbbbbddddddddddddddddddddddddd
    ddddddddddbbbbbbbbbbddbbbbbbbbbbbdddddddddddddddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbdddddddddddbbdddddddddddddddddddddddddddddbbbbbbbbbbdddddddddddddddddddddd
    bbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbdddddddddddddddbbbbbbbbbbbbddbbbbbbbbbbbbddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddddbbbbbbbbbbbbbddbbbbbbbbbbbbddbbbbbbbbbbbdddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddbbbbbbbbbbbbbbdbbbbbbbbbbbbbdddbbbbbbbbbbbd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddbbbbbbbbbbbbbbddbbbbbbbbbbbbbddbbbbbbbbbbb
    ddddddddddbbbbbbbbbbbbbddddddddddbbddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbddddddddddddddddbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddd
    dddddbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbddddddddddddddddddddddd
    ddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdddddddddddddddddddddd
    bdbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbddbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbdddddddddddddddddddb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
GiveSpoon = 0
let cop = sprites.create(img`
    ............8888888.............
    ............8885888.............
    ...........888888888............
    ...........888ffff88............
    ............fdddddf.............
    ............ddddddd.............
    ............d1fdf1d.............
    ............d1fdf1d.............
    ............ddddddd.............
    ............dfffffd.............
    ............8ddddd8.............
    ...........888888888............
    .......d888888888888888d........
    ......dd888888888888888dd.......
    ......dd888888888888888dd.......
    ....dddd888888888888888ddd......
    ....ddd....888888888...ddd......
    ....dddd..d888888888d..ddd......
    ......ddddd888888888ddddd.......
    ........ddd888888888ddd.........
    ..........dfff5445ffd...........
    ...........fff5445ff............
    ...........888888888............
    ...........888888888............
    ...........888888888............
    ...........888888888............
    ...........888....88............
    ...........888....88............
    ...........888....88............
    ...........888....88............
    ..........ff88....8fff..........
    ..........ffff....ffff..........
    `, SpriteKind.Player)
cop.setPosition(102, 72)
game.showLongText("It's a good thing you are locked behind bars now", DialogLayout.Bottom)
pause(1000)
game.splash("Im tired im gonna get a donut")
cop.setVelocity(50, 0)
timer.after(1500, function () {
    sprites.destroy(cop, effects.none, 0)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffccfffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffcffffffcfffffffffffffffffffffffffffff
        fffffffffffffffffffffffccccccccfffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcfffffffffffffffffffffff
        fffffffffffffffffffccccccccccfcffffffccffcccccccccccccccccccccccccccbcccbbcccccccccbcccccccccccccccccccccccccccccccccccccccccccccfffffccfffffffffffffffffffffff
        fffffffffffffffffffcfffffccccccffffffccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffff
        fffffffffffffffffffcffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbcccbccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccbcbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccffcffffffffffcffffffffffffffffff
        ffffffffffffffffffffffffffffffffcffcccccccccccccccccccccccccccccccccccbbbcbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffccfffffffcccccccccccccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbcccccccccccccccccccccccccccccfffffffffffffffffffffffffffff
        ffffffffffffffffffffffffcccccfcccccccccccccccccccccccccbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccfcccccffcfccfcccccccccccffffffffff
        ffffffffffffffffffffcfcccccccccccccccccccccccccccccccccbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccfffffffcccccccffcfffffffffff
        fffffffffffffffffffccccccccccccccccccccccccccccccccccccbcccccbccbcccbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbcccccccccccccccccccccfccfffffffffffffffccfffffffffffffffff
        fffffffffffffffffffffffffffffccccccccccccccccccccccccccbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccffffffffffffffffffffffffffffff
        fffffffffffffffffffcfffffffffccccccccccccccccccccccccccccccbcbbbbbbbbbbbbbbbbbbbbbbcccccccbccccbbccccbccccccccccccccccccccccccccccccccccccccccfccccccffffffcccc
        fffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccbbbbbbbbbbbbccccbbcbbcbccccccccccccbbcccccccccccccccccccccccccccccccccccccccccffccfccccffffffffffcf
        fffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcfffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffccccccccccccccccccccccccccbbcccffffffffffffcfffcfffffcfffffffffffffffcbbcbccccccccccccccccccccccccccccffffffffffffffffffffffffffff
        ffffffffffffffffffcfffffffffccccccccccccccccccccccbbccccccbcccfcfccccfccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccfffffccffff
        ffffffffffffffffffcffffffffffcccccccccccccccccccccccccccccbcccbbbbbbbbbbbbbbbcbbcbbbcbbbbbbbbbbbcbbbccccccccccccccccccccccccccccccccccccffcfffcffffffffffffffff
        ffffffffffffffffffcffffffffffccfccfccccccccccccccccccccccccccc1d1bd1d1b1b11b1b11c1b1b1dddb1b1dd1cbccccccccccccccccccccccccccccccccccffffffcffffffffffffffffffff
        ffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccc1d1dd1d1b1d11d1b11c1b1b1d1db1d1dd1cbbbbcbcccbcccccccccccccccccccccccccccfccffffffffffffffffffffff
        ffffffffffffffcffffcfffccfffcccccccccccccccccccccccccccccccccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbccccbccccccccccccccccccccccccccccccccfccccccffccffcffffccfffc
        ffffffffffffffffffffffffcffffccccccccccccccccccccccccccccccccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbccbbccccccccccccccccccccccccccccccfffccccfcffffffcffffffffff
        ffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbcccccccccccccccccccccccccccccccccfffffcccccfffffffffffffffff
        ffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbcccccccccccccccccccccccccffccccccccfffcfffffffffffffffffffff
        ffffffffffffffffcccffccfffcfcccccccccccccccccccccccccccccccccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1bbbcccccccccccccccccccccccccccccccccccccccccccccffffcccccccffff
        ffffffffffffffffffcffffffffffccccccccccccccccccccccccccccccccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbccccccccccccccccccccccccccccccccccccccccccffcfffccffcfffffff
        fffffffffffffffffffffffffffffcccccccccccccccccccccccccccccbccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbccccccccccccccccccccccccccccccccccccfffcccffffffffffffffffff
        fffffffffffffffffffffffffffffcccccccfccccccccccccccccccccccccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbcccccccccccccccccccccccccfffffffffffffffffffffffffffffffffff
        fffffffffffffffffcccccccccccccccccccccccccccccccccccccbbbbbccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbbbbbbbbbbbbbbcbcccccccccccccccccccccccccccccffcfccccffffffff
        ffffffffcffffffffffffffcccccccccccccccccccccccccccccccccccbccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbbbbccccbccccccccccccccccccccccccffffffffffcffffffffffcffffff
        ffffcffffffffffffffffffcccccccccccccccccccccccccccccccccccbccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbbbbccccbccccccccccccccccccccccccffcfcfffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcccfcccccccccccccccccccccccccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbccccccccccccccccccccccccccccccffffffffffffffffffffffffffffff
        ffffffffffffffffffcccccccccccccccccccccccccccccccccbcbbbbbbccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbbbbbbbbbbbbcccccccccccccccccccccccccffffffffffffffffffffffff
        fffffccfffffffffffcccccffccccccccccccccccccccccccccccccccbbccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbbbbbccccccccccccccccccccccccccccccfffcfffffccccfffffffffffff
        fffccccfffffffffffcfcccfccccccccccccccccccccccccccccccccbbbccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbbbbbbbccccccccccccccccccccccccccccffffcffffcccfffcffffffffff
        ffffffcffffffffffffffffffffffccfcccccccccccccccccccccccccccccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbccccccccccccccccccccccccccccccccccffffffffffffffffcccccccccc
        ffffffffffffffffffccccccccfccccccccccccccccccccccccccbbbbbbccc1d1dd1d1b1d11d1b11c1b1b1d11d1d1dd1cbbbbbbbbccccccccccccccccccccccccffffffffffffffffffffffffffffff
        ffffffffffffffffffccccccccccccccccccccccccccccccccccccccccbcccdd1dddd1b1d11d1bddc1b1b1dddd1d1dddcbbbbbbbbbcccccccccccccccccccccccccccccffcffffccccccccccccffccc
        fffffffffffffffffffffffcffcfccccccccccccccccccccccccccccccccccddddddddbdbddbdbddcdbdbddddbddddddcbbbbbccbbcccccccccccccccccccccccfcfccfffccfffccccccccccccfffff
        ffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccbbddddddddddddddddddbdddddddddddddddbdbcbbcccccccccccccccccccccccccccfcffcffffffffccccccccccccfffff
        ffffffffffffffccccccccccccfcccccccccccccccccccccccccccccbcbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccfcccccffffffffcfffffffffffffff
        fffffffffffffffffcccccfffccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbccccccccccccccccccccccccccccccccccccfcfcccccffcffffffffff
        fffffffffffffffffcffccfffccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbcccccccccccccccccccccccccccccccccccccccffffcccccffffffffffff
        fffffffffffffffffffcccfffccfccfcccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbcbcbcbbbccbbbbbbbbbbccccccccccccccccccccccccccccccccccffffcfccfcccccffffffffffff
        fffffffffffffffffcffffffffccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbcccccccccccccccccccccccccccccccfffffffffffcfffffffffffffffffffff
        fffffffffccfcfffffcccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbccccccccccccccccccccccccccccccccccccccffffffcffffffffffcfffff
        ffffffffffffcffffffcccccccccccccccccccccccccccccccccccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccfcccfffffffffffffffffffffffffff
        ffffffffffffcffffffccccfccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccffccffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbccccbbccbbccccccccccccccccccccccccccccccccccfcfffffffffffffffffffffffffffff
        fffcccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccfff
        ffffffffffffffffccffffffffffcccfcccccccccccccccccccccccccccccccccbccccccccccccbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccfffffffffffccccffffffffcffffffffff
        fffffffffffffffffcfffffffffffcfccccccccccccccccccccccccccbccbbccbbcccccccccccbbbccbbccbbcbcccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffff
        fffffffffffffffffcfffffffffffcffcccccccccccccccccccccccccccccccccccccccccccccbcbcccbcccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffff
        fffffffffffffffffcfffffffffffccccccccccccccccccccccccccccccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbccccccccccccccccccccccccccccccccccccccccccfffffffffffffffff
        ffffffffffffcfcccccccccccccccccccccccccccccccccccccccccccccccccccbbccbbbcccccccccbbccccccccccccccccccccccccccccccccccccccccccccfffccfffcccfffffffffffffffffffff
        fffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccbbcccbcccccccccccccccbcccccccccccccccccccccccccccccccccccccccccfffffcccffcccffffffffffffffffff
        ffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccbccccccccccccbccccccccccccccccccccccccccfffffcccfffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccbccccccbbbbccccccccbcccccccccccccccccccccccccccccccccccccccccfffffffffffffffffcfffff
        fffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccbcbbbbbbbbbcbcccccccccccccbcccccccccccccccccccccccccccccccfcccfffffffffffffffffffffffffffffffff
        fffffcfffffffffffffffffffffffcfcccccccccccccccccccccccccccccccccccbbcbbcbbbbbcccccccccccccbcccccccccccccccccccccccccccccccccccccccccccffffffcccffffffffffffffff
        ffffffffffffffffffffffffffffffffccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccfccccfffffccfffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffcfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccffffffffffffcfffffffffff
        fffffffcffffcfffcccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbbbccccccccccccccccccccccccccccccccccccccccccccccccccfffffcffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffccfffcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffcfffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccffccccccccffffffffffcfffcf
        fffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffcffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffcffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffcffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffcccccffffffffffffffff
        cffffcffffffffffcccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccfffcfffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffcffffffffffffffffffccccccffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcffffffffcccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffcffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffcfffffffccfcccccccccccccccccccccccccccccccccccfccccfcfffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffccfffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcffffffffffffffffffffff
        fffffffffffffffffffffffffffffcffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccffffcfffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffcfffffffffffffffcfffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccfccfffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffcffccffcfccccccccccccccccccccccccccccccccccfffffffccffffcfffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffcffffffffffffffffffffffffffffffffffcffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccffffcccccccccffccccffffccccffffffffffffffffff
        fffffffffffffffffffffffcffffffffffffffffffffffccffffcccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffcfffccfffffccffcccffffccccffccccccccccccccccccccccccccfffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffcccfffcccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccffccccccccfffffcfffffcfffffffffffcffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccffcccffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccffffcffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccfffcffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffccffcccfcccccccccccccccccccccccccccccccffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccffffffcccccccfffffcccccfffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccfffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffcccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccfffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffccfcccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccfffffffffffffffffffffffffffff
        fcfffccccccccffffffffffcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccfcccffffcfffcffffffffffffff
        ccccccccfcccffcccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffcf
        ccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcccbbbbbcbbcbbcbcbccbcbbbbbccbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbcbbbbbbbbcbbcbbcbcbbbbcbbcbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbcbbcbbcbbcbbbbbbbbbbbbbbccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbdbcbbcbbcbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbcbbcbdbbbbccbccbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbcbbbbbbbbbbbbbccbbbbbbbcbbcbbcbbbbbbbbbbbbbbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccbbbbbbbcbbcbbccbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccfcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbcbbbcbbbcbbbbcbbccbbcbbbbbbbbbbbbbbbbcbcccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccfffccccccccccccccccccccccccccccccccccccccbbbbbbbcbbbbbbbbbbbbbbbbbbccbbbcbbbcbcbcbbbbbbbccbbbbcbbccbcccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccfccccccccccccccccccccccccccccccccccccccbbcbbbbbbbbbbbbbbbbbbbcbbbbcbbbbcbbbcbbbccbbcbbbbbcbbcccccccbccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccfcccccccccccccccccccccccccccccccccccccbcccbbccccbbbcbbbbcbbbbcbbbbcbbbbccbbcccccccbbccbbbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cffcfcccccccfccccccccccccccccccccccccccccccccccccccbccbcbbbbcbbbbccbbbccbbbbcbbbbccbbbccbcccbbcccbbccccccccccccccccccccccccccccfcccffcccccccccccccccccccccccccc
        cfccfcccccccccccccccccccccccccccccccccccccccccccccccccbccbccccbbcccbbcccbbbccbbbbccbbbccbbcccbbcccbbccccccccccccccccccccccccccccccfccccccfccccccccccccccccccccc
        ccccccfccfccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbbcccbbbccbbbbccbbbccbbbcccbccccbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccfcffccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccbbbccbbbbccbbbbccbbbccbbbcccbccccccccccccccccccccccccccccccccccccfcfccccccccccccccccccccccccc
        cfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbcccbbbbccbbbbcccbbcccbbbcccbcccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccbcbcccbbbccccbbccccbbccccbcccccccccccccccccccccccccccccccccfcccfcccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccc
        `)
    mySprite = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........fffffffffffffffff.......
        .......ffeeeeeeeeeeeeeeeff......
        .......feeeeeeeeeeeeeeeeef......
        .......feddddddddddddddeef......
        .......feddddddddddddddeef......
        .......fdddbbffdddffbbdddf......
        .......fdddbbffdddffbbdddf......
        .......fddd11ffdddff11dddf......
        .......fddd11ffdddff11dddf......
        .......fdddddddddddddddddf......
        .......ffdddddddddddddddff......
        .........ff4444ddd4444ff........
        ......fffff4444ddd4444fffff.....
        .....f4444f44444445544f4444f....
        .....f4444f44444445544f4444f....
        .....f4444f44444444444f4444f....
        .....f4444f44444444444f4444f....
        .....fddddf44444444444fddddf....
        .....fddddf44444444444fddddf....
        ......fffff4444fff4444fffff.....
        ..........f4444f.f4444f.........
        ..........f4444f.f4444f.........
        ...........fffff.fffff..........
        `, SpriteKind.Player)
    mySprite.setPosition(80, 80)
})
pause(1750)
game.splash("I need to get out of this place")
pause(500)
game.splash("Help me look around for an exit")
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffdddd11111111111111111111111111111111111ddddcccccccccccccccccffffffccccddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccffffffffff
    fffffdddd11111111111111111111111111111111111ddddcccccccccccccccccffffffccccddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccffffffffff
    fffffdddd11111111111111111111111111111111111ddddcccccccccccccccccffffffccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccffffffffff
    fffff1111111111111111111111111111111111111111111cccccccccccccccccffffffccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccffffffffff
    fffff1111111111111111111111111111111111111111111cccccccccccccccccffffffccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccffffffffff
    fffff1111111111111111111111111111111111111111111cccccccccccccccccffffffccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccffffffffff
    fffff1111111111111111111111111111111111111111111cccccccccccccccccffffffccccccccbbbbbbbbbbbbbbbb55555bcccccccccccccccccccccccccccccccccccccccccccccccccffffffffff
    fffff111111111111111111111111111111111111111ddddffffffcccccccccccffffffccccccccbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff111111111111111111111111111111111111111ddddffffffcccccccccccffffffccccccccbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff111111111111111111111111111111111111111ddddffffffcccccccccccffffffccccccccbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccffffffccccccccbbbbdddddddddddddbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccffffffccccccccbbbdddddddddddddddddbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccffffffccccccccbbbdddddddddddddddddbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccffffffccccccccbddddddddddddddddddddbccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccffffffccccccccddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccffffffccccccddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccffffffccccccdddddddddffffffffdddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccccccccccccccdddddddfffffffffffddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccccccccccccccdddddddfffffffffffddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccccccccccccccdddddddfffffffffffddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccccccccccccccccccdddddddfffffffffffddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccdddddddfffffffffffddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccdddddddfffffffffffddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccdddddddddffffffffdddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccdddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccccccdddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeefff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeefff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeefff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeefff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeefff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeefff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddeeeeeeeeeeeeeeeeeefff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbeeeeeeeeeeeeeefff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbeeeeeeeeeeeeefff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbeeeeeeeeeeefff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbeeeeeeeeeeefff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbeeeeeeeeefff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffff7777777777777777777777777777777777777777777ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbbbbbbeeeefff
    fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbbbeeeeeeeeefff
    fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbbbeeeeeeeeeeefff
    fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbbeeeeeeeeeeeeefff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddbbbbeeeeeeeeeeeeeefff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeddddddeeeeeeeeeeeeeeeeeefff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeefff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeefff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeefff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeefff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeedddddddddddeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeedddddddddddeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeedddddddddddddeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeddb44444bbbddeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeedd4bbb44444ddeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeedd44444b444ddeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeddb44444bbbddeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeedd4444b4444ddeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeedddddddddddddeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeedddddddddddddeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeedddddddddddeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeb66666bbbeeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeb66666bbbeeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeb66666bbbeeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeb66666bbbeeeeeeeeeeeeeeaaaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite)
music.play(music.stringPlayable("G B A B G B A B ", 120), music.PlaybackMode.LoopingInBackground)
let Interact = sprites.create(img`
    ..bbbbbbbbbbbbbbbbbbbbbbbbbbb...
    ..b.........................b...
    ..b.........................b...
    ..b.........................b...
    ..b.........................b...
    ..b.........................b...
    ..b.........................b...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..7.........................7...
    ..777777777777777777777777777...
    `, SpriteKind.Food)
Interact.setPosition(24, 32)
let Interact2 = sprites.create(img`
    ................................
    ................................
    ................................
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    c..............................c
    cccccccccccccccccccccccccccccccc
    `, SpriteKind.Food2)
Interact2.setPosition(89, 16)
let Interact3 = sprites.create(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    e..............................e
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `, SpriteKind.Food3)
Interact3.setPosition(28, 88)
let Interact4 = sprites.create(img`
    ................................
    ................................
    ................................
    ...eeeeeeeeeeeeeeeeeeeeeeee.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...e......................e.....
    ...eeeeeeeeeeeeeeeeeeeeeeee.....
    ................................
    `, SpriteKind.Food4)
Interact4.setPosition(145, 60)
