'use strict';

// Module dependencies.
var should = require('should'),
    mongoose = require('mongoose'),
    Task = mongoose.model('Task');

// Globals
var task;

describe('unit test', function () {

    describe('Model Task:', function () {

        beforeEach(function (done) {
            task = new Task({
                name: 'foo'
            });

            task.save(function () {
                done();
            });
        });

        it('should exist', function (done) {
            should.exist(Task);
            done();
        });

        it('should have a "name"', function (done) {
            (task.name).should.equal('foo');
            done();
        });

        afterEach(function (done) {
            task.remove();
            done();
        });
    });
});