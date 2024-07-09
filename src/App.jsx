import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

export default function APP () {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Portfolio></Portfolio>
    <Blogs></Blogs>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}