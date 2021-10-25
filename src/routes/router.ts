import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensaje', (req: Request, res: Response)=>{
    res.json({
        ok: true,
        mensaje: 'Mi mamá está en la calle'
    });
});

router.post('/mensaje', (req: Request, res: Response)=>{
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        mensaje: 'POST -Mi mamá está en la calle',
        cuerpo,
        de,
    });
});

router.post('/mensaje/:id', (req: Request, res: Response)=>{
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;
    res.json({
        ok: true,
        mensaje: 'POST -Mi mamá está en la calle',
        cuerpo,
        de,
        id
    });
});

export default router