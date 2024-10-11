import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Pruebas en el hook useFetchGifs', () => {

  /**
   * ⚠️ Los hooks necesitan parte del ciclo de vida de un componente para funcionar:
   * No podemos llamar a useFetchGifs directamente en las pruebas
   * porque el hook hace uso de useState y useEffect, y estos hooks
   * solo pueden ser usados en componentes de React.
   * ...useFetchGifs()❌
   * 
   * Tampoco podemos desestructurar las propiedades images e isLoading
   * de este hook directamente en las pruebas, por la misma razón.
   * ...const { images, isLoading } = useFetchGifs()❌
   * 
   * ✅ Para probar un hook personalizado, usamos renderHook de testing-library/react-hooks
   * Primero importamos renderHook de testing-library/react-hooks
   * Luego con renderHook( () => useFetchGifs('One Punch')) simulamos el uso del hook
   * y obtenemos el resultado de la ejecución del hook en result.
   * 
   * Luego podemos desestructurar las propiedades images e isLoading de result.current
   * 
   * Finalmente, probamos que el estado inicial de images sea un arreglo vacío
   * y que isLoading sea true. 
   */
  test('debe de regresar el estado inicial', () => {

    const{ result } = renderHook( () => useFetchGifs( 'One Punch' ) );
    // console.log( result );
    const { images, isLoading } = result.current;
    
    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
    
  });

  /** 
   * Esta prueba verifica que el hook useFetchGifs retorne un arreglo de imágenes 
   * y isLoading en false, despues de esperar a que se resuelva la promesa.
   * 
   * Es importante usar async/await para esperar a que se resuelva la promesa.
   * 
   * Renderizamos useFetchGifs con la categoría 'One Punch' usando renderHook.
   * 
   * La función waitFor() de testing-library/react se utiliza para esperar (await) hasta que
   * la longitud de images en result.current sea mayor a 0. Esto asegura que las imágenes
   * hayan sido cargadas antes de continuar con las aserciones.
   * Dentro de waitFor() se pasa una función: () => expect( result.current.images.length ).toBeGreaterThan(0)
   * que es la condición que se debe cumplir para continuar con las aserciones. (Hasta que la longitud de images sea mayor a 0)
   * 
   * Una vez que las imágenes han sido cargadas, se desestructura el objeto result.current
   * para obtener las propiedades images e isLoading. result.current contiene
   * el estado actual del hook useFetchGifs.
   * 
   * expect( images.length ).toBeGreaterThan(0) verifica que la longitud de images sea mayor a 0.
   * expect( isLoading ).toBeFalsy() verifica que isLoading sea false.
  */
  test('debe de retornar una arreglo de imagenes e isLoading en false', async() => {

    const{ result } = renderHook( () => useFetchGifs( 'One Punch' ) );
    
    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0),
    );

    const { images, isLoading } = result.current;
    
    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
    
  });

})