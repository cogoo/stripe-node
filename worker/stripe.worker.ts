const _Stripe = require('../src/stripe.common');
_Stripe.utils = require('./utils.worker');

module.exports = _Stripe;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = _Stripe;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = _Stripe;
