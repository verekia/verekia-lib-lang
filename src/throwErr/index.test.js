import throwErr from './'

test(null, () => {
  expect(() => throwErr()).toThrow()
  expect(() => throwErr('foo')).toThrow('foo')
  expect(() => throwErr(Error('foo'))).toThrow('foo')
})
