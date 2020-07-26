export default class Data {

    static MALE     =   'm'
    static FEMALE   =   'f'

    constructor(  ) {
        this.gender                 =   null
        this.weight                 =   null
        this.height                 =   null
        this.lbm                    =   null
        this.bodyFat                =   null
        this.dob                    =   null
        this.age                    =   null
    }

    setGender( gender ) {
        this.gender = gender
        return this
    }

    setWeight( weight ) {
        this.weight = weight
        return this
    }

    setHeight( height ) {
        this.height = height
        return this
    }

    setLeanBodyMass( lbm ) {
        this.lbm = lbm
        return this
    }

    setBodyFat( fat ) {
        this.bodyFat = fat
        return this
    }

    setDob( dob ) {
        this.dob = dob
        return this
    }

    setAge( age ) {
        this.age = age
        return this
    }

}
