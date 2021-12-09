import express from 'express';

const router = express.Router();

router.get('/categories', (req, res) => {
    res.send({ data: { example: 123 } }).status(200);
});

export default router;



