// O objetivo deste arquivo é ter
// todas as funções relacionadas a autenticação
// criar usuario com email/senha/nome
// entrar com google
// entrar com email/senha
// logout
// Indicamos o serviço de autenticação e o email e senha do novo usuário
// O retorno é uma promessa, então usamos await para aguardar a resposta
// Se a promessa for resolvida, o usuário foi criado com sucesso
// Caso contrário, a promessa foi rejeitada e o erro é lançado
// O erro pode ser tratado com try/catch ou .catch

import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./config";

export async function cadastrarUsuario(nome, email, senha) {
  // user é um objeto com informações do usuário autenticado
  const { user } = await createUserWithEmailAndPassword(auth, email, senha);
  // define o nome de exibição como o nome vindo do formulário de cadastro
  await updateProfile(user, { displayName: nome });
}

export async function entrarGoogle() {
  // qual o provedor de login será usado
  const provider = new GoogleAuthProvider();
  // pop-up na tela com login do google
  await signInWithPopup(auth, provider);
}

export async function loginUsuario(email, senha) {
  // user é um objeto com informações do usuário autentic
  await signInWithEmailAndPassword(auth, email, senha);
}