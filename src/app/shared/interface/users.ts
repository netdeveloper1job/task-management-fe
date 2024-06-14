export interface user {
    id: number;
    name: string;
    email: string;
    password: string;
    userType: string;
    location: string;
    contactNo: string;
    dateOfJoining: string;
    department: string;
    reportingManager: string;
    designation:string   
    createdAt: string;
    updatedAt: null
    isSelected?: boolean;
}

export interface UserResponse {
    data?: {};
    message?: string;
}