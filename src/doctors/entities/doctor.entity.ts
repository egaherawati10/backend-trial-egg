import { Exclude, Expose } from "class-transformer";
import { Role } from "src/enums/role.enum";
import { Specialty } from "src/enums/specialty.enum";

export class Doctor {

    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    email: string;

    @Exclude()
    password: string;

    @Expose()
    role: Role;

    @Expose()
    specialty: Specialty;

    @Exclude()
    licenseNumber: string;

    @Expose()
    dob: string;

    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        role: Role,
        specialty: Specialty,
        licenseNumber: string,
        dob: string
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.specialty = specialty;
        this.licenseNumber = licenseNumber;
        this.dob = dob;
    }
}
