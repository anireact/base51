import assert from 'node:assert/strict';
import test from 'node:test';

import { e93, d93 } from '@anireact/bigstr';

test('Base93 encoder', () => {
    assert.equal(e93(0n), ' ');
    assert.equal(e93(1n), '!');
    assert.equal(e93(92n), '~');
    assert.equal(e93(93n), '! ');

    assert.equal(e93(93n ** 2n), '!' + ' '.repeat(2));
    assert.equal(e93(93n ** 3n), '!' + ' '.repeat(3));
    assert.equal(e93(93n ** 10n), '!' + ' '.repeat(10));
    assert.equal(e93(93n ** 50n), '!' + ' '.repeat(50));
    assert.equal(e93(93n ** 91n), '!' + ' '.repeat(91));
    assert.equal(e93(93n ** 91n + 1n), '!' + ' '.repeat(90) + '!');
    assert.equal(e93(0xffffffffffffffff_ffffffffffffffffn), '.PK0(rJ-HlW@my4tUsDg');
});

test('Base93 decoder', () => {
    assert.equal(d93(' '), 0n);
    assert.equal(d93('!'), 1n);
    assert.equal(d93('~'), 92n);
    assert.equal(d93('! '), 93n);

    assert.equal(d93('!' + ' '.repeat(2)), 93n ** 2n);
    assert.equal(d93('!' + ' '.repeat(3)), 93n ** 3n);
    assert.equal(d93('!' + ' '.repeat(10)), 93n ** 10n);
    assert.equal(d93('!' + ' '.repeat(50)), 93n ** 50n);
    assert.equal(d93('!' + ' '.repeat(91)), 93n ** 91n);
    assert.equal(d93('!' + ' '.repeat(90) + '!'), 93n ** 91n + 1n);
    assert.equal(d93('.PK0(rJ-HlW@my4tUsDg'), 0xffffffffffffffff_ffffffffffffffffn);

    let a = '\nCYKA BLYA\n';
    let b = 'CYKA BLYA';

    assert.notEqual(a, b);
    assert.equal(d93(a), d93(b));
});
