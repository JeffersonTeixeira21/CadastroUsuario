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
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        className="p-2 border border-gray-300 rounded w-full"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label>Sobrenome:</label>
                    <input
                        type="text"
                        placeholder="Digite seu sobrenome"
                        className="p-2 border border-gray-300 rounded w-full"
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        placeholder="Digite seu email"
                        className="p-2 border border-gray-300 rounded w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Telefone:</label>
                    <input
                        type="text"
                        placeholder="Digite seu telefone"
                        className="p-2 border border-gray-300 rounded w-full"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </div>

                <div>
                    <label>Login:</label>
                    <input
                        type="text"
                        placeholder="Digite seu login"
                        className="p-2 border border-gray-300 rounded w-full"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>

                <div>
                    <label>Senha:</label>
                    <input
                        type="text"
                        placeholder="Digite sua senha"
                        className="p-2 border border-gray-300 rounded w-full"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <div>
                    <label>Confirmar senha:</label>
                    <input
                        type="text"
                        placeholder="Confirme a senha"
                        className="p-2 border border-gray-300 rounded w-full"
                        value={confirmaSenha}
                        onChange={(e) => setConfirmaSenha(e.target.value)}
                    />
                </div>
            </form>
        </div>

    );
}

export default Register;
