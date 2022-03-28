import { secondCalc, minuteCalc, hourCalc, dateCalc, monthCalc, yearCalc } from './calc-date.js';

export const parse = (dateString) => {
	if (!valid(dateString)) {
		console.log(`The date string "${dateString}" isn't valid`);
		return;
	}
	// returns milliseconds since epoch in UTC
	let millis = Date.now();

	// returns deliminaters as separate items in tokens array
	// e.g. +7mon returns as ['+', '7mon']
	const tokens = dateString.split(/(\+|-|@)/);

	// regex matches numbers and strings and assigns them to named groups
	// e.g. 7mon returns as val = '7' unit = 'mon'
	const numsAlphas = /(?<val>[0-9]*)(?<unit>[a-zA-Z]*)/;

	for (let i = 1; i < tokens.length; i++) {
		const oper = tokens[i];
		const {
			groups: { val, unit }
		} = tokens[++i].match(numsAlphas);

		// convert val from string to number
		millis = calcDate(millis, oper, +val, unit);
	}
	return new Date(millis);
};

const calcDate = (millis, oper, val, unit) => {
	let calcMillis;
	switch (unit) {
		case 's':
			calcMillis = secondCalc(millis, oper, val);
			break;
		case 'm':
			calcMillis = minuteCalc(millis, oper, val);
			break;
		case 'h':
			calcMillis = hourCalc(millis, oper, val);
			break;
		case 'd':
			calcMillis = dateCalc(millis, oper, val);
			break;
		case 'mon':
			calcMillis = monthCalc(millis, oper, val);
			break;
		case 'y':
			calcMillis = yearCalc(millis, oper, val);
			break;
		// shouldn't reach here because of initial validation check
		default:
	}
	return calcMillis;
};

// returns true if dateString matches regex
const valid = (dateString) => {
	const regex = /^now\(\)(([+-][0-9]+(mon|[ydhms]))*(@(mon|[ydhms]))?)?$/;
	return regex.test(dateString);
};

console.log(parse('now()'));
