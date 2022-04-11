import { render, screen } from '@testing-library/react'
import { Header } from '.'
import { BrowserRouter } from 'react-router-dom'

describe('Header Component', () => {
  it('render correctly', () => {
    render(<Header />, { wrapper: BrowserRouter })

    expect(screen.getByText('New App'))
  })
})
