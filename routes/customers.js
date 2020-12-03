const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const Customers = require('../model/Customer')

//GET ALL CUSTOMERS
router.get('/', async (request, response) => {
    try {
        const customers = await Customers.find()
        response.status(200).json(customers)
    } catch (error) {
        response.status(400).json({ "msg": error })
    }
})


//ADD NEW CUSTOMER
router.post('/', async (request, response) => {
    const customer = new Customers(request.body)
    try {
        const newCustomer = await customer.save()
        response.status(200).json(newCustomer)
    } catch (error) {
        response.status(400).json({ "msg": error })
    }
})

//GET A SINGLE CUSTOMER
router.get('/:customerId', async (request, response) => {
    const customerId = request.params.customerId
    try {
        const customer = await Customers.findById(customerId)
        if (customer) {
            response.status(200).json(customer)
        } else {
            response.status(400).json({ "msg": "customer not existent" })
        }
    } catch (error) {
        response.status(400).json({ "msg": error })
    }
})

//DELETE A SINGLE CUSTOMER
router.delete('/:customerId', async (request, response) => {
    const customerId = request.params.customerId
    try {
        const removedCustomer = await Customers.deleteOne({ _id: customerId })
        response.status(200).json({ OK: "customer deleted" })
    } catch (error) {
        response.status(400).json({ "msg": error })
    }
})


//UPDATE EXISTING CUSTOMER
router.patch('/:customerId', async (request, response) => {
    const customerId = request.params.customerId
    const changeRequest = request.body
    try {
        const customer = await Customers.updateOne(
            { _id: customerId },
            { $set: changeRequest }
        )
        const patchedCustomer = await Customers.findById(customerId)
        response.status(200).json(patchedCustomer)
    } catch (error) {
        response.status(400).json({ "msg": error })
    }
})
module.exports = router 