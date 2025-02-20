import Hero from "../components/hero-section";
import Text from "../components/text";
import ProductList from "../components/products";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      <Hero />
      <Text />
      <ProductList />
      <Footer />
    </div>
  );
};

export default LandingPage;
