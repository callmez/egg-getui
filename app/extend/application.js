'use strict';

const GeTui = require('../../getui/');

module.exports = {
  get geTui() {
    GeTui.init(gtConfig)

    return {
      pushMessageToApp: GeTui.pushMessageToApp,
    };
  },
};
