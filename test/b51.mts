import assert from 'node:assert/strict';
import test from 'node:test';

import { e51, d51 } from '@anireact/base51';

test('Base51 encoder', () => {
    assert.equal(e51(0n), 'A');
    assert.equal(e51(1n), 'B');
    assert.equal(e51(50n), 'z');
    assert.equal(e51(51n), 'BA');

    assert.equal(e51(51n ** 2n), 'B' + 'A'.repeat(2));
    assert.equal(e51(51n ** 3n), 'B' + 'A'.repeat(3));
    assert.equal(e51(51n ** 10n), 'B' + 'A'.repeat(10));
    assert.equal(e51(51n ** 50n), 'B' + 'A'.repeat(50));
    assert.equal(e51(51n ** 91n), 'B' + 'A'.repeat(91));
    assert.equal(e51(51n ** 91n + 1n), 'B' + 'A'.repeat(90) + 'B');
    assert.equal(e51(0xffffffffffffffff_ffffffffffffffffn), 'JLrVUOIoZSIuQdoSwvsjsdA');
});

test('Base51 decoder', () => {
    assert.equal(d51('A'), 0n);
    assert.equal(d51('B'), 1n);
    assert.equal(d51('z'), 50n);
    assert.equal(d51('BA'), 51n);

    assert.equal(d51('B' + 'A'.repeat(2)), 51n ** 2n);
    assert.equal(d51('B' + 'A'.repeat(3)), 51n ** 3n);
    assert.equal(d51('B' + 'A'.repeat(10)), 51n ** 10n);
    assert.equal(d51('B' + 'A'.repeat(50)), 51n ** 50n);
    assert.equal(d51('B' + 'A'.repeat(91)), 51n ** 91n);
    assert.equal(d51('B' + 'A'.repeat(90) + 'B'), 51n ** 91n + 1n);
    assert.equal(d51('JLrVUOIoZSIuQdoSwvsjsdA'), 0xffffffffffffffff_ffffffffffffffffn);

    let a = 'СУКА ΒLΥΑ';
    let b = 'CYKA BLYA';

    assert.notEqual(a, b);
    assert.equal(d51(a), d51(b));
});
