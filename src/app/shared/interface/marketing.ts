export interface Marketing {
    id: number;
    subject?: string;
    content?: string;
    template?: string;
}
export interface MarketingResponse {
    data?: Marketing;
    message?: string;
}