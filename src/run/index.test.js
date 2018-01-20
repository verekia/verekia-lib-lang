import run from './'

test(null, () => {
  expect(run(() => 2)).toEqual(2)
})
