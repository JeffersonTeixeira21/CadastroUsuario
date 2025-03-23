import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../validations/validationSchema";
import { Usuario } from "../api";
import MaskedInput from 'react-text-mask';

interface UserFormProps {
  onSubmit: (data: Usuario) => void;
  isSubmitting: boolean;
}

interface FormUsuario {
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  login: string;
  senha: string;
  confirmaSenha: string;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormUsuario>({
    resolver: yupResolver(userSchema),
  });

  const handleFormSubmit = (data: FormUsuario) => {
    const telefoneLimpo = data.telefone.replace(/[^\d]/g, "");

    if (!telefoneLimpo) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmaSenha, ...userData } = data; 
    
    onSubmit({
      ...userData,
      telefone: telefoneLimpo,
    });
  };

  return (
    <form
      className="bg-white p-6 rounded shadow-lg w-full max-w-md"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          className="p-2 border border-gray-300 rounded w-full"
          {...register("nome")}
        />
        <p className="text-red-500 text-sm">{errors.nome?.message}</p>
      </div>

      <div>
        <label>Sobrenome:</label>
        <input
          type="text"
          placeholder="Digite seu sobrenome"
          className="p-2 border border-gray-300 rounded w-full"
          {...register("sobrenome")}
        />
        <p className="text-red-500 text-sm">{errors.sobrenome?.message}</p>
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu email"
          className="p-2 border border-gray-300 rounded w-full"
          {...register("email")}
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      <div>
        <label>Telefone:</label>
        <Controller
          name="telefone"
          control={control}
          render={({ field }) => (
            <MaskedInput
              mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="(99) 99999-9999"
              {...field}
            />
          )}
        />
        <p className="text-red-500 text-sm">{errors.telefone?.message}</p>
      </div>

      <div>
        <label>Login:</label>
        <input
          type="text"
          placeholder="Digite seu login"
          className="p-2 border border-gray-300 rounded w-full"
          {...register("login")}
        />
        <p className="text-red-500 text-sm">{errors.login?.message}</p>
      </div>

      <div>
        <label>Senha:</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          className="p-2 border border-gray-300 rounded w-full"
          {...register("senha")}
        />
        <p className="text-red-500 text-sm">{errors.senha?.message}</p>
      </div>

      <div>
        <label>Confirmar senha:</label>
        <input
          type="password"
          placeholder="Confirme a senha"
          className="p-2 border border-gray-300 rounded w-full"
          {...register("confirmaSenha")}
        />
        <p className="text-red-500 text-sm">{errors.confirmaSenha?.message}</p>
      </div>

      <button
        className="ml-2 p-1 bg-blue-900 text-white rounded mt-4"
        type="submit"
        disabled={isSubmitting}>
        {isSubmitting ? "Cadastrando ..." : "Cadastrar"}
      </button>
    </form>
  );
};

export default UserForm;
