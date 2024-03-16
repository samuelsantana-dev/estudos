//criar um type order com price e product
type Order = {
    product: string;
    price: number;
    quantity: number;
}

//criar um user
type User = {
    name: string;
    age: number;
    email: string;
    senha?: string;
    orders: Order[];
}

const mostrar: User = {
    name: "João Silva",
    age: 30,
    email: "joaosilva@email.com",
    orders: [{product: "controle", price: 100, quantity: 1}]
}

//mostrar a const
// const printLog = (message: string) => {} // se nao deixar opcional igual a senha nao vai funcionar

const printLog = (message?: string) => {
}

printLog(mostrar.senha);