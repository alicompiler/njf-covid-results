import {AdvanceSearchForm} from "../Data/SearchReducer";
import {Patient} from "../Data/Patient";
import {DefaultUrlManager, UrlManager} from "../../../Server/UrlManager";
import {Endpoints} from "../../../Server/Endpoints";
import Axios from "axios";

export interface PatientService {
    getPatients(query?: string): Promise<Patient[]>;

    advanceSearch(form: AdvanceSearchForm): Promise<Patient[]>
}


export class DefaultPatientService implements PatientService {

    private readonly urlManager: UrlManager;


    constructor() {
        this.urlManager = new DefaultUrlManager();
    }

    async advanceSearch(form: AdvanceSearchForm): Promise<Patient[]> {
        return this.callSearchEndpoint(form);
    }

    async getPatients(query?: string): Promise<Patient[]> {
        return this.callSearchEndpoint({query: query});
    }

    private async callSearchEndpoint(params: object): Promise<Patient[]> {
        const url = this.urlManager.getEndpoint(Endpoints.search);
        const response = await Axios.get(url, {
            params: params,
        });
        if (response.status >= 300) {
            throw Error("failed to fetch data");
        }
        return response.data;
    }

}


export class FakePatientService implements PatientService {

    public static patients: Patient[] = [
        {
            id: '1',
            name: 'Ali Faris',
            phone: '07808130427',
            result: 'Positive',
            source: 'Al-Hakeem',
            date: '2021-01-01',
            status: 'Suspected',
            smsStatus: 'Failed',
            notes: 'some notes'
        },
        {
            id: '1',
            name: 'Ali Faris',
            phone: '07808130427',
            result: 'Positive',
            source: 'Al-Hakeem',
            date: '2021-01-01',
            status: 'Suspected',
            smsStatus: 'Failed',
            notes: 'some notes'
        },
        {
            id: '1',
            name: 'Ali Faris',
            phone: '07808130427',
            result: 'Positive',
            source: 'Al-Hakeem',
            date: '2021-01-01',
            status: 'Suspected',
            smsStatus: 'Failed',
            notes: '0 '
        },
        {
            id: '1',
            name: 'Ali Faris',
            phone: '07808130427',
            result: 'Positive',
            source: 'Al-Hakeem',
            date: '2021-01-01',
            status: 'Suspected',
            smsStatus: 'Failed',
            notes: '   '
        },
        {
            id: '1',
            name: 'Ali Faris',
            phone: '07808130427',
            result: 'Positive',
            source: 'Al-Hakeem',
            date: '2021-01-01',
            status: 'Suspected',
            smsStatus: 'Failed',
            notes: 'some notes'
        },
        {
            id: '1',
            name: 'Ali Faris',
            phone: '07808130427',
            result: 'Positive',
            source: 'Al-Hakeem',
            date: '2021-01-01',
            status: 'Suspected',
            smsStatus: 'Failed',
            notes: 'some notes'
        },
        {
            id: '1',
            name: 'Ali Faris',
            phone: '07808130427',
            result: 'Positive',
            source: 'Al-Hakeem',
            date: '2021-01-01',
            status: 'Suspected',
            smsStatus: 'Failed',
            notes: 'some notes'
        },
        {
            id: '1',
            name: 'Ali Faris',
            phone: '07808130427',
            result: 'Positive',
            source: 'Al-Hakeem',
            date: '2021-01-01',
            status: 'Suspected',
            smsStatus: 'Failed',
            notes: 'some notes some notes some notes some notes some notes some notes some notes some notes some notes'
        },
        {
            id: '1',
            name: 'Ali Faris',
            phone: '07808130427',
            result: 'Positive',
            source: 'Al-Hakeem',
            date: '2021-01-01',
            status: 'Suspected',
            smsStatus: 'Failed',
            notes: 'some notes'
        },
    ]

    advanceSearch(form: AdvanceSearchForm): Promise<Patient[]> {
        return this.fakeFetch();
    }

    getPatients(query?: string): Promise<Patient[]> {
        return this.fakeFetch();
    }


    private fakeFetch(): Promise<Patient[]> {
        return new Promise<Patient[]>((resolve, reject) => {
            setTimeout(() => {
                const r = Math.random() * 10;
                if (r === 4 || r === 3) {
                    reject();
                    return;
                }
                resolve(FakePatientService.patients);
            }, 4000)
        });
    }

}