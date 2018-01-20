// @flow

import cloneDeep from 'lodash.clonedeep'
import isEqual from 'lodash.isequal'

import cond from '../cond'

module.exports = (val: any, cases: any[][], defaultValFn?: Function) => {
  cases.forEach(c => {
    if (!(c[1] instanceof Function)) {
      throw Error('All values returned by swit must be functions')
    }
  })
  if (defaultValFn && !(defaultValFn instanceof Function)) {
    throw Error('The default value of swit must be a function')
  }
  return cond(
    cases.map(c => {
      const newCase = cloneDeep(c)
      newCase[0] = isEqual(c[0] instanceof Function ? c[0]() : c[0], val instanceof Function ? val() : val)
      return newCase
    }),
    defaultValFn,
  )
}
