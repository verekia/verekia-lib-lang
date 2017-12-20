// @flow

import cond from '../cond'

module.exports = (leftValue: number, middleValue: number, rightValue: number, options?: Object) => {
  if (!leftValue || !middleValue || !rightValue) {
    throw Error('`between` takes at least 3 numbers as arguments.')
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
