
import Navbar from "./components/navbar";
import Hero,{ Hero1,Hero2,Hero3,Hero4, Work ,Hero5, Sponsors,Apps} from "./components/hero";
import Card ,{Card2} from "./components/card";
import Footer from "./components/footer";

 

export default function Home() {
  return (
    
       <div>
        <Navbar/>
        <Hero/>
        <Hero1/>
        <Hero2/>
        <Hero3/>
        <Hero4/>
        <Card/>
        <Work/>
        <Hero5/>
        <Sponsors/>
        <Apps/>
        <Card2/>
        <Footer/>
       </div>
  );
}
