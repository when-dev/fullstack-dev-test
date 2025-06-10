const express = require('express');
const axios = require('axios');
const router = express.Router();

const COINCAP_API_KEY = process.env.COINCAP_API_KEY;

router.get('/', async (req, res) => {
	const { limit = 15, offset = 0 } = req.query;
	try {
		const response = await axios.get(`https://rest.coincap.io/v3/assets?apiKey=${COINCAP_API_KEY}`, { params: { limit, offset } });
		res.json(response.data.data);
	} catch (e) {
		console.error("Api error: ", e.message, e.response?.data);
		res.status(500).json({ error: "API Error", message: e.message });
	}
})

module.exports = router;