import Benifits from "./assets/Components/Benifits/Benifits";
import FeaturedWork from "./assets/Components/FeaturedWork/FeaturedWork";
import Footer from "./assets/Components/Footer/Footer";
import Hero from "./assets/Components/Hero/Hero";
import Inquiry from "./assets/Components/Inquiry/Inquiry";
import Invoice from "./assets/Components/Invoice/Invoice";
import Navbar from "./assets/Components/Navbar/Navbar";
import Services from "./assets/Components/Services/Services";
import Slider from "./assets/Components/Slider/Slider";
import WeDo from "./assets/Components/WeDo/WeDo";
import WhyNexgen from "./assets/Components/WhyNexgen/WhyNexgen";


function App() {
  return (
    <>
      <div
        // This is the all page background color and pattern
        className="flex justify-center w-[100%] absolute top-0 z-[-2] min-h-[100vh] h-auto bg-[#000000] 
           bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
           bg-[size:20px_20px]"
      >
        <div className="w-[1500px] ">
          <Navbar />
          <Hero />
          <WeDo />
          <WhyNexgen />
          <Slider />
          <Benifits />
          <Invoice />
          <Services />
          <FeaturedWork />
          <Inquiry />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
