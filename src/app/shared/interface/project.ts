import { Company } from "./company";

export interface Project {
    companyId?: number;
    createdBy?: string;
    createdDate?: string;
    endDate?: string;
    id: number;
    notes?: string;
    salesOwner?: string;
    startDate?: string;
    title?: string;
    updatedBy?: string;
    updatedDate?: string;
    company: Company
}

export interface ProjectInterface{
    data?: {};
    message?: string;
}