import {Patient} from "../Models/Patient";
import {Injectable} from "@nestjs/common";
import columnMappingConfiguration from './../Configuration/ExcelFileConfiguration.json';

const xlsx = require('xlsx');

@Injectable()
export class ExcelImportService {
    import(input: Express.Multer.File, date: string): Patient[] {
        const workbook = xlsx.readFile(input.path);
        const importedPatientsData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
        return this.mapRowsToPatients(importedPatientsData, date);
    }

    private mapRowsToPatients(data: any[], date: string): Patient[] {
        if (data.length === 0) {
            return [];
        }
        const columns = this.getSheetColumnsMapping(Object.keys(data[0]));
        return data.map((row: any) => ({
            id: undefined,
            name: row[columns['name']],
            phone: row[columns['phone']],
            age: row[columns['age']],
            address: row[columns['address']],
            source: row[columns['source']],
            smsStatus: row[columns['smsStatus']],
            status: row[columns['status']],
            date: excelDateToStringDate(row[columns['date']]) ?? date,
            result: row[columns['result']],
            notes: row[columns['notes']],
        }));
    }

    private getSheetColumnsMapping(sheetColumns: string[]): any {
        const patientColumns = Object.keys(columnMappingConfiguration);
        return patientColumns.reduce((acc, patientColumn) => {
            const columnNameInSheet = sheetColumns.find(col => columnMappingConfiguration[patientColumn].includes(col.trim()));
            if (columnNameInSheet) {
                acc[patientColumn] = columnNameInSheet;
            }
            return acc;
        }, {});
    }

}



function excelDateToStringDate(serial) {
    if(typeof serial === "string"){
        return serial;
    }
    if(!serial && typeof serial !== "number"){
        return undefined;
    }
    const utc_days = Math.floor(serial - 25569);
    const utc_value = utc_days * 86400;
    const date_info = new Date(utc_value * 1000);

    const fractional_day = serial - Math.floor(serial) + 0.0000001;

    let total_seconds = Math.floor(86400 * fractional_day);

    const seconds = total_seconds % 60;

    total_seconds -= seconds;

    const hours = Math.floor(total_seconds / (60 * 60));
    const minutes = Math.floor(total_seconds / 60) % 60;

    const date = new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);

    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();

    return yyyy + '-' + mm + '-' + dd;

}
