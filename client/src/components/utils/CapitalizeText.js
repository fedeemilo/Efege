import React from 'react';

export default function CapitalizeText(text) {
	if (text !== undefined) {
		console.log(text);
		if (text[0] === '¿') {
			return text.charAt(0) + text[1].toUpperCase() + text.slice(2).toLowerCase();
		} else {
			return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
		}
	}
}
