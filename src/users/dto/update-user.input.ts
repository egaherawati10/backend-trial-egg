import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.input";

export class UpdateUserDto extends PartialType(CreateUserDto) {}