import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/HeroSection/Hero";
import FeaturedProduct from "./components/FeaturedProduct/FeaturedProduct";
import OurOffer from "./components/OurOffers/OurOffer";
import ProductsTray from "./components/ProductsTray/ProductsTray";

function App() {
	return (
		<>
			<Hero></Hero>
			<OurOffer />
			<FeaturedProduct />
			<ProductsTray></ProductsTray>
		</>
	);
}

export default App;
