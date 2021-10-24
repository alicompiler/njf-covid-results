import {Module} from '@nestjs/common';
import {ExcelImportService} from "./Services/ImportService";
import {PatientsController} from "./Api/PatientsController";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PatientEntity} from "./Entities/PatientEntity";
import path from "path";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: path.resolve(__dirname , "result.db"),
            entities: [ PatientEntity ],
        }),
    ],
    controllers: [PatientsController],
    providers: [ExcelImportService],
})
export class AppModule {
}
