# Angular-1-Starter-Application
Basic starter application for Angular 1.4 to get you up and developing.

# Gulp Tasks

`gulp`

Deploys your app locally, starts the static & API server. Connect to `http://localhost:8628` to see it.

`gulp analyze`

Shows formatting, styling, and complexity (Halsted, Cyclomatic) in your code.

`gulp analyzeWhileIFix`

Same as analyze, but will fail unless all 3 quality gates are passed. That way, you can see what's broke, fix it, and get all 3 passing vs 1 big list of text in the Terminal.

`gulp test`

Runs Karma unit tests and generates code coverage reports for both client and CI server.

`gulp testWhileICode`

Same as Karma, but runs in CI mode. When you save a file, it'll rerun all the unit tests wicked fast.

`gulp showCoverage`

Shows the code coverage report generated from `gulp test`.

`gulp judge`

The ultimate quality gate. If you pass all of these, you code is epic tier and ready for Git push / SVN commit.

`gulp cow`

Test that you have native Promise support in your version of Node. If not, use Bluebird.