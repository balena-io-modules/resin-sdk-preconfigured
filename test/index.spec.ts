import { expect } from 'chai'

describe('Resin preconfigured SDK', function () {
    this.timeout(5000);

    it('can build a Resin SDK successfully', () => {
        let sdk = require('..');

        expect(sdk).not.to.be.empty;
    });
});