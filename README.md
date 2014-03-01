# Mocha Tests

This is a test project so I can learn about [mocha](http://visionmedia.github.io/mocha/).  I'll keep my notes here in the readme.

## Original Project

This was cloned from my [Nice MEAN](https://github.com/reergymerej/nice-mean/) repo, which I recommend for MEAN noobs.

## Notes

Mocha is used for server-side unit tests.

### Running Tests

Running the tests through Grunt is easy.

    grunt mochaTest

The Grunt task is defined in /gruntfile.js.

### Writing Tests

Starting by failure is good.  My test suite doesn't do anything but attempt the Mongoose `Task` model.  It doesn't exist, so I got a really useful error.

    >> Mocha exploded!
    >> MongooseError: Schema hasn't been registered for model "Task".

How are the models loaded?
  The Grunt task requires server.js, which walks the models.

If you don't execute the "done" callback at the end of a test, the test will fail with a timeout error.



### References

[Expect](https://github.com/LearnBoost/expect.js)
[Should](https://github.com/visionmedia/should.js/)