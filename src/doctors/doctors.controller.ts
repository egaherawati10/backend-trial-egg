import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, ValidationPipe } from "@nestjs/common";
import { DoctorsService } from "./doctors.service";
import { plainToInstance } from "class-transformer";
import { Doctor } from "./entities/doctor.entity";
import { CreateDoctorDto } from "./dto/create-doctor.dto";

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Get()
  async getDoctors() {
    const doctors = await this.doctorsService.listDoctors();
    return plainToInstance(Doctor, doctors, { excludeExtraneousValues: true });
  }

  @Get(':id')
  async getDoctorById(@Param('id', ParseIntPipe) id: number) {
    const doctorById = await this.doctorsService.doctorById(id);
    if (!doctorById) {
      throw new NotFoundException('Doctor not found');
    }
    return plainToInstance(Doctor, doctorById, { excludeExtraneousValues: true });
  }

  @Post()
  async createDoctor(
    @Body(new ValidationPipe()) createDto: CreateDoctorDto,
  ) {
    const newDoctor = await this.doctorsService.createDoctor(createDto);
    return plainToInstance(Doctor, newDoctor, { excludeExtraneousValues: true });
  }
}