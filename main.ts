function reencontrar () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35 + diferencia)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35 - diferencia)
}
maqueen.ltEvent(maqueen.Patrol1.PatrolRight, maqueen.Voltage.High, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    diferencia += 5
    while (1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        reencontrar()
        basic.pause(100)
    }
    diferencia = 0
    reencontrar()
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
    while (1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
        reencontrar()
        basic.pause(100)
    }
    diferencia = 0
    reencontrar()
})
let diferencia = 0
diferencia = 0
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 35)
