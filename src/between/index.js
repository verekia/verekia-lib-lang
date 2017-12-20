// @flow

import cond from '../cond'

module.exports = function between(
  leftValue: number,
  middleValue: number,
  rightValue: number,
  options?: Object,
) {
  if (arguments.length < 3 || arguments.length > 4) {
    throw Error('`between` takes 3 numbers as arguments.')
  }

  return leftValue <= rightValue
    ? cond(
        [
          [options && options.leftOrEqual, leftValue <= middleValue && middleValue < rightValue],
          [options && options.rightOrEqual, leftValue < middleValue && middleValue <= rightValue],
          [options && options.orEqual, leftValue <= middleValue && middleValue <= rightValue],
        ],
        leftValue < middleValue && middleValue < rightValue,
      )
    : cond(
        [
          [options && options.leftOrEqual, leftValue >= middleValue && middleValue > rightValue],
          [options && options.rightOrEqual, leftValue > middleValue && middleValue >= rightValue],
          [options && options.orEqual, leftValue >= middleValue && middleValue >= rightValue],
        ],
        leftValue > middleValue && middleValue > rightValue,
      )
}
