import useSWR from 'swr';
import { Bank } from '../types';

const GET_BANKS = '/api/banks';

const UseGetBanks = () => {
   const fetcher = (url: string) => fetch(url).then((r) => r.json());

   const { data, error, isLoading } = useSWR<Array<Bank>>(GET_BANKS, fetcher);

   return { data, error, isLoading };
};

export default UseGetBanks;
