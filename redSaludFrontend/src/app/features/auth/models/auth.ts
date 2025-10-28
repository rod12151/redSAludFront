export interface LoginRequest{
    username:string,
    password:string
}
export interface TokenResponse{
    accessToken:string,
    refreshToken:string,
    username:string
    
} export interface rolesResponse{
    superAdmin:boolean,
    admin:boolean,
    user:boolean,
    invited:boolean,
    
}
