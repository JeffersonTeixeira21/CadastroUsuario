import { useState } from "react";
import { addUsuario } from "../api";
import UserForm from "../components/UserForm";
import { Usuario } from "../api";

function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: Usuario) => {
    setIsSubmitting(true);
    try {
      await addUsuario(data);
    } catch (error) {
      console.log("Erro ao adicionar o usuário", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <UserForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}

export default Register;
