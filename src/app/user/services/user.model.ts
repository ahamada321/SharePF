export class User {

    _id: string
    FBuserID: string
    username: string
    email: string
    password: string
    passwordConfirmation: string // Frontend only!
    stripeCustomerId: number
    rating: number
    isVerified: boolean
    userRole: string
    status: string

}
