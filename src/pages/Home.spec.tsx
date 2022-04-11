import { render, screen } from '@testing-library/react'
import { Index } from '.'

describe('Index page', () => {
  it('render correctly', () => {
    render(<Index />)

    expect(screen.getByText('Home'))
  })
})
