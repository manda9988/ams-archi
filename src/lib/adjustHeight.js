// // src/lib/adjustHeight.js
// export function adjustHomeHeight() {
// 	// Calculer la hauteur du viewport et l'appliquer en tant que variable CSS
// 	const vh = window.innerHeight * 0.01;
// 	document.documentElement.style.setProperty('--vh-custom', `${vh}px`);
// }

// export function setupHeightAdjustment() {
// 	adjustHomeHeight();
// 	// Écouter les changements de taille pour recalculer la hauteur
// 	window.addEventListener('resize', adjustHomeHeight);
// 	window.addEventListener('orientationchange', adjustHomeHeight); // Ajout pour la prise en charge des changements d'orientation

// 	return () => {
// 		window.removeEventListener('resize', adjustHomeHeight);
// 		window.removeEventListener('orientationchange', adjustHomeHeight);
// 	};
// }
