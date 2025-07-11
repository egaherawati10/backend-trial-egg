import { Injectable } from "@nestjs/common";
import { DoctorsRepositoryItf } from "./doctor.repository.interface";
import { Doctor } from "./entities/doctor.entity";
import { Specialty } from "src/enums/specialty.enum";
import { CreateDoctorDto } from "./dto/create-doctor.dto";
import { Role } from "src/enums/role.enum";

@Injectable()
export class DoctorsRepository implements DoctorsRepositoryItf {
    private doctors: Doctor[] = [
        new Doctor(1, 'Hera', 'drhera@mail.com', 'Hera123', Role.Doctor, Specialty.Neurologist, '1234567', '2000-01-01'),
    ];
    getAll(): Doctor[] {
        return this.doctors
    }

    create(createDto: CreateDoctorDto): Doctor {
        const newDoctor = new Doctor(this.doctors.length + 1,
            createDto.name,
            createDto.email,
            createDto.password,
            createDto.role,
            createDto.specialty,
            createDto.licenseNumber,
            createDto.dob
        );
        this.doctors.push(newDoctor);
        return newDoctor
    }
}