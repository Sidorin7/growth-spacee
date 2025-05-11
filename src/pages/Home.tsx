import Addsections from '../components/addsections/Addsections'
import BestMaterials from '../components/bestMaterials/BestMaterials'
import ChanceForSuccess from '../components/chanceForSuccess/ChanceForSuccess'
import EnProg from '../components/enProg/EnProg'
import Gallary from '../components/gallary/Gallary'
import Header from '../components/header/Header'
import prevHome from '../components/inspirationalVideos/img/maxresdefault (1).jpg'
import InspirationalVideos from '../components/inspirationalVideos/InspirationalVideos'
import OpenTheWorld from '../components/openTheWorld/OpenTheWorld'
import Pump from '../components/pump/Pump'
import SelfDevelopment from '../components/selfDevelopment/SelfDevelopment'
import Tariffs from '../components/tariffs/Tariffs'
import WeOffers from '../components/weOffers/WeOffers'
import WorkedUp from '../components/workedUp/WorkedUp'
const Home = () => {
	return (
		<>
			<Header />
			<BestMaterials />
			<Gallary />
			<SelfDevelopment />
			<WeOffers />
			<InspirationalVideos
				id='AGKUR0mRZ28'
				previe={prevHome}
				titlePage='Вдохновляющие ролики'
			/>
			<Pump />
			<Tariffs />
			<Addsections />
			<WorkedUp />
			<ChanceForSuccess />
			<EnProg />
			<Tariffs />
			<OpenTheWorld />
		</>
	)
}

export default Home
