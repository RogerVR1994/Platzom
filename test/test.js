const expect = require('chai').expect;
const platzom = require('..');

describe('#platzom', () => {
	it('Si la palabra termina con "ar" se le quitan las dos últimas letras', () => {
		const translation = platzom.platzo('Programar');
		expect(translation).to.equal('Program');
	});

	it('Si la palabra termina con Z, se le añade "pe" al final', () => {
		const translation = platzom.platzo('Zarape');
		expect(translation).to.equal('Zarapepe');
	});

	it('Si la palabra traducida tiene más de 10 letras, se debe partir por la mitad y unir con guión', () => {
		const translation = platzom.platzo('Espiralidoso');
		expect(translation).to.equal('Espira-lidoso');
	});

	it('Si la palabra original es un plaíndromo, ninguna regla aplica y se devuelve la palabra intercambiando minúsculas y mayúsculas', () => {
		const translation = platzom.platzo('ana');
		expect(translation).to.equal('AnA');
	});

	it('', () => {

	});
})