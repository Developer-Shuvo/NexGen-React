import Hero from "./assets/Components/Hero/Hero";
import Navbar from "./assets/Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div
      // This is the all page background color and pattern
        className="flex justify-center w-[100%] absolute top-0 z-[-2] min-h-[100vh] h-auto bg-[#000000] 
           bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
           bg-[size:20px_20px]"
      >
        <div className="w-[1500px] relative">
          <Navbar />
          <Hero />
          
        </div>
      </div>
    </>
  );
}

export default App;
