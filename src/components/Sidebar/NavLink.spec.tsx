import { render, screen } from '@testing-library/react'
import { NavLink } from './NavLink'
import { BrowserRouter } from 'react-router-dom'

describe('NavLink Component', () => {
  it('render correctly', () => {
    render(<NavLink />, { wrapper: BrowserRouter })

    expect(screen.getByText('Home'))
    expect(screen.getByText('Tasks'))
  })
})
