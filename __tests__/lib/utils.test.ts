import { cn } from '@/lib/utils'

describe('cn utility function', () => {
  it('merges class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2')
  })

  it('handles conditional classes', () => {
    expect(cn('base', true && 'conditional', false && 'hidden')).toBe('base conditional')
  })

  it('merges Tailwind classes correctly', () => {
    // Should keep the last class when conflicting
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4')
  })

  it('handles arrays', () => {
    expect(cn(['class1', 'class2'])).toBe('class1 class2')
  })

  it('handles objects', () => {
    expect(cn({ class1: true, class2: false, class3: true })).toBe('class1 class3')
  })

  it('removes falsy values', () => {
    expect(cn('class1', null, undefined, false, '', 'class2')).toBe('class1 class2')
  })
})
