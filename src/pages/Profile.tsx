import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import { getUsuarios, deleteUsuario, updateUsuario, Usuario } from '../api';

const Profile = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [editingUsuario, setEditingUsuario] = useState<Usuario | null>(null);
    const [formData, setFormData] = useState<Usuario>({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        login: '',
        senha: '',
    });

    const fetchUsuarios = async () => {
        const data = await getUsuarios();
        setUsuarios(data);
    };

    const handleDelete = async (id: string | number | undefined) => {
        try {
            if (!id) {
                setErrorMessage('ID do usuário não encontrado. Não foi possível excluir.');
                return;
            }
            await deleteUsuario(id);
            setErrorMessage(null);
            fetchUsuarios();
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            setErrorMessage('Ocorreu um erro ao excluir o usuário. Tente novamente.');
        }
    };

    const handleEdit = (id: string | number | undefined) => {
        const usuario = usuarios.find((u) => u.id === id);
        if (usuario) {
            setEditingUsuario(usuario);
            setFormData(usuario);
        }
    };

    const handleUpdate = async () => {
        try {
            if (editingUsuario) {
                await updateUsuario(editingUsuario.id, formData);
                setEditingUsuario(null);
                setFormData({
                    nome: '',
                    sobrenome: '',
                    email: '',
                    telefone: '',
                    login: '',
                    senha: '',
                });
                fetchUsuarios();
            }
        } catch (error) {
            console.error('Erro ao atualizar o usuário:', error);
            setErrorMessage('Ocorreu um erro ao atualizar o usuário. Tente novamente.');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData: Usuario) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        fetchUsuarios();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-blue-600 text-center mb-6">Gestão de Usuários</h1>

            {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}

            {editingUsuario && (
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4">Editando: {editingUsuario.nome} {editingUsuario.sobrenome}</h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleInputChange}
                            placeholder="Nome"
                            className="w-full p-3 border border-blue-300 rounded-md"
                        />
                        <input
                            type="text"
                            name="sobrenome"
                            value={formData.sobrenome}
                            onChange={handleInputChange}
                            placeholder="Sobrenome"
                            className="w-full p-3 border border-blue-300 rounded-md"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            className="w-full p-3 border border-blue-300 rounded-md"
                        />
                        <input
                            type="text"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleInputChange}
                            placeholder="Telefone"
                            className="w-full p-3 border border-blue-300 rounded-md"
                        />
                        <input
                            type="text"
                            name="login"
                            value={formData.login}
                            onChange={handleInputChange}
                            placeholder="Login"
                            className="w-full p-3 border border-blue-300 rounded-md"
                        />
                        <input
                            type="password"
                            name="senha"
                            value={formData.senha}
                            onChange={handleInputChange}
                            placeholder="Senha"
                            className="w-full p-3 border border-blue-300 rounded-md"
                        />
                    </div>
                    <div className="flex justify-end space-x-4 mt-4">
                        <button
                            className="bg-blue-600 text-white p-1 rounded-md hover:bg-blue-700 transition"
                            onClick={handleUpdate}
                        >
                          <FaSave className="mr-1" />
                            Atualizar
                        </button>
                        <button
                            className="bg-gray-500 text-white p-1 rounded-md hover:bg-gray-600 transition"
                            onClick={() => setEditingUsuario(null)}
                        >
                          <FaTimes className="mr-1" />
                            Cancelar
                        </button>
                    </div>
                </div>
            )}

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b border-gray-300 p-3 text-left text-blue-600">Nome</th>
                            <th className="border-b border-gray-300 p-3 text-left text-blue-600">Sobrenome</th>
                            <th className="border-b border-gray-300 p-3 text-left text-blue-600">Email</th>
                            <th className="border-b border-gray-300 p-3 text-left text-blue-600">Telefone</th>
                            <th className="border-b border-gray-300 p-3 text-left text-blue-600">Login</th>
                            <th className="border-b border-gray-300 p-3 text-left text-blue-600">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id} className="hover:bg-gray-50">
                                <td className="border-b border-gray-300 p-3">{usuario.nome}</td>
                                <td className="border-b border-gray-300 p-3">{usuario.sobrenome}</td>
                                <td className="border-b border-gray-300 p-3">{usuario.email}</td>
                                <td className="border-b border-gray-300 p-3">{usuario.telefone}</td>
                                <td className="border-b border-gray-300 p-3">{usuario.login}</td>
                                <td className="border-b border-gray-300 p-3">
                                    <button
                                        className="bg-yellow-500 text-white text-center p-1 rounded-md mr-1 hover:bg-yellow-600"
                                        onClick={() => handleEdit(usuario.id)}
                                    >
                                      <FaEdit className="mr-1" />
                                        Editar
                                    </button>
                                    <button
                                        className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600"
                                        onClick={() => handleDelete(usuario.id)}
                                    >
                                      <FaTrash className="mr-1" />
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile;
