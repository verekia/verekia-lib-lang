import cond from './'

test(null, () => {
  expect(() => cond([[true, 1]])).toThrow()
  expect(cond([[true, () => 1]])).toBe(1)

  expect(() => cond([[true, () => 1]], -1)).toThrow()
  expect(cond([[false, () => 1]], () => -1)).toBe(-1)

  expect(cond([[false, () => 1]])).toBe(undefined)

  expect(cond([[() => true, () => 1]])).toBe(1)
})
