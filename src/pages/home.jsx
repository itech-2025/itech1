import Hero from '../home_sections/hero';
import About from '../home_sections/about';
import Why from '../home_sections/why';
import Solution from '../home_sections/solution';
import Service from '../home_sections/service';
import Product from '../home_sections/product';
import News from '../home_sections/news';
import Companies from '../home_sections/companies';
function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Why/>
      <Solution/>
      <Service/>
      <Product/>
      <News/>
      <Companies/>
    </>
  );
}

export default Home;