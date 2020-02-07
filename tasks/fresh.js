'use strict';

module.exports = lando => ({
    command: 'fresh',
    describe: 'Does a lando restart and install',
    level: 'app',
    options: {},
    run: options => {

        const app = lando.getApp(options._app.root);

        console.log("Rebuilding app...");

        app.rebuild(app).then(function () {

            console.log("Starting app...");

            app.start(app).then(function (start) {

                console.log("Installing app...");

                let install = app.tasks.find(element => element.command === 'install');

                install.run();
            });
        });
    },
});