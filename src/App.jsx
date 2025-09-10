import Hero from "./assets/Components/Hero/Hero";
import Navbar from "./assets/Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
