import {Module} from '@nestjs/common';
import {ExcelImportService} from "./Services/ImportService";
import {PatientsController} from "./Api/PatientsController";

@Module({
    imports: [],
    controllers: [PatientsController],
    providers: [ExcelImportService],
})
export class AppModule {
}
