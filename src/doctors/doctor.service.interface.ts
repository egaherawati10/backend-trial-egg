import { CreateDoctorDto } from "./dto/create-doctor.dto";
import { Doctor } from "./entities/doctor.entity";

export interface DoctorsServiceItf {
    listDoctors(): Doctor[];
    createDoctor(createDto: CreateDoctorDto): Doctor;
}