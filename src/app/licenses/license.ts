import { Licensee } from './shared/licensee';
import { Product } from './shared/product';
import { UsagePolicy } from './shared/usage-policy';

export interface License extends Licensee, Product, UsagePolicy {
    id: number;
    licenseIdentifier: string;
    expiresAfterDays: number;
    expiresOnUtc: string;
    createdBy: string;
    createdOnUtc: string;
    customerCode: string;

    "notes": string;
}
