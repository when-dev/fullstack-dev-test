import styles from './CryptoList.module.css'
import CryptoItem from '../cryptoItem/CryptoItem'
import useCryptoPagination from '../../hooks/useCryptoPagination'

const CryptoList = () => {
	const { items, colors, loading, loadMore } = useCryptoPagination() 

	return (
		<div className={styles.listContainer}>
			{items.map((item, idx) => (
				<CryptoItem key={item.id} item={item} color={colors[idx]} />
			))}
			<div className={styles.loader}>{loading ? 'Loading...' : (
				<button onClick={loadMore}>Load More</button>
			)}</div>
		</div>
	)
}

export default CryptoList
