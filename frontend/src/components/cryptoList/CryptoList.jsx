import styles from './CryptoList.module.css'
import CryptoItem from '../cryptoItem/CryptoItem'

const mockItems = [
	{ id: 'btc', name: 'Bitcoin', priceUsd: '109000' },
	{ id: 'eth', name: 'Ethereum', priceUsd: '2700' },
]

const mockColors = ['#ff0000', '#00ff00']

const CryptoList = () => {
	return (
		<div className={styles.listContainer}>
			{mockItems.map((item, idx) => (
				<CryptoItem key={item.id} item={item} color={mockColors[idx]} />
			))}
			<div className={styles.loader}>loader</div>
		</div>
	)
}

export default CryptoList
