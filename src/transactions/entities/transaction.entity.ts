import { Account } from "src/accounts/entities/account.entity";
import { User } from "src/users/entities/user.entity";

export enum TransactionType {
    deposit = 'deposit',
    withdrawal = 'withdrawal',
    transfer = 'transfer',
    payment = 'payment',
}

export enum TransactionStatus {
    pending = 'pending',
    success = 'success',
    failed = 'failed',
}

export class Transaction {
  id: number;
  userId: number;
  accountId: number;
  senderId?: string;
  receiverId?: string;
  type: TransactionType;
  amount: number;
  currency: string;
  description?: string;
  status: TransactionStatus;
  createdAt: Date;
  referenceNumber?: string;

  user?: User;
  account?: Account;
}