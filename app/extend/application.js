'use strict';

const GeTui = require('../../getui/');

module.exports = {
  get geTui() {
    const gtConfig = this.config.geTui
    GeTui.init(gtConfig)

    return {
      pushMessageToApp: GeTui.pushMessageToApp,
    };
  },
};
