import BtnGray from '../btnGray/BtnGray'

const Offer = ({ title, text, tbtn }) => {
	return (
		<div className=' border-3 border-solid border-green rounded-3xl mb-8'>
			<div className='py-12 pl-12 max-xm:pl-2 max-md:py-2'>
				<div className='mb-4 text-xlm leading-normal font-bold text-black-1000 max-xm:text-xl'>
					<h4>{title}</h4>
				</div>
				<p className='font-normal text-xs text-black-1000 leading-normal max-xm:text-xss'>
					{text}
				</p>
				<div className='mt-6'>
					<BtnGray text={tbtn} />
				</div>
			</div>
		</div>
	)
}

export default Offer
