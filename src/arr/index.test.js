import arr from './'

test(null, () => {
  expect(() => arr(1, 2)).toThrow()
  expect(arr()).toEqual([])
  expect(arr(undefined)).toEqual([])
  expect(arr(null)).toEqual([])
  expect(arr([])).toEqual([])
  expect(arr([1])).toEqual([1])
  expect(arr({})).toEqual([])
  expect(arr({ a: 1, b: 2 })).toEqual([1, 2])
})
