import About from "./Components/About";
import Hero from "./Components/Hero";
import Processes from "./Components/Processes";
import Service from "./Components/Service";
import Showcase from "./Components/Showcase";
import Navbar from "./navBar";
import Blog from "./Components/Blog";
import Review from "./Components/Review";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <Service />
        <About />
        <Showcase />
        <Processes />
        <Review />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
