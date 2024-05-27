export interface UserDTO{
    id: string,
    name: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    photo: string,
    description: string,
    matter: string,
    classPrice: string,
    schedules: {
        id: number,
        day: string,
        at: number,
        until: number
    }[],
    favorites: string[]
}