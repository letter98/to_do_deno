import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getCard, addCard  } from './controllers/cardController.ts'
import { addAccount } from './controllers/accountController.ts'
//import controller

const router = new Router();

//card router
router.get('/card/:id', getCard);
router.post('/card', addCard );

//account router
router.post('/account', addAccount);

export default router;