import { NextRequest, NextResponse } from 'next/server';

export async function GET(_request: NextRequest) {
   // _ is used to indicate that the parameter is not used
   const response = await fetch(
      'https://dev.obtenmas.com/catom/api/challenge/banks'
   );
   const banks = await response.json();
   return NextResponse.json(banks);
}
