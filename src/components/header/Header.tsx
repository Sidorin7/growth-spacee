import styles from './../../styles/Core.module.scss'

const Header = () => {
	return (
		<header className='bg-greenligth hdr pt-6 pb-20 '>
			<div className={styles.container}>
				<div className='header__wrapper '>
					<div>
						<button className='py-3 px-3  bg-gray rounded-full border-solid-black text-black-1000 text-nowrap text-xs flex items-center'>
							<div className='inline-flex -mr-8 m-auto'>
								<svg
									width='24'
									height='26'
									viewBox='0 0 24 26'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M16.5938 0.890015L0 17.4838V24.89H7.40625L24 8.29626L16.5938 0.890015ZM21.2109 8.29626L18.7969 10.6869L14.2031 6.09314L16.5938 3.67908L21.2109 8.29626ZM6.60938 22.8978H1.99219V18.2806L12.7969 7.49939L17.3906 12.0931L6.60938 22.8978Z'
										fill='white'
									/>
								</svg>
							</div>
							<button className='py-2 px-4 bg-green rounded-full border-solid-black text-black-1000 text-nowrap text-xs text-black-800 font-bold ml-11'>
								Твой путь
							</button>
						</button>
					</div>

					<div className='mb-8 mt-3'>
						<h1 className='text-5xl font-bold max-lg:text-3xl max-md:text-2xl max-sm:text-xl '>
							Стань мастером саморазвития!
						</h1>
					</div>
					<div className='mb-6'>
						<p className='text-base max-lg:text-lg max-md:text-xs max-sm:text-xss'>
							Книги, видео, подкасты и многое другое ждут тебя!
						</p>
					</div>
					<div>
						<button className='py-5 px-12 bg-green rounded-full border-solid-black text-white text-nowrap text-xs'>
							Исследовать сейчас
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
