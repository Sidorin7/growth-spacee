import styles from './../../styles/Core.module.scss'
interface BtnGreenProps {
	text: string
}

const BtnGreen = ({ text }: BtnGreenProps) => {
	return <button className={styles.btn}>{text}</button>
}

export default BtnGreen
