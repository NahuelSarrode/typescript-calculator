import Router, { Request, Response } from 'express'; 
const router = Router(); 

router.route('/')
    .get((req: Request, res: Response) => { res.send('Hello world') })

export default router; 