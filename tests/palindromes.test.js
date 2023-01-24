const palindromes = require('../palindromes')

describe('palindromes', () => {
  it('correctly identifies one-word palindromes', () => {
    expect(palindromes('madam')).toEqual(['madam'])
  })

  // it('returns false for a non-palindrome', () => {
  //   expect(palindromes('hello')).toBe(false)
  // })
})
