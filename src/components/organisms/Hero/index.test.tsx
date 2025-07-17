import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { stubbedHeroProps } from './test-data.ts'
import Hero from './index.tsx'

describe('Hero', () => {
  it('should render the title, subtitle, and call-to-action button', () => {
    render(<Hero {...stubbedHeroProps} />)

    const heading = screen.getByRole('heading', {
      name: /expert educational support/i,
    })

    const subtitle = screen.getByText(
      /guiding you to success with tailored learning plans./i
    )
    const ctaButton = screen.getByRole('link', { name: /get in touch/i })

    expect(heading).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '/contact')
  })
})
