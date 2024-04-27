import { ASCENDING, DESCENDING } from '../consts/index';

export interface Bank {
   age: number;
   bankName: string;
   description: string;
   url: string;
}

export type SortDirection = typeof ASCENDING | typeof DESCENDING;
