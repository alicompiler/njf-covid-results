import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Patient} from "../Models/Patient";

@Entity()
export class PatientEntity implements Patient {

    @PrimaryGeneratedColumn()
    public id : number;

    @Column()
    public name : string;

    @Column()
    public age? : string;

    @Column()
    public phone? : string;

    @Column()
    public address? : string;

    @Column()
    public date? : string;

    @Column()
    public source? : string;

    @Column()
    public status? : string;

    @Column()
    public smsStatus? : string;

    @Column()
    public notes? : string;

    @Column()
    public result? : string;


}