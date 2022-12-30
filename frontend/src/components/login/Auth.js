import {createContext, useContext} from 'react';

export const AuthContext = createContext({userId: -1, userScore: -999});

export function useAuth() {
    return useContext(AuthContext);
}
