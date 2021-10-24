import {Module} from '@nestjs/common';
import {PatientsController} from "./Api/PatientsController";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PatientEntity} from "./Entities/PatientEntity";
import path from "path";
import {PatientModules} from "./Patient/patient.modules";
import {ExcelImportService} from "./Services/ImportService";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: path.resolve(__dirname, "result.db"),
            entities: [PatientEntity],
        }),
        PatientModules,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
