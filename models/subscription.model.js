import mongoose from "mongoose";


const subscriptionSchema = new mongoose.Schema({

    name: {
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    price: {
        type: Number,
        required: [true, 'Subscription price is required'],
        min: [0, 'Price must be greater than 0']
    },

    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP'],
        default: 'USD'
    },

    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
    },

    category: {
        type: String,
        enum: ['sport', 'news', 'entertainment', 'lifestyle', 'technology', 'finance', 'politics', 'other'],
        required: true
    },

    paymentMethod: {
        type: String,
        required: true,
        trim: true
    },

    status: {
        type: String,
        enum: ['active', 'cancelled', 'expired'],
        default: 'active',
    },

    startDate: {
        type: Date,
        required: true,
        validate: () => value <= new Date(),
        message: 'Start date must be in past'
    },
    renewalDate: {
        type: Date,
        required: true,
        validate: () => value > new Date(),
        message: 'Renewal date must be after start date'
    },

    user: {
        type: mongoose.Schema.type.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }

}, {Timestamp: true});


const subscriptionSch = mongoose.model('subscription', subscriptionSchema);


export default subscriptionSch;