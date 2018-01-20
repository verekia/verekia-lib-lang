import swit from './'

test(null, () => {
  expect(() => swit(1, [[1, 1]])).toThrow()
  expect(swit(1, [[1, () => 1]])).toBe(1)

  expect(() => swit(1, [[1, () => 1]], -1)).toThrow()
  expect(swit(0, [[1, () => 1]], () => -1)).toBe(-1)

  expect(swit(0, [[1, () => 1]])).toBe(undefined)

  expect(swit(1, [[() => 1, () => 1]])).toBe(1)
})
