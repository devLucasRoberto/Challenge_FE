import { render, screen } from '@testing-library/react'
import { Index } from '.'

describe('Index page', () => {
  it('render correctly', () => {
    render(<Index />)

    expect(screen.getByText('Home'))
    expect(screen.getByText('Backend:'))
    expect(screen.getByText('github.com/MarceloFonseca/tasks-api'))
    expect(screen.getByText('Usage instructions'))
  })
})
