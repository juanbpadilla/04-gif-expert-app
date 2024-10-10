import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";


describe('Pruebas en <GifGrid />', () => {

  const category = 'One Punch';

  /**
   * Verificar que el componente GifGrid muestre un mensaje de carga
   * y la categoría proporsionada cuando se renderiza por primera vez.
   * 
   * La función render() de testing-library recibe el componente GifGrid con
   * la categoría proporcionada como prop. Esto simula la renderización del
   * componente en un entorno de pruebas.
   * 
   * La función screen.getByText('Cargando...') busca un elemento en el DOM que contenga
   * el texto 'Cargando...'. La función expect() verifica que el elemento exista.
   * 
   * De igual forma, se verifica que el texto de la categoría proporcionada se muestre.
   * 
   * La linea screen.debug() está comentada, pero se puede descomentar para imprimir
   * el contenido del DOM en la consola. Esto es útil para depurar y verificar manualmente
   * el estado del DOM durante la prueba.
   * 
   * @see https://testing-library.com/docs/react-testing-library/cheatsheet/
   */
  test('debe de mostrar el loading inicialmente', () => {    
    render( <GifGrid category={ category } /> );
    expect( screen.getByText('Cargando...') );
    expect( screen.getByText( category ) );
    // screen.debug();
  });

})