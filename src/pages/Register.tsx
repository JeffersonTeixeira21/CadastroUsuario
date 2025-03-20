import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [usuarios, setUsuarios] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validação simples
        if (!nome || !email || !telefone || !login || !senha || senha !== confirmarSenha) {
            alert('Preencha todos os campos corretamente');
            setIsSubmitting(false);
            return;
        }

        // Adiciona o novo usuário à lista
        const novoUsuario = { nome, email, telefone, login, senha };
        setUsuarios([...usuarios, novoUsuario]);

        // Limpa os campos
        setNome('');
        setEmail('');
        setTelefone('');
        setLogin('');
        setSenha('');
        setConfirmarSenha('');
        setIsSubmitting(false);
    };

    const handleDelete = (index) => {
        const newUsuarios = usuarios.filter((_, i) => i !== index);
        setUsuarios(newUsuarios);
    };

    const handleEdit = (index) => {
        const usuario = usuarios[index];
        setNome(usuario.nome);
        setEmail(usuario.email);
        setTelefone(usuario.telefone);
        setLogin(usuario.login);
        setSenha(usuario.senha);
        setConfirmarSenha(usuario.senha);
        handleDelete(index);
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-blue-900">
            <h1 className="mb-6 text-lg font-bold text-center text-gray-400">
                CADASTRE-SE
            </h1>
            <hr className="w-screen" />
            <p className="mt-4 text-sm text-center text-white">
                Faça seu cadastro e aproveite nosso conteúdo
            </p>
            <form className="mt-4 p-4 bg-cyan-200" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    className="p-2 w-full mb-2"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="p-2 w-full mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Digite seu telefone"
                    className="p-2 w-full mb-2"
                    value={telefone}
                    InputMask mask="(99) 99999-9999" {...register("telefone")}
                    
                  
                    required
                />
                <input
                    type="text"
                    placeholder="Digite seu login"
                    className="p-2 w-full mb-2"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    minLength="3"
                    required
                />
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    className="p-2 w-full mb-2"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    minLength="3"
                    required
                />
                <input
                    type="password"
                    placeholder="Confirme sua senha"
                    className="p-2 w-full mb-2"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    required
                />
                <button
                    className="ml-2 p-2 bg-blue-900 text-white rounded mt-4 w-full"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Cadastrando ...' : 'Cadastrar'}
                </button>
            </form>

            <Link
                className="mt-4 mr-4 text-blue-600 bg-gray-300 rounded px-4 hover:bg-gray-500"
                to="/"
            >
                Voltar
            </Link>

            <div className="mt-6 w-full px-4">
                <h2 className="text-white text-lg">Usuários Cadastrados</h2>
                <ul className="space-y-2 mt-4">
                    {usuarios.map((usuario, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center bg-gray-200 p-2 rounded-lg"
                        >
                            <div>
                                <p>{usuario.nome} ({usuario.login})</p>
                                <p>{usuario.email}</p>
                                <p>{usuario.telefone}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleEdit(index)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleDelete(index)}
                                >
                                    Excluir
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Cadastro;
