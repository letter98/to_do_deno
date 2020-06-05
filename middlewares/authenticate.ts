import { validateJwt } from "https://deno.land/x/djwt/validate.ts"
import { makeJwt, setExpiration, Jose, Payload } from "https://deno.land/x/djwt/create.ts"

const key = "simple.love"
const payload: Payload = {
  id: "letter98",
  exp: setExpiration(new Date().getTime() + 60000),
}
const header: Jose = {
  alg: "HS256",
  typ: "JWT",
}

export async function createToken({request, response}: {request: any; response: any}) {
    response.body = {
        code: 200,
        name: 'Created token',
        token: makeJwt({ header, payload, key })
    }
}

export async function validateToken({ request, response}: {request: any; response: any}) {
    try{
        const token = request.headers.get('Authorization').split(' ')[1]; 
        if(!token) {
            response.body = {
                code: 401,
                name: 'Invalid token'
            }
            return;
        }
    
        const decode = await validateJwt(token, key);
        console.log(decode);
        response.body = {
            code: 200,
            name: 'Valid token'
        }
    } catch(err){
        response.body = {
            code: 401,
            name: 'Invalid token'
        }
    }
}