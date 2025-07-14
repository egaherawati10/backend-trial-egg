import { Injectable } from '@nestjs/common';
import { DoctorsServiceItf } from './doctor.service.interface';
import { Doctor } from './entities/doctor.entity';
import { DoctorsRepository } from './doctor.repository';
import { CreateDoctorDto } from './dto/create-doctor.dto';

@Injectable()
export class DoctorsService implements DoctorsServiceItf {
  constructor(private repo: DoctorsRepository) {}
  listDoctors(): Doctor[] {
    return this.repo.getAll();
  }

  doctorById(id: number) {
    return this.repo.getAll().find((doctor) => doctor.id === id);
  }

  createDoctor(createDto: CreateDoctorDto): Doctor {
      return this.repo.create(createDto);
  }
}