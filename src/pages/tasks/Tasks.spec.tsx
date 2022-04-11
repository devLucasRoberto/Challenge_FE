import { render, screen } from '@testing-library/react'
import { Tasks } from '.'

describe('Tasks page', () => {
  it('title render correctly', () => {
    render(<Tasks />)

    expect(screen.getByText('Task List'))
  })

  it('button render correctly', () => {
    render(<Tasks />)

    expect(screen.getByText('Refresh'))
  })

  it('table header render correctly', () => {
    render(<Tasks />)

    expect(screen.getByText('Id'))
    expect(screen.getByText('Task'))
    expect(screen.getByText('Status'))
  })
})
