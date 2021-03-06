'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * User Schema
 */
// The schema defines the fields.
// REF: http://mongoosejs.com/docs/guide.html
var UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    username: {
        type: String,
        unique: true
    },
    hashed_password: String,
    provider: String,
    salt: String,
    facebook: {},
    twitter: {},
    github: {},
    google: {},
    linkedin: {}
});

var TaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date,
        default: Date.now
    },
    dateStart: {
        type: Date,
        default: Date.now
    },
    duration: {
        type: Number
    }
});

// Hook to run before each save.
TaskSchema.pre('save', function (next) {
    this.modified = Date.now();
    if (this.dateEnd) {
        this.duration = this.dateEnd - this.dateStart;
    }
    next();
});

// Register the model with Mongoose.
mongoose.model('Task', TaskSchema);