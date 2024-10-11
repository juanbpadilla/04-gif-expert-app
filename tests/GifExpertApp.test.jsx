import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp />', () => {

  test('debe de añadir una nueva categoría', () => {

    const category = 'kimetsu no yaiba';

    render( <GifExpertApp /> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: category } });
    fireEvent.submit( form );
    // screen.debug();
    expect( screen.getByText( category ) );
    
  });

  test('no debe de añadir una nueva categoría si ya existe otra igual', () => {

    const category = 'One Punch';

    render( <GifExpertApp /> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: category } });
    fireEvent.submit( form );
    expect( screen.getByText( category ) );
    
    fireEvent.input( input, { target: { value: category } });
    fireEvent.submit( form );
    // screen.debug();

    expect( screen.getAllByText( category ).length ).toBe(1);

  })

})