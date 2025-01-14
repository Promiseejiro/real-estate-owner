function toPhoneNumberWithCode(number: number) {
	if (
		number.toString().startsWith('234') ||
		number.toString().startsWith('+234')
	) {
		return number.toString();
	}

	return '234' + parseInt(number.toString());
}

export default toPhoneNumberWithCode;
