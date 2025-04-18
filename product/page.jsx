import Hero from '../(components)/product-component/Contact/index.jsx';
import Contact from '../(components)/product-component/Contact/index.jsx';
import Efficiency from '../(components)/product-component/Efficiency/index.jsx';
import HeroSection from '../(components)/product-component/Hero/index.jsx';
import Manuals from '../(components)/product-component/Manuals/index.jsx';
import MultiPurpose from '../(components)/product-component/MultiPurpose/index.jsx';
import Specification from '../(components)/product-component/Specification/index.jsx';
import Utilis from '../(components)/product-component/Utilis/index.jsx';
export default function Product() {
    return (
        <>
            <HeroSection />
            <MultiPurpose />
            <Utilis />
            <Specification />
            <Efficiency />
            <Manuals />
            <Contact />
        </>
    );
} 