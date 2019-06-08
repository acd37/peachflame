const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ProjectSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    client: {
        type: String,
        required: true
    },
    project_type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    word_count: {
        type: Number,
        required: true
    },
    project_fee: {
        type: Number,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "queued"
    },
    payment_status: {
        type: String,
        required: true,
        default: "pending"
    },
    billed_month: {
        type: String,
    },
    billed_year: {
        type: String,
    },
    hours: {
        type: Number,
    },
    invoice_number: {
        type: String,
    },
    sow_number: {
        type: String,
        required: true
    },
    is_completed: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Project = mongoose.model('project', ProjectSchema);