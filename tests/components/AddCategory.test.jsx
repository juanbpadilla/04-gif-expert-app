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
    // screen.debug();
    expect( input.value ).toBe('Saitama');

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
   * A continuación, comprobamos que el valor del input sea una cadena vacía.
   * 
   * También comprobamos que el evento onSubmit se haya llamado.
   * ..para ello, usamos jest.fn() para crear una función simulada. ( onNewCategory )
   * ..y pasamos esta función simulada como argumento al componente AddCategory.
   * 
   * toHaveBeenCalled se usa para comprobar si la función se ha llamado.
   * 
   * ..y comprobamos que la función simulada se haya llamado una vez.
   * toHaveBeenCalledTimes(1) se usa para comprobar cuántas veces se ha llamado la función.
   * 
   * ..y comprobamos que la función simulada se haya llamado con el argumento pasado por parámetro. onNewCategory(inputValue)
   * toHaveBeenLastCalledWith(inputValue) se usa para comprobar con qué argumentos se ha llamado la función la última vez.
   * 
   */
  test('debe de llamar onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();
    
    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form')

    fireEvent.input( input, { target: { value: inputValue } });
    fireEvent.submit( form );
    // screen.debug();
    expect( input.value ).toBe('');

    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
    expect( onNewCategory ).toHaveBeenLastCalledWith( inputValue );

  });

  /**
   * Este test comprueba que no se llame al evento onSubmit si el input está vacío.
   * 
   * Para ello, renderizamos el componente AddCategory.
   * Luego, obtenemos el formulario del componente AddCategory.
   * 
   * Para simular el envío del formulario, usamos fireEvent.submit.
   * ..como en el test anterior.
   * 
   * También comprobamos que el evento onSubmit no se haya llamado.
   * ..para ello, usamos jest.fn() para crear una función simulada. ( onNewCategory )
   * ..y pasamos esta función simulada como argumento al componente AddCategory.
   * 
   * toHaveBeenCalled se usa para comprobar si la función se ha llamado.
   * ..al negar toHaveBeenCalled, comprobamos que la función no se haya llamado.
   * 
   * La otra forma de comprobar si la función no se ha llamado es con toHaveBeenCalledTimes(0).
   */
  test('no debe de llamar el onNewCategory si el input esta vacío', () => {

    const onNewCategory = jest.fn();    
    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const form = screen.getByRole('form')
    fireEvent.submit( form );

    expect( onNewCategory ).not.toHaveBeenCalled();
    // expect( onNewCategory ).toHaveBeenCalledTimes(0);
    
  });

})