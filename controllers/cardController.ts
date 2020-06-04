import { search, insert, update, remove } from '../models/card.ts'
import { cardInterface } from '../models/cardInterface.ts'

export async function getCard ({ params, response }: { params: any; response: any }) {
    const result = await search(params);
    response.body = result.rows;
};

export async function addCard ({ request, response }: { request: any; response: any }) {
    const body = await request.body();
    const cardInfo: cardInterface = body.value;
    let status = 200;

    if (cardInfo.hasOwnProperty('title') && cardInfo.hasOwnProperty('description') && cardInfo.hasOwnProperty('finished') ) {
      response.body = await insert(cardInfo);
    } else {
      response.body = { "error": "Invalid request!" };
      status = 400;
    }

    response.status = status;
}

export async function updateCard ({ request, response, params }: { request: any; response: any; params: any }) {
  const body = await request.body();
  let responseMessage = {};
  const cardInfo: cardInterface = body.value; 
  responseMessage = await update( cardInfo.title, cardInfo.description, cardInfo.finished, params.id);
  response.body = responseMessage;
}

export async function deleteCard ({ params, response }: { params: any; response: any }) {
  let responseMessage = {};
  responseMessage = await remove(params.id);
  response.body = responseMessage;
}