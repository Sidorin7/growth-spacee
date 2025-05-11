import styles from './../../styles/Core.module.scss'

interface BtnGrayProps {
	text: string
}
const BtnGray = ({ text }: BtnGrayProps) => {
	return <button className={styles.btnGray}>{text}</button>
}

export default BtnGray
