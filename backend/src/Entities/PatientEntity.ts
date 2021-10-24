import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Patient} from "../Models/Patient";

@Entity({name : 'patients'})
export class PatientEntity implements Patient {

    public static fromPatient(patient: Patient) {
        const entity = new PatientEntity();
        entity.id = patient.id;
        entity.name = patient.name;
        entity.address = patient.address;
        entity.phone = patient.phone;
        entity.smsStatus = patient.smsStatus;
        entity.age = patient.age;
        entity.source = patient.source;
        entity.result = patient.result;
        entity.status = patient.status;
        entity.notes = patient.notes;
        entity.date = patient.date;
        return entity;
    }

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public age?: string;

    @Column()
    public phone?: string;

    @Column()
    public address?: string;

    @Column()
    public date?: string;

    @Column()
    public source?: string;

    @Column()
    public status?: string;

    @Column()
    public smsStatus?: string;

    @Column()
    public notes?: string;

    @Column()
    public result?: string;


}