let richtung = 0
input.calibrateCompass()
basic.forever(function () {
    richtung = input.compassHeading()
    if (richtung < 190 && richtung > 170) {
        basic.showArrow(ArrowNames.South)
    } else {
        if (richtung < 235 && richtung > 215) {
            basic.showArrow(ArrowNames.SouthWest)
        } else {
            if (richtung < 145 && richtung > 125) {
                basic.showArrow(ArrowNames.SouthEast)
            } else {
                if (richtung < 100 && richtung > 80) {
                    basic.showArrow(ArrowNames.East)
                } else {
                    if (richtung < 280 && richtung > 260) {
                        basic.showArrow(ArrowNames.West)
                    } else {
                        if (richtung < 10 || richtung > 350) {
                            basic.showArrow(ArrowNames.North)
                        } else {
                            if (richtung < 55 && richtung > 35) {
                                basic.showArrow(ArrowNames.NorthEast)
                            } else {
                                if (richtung < 325 && richtung > 305) {
                                    basic.showArrow(ArrowNames.NorthWest)
                                } else {
                                	
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    basic.clearScreen()
})
