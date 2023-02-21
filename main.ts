maqueen.ltEvent(maqueen.Patrol1.PatrolRight, maqueen.Voltage.High, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    diferencia += 5
})
maqueen.ltEvent(maqueen.Patrol1.PatrolLeft, maqueen.Voltage.High, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    diferencia += -5
})
let diferencia = 0
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 35)
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35 + diferencia)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35 - diferencia)
})
