import { CreateDoctorDto } from "./dto/create-doctor.dto";
import { Doctor } from "./entities/doctor.entity";

export interface DoctorsRepositoryItf {
    getAll(): Doctor[];
    create(createDto: CreateDoctorDto): Doctor;
}