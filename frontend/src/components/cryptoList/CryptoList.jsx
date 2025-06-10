import { useEffect, useRef } from 'react'
import styles from './CryptoList.module.css'
import CryptoItem from '../cryptoItem/CryptoItem'
import useCryptoPagination from '../../hooks/useCryptoPagination'

const CryptoList = () => {
	const { items, colors, loading, loadMore } = useCryptoPagination()

	const loaderRef = useRef(null)

	useEffect(() => {
		if (loading) return

		const currentLoader = loaderRef.current

		const observer = new window.IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					loadMore()
				}
			},
			{ threshold: 1 }
		)

		if (currentLoader) {
			observer.observe(currentLoader)
		}

		return () => {
			if (currentLoader) {
				observer.unobserve(currentLoader)
			}
		}
	}, [loading, loadMore])

	return (
		<div className={styles.listContainer}>
			{items.map((item, idx) => (
				<CryptoItem key={item.id} item={item} color={colors[idx]} />
			))}
			<div className={styles.loader} ref={loaderRef}>
				{loading ? 'Loading...': ''}
			</div>
		</div>
	)
}

export default CryptoList
