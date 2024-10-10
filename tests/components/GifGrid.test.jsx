import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

/**
 * Se usa jest.mock() para simular el módulo useFetchGifs.
 * con esto Jest reemplaza la implementación real de useFetchGifs por una versión simulada.
 * Esto es útil para controlar el comportamiento del hook en las pruebas
 * evitando que se hagan solicitudes reales a la API de Giphy.
 * 
 * @see https://jestjs.io/docs/mock-functions#mocking-modules
 */
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

  const category = 'One Punch';

  /**
   * useFetchGifs.mockReturnValue() es una función de Jest que permite simular
   * el retorno de un hook o una función. En este caso, se usa para simular el
   * retorno de useFetchGifs con un arreglo de imágenes vacío y isLoading en true
   * como lo haría el hook real en la primera renderización.
   * 
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

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render( <GifGrid category={ category } /> );
    expect( screen.getByText('Cargando...') );
    expect( screen.getByText( category ) );
    // screen.debug();
  });

  /**
   * Verificar que el componente GiftGrid muestre los elementos correspondientes
   * cuando el hook useFetchGifs retorna las imágenes.
   * 
   * Se define un arreglo de gifs con sus propiedades id, title y url.
   * 
   * Se usa la función mockReturnValue() para simular el retorno de useFetchGifs.
   * con las imágenes y isLoading en false.
   * 
   * Se renderiza el componente GifGrid con la categoría proporcionada.
   * 
   * Se usa la función screen.getAllByRole('img') para obtener todos los elementos
   * img renderizados en el DOM. La función expect() verifica que la cantidad de
   * elementos img sea igual a la cantidad de gifs proporcionados.
   * 
   * Esto verifica que el componente GifGrid muestre los gifs correspondientes.
   */
  test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      },
      {
        id: 'A1G',
        title: 'Naruto',
        url: 'https://localhost/naruto.jpg'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });
    
    render( <GifGrid category={ category } /> );
    // screen.debug();
    expect( screen.getAllByRole('img').length ).toBe(gifs.length);

  });

})