import express from 'express';

const router = express.Router();

router.get('/categories', (req, res) => {
    res.send({
        categories: [
            {
                id: '0',
                name: 'Kläder',
                children: [
                    {
                        id: '00',
                        name: 'Barnkläder'
                    },
                    {
                        id: '01',
                        name: 'Herr'
                    },
                    {
                        id: '02',
                        name: 'Kvinna'
                    },
                ],
            },
            {
                id: '1',
                name: 'Trädgård'
            },
            {
                id: '2',
                name: 'Inredning'
            },
            {
                id: '3',
                name: 'Barn och familj'
            }
        ]
    }).status(200);
});

export default router;



