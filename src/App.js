import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/HeroSection/Hero";
import FeaturedProduct from "./components/FeaturedProduct/FeaturedProduct";
import OurOffer from "./components/OurOffers/OurOffer";
import ProductsTray from "./components/ProductsTray/ProductsTray";
import GuaranteeBanner from "./components/GuaranteeBanner/GuaranteeBanner";
import OurBlog from "./components/OurBlog/OurBlog";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Hero></Hero>
			<OurOffer />
			<FeaturedProduct />
			<ProductsTray />
			<GuaranteeBanner />
			<OurBlog />
			<Footer />
		</>
	);
}

export default App;
