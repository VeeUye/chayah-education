import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import HelloWorld from './index.tsx'

describe('HelloWorld', () => {
  it('should render the component without crashing', () => {
    render(<HelloWorld />)
    const message = screen.getByText(/Hello, World!/i)
    expect(message).toBeInTheDocument()
  })
})
