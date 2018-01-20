// @flow

module.exports = (cases: any[][], defaultValFn?: Function) => {
  cases.forEach(c => {
    if (!(c[1] instanceof Function)) {
      throw Error('All values returned by cond must be functions')
    }
  })
  if (defaultValFn && !(defaultValFn instanceof Function)) {
    throw Error('The default value of cond must be a function')
  }
  const foundCase = cases.find(c => (c[0] instanceof Function ? c[0]() : c[0]))
  return foundCase ? foundCase[1]() : defaultValFn && defaultValFn()
}
