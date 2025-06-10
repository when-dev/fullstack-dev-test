import styles from "./CryptoList.module.css"
import CryptoItem from "../cryptoItem/CryptoItem"

const CryptoList = () => {
	
	return (
		<div className={styles.listContainer}>
			<CryptoItem item={''} color="red" />
			<div className={styles.loader}>
				loader
			</div>
		</div>
	)
}

export default CryptoList