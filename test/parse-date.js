import 'mocha';
import { DateTime } from 'luxon';
import { parse } from '../parse-date.js';
import { expect } from 'chai';

const dt = DateTime.utc();

describe('Parse a date expression and perform a calculation', () => {
	it('should +10 years to the current date', () => {
		const expectedOutcome = dt.plus({ years: 10 }).startOf('second').toUTC().toJSDate();
		expect(parse('now()+10y@s')).to.deep.equal(expectedOutcome);
	});
	it('should -15 years to the current date', () => {
		const expectedOutcome = dt.minus({ years: 15 }).startOf('second').toUTC().toJSDate();
		expect(parse('now()-15y@s')).to.deep.equal(expectedOutcome);
	});
	it('should snap current date to the year', () => {
		const expectedOutcome = dt.startOf('year').toUTC().toJSDate();
		expect(parse('now()@y')).to.deep.equal(expectedOutcome);
	});
	it('should +10 months to the current date', () => {
		const expectedOutcome = dt.plus({ months: 10 }).startOf('second').toUTC().toJSDate();
		expect(parse('now()+10mon@s')).to.deep.equal(expectedOutcome);
	});
	it('should -13 months to the current date', () => {
		const expectedOutcome = dt.minus({ months: 13 }).startOf('second').toUTC().toJSDate();
		expect(parse('now()-13mon@s')).to.deep.equal(expectedOutcome);
	});
	it('should snap current date to the month', () => {
		const expectedOutcome = dt.startOf('month').toUTC().toJSDate();
		expect(parse('now()@mon')).to.deep.equal(expectedOutcome);
	});
	it('should +35 days to the current date', () => {
		const expectedOutcome = dt.plus({ days: 35 }).startOf('second').toUTC().toJSDate();
		expect(parse('now()+35d@s')).to.deep.equal(expectedOutcome);
	});
	it('should -8 days to the current date', () => {
		const expectedOutcome = dt.minus({ days: 8 }).startOf('second').toUTC().toJSDate();
		expect(parse('now()-8d@s')).to.deep.equal(expectedOutcome);
	});
	it('should snap current date to the day', () => {
		const expectedOutcome = dt.startOf('day').toUTC().toJSDate();
		expect(parse('now()@d')).to.deep.equal(expectedOutcome);
	});
	it('should +61 minutes to the current date', () => {
		const expectedOutcome = dt.plus({ minutes: 61 }).startOf('second').toUTC().toJSDate();
		expect(parse('now()+61m@s')).to.deep.equal(expectedOutcome);
	});
	it('should -261 minutes to the current date', () => {
		const expectedOutcome = dt.minus({ minutes: 261 }).startOf('second').toUTC().toJSDate();
		expect(parse('now()-261m@s')).to.deep.equal(expectedOutcome);
	});
	it('should snap current date to the minute', () => {
		const expectedOutcome = dt.startOf('minute').toUTC().toJSDate();
		expect(parse('now()@m')).to.deep.equal(expectedOutcome);
	});
	it('should +71 seconds to the current date', () => {
		const expectedOutcome = dt.plus({ seconds: 61 }).startOf('second').toUTC().toJSDate();
		expect(parse('now()+61s@s')).to.deep.equal(expectedOutcome);
	});
	it('should -61 seconds to the current date', () => {
		const expectedOutcome = dt.minus({ seconds: 61 }).startOf('second').toUTC().toJSDate();
		expect(parse('now()-61s@s')).to.deep.equal(expectedOutcome);
	});
	it('should snap current date to the second', () => {
		const expectedOutcome = dt.startOf('second').toUTC().toJSDate();
		expect(parse('now()@s')).to.deep.equal(expectedOutcome);
	});

	it('should -36 years +13 months -8 days +61 minutes -76 seconds to the current date', () => {
		const expectedOutcome = dt
			.minus({ years: 36 })
			.plus({ months: 13 })
			.minus({ days: 8 })
			.plus({ minutes: 61 })
			.minus({ seconds: 76 })
			.startOf('second')
			.toUTC()
			.toJSDate();
		expect(parse('now()-36y+13mon-8d+61m-76s@s')).to.deep.equal(expectedOutcome);
	});
});
