//matchers

test('test object', () => {
  const data = { name: 'minus'}

  expect(data).toEqual({name: 'minus'})
})

test('null', () => {
  const data = null
  expect(data).toBeNull()
  expect(data).toBeDefined()
  expect(data).not.toBeUndefined()
  expect(data).not.toBeTruthy()
  expect(data).toBeFalsy()
})

test('boolean', () => {
  expect(true).toEqual(true)
  expect(false).toEqual(false)

  expect(0).toBeFalsy()
  expect('').toBeFalsy()
  expect('').toBeFalsy()
  expect('').toBeFalsy()
  expect(null).toBeFalsy()
  expect(undefined).toBeFalsy()
  expect(NaN).toBeFalsy()
  expect(NaN).toBeFalsy()
  expect(NaN).toBeFalsy()
})

test('string', () => {
  expect('foo').toMatch(/foo/)
  expect('Raquel').toMatch(/que/)
})

test('array', () => {
  expect([1, 2, 3]).toContain(2)
  expect(['foo', 'bar']).toContain('foo')
})