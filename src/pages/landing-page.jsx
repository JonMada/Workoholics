import Hero from "../components/hero-section";
import Text from "../components/text";
import ProductList from "../components/products";

const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      <Hero />
      <Text />
      <ProductList />
    </div>
  );
};

export default LandingPage;
