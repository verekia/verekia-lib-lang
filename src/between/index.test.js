import between from './'

test(null, () => {
  expect(between(1, 2, 3)).toBe(true)
  expect(between(3, 2, 1)).toBe(true)
  expect(between(2, 1, 3)).toBe(false)
  expect(between(3, 1, 2)).toBe(false)
  expect(() => between(1)).toThrow()
  expect(() => between(1, 2)).toThrow()
  expect(between(1, 1, 3)).toBe(false)
  expect(between(1, 1, 3, { leftOrEqual: true })).toBe(true)
  expect(between(1, 1, 3, { rightOrEqual: true })).toBe(false)
  expect(between(1, 1, 3, { orEqual: true })).toBe(true)
  expect(between(1, 3, 3)).toBe(false)
  expect(between(1, 3, 3, { leftOrEqual: true })).toBe(false)
  expect(between(1, 3, 3, { rightOrEqual: true })).toBe(true)
  expect(between(1, 3, 3, { orEqual: true })).toBe(true)
  expect(between(2, 1, 3, { orEqual: true })).toBe(false)
})
