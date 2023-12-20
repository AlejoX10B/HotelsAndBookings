
export enum AuthStatus {
   LoadingAuth = 'LOADING_AUTH',
   Authenticated = 'AUTHENTICATED',
   NotAuthenticated = 'NOT_AUTHENTICATED',
}

export interface Credentials {
   email:      string | null;
   password:   string | null;
   role:       string | null;
}
