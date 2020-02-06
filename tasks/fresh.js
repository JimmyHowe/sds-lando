'use strict';

module.exports = lando => ({
    command: 'fresh',
    describe: 'Does a lando restart and install',
    level: 'app',
    options: {},
    run: options => {

        const app = lando.getApp(options._app.root);

        app.rebuild(app).then((rebuild) => {

            lando.engine.start(app);

            return lando.engine.run({
                id: 'mywow_appserver_1',
                cmd: ['install']
            });

        });

    },
});