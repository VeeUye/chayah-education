import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './index'

describe('Header', () => {
  it('should render the main navigation links', () => {
    render(<Header />)

    expect(
      screen.getAllByRole('link', { name: /home/i })[0]
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('link', { name: /about/i })[0]
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('link', { name: /contact/i })[0]
    ).toBeInTheDocument()
  })
})
