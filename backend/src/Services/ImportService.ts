import {Patient} from "../Models/Patient";
import {Injectable} from "@nestjs/common";
import columnMappingConfiguration from './../Configuration/ExcelFileConfiguration.json';

const xlsx = require('xlsx');

@Injectable()
export class ExcelImportService {
    import(input: Express.Multer.File): Patient[] {
        const workbook = xlsx.readFile(input.path);
        const sheet_name_list = workbook.SheetNames;
        const importedPatientsData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        return this.mapRowsToPatients(importedPatientsData);
    }

    private mapRowsToPatients(data: any[]): Patient[] {
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
            date: undefined,
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



