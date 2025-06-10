export const fetchCryptoData = async (limit = 15, offset = 0) => {
	try {
		const response = await fetch(`http://localhost:3001/api/assets?limit=${limit}&offset=${offset}`);
		if (!response.ok) throw new Error("API Error");
		return await response.json();
	} catch (e) {
		console.error(e);
		return [];
	}
}