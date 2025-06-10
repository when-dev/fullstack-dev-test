export const generateColors = (count) => {
	const colors = [];
	for (let i = 0; i < count; i++) {
		colors.push(
			'#' +
				Math.floor(Math.random() * 16777216)
					.toString(16)
					.padStart(6, '0')
		)
	};
	return colors;
}
