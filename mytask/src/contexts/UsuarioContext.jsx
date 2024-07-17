import { createContext } from "react";

// criação do contexto. define um contexto na aplicação
// mecanismo para compartilhar dados entre os componentes da aplicação

// createContext() -> cria um contexto
// export -> permite que o contexto seja importado em outros arquivos
// const -> define uma constante
// UsuarioContext -> nome do contexto

export const UsuarioContext = createContext();