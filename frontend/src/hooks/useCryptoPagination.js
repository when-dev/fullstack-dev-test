import { useCallback, useState } from 'react';
import { fetchCryptoData } from '../utils/api';
import { generateColors } from '../utils/generateColors';

const PAGE_SIZE = 15;

const useCryptoPagination = () => {
	const [items, setItems] = useState([]);
	const [colors, setColors] = useState([]);
	const [offset, setOffset] = useState(0);
	const [loading, setLoading] = useState(false);

	const loadMore = useCallback(async () => {
		if (loading) return;
		setLoading(true);
		const newItems = await fetchCryptoData(PAGE_SIZE, offset);
		setItems(prevItems => [...prevItems, ...newItems]);
		setColors(prevItems => [...prevItems, ...generateColors(newItems.length)]);
		setOffset(prevOffset => prevOffset + PAGE_SIZE);
		setLoading(false);
	}, [loading, offset]);
	
	if (items.length === 0 && !loading) {
		loadMore();
	}

	return { items, colors, loadMore, loading}
}

export default useCryptoPagination;