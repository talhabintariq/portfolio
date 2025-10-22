import { render, screen } from '@testing-library/react'
import { Skills } from '@/components/skills'
import { skills } from '@/lib/data'

describe('Skills Component', () => {
  it('renders skills section heading', () => {
    render(<Skills />)

    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument()
  })

  it('renders all skill categories', () => {
    render(<Skills />)

    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('AI/ML')).toBeInTheDocument()
    expect(screen.getByText('DevOps')).toBeInTheDocument()
  })

  it('renders frontend skills', () => {
    render(<Skills />)

    skills.frontend.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })
  })

  it('renders backend skills', () => {
    render(<Skills />)

    skills.backend.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })
  })

  it('renders AI/ML skills', () => {
    render(<Skills />)

    skills.aiml.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })
  })

  it('renders DevOps skills', () => {
    render(<Skills />)

    skills.devops.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })
  })

  it('has correct section id for navigation', () => {
    const { container } = render(<Skills />)

    const section = container.querySelector('#about')
    expect(section).toBeInTheDocument()
  })
})
