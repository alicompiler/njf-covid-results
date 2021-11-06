import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PatientEntity} from "./Entities/PatientEntity";
import path from "path";
import {PatientModules} from "./Patient/patient.modules";

import settings from './Settings.json';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: path.resolve(settings.dbPath),
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
