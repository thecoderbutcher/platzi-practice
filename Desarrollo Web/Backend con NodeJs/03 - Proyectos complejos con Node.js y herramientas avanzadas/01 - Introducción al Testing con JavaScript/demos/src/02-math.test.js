const {sum, multipy, divide} = require('./02-math')

test('adds 1 + 2 to be equal 3', () => {
  const rta = sum(1,2)
  expect(rta).toBe(3)
})

test('multiply 2 * 2 tobe equal 4', () => {
  const rta = multipy(2,2)
  expect(rta).toBe(4)
})

test('divede 2 / 2 tobe equal 1', () => {
  expect(divide(2,2)).toBe(1)
  expect(divide(6,2)).toBe(3)
  expect(divide(5,2)).toBe(2.5)
  expect(divide(4,0)).toBeNull()
})