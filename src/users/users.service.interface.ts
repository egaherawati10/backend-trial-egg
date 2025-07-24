import { User } from "./entities/user.entity";

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface UsersServiceItf {
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User | null>;
    getUserByUsername(username: string): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    createUser(user: Omit<User, 'id'>): Promise<User>;
    updateUser(id: number, user: Partial<Omit<User, 'id'>>): Promise<User>;
    deleteUser(id: number): Promise<void>;
}