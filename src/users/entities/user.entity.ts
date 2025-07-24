import { Account } from "src/accounts/entities/account.entity";
import { Transaction } from "src/transactions/entities/transaction.entity";

export enum UserStatus {
  active = 'active',
  suspended = 'suspended',
  closed = 'closed',
}

export enum UserRole {
  user = 'user',
  admin = 'admin',
}

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  birthdate: Date;
  nationalId: string;
  createdAt: Date;
  updatedAt: Date;
  status: UserStatus;
  role: UserRole;

  accounts?: Account[];
  transactions?: Transaction[];
}