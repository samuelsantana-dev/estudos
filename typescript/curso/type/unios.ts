//criar um type order com price e product
type Orderr = {
    product: string;
    price: number;
    quantity: number;
}

//criar um user
type Userr = {
    name: string;
    age: number;
    email: string;
    senha?: string;
    orders: Order[];
}

type Author = {
    books: string[];
}

const usuarios: User = {
    name: "João Silva",
    age: 30,
    email: "joaosilva@email.com",
    orders: [{product: "controle", price: 100, quantity: 1}]
}

const author: Author & Userr = {
    age: 1,
    books: ["a", "b"],
    email: "a",
    name: "a",
    orders: [],
    senha: "a"
}