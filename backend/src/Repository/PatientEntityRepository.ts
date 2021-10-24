import {EntityRepository, Repository} from "typeorm";
import {PatientEntity} from "../Entities/PatientEntity";
import {Injectable} from "@nestjs/common";

@Injectable()
@EntityRepository()
export class PatientEntityRepository extends Repository<PatientEntity>{

}