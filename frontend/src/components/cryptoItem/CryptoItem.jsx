import styles from './CryptoItem.module.css'

const CryptoItem = ({ item, color }) => {
	return (
		<div className={styles.itemContainer}>
			<div className={styles.colorBox} style={{ backgroundColor: color }} />
			<div className={styles.name}>{item.name}</div>
			<div className={styles.price}>
				$
				{Number(item.priceUsd).toLocaleString(undefined, {
					maximumFractionDigits: 2,
				})}
			</div>
		</div>
	)
}

export default CryptoItem
