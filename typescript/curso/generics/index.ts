// ----------------- Exemplo de Generics em Classes:


class Pilha<T> {
    private elementos: T[] = [];
  
    push(elemento: T): void {
      this.elementos.push(elemento);
    }
  
    pop(): T | undefined {
      return this.elementos.pop();
    }
  }
  
  // Usando a classe Pilha com diferentes tipos de dados
  const pilhaDeNumeros = new Pilha<number>();
  pilhaDeNumeros.push(1);
  pilhaDeNumeros.push(2);
  console.log(pilhaDeNumeros.pop()); // Retorna 2
  
  const pilhaDeStrings = new Pilha<string>();
  pilhaDeStrings.push('hello');
  pilhaDeStrings.push('world');
  console.log(pilhaDeStrings.pop()); // Retorna 'world'

  /*Neste exemplo, a classe Pilha é genérica, com T representando o tipo dos elementos na pilha. Isso nos permite criar instâncias da classe Pilha para armazenar diferentes tipos de dados, mantendo a segurança de tipo.*/

//   -----------------------


function primeiroElemento<T>(arr: T[]): T {
    return arr[0];
  }
  
  const numerosNumbers: number[] = [1, 2, 3, 4, 5];
  const primeiroNumero: number = primeiroElemento(numerosNumbers); // Retorna 1
  
  const palavras: string[] = ['hello', 'world'];
  const primeiraPalavra: string = primeiroElemento(palavras); // Retorna 'hello'
  
// -----------------------

const returnValue = <T>(value: T) => value

const string = returnValue<string>('hello')
const numberGeneric = returnValue<number>(123)
const booleanGeneric = returnValue<boolean>(true)
