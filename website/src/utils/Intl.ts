const IntlFormatter = new Intl.NumberFormat('en-GB', { maximumFractionDigits: 2 });

export function formatNumber(number: number): string {
	return IntlFormatter.format(number);
}
