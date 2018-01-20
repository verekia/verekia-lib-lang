import cond from './'

test(null, () => {
  expect(cond([[false, 1], [true, 2], [false, 3], [true, 4]], -1)).toBe(2)
  expect(cond([[false, 1], [false, 2], [false, 3], [false, 4]], -1)).toBe(-1)
  expect(cond([[false, 1], [false, 2], [false, 3], [false, 4]])).toBe(undefined)
  expect(cond([[true, { a: 1 }]], -1)).toEqual({ a: 1 })

  expect(cond([[() => false, 1], [() => true, 2], [() => false, 3], [() => true, 4]], -1)).toBe(2)
  expect(cond([[() => false, 1], [() => false, 2], [() => false, 3], [() => false, 4]], -1)).toBe(-1)
  expect(cond([[() => false, 1], [() => false, 2], [() => false, 3], [() => false, 4]])).toBe(undefined)

  expect(cond([[false, () => 1], [true, () => 2], [false, () => 3], [true, () => 4]], () => -1)).toBe(2)
  expect(cond([[false, () => 1], [false, () => 2], [false, () => 3], [false, () => 4]], () => -1)).toBe(-1)
  expect(cond([[false, () => 1], [false, () => 2], [false, () => 3], [false, () => 4]])).toBe(undefined)
})
