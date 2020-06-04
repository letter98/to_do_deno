import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getCard, addCard, updateCard, deleteCard  } from './controllers/cardController.ts'
import { getAccount, addAccount, updateAccount, deleteAccount } from './controllers/accountController.ts'
//import controller

const router = new Router();

//card router
router.get('/card/get/:id', getCard);
router.post('/card/add', addCard );
router.put('/card/update/:id', updateCard);
router.delete('/card/delete/:id', deleteCard);

//account router
router.get('/account/get/:id', getAccount);
router.post('/account/add', addAccount);
router.put('/account/update/:id', updateAccount);
router.delete('/account/delete/:id', deleteAccount);

export default router;