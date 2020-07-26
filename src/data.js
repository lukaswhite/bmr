export default class Data {

    static get MALE() { return 'm' }
    static get FEMALE() { return 'f' }

    constructor(  ) {
        this.gender                 =   null
        this.weight                 =   null
        this.height                 =   null
        this.lbm                    =   null
        this.bodyFat                =   null
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

    setDateOfBirth( dob ) {
        const ageDifMs = Date.now() - dob.getTime()
        let ageDate = new Date()
        ageDate.setTime(ageDifMs)
        this.age = Math.abs(ageDate.getUTCFullYear() - 1970)
        return this
    }

    setAge( age ) {
        this.age = age
        return this
    }

}
