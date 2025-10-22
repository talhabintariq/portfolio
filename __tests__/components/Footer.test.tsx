import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/footer'
import { socialLinks } from '@/lib/data'

describe('Footer Component', () => {
  it('renders copyright text with current year', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${currentYear} Talha B. Tariq`))).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)

    const githubLink = screen.getByRole('link', { name: /github/i })
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    const emailLink = screen.getByRole('link', { name: /email/i })

    expect(githubLink).toHaveAttribute('href', socialLinks.github)
    expect(linkedinLink).toHaveAttribute('href', socialLinks.linkedin)
    expect(emailLink).toHaveAttribute('href', socialLinks.email)
  })

  it('social links open in new tab', () => {
    render(<Footer />)

    const githubLink = screen.getByRole('link', { name: /github/i })

    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
