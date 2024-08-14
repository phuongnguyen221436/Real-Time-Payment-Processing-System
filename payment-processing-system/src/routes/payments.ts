// import { Router, Request, Response } from 'express';
// import Payment from '../models/Payment';

// const router: Router = Router();

// // @route  POST /api/payments
// // @desc   Create a new payment
// router.post('/', async (req: Request, res: Response) => {
//     const { amount, method } = req.body;

//     try {
//         let payment = new Payment({ amount, method });
//         await payment.save();
//         res.json(payment);
//     } catch (err) {
//         if (err instanceof Error) {
//             console.error(err.message);
//             res.status(500).send('Server Error');
//         } else {
//             // Handle unexpected error type
//             console.error('An unexpected error occurred');
//             res.status(500).send('Server Error');
//         }
//     }
// });

// // @route  GET /api/payments
// // @desc   Get all payments
// router.get('/', async (req: Request, res: Response) => {
//     try {
//         const payments = await Payment.find();
//         res.json(payments);
//     } catch (err) {
//         if (err instanceof Error) {
//             console.error(err.message);
//             res.status(500).send('Server Error');
//         } else {
//             // Handle unexpected error type
//             console.error('An unexpected error occurred');
//             res.status(500).send('Server Error');
//         }
//     }
// });

// export default router;


import { Router, Request, Response } from 'express';
import fs from 'fs-extra';
import path from 'path';

const router: Router = Router();

const filePath = path.join(__dirname, 'payments.json');

// Load payments from file
const loadPayments = async () => {
    try {
        return await fs.readJson(filePath);
    } catch (err) {
        return [];
    }
};

// Save payments to file
const savePayments = async (payments: any[]) => {
    await fs.writeJson(filePath, payments);
};

// @route  POST /api/payments
// @desc   Create a new payment
router.post('/', async (req: Request, res: Response) => {
    const { amount, method } = req.body;
    const payments = await loadPayments();
    const payment = { id: Date.now(), amount, method };
    payments.push(payment);
    await savePayments(payments);
    res.json(payment);
});

// @route  GET /api/payments
// @desc   Get all payments
router.get('/', async (req: Request, res: Response) => {
    const payments = await loadPayments();
    res.json(payments);
});

export default router;


