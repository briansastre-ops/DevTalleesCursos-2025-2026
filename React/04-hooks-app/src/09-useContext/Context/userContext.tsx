// un Provider es  pieza que nos permite  proveer algun tipo de comportamineto o estado a toda nuestra aplicacion sin necesidad de pasar props a cada componente
///HOC Higher order component es un componente que recibe otro componente como argumento y devuelve un nuevo componente con funcionalidades adicionales

import { User, users } from "../data/user-mock.data";
import { createContext, useState, type PropsWhitChildren } from "react";

// interface UserContextProps{
//  children: React.ReactNode
// }

///creacio de estado para que los componentes hijos puedan acceder a el sin necesidad de pasar props a cada componente

type AuthStatus = "authenticated" | "not-authenticated" | "checking";
interface UserContextProps {
  // state

  authStatus: AuthStatus;
  user: User | null;

  //actions
  login: (userId: number) => boolean;
  logout: () => void;
}

export const userContext = createContext({} as UserContextProps);

//HOC
export const userContextProvider = ({ children: PropsWhitChildren }) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");

  const [user, setUser] = useState<User | null>(null);

  const HandleLogin = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`user not found', userId`);
      setUser(null);
      setAuthStatus("not-authenticated");
      return false;
    }

    setUser(user);
    setAuthStatus("authenticated");
    return true;
  };
  const HandleLogout = () => {
    setAuthStatus("not-authenticated");
    setUser(null);
  };

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        user: user,
        login: HandleLogin,
        logout: HandleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
