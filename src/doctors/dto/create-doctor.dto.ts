import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Role } from "src/enums/role.enum";
import { Specialty } from "src/enums/specialty.enum";

export class CreateDoctorDto {

    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEnum(Role)
    role: Role;

    @IsEnum(Specialty)
    specialty: Specialty;

    @IsString()
    @IsNotEmpty()
    licenseNumber: string;

    @IsDateString()
    @IsNotEmpty()
    dob: string;
}
