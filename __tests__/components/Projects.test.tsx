import { render, screen } from '@testing-library/react'
import { Projects } from '@/components/projects'
import { projects } from '@/lib/data'

describe('Projects Component', () => {
  it('renders projects section heading', () => {
    render(<Projects />)

    expect(screen.getByText('Featured Projects')).toBeInTheDocument()
  })

  it('renders all projects', () => {
    render(<Projects />)

    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument()
      expect(screen.getByText(project.description)).toBeInTheDocument()
    })
  })

  it('renders project tags', () => {
    render(<Projects />)

    projects.forEach((project) => {
      project.tags.forEach((tag) => {
        // Use getAllByText because tags might appear in multiple projects
        const tagElements = screen.getAllByText(tag)
        expect(tagElements.length).toBeGreaterThan(0)
      })
    })
  })

  it('renders demo and code links for projects', () => {
    render(<Projects />)

    const demoLinks = screen.getAllByText('View Demo')
    const codeLinks = screen.getAllByText('View Code')

    expect(demoLinks.length).toBeGreaterThan(0)
    expect(codeLinks.length).toBeGreaterThan(0)
  })

  it('has correct section id for navigation', () => {
    const { container } = render(<Projects />)

    const section = container.querySelector('#projects')
    expect(section).toBeInTheDocument()
  })

  it('displays coming soon message', () => {
    render(<Projects />)

    expect(screen.getByText(/More projects coming soon/i)).toBeInTheDocument()
  })
})
