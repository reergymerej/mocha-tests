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
            task.should.have.property('name', 'foo');
            done();
        });

        it('should require a "name" field', function (done) {
            task.name = '';
            task.save(function (err) {
                should.exist(err);
                done();
            })
        });

        it('should have a "created" timestamp', function (done) {
            task.created.should.be.below(Date.now());
            done();
        });

        it('should have a "modified" timestamp', function (done) {
            task.should.have.property('modified');
            done();
        });

        it('should update "modified" when saved', function (done) {
            task.name = 'asdf';
            task.save(function (err) {
                task.modified.should.be.greaterThan(task.created);
                done();
            });
        });

        afterEach(function (done) {
            task.remove();
            done();
        });
    });
});