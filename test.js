import test from 'ava';
import fn from './';

test('title', t => {
	fn('https://jsfeatures.in').then(res => t.is(typeof res, 'object'))
});
