import { createContext, useContext } from 'react';



//podivat na react dok k kontext -> createContext by mel mit nejaky parametr - zjistit jaky
export const AuthContext = createContext({ userId: -1, userScore: -999 });

export function useAuth() {
    return useContext(AuthContext);
}
