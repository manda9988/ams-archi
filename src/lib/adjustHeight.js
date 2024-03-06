// src/lib/adjustHeight.js
export function adjustHomeHeight() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export function setupHeightAdjustment() {
	adjustHomeHeight();
	window.addEventListener('resize', adjustHomeHeight);

	return () => {
		window.removeEventListener('resize', adjustHomeHeight);
	};
}
