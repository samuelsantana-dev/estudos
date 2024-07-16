export const Login = () => {
    return(
        <div>
            <h1>Entrar</h1>
            <p>Faça o login para poder utilizar o sistema</p>
            <form action="">
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do usuário"
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Insira a senha"
                    />
                </label>
            <button className="btn">Entrar</button>
            </form>
        </div>
    )
}