import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/hero'
import { personalInfo, socialLinks } from '@/lib/data'

describe('Hero Component', () => {
  it('renders hero section with personal info', () => {
    render(<Hero />)

    expect(screen.getByText(personalInfo.name)).toBeInTheDocument()
    expect(screen.getByText(personalInfo.tagline)).toBeInTheDocument()
    expect(screen.getByText(personalInfo.description)).toBeInTheDocument()
  })

  it('renders avatar image', () => {
    render(<Hero />)

    const avatar = screen.getByAltText(personalInfo.name)
    expect(avatar).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)

    expect(screen.getByText('View My Work')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Hero />)

    // Check for social link hrefs
    const githubLink = screen.getByRole('link', { name: /github/i })
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    const mediumLink = screen.getByRole('link', { name: /medium/i })
    const emailLink = screen.getByRole('link', { name: /email/i })

    expect(githubLink).toHaveAttribute('href', socialLinks.github)
    expect(linkedinLink).toHaveAttribute('href', socialLinks.linkedin)
    expect(mediumLink).toHaveAttribute('href', socialLinks.medium)
    expect(emailLink).toHaveAttribute('href', socialLinks.email)
  })

  it('social links open in new tab', () => {
    render(<Hero />)

    const githubLink = screen.getByRole('link', { name: /github/i })

    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
