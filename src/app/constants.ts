export interface UserRute {
    path:string,
    name:string,
    role:number
}

export const AUTH_PATH ={
    SIGN_IN:'sign-in',
    VERIFY_OTP:'otp-verify'
}

export const AUTH_APIS ={
    LOGIN:'login'
}

export const REGEX = {
    EMAIL:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
}

export const API_PATH = {
    SERVER_RESPONCE:'serverResponse'
}

export const MAIN_PATHS = {
    MAIN:'main',
    CONTACT_LIST:'home',
    ACCOUNT:'account'
}

export const ADMIN_PATH = {
    ADMIN:'admin',
    DASHBOARD:'dashboard',
    USERS:'users'
}

export const USER_ROUTES:UserRute[]=[
    {
        path:'home',
        name:'Home',
        role:2
    },
    {
        path:'account',
        name:'Account',
        role:2
    },
    {
        path:'../admin',
        name:'Admin',
        role:1
    }
]


export const ADMIN_ROUTES:UserRute[]=[
    {
        path:'dashboard',
        name:'Dashboard',
        role:1
    },
    {
        path:'users',
        name:'Users',
        role:1
    }
]