import Box from "./Box";
import "./hero.css"

function Hero() {

  return (
    <>
      <div className="hero-container">
        <h1 className="heading">My Portfolio </h1>
        <div className="option">
          <p className="first"> Dashboard</p>
          <p className="secound"> MIS & Updates</p>
          <p className="third">Insights lorem</p>
        </div>
        <input className="hero-search" placeholder="Search by company name..." />
        <button className="search-button"> Filter</button>
        <Box />
      </div>
    </>
  )
}
export default Hero;
