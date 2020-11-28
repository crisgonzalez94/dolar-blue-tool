import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  /*Con este nombre llamaremos al pipe*/
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  /*Esta pipe es como filtro recibe un texto que sera la busqueda,
  un arreglo que son los datos entre los que hay que busca y retorna
  un arreglo con las busquedas filtradas*/

  //$texto es lo que nos va a llegar desde la vista
  //$arreglo es el array inicial que se recorrera en la vista
  //$propiedad es la propiedad el json en el que se debe filtra o buscar
  transform(arreglo: any[] , texto:string = '' , firstPropiedad:string = '' , secondPropiedad:string = ''): any {


    //Si texto esta vacio
    if( texto == ''){
      //Retornar el arreglo talcual
      return arreglo
    }

    //En el caso de que no haya un arreglo con los parametros
    if(!arreglo){
      return arreglo;
    }

    //Poner el texo en minuscula
    texto = texto.toLocaleLowerCase();

    //Filtrar busqueda
    arreglo = arreglo.filter(
      /*Ahora retornamos el filtor (hay que verificar que propiedad 
        se va a filtrar la propiedad name del arreglo)*/
      item => item[secondPropiedad].toLowerCase().includes(texto) || item[firstPropiedad].toLowerCase().includes(texto)
    );

    return arreglo;
  }
}
