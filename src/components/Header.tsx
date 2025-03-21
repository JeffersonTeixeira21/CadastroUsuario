import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="bg-gray-900 text-white p-4">
            <nav className="flex justify-center">
                <ul className="flex space-x-4">
                    <li><Link className="mr-4 hover:text-blue-800" to="/"> Início </Link></li>
                    <li> <Link className="mr-4 hover:text-blue-800" to="/register"> Cadastre-se </Link></li>
                    <li> <Link className="mr-4 hover:text-blue-800" to="/profile"> Usuários </Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;