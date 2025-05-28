import { Router } from "express";

const SubscriptionRouter = Router();

SubscriptionRouter.get('/', (req, res) => {
    res.send({title: 'Get all subscription'})
})

SubscriptionRouter.get('/:id', (req, res) => {
    res.send({title: 'Get specific subscription'})
})
SubscriptionRouter.post('/', (req, res) => {
    res.send({title: 'Create subscriptions'})
})
SubscriptionRouter.put('/:id', (req, res) => {
    res.send({title: 'Update subscription'})
})

SubscriptionRouter.delete('/:id', (req, res) => {
    res.send({title: 'Delete subscription'})
})

SubscriptionRouter.get('/user/id', (req, res) => {
    res.send({title: 'Get specific subscription'})
})
SubscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({title: 'cancel subscription'})
})
SubscriptionRouter.put('/upcoming-renewals', (req, res) => {
    res.send({title: 'Get upcoming subscription'})
})



export default SubscriptionRouter;