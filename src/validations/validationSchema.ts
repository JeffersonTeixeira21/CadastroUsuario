import * as yup from "yup";

export const userSchema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  sobrenome: yup.string().required("Sobrenome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  telefone: yup
    .string()
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido")
    .required("Telefone é obrigatório"),
  login: yup.string().min(3, "Login deve ter pelo menos 3 caracteres").required("Login é obrigatório"),
  senha: yup.string().min(3, "Senha deve ter pelo menos 3 caracteres").required("Senha é obrigatória"),
  confirmaSenha: yup
    .string()
    .oneOf([yup.ref("senha"), undefined], "As senhas devem ser iguais")
    .required("Confirmação de senha é obrigatória"),
});
