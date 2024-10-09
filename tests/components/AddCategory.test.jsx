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

})