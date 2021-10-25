import {Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors} from "@nestjs/common";
import {ExcelImportService} from "../Services/ImportService";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {PatientService} from "../Services/PatientService";

@Controller("api/patients")
export class PatientsController {
    constructor(private readonly importService: ExcelImportService, private readonly patientService: PatientService) {
    }


    @Post('import')
    @UseInterceptors(FileInterceptor("excel", {
        storage: diskStorage({
            destination: './temp/'
        })
    }))
    async uploadFile(@UploadedFile() excel: Express.Multer.File , @Body() body) {
        const patients = this.importService.import(excel , body.date);
        await this.patientService.import(patients);
        return patients;
    }

    @Get()
    async search(@Query() query){
        return await this.patientService.simpleSearch(query.query);
    }
}