import { Exclude, Expose } from "class-transformer";

export class User {

  @Expose()
  id: number;

  @Expose()
  username: string;

  @Exclude()
  password: string;
  
  @Expose()
  email: string;

  @Expose()
  isActive: boolean = true;

  constructor(
    id: number,
    username: string,
    password: string,
    email: string,
    isActive: boolean = true,
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.isActive = isActive;
  }
}