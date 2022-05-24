const IntlFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });

export function formatNumber(number: number): string {
	return IntlFormatter.format(number);
}
