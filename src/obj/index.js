// @flow

module.exports = function obj(prm?: Object) {
  if (arguments.length > 1) {
    throw Error('Too many parameters given to `obj`.')
  }
  if (prm === undefined || prm === null) {
    return {}
  }
  if (Array.isArray(prm)) {
    throw Error('`obj` cannot transform arrays.')
  }
  if (prm instanceof Object) {
    return prm
  }
  throw Error('Invalid parameter given to `obj`')
}
