import {Injectable} from "@nestjs/common";
import {PatientEntity} from "../Entities/PatientEntity";
import {Patient} from "../Models/Patient";
import {InjectRepository} from "@nestjs/typeorm";
import {ILike, Repository} from "typeorm";

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
}