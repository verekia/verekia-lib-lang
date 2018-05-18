// @flow

import values from 'lodash.values'

module.exports = function arr(prm?: Array<any>) {
  if (arguments.length > 1) {
    throw Error('Too many parameters given to `arr`.')
  }
  if (prm === undefined || prm === null) {
    return []
  }
  if (Array.isArray(prm)) {
    return prm
  }
  if (prm instanceof Object) {
    return values(prm)
  }
  return [prm]
}
