import obj from './'

test(null, () => {
  expect(() => obj(1, 2)).toThrow()
  expect(() => obj([])).toThrow()
  expect(() => obj(1)).toThrow()
  expect(obj()).toEqual({})
  expect(obj(undefined)).toEqual({})
  expect(obj(null)).toEqual({})
  expect(obj({})).toEqual({})
  expect(obj({ a: 1 })).toEqual({ a: 1 })
  expect(obj({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 })
})
