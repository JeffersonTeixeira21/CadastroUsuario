import { Link, useLocation } from "react-router-dom";

function Profile() {
    const location = useLocation();
    const { nome, sobrenome, email, cpf } = location.state || {}; 

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-blue-900">
            <h1 className="text-2xl font-bold text-center text-gray-400">
                Área restrita
            </h1>
            <hr className="w-screen" />
            <p className="text-1sm text-center text-white">
                Bem-vindo, {nome} {sobrenome}!
            </p>
            <p className="text-center text-white">Email: {email}</p>
            <p className="text-center text-white">CPF: {cpf}</p>
            <Link
                className="mt-4 mr-4 text-blue-600 bg-gray-300 rounded px-4 hover:bg-gray-500"
                to="/"
            >
                Voltar
            </Link>
        </div>
    );
}

export default Profile;
