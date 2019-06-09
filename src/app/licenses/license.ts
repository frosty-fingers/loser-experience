import { Licensee } from './shared/licensee';
import { Product } from './shared/product';
import { UsagePolicy } from './shared/usage-policy';

export interface License extends Licensee, Product, UsagePolicy {
    createdBy: string;
    createdOnUtc: string;
    customerCode: string;
    licenseIdentifier: string;
}
