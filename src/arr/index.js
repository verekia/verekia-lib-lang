// @flow

import values from 'lodash.values'

module.exports = function arr(prm?: Array<any>) {
  if (arguments.length > 1) {
    throw Error('Too many parameters given to `arr`.')
  }
  if (prm === undefined || prm === null || (Array.isArray(prm) && prm.length === 0)) {
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
