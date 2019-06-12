export interface UsagePolicy {
    "usages": Usage[]
}

export interface Usage {
    id: number;
    clientTypes: number[];
    clientTypesMapped: string;
    expiresAfterDays: number;
    expiresOnUtc: string;
    type: string;
    sessionLimit: number;
}