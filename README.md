# BMR

A JavaScript library for calculating BMR (basal metabolic rate).

Supported formulae:

* Mifflin St Jeor.
* Harris Benedict
* Harris Benedict (revised)
* Schofield
* Katch McArdle

## Basic Usage

Import the required classes:

```js
import { BMR, Data } from '@lukaswhite/bmr'
```

Create an instance of `Data`, and supply the necessary information:

```js
let data = new Data( )
data.setGender( Data.FEMALE )
    .setAge( 45 )
    .setHeight( 165 )
    .setWeight( 60 )
```

> The height and weight should be in centimetres and kilogrammes respectively

Note that rather than set the age, you can set the date of birth instead:

```js
data.setDateOfBirth( new Date( 1980, 6, 3 ) )
```

Create an instance of the `BMR` class:

```js
const bmr = new BMR( BMR.MIFFLIN_ST_JEOR )
```

Finally, run the calculation:

```js
console.log( bmr.calculate( data ) ) // outputs 1245
```

### Mifflin St Jeor

```js
const bmr = new BMR( BMR.MIFFLIN_ST_JEOR )
```

This is actually the default formula, so you can simply do this:

```js
const bmr = new BMR( )
```

The formula requires the gender, age, height and weight.

```js
let data = new Data( )
data.setGender( Data.FEMALE )
    .setAge( 45 )
    .setHeight( 165 )
    .setWeight( 60 )
```

### Harris Benedict

```js
const bmr = new BMR( BMR.HARRIS_BENEDICT )
```

The formula requires the gender, age, height and weight.

```js
let data = new Data( )
data.setGender( Data.FEMALE )
    .setAge( 45 )
    .setHeight( 165 )
    .setWeight( 60 )
```

### Harris Benedict (Revised)

```js
const bmr = new BMR( BMR.HARRIS_BENEDICT )
```

The formula requires the gender, age, height and weight.

```js
let data = new Data( )
data.setGender( Data.FEMALE )
    .setAge( 45 )
    .setHeight( 165 )
    .setWeight( 60 )
```

### Schofield

```js
const bmr = new BMR( BMR.SCHOFIELD )
```

The formula requires the gender, age, weight.

```js
let data = new Data( )
data.setGender( Data.FEMALE )
    .setAge( 45 )
    .setWeight( 60 )
```

### Katch McArdle

```js
const bmr = new BMR( BMR.KATCH_MCARDLE )
```

The formula requires either the lean body mass, or the weight and body fat percentage

```js
let data = new Data( )
data.setGender( Data.FEMALE )
    .setLeanBodyMass( 50 )
```

Or

```js
let data = new Data( )
data.setGender( Data.FEMALE )
    .setWeight( 60 )
    .setBodyFat( 17 )
```

## Errors

If you fail to provide all of the required information, the calculator will throw an instance of `MissingInformationError`.

Upon instantiation, if you supply an invalid formula, it will throw an instance of `InvalidFormulaError`. However, this is easily avoided by simply using the constants, as per the documentation above. 

