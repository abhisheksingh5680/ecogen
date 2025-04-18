
import About from "./(components)/home-component/About/index.jsx"
import BenefitsSection from "./(components)/home-component/BenefitsSection/index.jsx"
import HeroSection from "./(components)/home-component/HeroSection/index.jsx"
import Innovation from "./(components)/home-component/Innovation/index.jsx"
import ProductDetail from "./(components)/home-component/ProductDetail/index.jsx"
import Quality from "./(components)/home-component/QualitySection/index.jsx"
import Register from "./(components)/home-component/Register/index.jsx"
import Vision from "./(components)/home-component/Vision/index.jsx"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Innovation />
      <BenefitsSection />
      <Quality />
      <ProductDetail />
      <Vision />
      <About />
      <Register />
    </>

  );
}
