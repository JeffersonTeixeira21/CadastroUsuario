import React from 'react';
import { useForm } from 'react-hook-form';
import InputMask from "react-input-mask";

function Register() {
    return (
        <form>
            <div>
                <label>Nome:</label>
            </div>
            
            <div>
                <label>Sobrenome:</label>
            </div>

            <div>
                <label>Email:</label>
            </div>

            <div>
                <label>Telefone:</label>
            </div>

            <div>
                <label>Login:</label>
            </div>

            <div>
                <label>Senha:</label>
            </div>

            <div>
                <label>Confirmar:</label>
            </div>
        </form>
    );
}

export default Register;
