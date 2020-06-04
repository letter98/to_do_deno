import { insert, search, update, remove } from '../models/account.ts'
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

export async function getAccount ({ params, response }: { params: any; response: any }) {
    const result = await search(params);
    response.body = result.rows;
}

export async function updateAccount ({ request, response, params }: { request: any; response: any; params: any }) {
    const body = await request.body();
    let responseMessage = {};
    const accountInfo: accountInterface = body.value; 
    responseMessage = await update(accountInfo.fullname, accountInfo.password, params.id);
    response.body = responseMessage;
}

export async function deleteAccount ({ params, response }: { params: any; response: any }) {
    let responseMessage = {};
    responseMessage = await remove(params.id);
    response.body = responseMessage;
}