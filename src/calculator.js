import Data from './data'
import { MissingInformationError, InvalidFormulaError } from "./errors";

export default class BMR {

    static MIFFLIN_ST_JEOR = 'mifflin-st-jeor'
    static HARRIS_BENEDICT = 'harris-benedict'
    static HARRIS_BENEDICT_REVISED = 'harris-benedict-revised'
    static KATCH_MCARDLE ='katch-mcardle'
    static SCHOFIELD = 'schofield'

    constructor( formula = this.constructor.MIFFLIN_ST_JEOR ) {
        if ( ! [
            this.constructor.MIFFLIN_ST_JEOR,
            this.constructor.HARRIS_BENEDICT,
            this.constructor.HARRIS_BENEDICT_REVISED,
            this.constructor.SCHOFIELD,
            this.constructor.KATCH_MCARDLE
        ].includes( formula ) ) {
            throw new InvalidFormulaError( 'Invalid formula' )
        }
        this.formula        =   formula
    }

    calculate( data ) {
        switch ( this.formula ) {
            case this.constructor.MIFFLIN_ST_JEOR:
                return this.mifflinStJour( data )
            case this.constructor.HARRIS_BENEDICT:
                return this.harrisBenedict( data )
            case this.constructor.HARRIS_BENEDICT_REVISED:
                return this.harrisBenedictRevised( data )
            case this.constructor.SCHOFIELD:
                return this.schofield( data )
            case this.constructor.KATCH_MCARDLE:
                return this.katchMcardle( data )
        }
    }

    mifflinStJour( data ) {
        this.checkRequired( data, [ 'gender', 'weight', 'height', 'age' ] )
        let result = 10 * data.weight + 6.25 * data.height - 5 * data.age
        return data.gender === Data.MALE ? Math.round( result + 5 ) : Math.round( result - 161 )
    }

    harrisBenedict( data ) {
        this.checkRequired( data, [ 'gender', 'weight', 'height', 'age' ] )
        return data.gender === Data.MALE ?
            Math.round( 66.5 + ( 13.75 * data.weight ) + ( 5.003 * data.height ) - ( 6.755 * data.age ) ) :
            Math.round( 655.1 + ( 9.563 * data.weight ) + ( 1.850 * data.height ) - ( 4.676 * data.age ) )
    }

    harrisBenedictRevised( data ) {
        this.checkRequired( data, [ 'gender', 'weight', 'height', 'age' ] )
        return data.gender === Data.MALE ?
            Math.round( 88.362 + ( 13.397 * data.weight ) + ( 4.799 * data.height ) - ( 5.677 * data.age ) ) :
            Math.round( 447.593 + ( 9.247 * data.weight ) + ( 3.098 * data.height ) - ( 4.330 * data.age ) )
    }

    katchMcardle( data ) {
        if ( ! data.lbm && ( ! data.weight || ! data.bodyFat ) ) {
            throw new MissingInformationError(
                'You need to specify either the lean body mass, or the weight and body fat'
            )
        }
        const lbm = data.lbm ? data.lbm : data.weight * ( 100 - data.bodyFat ) / 100
        return Math.round( 370 + 21.6 * lbm )
    }

    schofield( data ) {
        this.checkRequired( data, [ 'gender', 'weight', 'age' ] )
        return data.gender === Data.MALE ? this.schofieldMale( data ) :
            this.schofieldFemale( data )
    }

    schofieldMale( data ) {
        if ( data.age < 3 ) {
            return Math.round( 59.512 * data.weight - 30.4 )
        }
        if ( data.age < 10 ) {
            return Math.round( 22.706 * data.weight + 504.3 )
        }
        if ( data.age < 18 ) {
            return Math.round( 17.686 * data.weight + 658.2 )
        }
        if ( data.age < 30 ) {
            return Math.round( 15.057 * data.weight + 692.2 )
        }
        if ( data.age < 60 ) {
            return Math.round( 11.472 * data.weight + 873.1 )
        }
        return Math.round( 11.711 * data.weight + 587.7 )
    }

    schofieldFemale( data ) {
        if ( data.age < 3 ) {
            return Math.round( 58.317 * data.weight - 31.1 )
        }
        if ( data.age < 10 ) {
            return Math.round( 20.315 * data.weight + 485.9 )
        }
        if ( data.age < 18 ) {
            return Math.round( 13.384 * data.weight + 692.6 )
        }
        if ( data.age < 30 ) {
            return Math.round( 14.818 * data.weight + 692.2 )
        }
        if ( data.age < 60 ) {
            return Math.round( 8.126 * data.weight + 845.6 )
        }
        return Math.round( 9.082 * data.weight + 658.5 )
    }

    checkRequired( data, required ) {
        required.forEach( field => {
            if ( ! data[ field ] ) {
                throw new MissingInformationError( `Missing ${field}`)
            }
        } )
    }
}
