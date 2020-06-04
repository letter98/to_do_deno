import { insert } from '../models/account.ts'
import { accountInterface } from '../models/accountInterface.ts'


export async function addAccount ({ request, response }: { request: any; response: any }) {
    const body = await request.body();
    const accountInfo: accountInterface = body.value;
    let status = 200;

    if (accountInfo.hasOwnProperty('fullname') && accountInfo.hasOwnProperty('username') && accountInfo.hasOwnProperty('password') ) {
      response.body = await insert(accountInfo);
    } else {
      response.body = { "error": "Invalid request!" };
      status = 400;
    }

    response.status = status;
}