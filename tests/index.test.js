import { BMR, Data } from '../src/index'
import { MissingInformationError, InvalidFormulaError } from "../src/errors"

describe('instantiating', () => {
  it('should default to Mifflin St Jeor', () => {
    let bmr = new BMR( )
    expect(bmr.formula).toEqual(BMR.MIFFLIN_ST_JEOR)
  })
  it('should instantiate with a formula', () => {
    let bmr = new BMR( BMR.HARRIS_BENEDICT )
    expect(bmr.formula).toEqual(BMR.HARRIS_BENEDICT)
  })
})

describe( 'invalid formula', () => {
  it('should throw error if formula not valid', () => {
    expect(() => {
      let bmr = new BMR('invalid')
    }).toThrow(InvalidFormulaError)
  })
} )

describe('mifflin st jeor', () => {
  it('should calculate bmr for a female', () => {
    let bmr = new BMR( )
    let data = new Data( )
    data.setGender( Data.FEMALE )
        .setAge( 45 )
        .setHeight( 165 )
        .setWeight( 60 )
    expect(bmr.calculate(data)).toEqual(1245)
  })
  it('should calculate bmr for a male', () => {
    let bmr = new BMR( )
    let data = new Data( )
    data.setGender( Data.MALE )
        .setAge( 36 )
        .setHeight( 170 )
        .setWeight( 70 )
    expect(bmr.calculate(data)).toEqual(1588)
  })
  it('should throw error if gender is missing', () => {
    expect(() => {
      let bmr = new BMR( BMR.KATCH_MCARDLE )
      let data = new Data( )
      data.setAge( 45 )
          .setWeight( 60 )
      const result = bmr.calculate(data)
    }).toThrow(MissingInformationError)
  })
  it('should throw error if age is missing', () => {
    expect(() => {
      let bmr = new BMR( BMR.KATCH_MCARDLE )
      let data = new Data( )
      data.setGender( Data.FEMALE )
          .setWeight( 60 )
      const result = bmr.calculate(data)
    }).toThrow(MissingInformationError)
  })
  it('should throw error if weight is missing', () => {
    expect(() => {
      let bmr = new BMR( BMR.KATCH_MCARDLE )
      let data = new Data( )
      data.setGender( Data.FEMALE )
          .setAge( 45 )
      const result = bmr.calculate(data)
    }).toThrow(MissingInformationError)
  })
})

describe('harris benedict', () => {
  it('should calculate bmr for a female', () => {
    let bmr = new BMR( BMR.HARRIS_BENEDICT )
    let data = new Data( )
    data.setGender( Data.FEMALE )
        .setAge( 45 )
        .setHeight( 165 )
        .setWeight( 60 )
    expect(bmr.calculate(data)).toEqual(1324)
  })
  it('should calculate bmr for a male', () => {
    let bmr = new BMR( BMR.HARRIS_BENEDICT )
    let data = new Data( )
    data.setGender( Data.MALE )
        .setAge( 36 )
        .setHeight( 170 )
        .setWeight( 70 )
    expect(bmr.calculate(data)).toEqual(1636)
  })
  it('should throw error if gender is missing', () => {
    expect(() => {
      let bmr = new BMR( BMR.HARRIS_BENEDICT )
      let data = new Data( )
      data.setAge( 45 )
          .setHeight( 165 )
          .setWeight( 60 )
      const result = bmr.calculate(data)
    }).toThrow(MissingInformationError)
  })
  it('should throw error if age is missing', () => {
    expect(() => {
      let bmr = new BMR( BMR.HARRIS_BENEDICT )
      let data = new Data( )
      data.setGender( Data.FEMALE )
          .setHeight( 165 )
          .setWeight( 60 )
      const result = bmr.calculate(data)
    }).toThrow(MissingInformationError)
  })
  it('should throw error if height is missing', () => {
    expect(() => {
      let bmr = new BMR( BMR.HARRIS_BENEDICT )
      let data = new Data( )
      data.setGender( Data.FEMALE )
          .setAge( 45 )
          .setWeight( 60 )
      const result = bmr.calculate(data)
    }).toThrow(MissingInformationError)
  })
  it('should throw error if weight is missing', () => {
    expect(() => {
      let bmr = new BMR( BMR.HARRIS_BENEDICT )
      let data = new Data( )
      data.setGender( Data.FEMALE )
          .setAge( 45 )
          .setHeight( 165 )
      const result = bmr.calculate(data)
    }).toThrow(MissingInformationError)
  })
})

describe('harris benedict revised', () => {
  it('should calculate bmr for a female', () => {
    let bmr = new BMR( BMR.HARRIS_BENEDICT_REVISED )
    let data = new Data( )
    data.setGender( Data.FEMALE )
        .setAge( 45 )
        .setHeight( 165 )
        .setWeight( 60 )
    expect(bmr.calculate(data)).toEqual(1319)
  })
  it('should calculate bmr for a male', () => {
    let bmr = new BMR( BMR.HARRIS_BENEDICT_REVISED )
    let data = new Data( )
    data.setGender( Data.MALE )
        .setAge( 36 )
        .setHeight( 170 )
        .setWeight( 70 )
    expect(bmr.calculate(data)).toEqual(1638)
  })
  it('should throw error if gender is missing', () => {
    expect(() => {
      let bmr = new BMR( BMR.HARRIS_BENEDICT_REVISED )
      let data = new Data( )
      data.setAge( 45 )
          .setHeight( 165 )
          .setWeight( 60 )
      const result = bmr.calculate(data)
    }).toThrow(MissingInformationError)
  })
  it('should throw error if age is missing', () => {
    expect(() => {
      let bmr = new BMR( BMR.HARRIS_BENEDICT_REVISED )
      let data = new Data( )
      data.setGender( Data.FEMALE )
          .setHeight( 165 )
          .setWeight( 60 )
      const result = bmr.calculate(data)
    }).toThrow(MissingInformationError)
  })
  it('should throw error if height is missing', () => {
    expect(() => {
      let bmr = new BMR( BMR.HARRIS_BENEDICT_REVISED )
      let data = new Data( )
      data.setGender( Data.FEMALE )
          .setAge( 45 )
          .setWeight( 60 )
      const result = bmr.calculate(data)
    }).toThrow(MissingInformationError)
  })
  it('should throw error if weight is missing', () => {
    expect(() => {
      let bmr = new BMR( BMR.HARRIS_BENEDICT_REVISED )
      let data = new Data( )
      data.setGender( Data.FEMALE )
          .setAge( 45 )
          .setHeight( 165 )
      const result = bmr.calculate(data)
    }).toThrow(MissingInformationError)
  })
})

describe('schofield', () => {
  it('should calculate bmr for a female under 3', () => {
    let bmr = new BMR( BMR.SCHOFIELD )
    let data = new Data( )
    data.setGender( Data.FEMALE )
        .setAge( 2 )
        .setWeight( 20 )
    expect(bmr.calculate(data)).toEqual(1135)
  })
  it('should calculate bmr for a female under 10', () => {
    let bmr = new BMR( BMR.SCHOFIELD )
    let data = new Data( )
    data.setGender( Data.FEMALE )
        .setAge( 8 )
        .setWeight( 30 )
    expect(bmr.calculate(data)).toEqual(1095)
  })
  it('should calculate bmr for a female under 18', () => {
    let bmr = new BMR( BMR.SCHOFIELD )
    let data = new Data( )
    data.setGender( Data.FEMALE )
        .setAge( 16 )
        .setWeight( 40 )
    expect(bmr.calculate(data)).toEqual(1228)
  })
  it('should calculate bmr for a female between 30 and 60', () => {
    let bmr = new BMR( BMR.SCHOFIELD )
    let data = new Data( )
    data.setGender( Data.FEMALE )
        .setAge( 45 )
        .setWeight( 60 )
    expect(bmr.calculate(data)).toEqual(1333)
  })
  it('should calculate bmr for a female over 60', () => {
    let bmr = new BMR( BMR.SCHOFIELD )
    let data = new Data( )
    data.setGender( Data.FEMALE )
        .setAge( 64 )
        .setWeight( 62 )
    expect(bmr.calculate(data)).toEqual(1222)
  })
  it('should calculate bmr for a male under 3', () => {
    let bmr = new BMR( BMR.SCHOFIELD )
    let data = new Data( )
    data.setGender( Data.MALE )
        .setAge( 2 )
        .setWeight( 20 )
    expect(bmr.calculate(data)).toEqual(1160)
  })
  it('should calculate bmr for a male under 10', () => {
    let bmr = new BMR( BMR.SCHOFIELD )
    let data = new Data( )
    data.setGender( Data.MALE )
        .setAge( 8 )
        .setWeight( 30 )
    expect(bmr.calculate(data)).toEqual(1185)
  })
  it('should calculate bmr for a male under 18', () => {
    let bmr = new BMR( BMR.SCHOFIELD )
    let data = new Data( )
    data.setGender( Data.MALE )
        .setAge( 16 )
        .setWeight( 40 )
    expect(bmr.calculate(data)).toEqual(1366)
  })
  it('should calculate bmr for a male between 30 and 60', () => {
    let bmr = new BMR( BMR.SCHOFIELD )
    let data = new Data( )
    data.setGender( Data.MALE )
        .setAge( 35 )
        .setWeight( 70 )
    expect(bmr.calculate(data)).toEqual(1676)
  })
  it('should calculate bmr for a male over 60', () => {
    let bmr = new BMR( BMR.SCHOFIELD )
    let data = new Data( )
    data.setGender( Data.MALE )
        .setAge( 64 )
        .setWeight( 62 )
    expect(bmr.calculate(data)).toEqual(1314)
  })
})

describe('katch mcardle', () => {
  it('should calculate bmr using body fat', () => {
    let bmr = new BMR( BMR.KATCH_MCARDLE )
    let data = new Data( )
    data.setWeight( 70 )
        .setBodyFat( 17 )
    expect(bmr.calculate(data)).toEqual(1625)
  })
  it('should calculate bmr using lean body mass', () => {
    let bmr = new BMR( BMR.KATCH_MCARDLE )
    let data = new Data( )
    data.setLeanBodyMass( 60 )
    expect(bmr.calculate(data)).toEqual(1666)
  })
  it('should throw error if no information supplied', () => {
    expect(() => {
      let bmr = new BMR( BMR.KATCH_MCARDLE )
      let data = new Data( )
      const result = bmr.calculate(data)
    }).toThrow(MissingInformationError)
  })
  it('should throw error if body fat is supplied,but not weight', () => {
    expect(() => {
      let bmr = new BMR( BMR.KATCH_MCARDLE )
      let data = new Data( )
      data.setBodyFat( 17 )
      const result = bmr.calculate(data)
    }).toThrow(MissingInformationError)
  })
})

