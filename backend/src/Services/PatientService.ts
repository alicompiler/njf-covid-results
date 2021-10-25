import {Injectable} from "@nestjs/common";
import {PatientEntity} from "../Entities/PatientEntity";
import {Patient} from "../Models/Patient";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class PatientService {

    constructor(@InjectRepository(PatientEntity) private readonly repository: Repository<PatientEntity>) {
    }

    public import(patients: Patient[]): Promise<any> {
        return this.repository.createQueryBuilder()
            .insert()
            .into(PatientEntity)
            .values(patients)
            .execute();
    }

    simpleSearch(query: string): Promise<any> {
        return this.repository.createQueryBuilder("patients")
            .select("*")
            .where("name LIKE :name OR phone LIKE :phone", {name: `%${query}%`, phone: `%${query}%`})
            .execute();
    }

    async top(top: number) {
        return this.repository.createQueryBuilder("patients")
            .select("*")
            .limit(top)
            .execute();
    }

    async advanceSearch(options: AdvanceSearchOptions) {
        const filters = [];
        if (options.name && options.name.trim()) {
            filters.push({condition: 'name LIKE :name', value: {name: `%${options.name}%`}});
        }
        if (options.phone && options.phone.trim()) {
            filters.push({condition: 'phone LIKE :phone', value: {phone: `%${options.phone}%`}});
        }
        if (options.fromDate && options.fromDate.trim()) {
            filters.push({condition: 'date(date) >= date(:fromDate)', value: {fromDate: `${options.fromDate}`}});
        }
        if (options.toDate && options.toDate.trim()) {
            filters.push({condition: 'date(date) <= date(:toDate)', value: {toDate: `${options.toDate}`}});
        }
        if (options.source && options.source.trim()) {
            filters.push({condition: 'source LIKE :source', value: {source: `%${options.source}%`}});
        }
        if (options.result && options.result.trim()) {
            filters.push({condition: 'result LIKE :result', value: {result: `%${options.result}%`}});
        }
        if (options.status && options.status.trim()) {
            filters.push({condition: 'status LIKE :status', value: {status: `%${options.status}%`}});
        }
        const whereClause = filters.map(f => f.condition).join(" OR ");
        const params = filters.reduce((acc: any, filter: any) => {
            acc = {...acc, ...filter.value};
            return acc;
        }, {});
        console.log(params);
        return this.repository.createQueryBuilder("patients")
            .select("*")
            .where(whereClause, params)
            .execute();
    }
}

interface AdvanceSearchOptions {
    name?: string;
    phone?: string;
    fromDate?: string;
    toDate?: string;
    source?: string;
    status?: string;
    result?: string;
}