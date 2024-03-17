import { Type } from "typescript"

function valorArray<Type>(array: Type[]){
    return array[0]
}

const mostrarNoConsole = valorArray<number>([1,2,3,4,5,6,7,8,9,10])
const mostrarCan = valorArray<string>(['a','b','c','d'])

