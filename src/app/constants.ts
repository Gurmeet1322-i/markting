export interface UserRute {
    path: string,
    name: string,
    role: number
}

export interface TableHeaders {
    key?: string,
    name: string,
    sort?: string,
    case: string
}

export const MODAL_SIZE = {
    SMALL: 'sm',
    MEDIUM: 'md',
    LARGE: 'lg',
    XTRA_LARGE: 'xl'
}
export const AUTH_PATH = {
    SIGN_IN: 'sign-in',
    VERIFY_OTP: 'otp-verify'
}

export const AUTH_APIS = {
    LOGIN: 'login'
}

export const REGEX = {
    PHONE:/[0-9]{10}/,
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
}

export const API_PATH = {
    SERVER_RESPONCE: 'serverResponse'
}

export const MAIN_PATHS = {
    MAIN: 'main',
    CONTACT_LIST: 'home',
    ACCOUNT: 'account'
}

export const ADMIN_PATH = {
    ADMIN: 'admin',
    DASHBOARD: 'dashboard',
    USERS: 'users'
}

export const USER_ROUTES: UserRute[] = [
    {
        path: 'home',
        name: 'Home',
        role: 2
    },
    {
        path: 'account',
        name: 'Account',
        role: 2
    },
    {
        path: '../admin',
        name: 'Admin',
        role: 1
    }
]


export const ADMIN_ROUTES: UserRute[] = [
    {
        path: 'dashboard',
        name: 'Dashboard',
        role: 1
    },
    {
        path: 'users',
        name: 'Users',
        role: 1
    }
]


export const PAYMENT_REQUEST_TABLE: TableHeaders[] = [
    {
        key: '',
        case: 'serial',
        name: 'S.No.',
    },
    {
        key: 'name',
        case: 'normal',
        name: 'Name',
    },
    {
        key: 'phone',
        case: 'normal',
        name: 'Phone',
    },
    {
        key: 'totalAmount',
        case: 'amount',
        name: 'Total Amount',
    },
    {
        key: 'widhrawAmount',
        case: 'withdraw',
        name: 'Widhraw Amount',
    },
    {
        key: 'action',
        case: 'acceptReject',
        name: 'Action',
    }
]

export const USER_TABLE: TableHeaders[] = [
    {
        key: '',
        case: 'serial',
        name: 'S.No.',
    },
    {
        key: 'name',
        case: 'normal',
        name: 'Name',
    },
    {
        key: 'phone',
        case: 'normal',
        name: 'Phone',
    },
    {
        key: 'otp',
        case: 'normal',
        name: 'OTP',
    },
    {
        key: 'totalAmount',
        case: 'amount',
        name: 'Amount',
    },
    {
        key: 'action',
        case: 'editDelete',
        name: 'Action',
    }
]

export const MESSAGES = {
    OTP_SEND_SUCCESSFULLY: "Otp send on your register number.",
    YOUR_USER_VERIFYED_SUCCESSFULLY: 'You Registred successfully.'
}