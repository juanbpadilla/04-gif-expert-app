import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('pruebas en componente <GifItem />', () => {

  const title = 'Un título';
  const url = 'https://localhost/algo.jpg';

  test('debe mostrar el componente correctamente', () => {
    
    const { container } = render(<GifItem title={ title } url={ url } />);
    expect( container ).toMatchSnapshot()

  })

  test('debe mostrar la imagen con el URL y el ALT indicado', () => {
    
    render(<GifItem title={ title } url={ url } /> );
    // screen.debug();
    // expect( screen.getByRole('img').src ).toBe( url );
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );

  });

  test('debe de mostrar el título en el componenete', () => {
    render(<GifItem title={ title } url={ url } /> );
    expect( screen.getByText( title ) ).toBeTruthy();
  });
})