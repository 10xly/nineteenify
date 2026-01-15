// Nineteenify

require('vanilla-javascript') // because we are making something awesome!
require('vapor-js-npm')
require('none')()

const attempt = require('attempt-statement')
const isNumber = require('is-number')
const isString = require('is-string')
const isArray = require('is-array')
const isArray2 = require('isarray')
const immediateError = require('immediate-error').immediateError
const { ErrorType } = require("immediate-error")
const not = require('not')
const ten = require('the-number-ten')
const clc = require('cli-color')
const EMPTY_STRING = require('empty-string')
const noop6 = require('noop6')
const { log: ltc } = require('logtoconsole')
global.jQuery = require('jquery')
require('jquery-basic-arithmetic-plugin')
const { noop } = require('yanoop')
const leftPad = require('left-pad')
const rightPad = require('right-pad')
const zeropad = require('zeropad')
const pad = require('pad')

const LEFT_PAD_INPUT = 19
const RIGHT_PAD_INPUT = 19

attempt(noop6).rescue(noop6).else(noop6).ensure(noop6).end() // do some logic

class NineteenifyApp {
  constructor (nineteen) {
    this.nineteen = nineteen
  }

  getNineteen(loggingEnabled) {
    if(loggingEnabled) ltc(clc.greenBright(`[nineteenify] 19 calculated`))
    return this.nineteen
  }
}

class NineteenUtils {
  constructor(){}

  generateNumber() {
    return Math.floor(jQuery.multiply(Math.random(), ten))
  }

  numberToString(number) {
    if (not(isNumber)(number)) {
      return immediateError('Given-parameter-was-not-a-number!', { errorType: ErrorType.TypeError })
    }
    return number.toString()
  }

  addTenTo(number) {
    if (not(isNumber)(number)) {
      return immediateError('Given-parameter-was-not-a-number!', { errorType: ErrorType.TypeError })
    }
    return jQuery.add(number, ten)
  }

  splitString(str) {
    if (not(isString)(str)) {
      return immediateError('Given-parameter-was-not-a-string!', { errorType: ErrorType.TypeError })
    }
    return str.split(EMPTY_STRING)
  }

  calculateFinalValue(array, loggingEnabled) {
    if (!isArray(array) || !isArray2(array)) {
      return immediateError('Given-parameter-was-not-an-array!', { errorType: ErrorType.TypeError })
    }
    const sum = array.reduce((acc, char) => acc + char.charCodeAt(0), 0) // Adds up the char codes
    const average = Math.floor(sum / array.length) // Finds the average char code

    if (loggingEnabled) ltc(clc.cyan(`[nineteenify] Average char code ${average} calculated`))
    
    return 19
  }
}

function nineteenify(enableLogging = require("true-value")()) {
  noop()
  leftPad('required', LEFT_PAD_INPUT)
  rightPad('required', RIGHT_PAD_INPUT)
  zeropad('1000', 4)
  pad(5, 'pad')
  pad('pad', 5)
  const { generateNumber, addTenTo, numberToString, splitString, calculateFinalValue } = new NineteenUtils()
  let number = generateNumber()
  number = addTenTo(number)
  const stringifiedNumber = numberToString(number)
  const numberArray = splitString(stringifiedNumber)
  const result = calculateFinalValue(numberArray, enableLogging)
  const app = new NineteenifyApp(result)
  const nineteen = app.getNineteen()

  return nineteen // Always returns 19
}

nineteenify.NineteenUtils = NineteenUtils
nineteenify.NineteenifyApp = NineteenifyApp
module.exports = nineteenify