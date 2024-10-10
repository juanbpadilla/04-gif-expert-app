import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Pruebas en <AddCategory />', () => {

  /**
   * Este test comprueba que el elemento input del componente AddCategory cambie su valor.
   * 
   * Para ello, renderizamos el componente AddCategory.
   * Luego, obtenemos el input del componente AddCategory.
   * 
   * Para simular el cambio de valor en el input, usamos fireEvent.input.
   * fireEvent.input recibe dos argumentos: el elemento input y un objeto con el valor que queremos asignar.
   * ..en este caso, queremos asignar el valor 'Saitama' al input,
   * por lo que el objeto que pasamos es { target: { value: 'Saitama' } }.
   * target es el elemento input y value es el valor que queremos asignar.
   */
  test('debe cambiar el valor de la caja de texto', () => {
    
    render( <AddCategory onNewCategory={ () => {} } /> );
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: 'Saitama' } });

    expect( input.value ).toBe('Saitama');
    // screen.debug();

  });

  /**
   * Este test comprueba que se llame al evento onSubmit cuando se envía el formulario.
   * 
   * Para ello, renderizamos el componente AddCategory.
   * Luego, obtenemos el input y el formulario del componente AddCategory.
   * 
   * Para simular el cambio de valor en el input, usamos fireEvent.input. como en el anterior test.
   * 
   * Para simular el envío del formulario, usamos fireEvent.submit.
   * fireEvent.submit recibe dos argumentos: el formulario y un objeto con el evento que queremos simular.
   * ..en este caso, queremos simular el evento submit, por lo que el objeto que pasamos es {}.
   * 
   * Finalmente, comprobamos que el valor del input sea una cadena vacía.
   */
  test('debe de llamar onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Saitama';
    // TODO: ???
    
    render( <AddCategory onNewCategory={ () => {} } /> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form')

    fireEvent.input( input, { target: { value: inputValue } });
    fireEvent.submit( form );
    expect( input.value ).toBe('');
    // screen.debug();

  });

})