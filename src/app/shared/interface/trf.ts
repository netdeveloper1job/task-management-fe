export interface TrfSampleDetails {
    batchNo: string;
    createdAt?: string;
    date: string;
    id?: number;
    parameters: string;
    prc: string;
    sampleMatrix: string;
    sampleName: string;
    sampling: string;
    segment: string;
    trfSample?: TrfSample
    trfSampleId: number;
    updatedAt?: string;
}

export interface TrfSample {
    anyRemark: string;
    awbNo: string;
    clientId: number;
    createdAt: string;
    currency: string;
    dispatchDate: string;
    id: number;
    poNo: string;
    quote: string;
    samplePRC: string;
    sampleQty: string;
    totalNoOfSample: number;
    trfCount: string;
    updatedAt: string;
}

