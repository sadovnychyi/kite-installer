const KiteError = require('../kite-error');

const {STATES} = require('../constants');

module.exports = {
  get releaseURL() {
    return null;
  },

  get downloadPath() {
    return null;
  },

  isAdmin() {
    return false;
  },

  isKiteSupported() {
    return false;
  },

  isKiteInstalled() {
    return this.notSupported();
  },

  installKite(opts) {
    return this.notSupported();
  },

  isKiteRunning() {
    return this.notSupported();
  },

  runKite() {
    return this.notSupported();
  },

  notSupported() {
    return Promise.reject(
      new KiteError('bad_state', STATES.UNSUPPORTED));
  },
};