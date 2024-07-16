import { useState } from "react";
import styles from "./Register.module.css";

export const Register = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //Isso zera todos os erros
        setError('');

        const user = {
            displayName,
            email,
            password,
            confirmPassword
        }

        if(password !== confirmPassword){
            setError("As senhas precisam ser iguais");
            return;
        }

        console.log(user);
    }
    
    return(
        <>
            <div className={styles.container}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe suas histórias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        required
                        placeholder="Nome do usuário"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Nome do usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                       type="password"
                       name="password"
                       required
                       placeholder="Insira a senha"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Confirme a senha:</span>
                    <input
                         type="password"
                         name="confirmPassword"
                         required
                         placeholder="Confirme a senha"
                         value={confirmPassword}
                         onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                <button className="btn">Entrar</button>
                {error && <p className="error">{error}</p>}
            </form>
            </div>
        </>
    )
}