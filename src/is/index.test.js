import is from './'

test(null, () => {
  expect(() => is(1, 2)).toThrow()
  expect(() => is()).toThrow()
  expect(is(undefined)).toEqual(false)
  expect(is(null)).toEqual(false)
  expect(is(1)).toEqual(true)
  expect(is({})).toEqual(true)
  expect(is([])).toEqual(true)
})
