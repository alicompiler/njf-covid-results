import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PatientEntity} from "./Entities/PatientEntity";
import path from "path";
import {PatientModules} from "./Patient/patient.modules";

const setting = require("Settings.json");

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: path.resolve(setting.dbPath),
            entities: [PatientEntity],
            logging : true
        }),
        PatientModules,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
