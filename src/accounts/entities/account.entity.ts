import { Transaction } from "src/transactions/entities/transaction.entity";
import { User } from "src/users/entities/user.entity";

export enum AccountType {
    checking = 'checking',
    savings = 'savings',
    loan = 'loan',
    deposito = 'deposito',
    investment = 'investment',
}

export enum AccountStatus {
    active = 'active',
    frozen = 'frozen',
    closed = 'closed',
}

export class Account {
  id: number;
  userId: number;
  accountNumber: string;
  accountType: AccountType;
  status: AccountStatus;
  balance: number;
  currency: string;
  createdAt: Date;

  user?: User;
  transactions?: Transaction[];
}