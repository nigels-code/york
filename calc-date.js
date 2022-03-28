export const secondCalc = (millis, oper, val) => {
	const dt = new Date(millis);
	const seconds = dt.getUTCSeconds();
	let calcMillis;
	switch (oper) {
		case '+':
			calcMillis = dt.setUTCSeconds(seconds + val);
			break;
		case '-':
			calcMillis = dt.setUTCSeconds(seconds - val);
			break;
		case '@':
			calcMillis = dt.setUTCMilliseconds(0);
			break;
		// shouldn't reach here because of initial validation check
		default:
	}
	return calcMillis;
};

export const minuteCalc = (millis, oper, val) => {
	const dt = new Date(millis);
	const minutes = dt.getUTCMinutes();
	let calcMillis;
	switch (oper) {
		case '+':
			calcMillis = dt.setUTCMinutes(minutes + val);
			break;
		case '-':
			calcMillis = dt.setUTCMinutes(minutes - val);
			break;
		case '@':
			calcMillis = dt.setUTCSeconds(0, 0);
			break;
		// shouldn't reach here because of initial validation check
		default:
	}
	return calcMillis;
};

export const hourCalc = (millis, oper, val) => {
	const dt = new Date(millis);
	const hours = dt.getUTCHours();
	let calcMillis;
	switch (oper) {
		case '+':
			calcMillis = dt.setUTCHours(hours + val);
			break;
		case '-':
			calcMillis = dt.setUTCHours(hours - val);
			break;
		case '@':
			calcMillis = dt.setUTCMinutes(0, 0, 0);
			break;
		// shouldn't reach here because of initial validation check
		default:
	}
	return calcMillis;
};

export const dateCalc = (millis, oper, val) => {
	const dt = new Date(millis);
	const day = dt.getUTCDate();
	let calcMillis;
	switch (oper) {
		case '+':
			calcMillis = dt.setUTCDate(day + val);
			break;
		case '-':
			calcMillis = dt.setUTCDate(day - val);
			break;
		case '@':
			calcMillis = dt.setUTCHours(0, 0, 0, 0);
			break;
		// shouldn't reach here because of initial validation check
		default:
	}
	return calcMillis;
};

export const monthCalc = (millis, oper, val) => {
	const dt = new Date(millis);
	const month = dt.getUTCMonth();
	let calcMillis;
	switch (oper) {
		case '+':
			calcMillis = dt.setUTCMonth(month + val);
			break;
		case '-':
			calcMillis = dt.setUTCMonth(month - val);
			break;
		case '@':
			calcMillis = dateCalc(dt.setUTCDate(1), '@');
			break;
		// shouldn't reach here because of initial validation check
		default:
	}
	return calcMillis;
};

export const yearCalc = (millis, oper, val) => {
	const dt = new Date(millis);
	const year = dt.getUTCFullYear();
	let calcMillis;
	switch (oper) {
		case '+':
			calcMillis = dt.setUTCFullYear(year + val);
			break;
		case '-':
			calcMillis = dt.setUTCFullYear(year - val);
			break;
		case '@':
			// months range from 0 - 11
			calcMillis = monthCalc(dt.setUTCMonth(0), '@');
			break;
		// shouldn't reach here because of initial validation check
		default:
	}
	return calcMillis;
};
