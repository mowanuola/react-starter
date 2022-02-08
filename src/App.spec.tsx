import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('it mounts successfully', () => {
    render(<App />)

    expect(true).toEqual(true)
  })
})