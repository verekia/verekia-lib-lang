// @flow

module.exports = function obj(prm?: Object) {
  if (arguments.length > 1) {
    throw Error('Too many parameters given to `is`.')
  }
  if (arguments.length === 0) {
    throw Error('No parameter given to `is`.')
  }
  if (prm === undefined || prm === null) {
    return false
  }
  return true
}
