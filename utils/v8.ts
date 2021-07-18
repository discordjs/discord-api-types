import {
	APIButtonComponent,
	APIButtonComponentWithCustomID,
	APIButtonComponentWithURL,
	ButtonStyle,
} from '../payloads/v8/index';

/**
 * A type-guard check for buttons that have a `url` attached to them.
 * @param button The button to check against
 * @returns A boolean that indicates if the button has a `url` attached to it
 */
export function isLinkButton(component: APIButtonComponent): component is APIButtonComponentWithURL {
	return component.style === ButtonStyle.Link;
}

/**
 * A type-guard check for buttons that have a `custom_id` attached to them.
 * @param button The button to check against
 * @returns A boolean that indicates if the button has a `custom_id` attached to it
 */
export function isStyledButton(component: APIButtonComponent): component is APIButtonComponentWithCustomID {
	return component.style !== ButtonStyle.Link;
}
