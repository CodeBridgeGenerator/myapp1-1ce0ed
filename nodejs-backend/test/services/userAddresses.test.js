const assert = require('assert');
const app = require('../../src/app');

describe("'userAddresses' service", () => {
    it('registered the service', () => {
        const service = app.service('userAddresses');

        assert.ok(service, 'Registered the service (userAddresses)');
    });
});
