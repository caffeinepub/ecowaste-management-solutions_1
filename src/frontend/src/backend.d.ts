import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface QuotationRequest {
    service: string;
    orgType: string;
    name: string;
    description: string;
    email: string;
    timestamp: Time;
    organization: string;
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getAllSubmissions(): Promise<Array<QuotationRequest>>;
    submitInquiry(inquiry: Inquiry): Promise<void>;
    submitQuotation(request: QuotationRequest): Promise<void>;
}
