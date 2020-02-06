'use strict';

module.exports = (lando) => {

    lando.events.on('post-bootstrap-config', () => {

        lando.log.info('SDS Lando plugin loaded!');
    });

    return {}
};