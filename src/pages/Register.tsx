import { useState } from "react";

function Register() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    return (
        <form>
            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    className="p-2"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            
            <div>
                <label>Sobrenome:</label>
                <input
                    type="text"
                    placeholder="Digite seu sobrenome"
                    className="p-2"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                />
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="text"
                    placeholder="Digite seu email"
                    className="p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label>Telefone:</label>
                <input
                    type="text"
                    placeholder="Digite seu telefone"
                    className="p-2"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />
            </div>

            <div>
                <label>Login:</label>
                <input
                    type="text"
                    placeholder="Digite seu login"
                    className="p-2"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </div>

            <div>
                <label>Senha:</label>
                <input
                    type="text"
                    placeholder="Digite sua senha"
                    className="p-2"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>

            <div>
                <label>Confirmar senha:</label>
                <input
                    type="text"
                    placeholder="Confirme a senha"
                    className="p-2"
                    value={confirmaSenha}
                    onChange={(e) => setConfirmaSenha(e.target.value)}
                />
            </div>
        </form>
    );
}

export default Register;
