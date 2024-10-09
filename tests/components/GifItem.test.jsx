import { render } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('pruebas en componente <GifItem />', () => {

  const title = 'Un título';
  const url = 'https://localhost/algo.jpg';

  test('debe mostrar el componente correctamente', () => {
    
    const { container } = render(<GifItem title={ title } url={ url } />);
    expect( container ).toMatchSnapshot()

  })
})