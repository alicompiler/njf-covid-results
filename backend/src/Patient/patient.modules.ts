import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PatientEntity} from "../Entities/PatientEntity";
import {PatientService} from "../Services/PatientService";
import {PatientsController} from "../Api/PatientsController";
import {ExcelImportService} from "../Services/ImportService";

@Module({
    imports: [TypeOrmModule.forFeature([PatientEntity])],
    providers: [ExcelImportService , PatientService],
    controllers: [PatientsController],
})
export class PatientModules {
}
