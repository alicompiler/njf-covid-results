import {Controller, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import {ExcelImportService} from "../Services/ImportService";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";

@Controller()
export class PatientsController {
    constructor(private readonly importService: ExcelImportService) {
    }


    @Post('upload')
    @UseInterceptors(FileInterceptor("excel", {
        storage: diskStorage({
            destination: './temp/'
        })
    }))
    uploadFile(@UploadedFile() excel: Express.Multer.File) {
        const patients = this.importService.import(excel);
        console.log(patients);
        return patients;
    }
}