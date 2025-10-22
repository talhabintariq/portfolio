import { render, screen } from '@testing-library/react'
import { Navigation } from '@/components/navigation'

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn(),
  }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}))

describe('Navigation Component', () => {
  it('renders logo/brand', () => {
    render(<Navigation />)

    expect(screen.getByText('TT')).toBeInTheDocument()
    // Verify the logo is a link to home
    const logoLink = screen.getByText('TT').closest('a')
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('renders all navigation links', () => {
    render(<Navigation />)

    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('navigation links have correct hrefs', () => {
    render(<Navigation />)

    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/#about')
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '/#projects')
    expect(screen.getByText('Blog').closest('a')).toHaveAttribute('href', '/blog')
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/#contact')
  })

  it('renders theme toggle button', () => {
    render(<Navigation />)

    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument()
  })

  it('has fixed positioning', () => {
    const { container } = render(<Navigation />)

    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('fixed')
  })
})
