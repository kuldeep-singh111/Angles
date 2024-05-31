import React from 'react';
import './box.css';
import box from '../assets/image/box.jpg';
import boxLogo from '../assets/image/boxLogo.png';
import red from '../assets/image/red.jpg';

const Box = () => {
  return (
    <div className="box-container">
      <div className="box-section">
        <div className="box-badge">Feature launch</div>
        <div className="box-header">
          <div className="box-icon">
            <img src={boxLogo} alt="boxLogo" />
          </div>
          <div className="box-title">
            <h3>Ace Green Recycling</h3>
            <p>Battery Recycling | Bengaluru</p>
          </div>
        </div>
        <div className="box-content">
          <p>A market bubble is a period of excessive enthusiasm and inflated asset prices driven by speculative buying, detached from the true underlying value. This speculative fervor often leads to overvaluation, creating a situation where prices become unsustainable. Eventually, the bubble bursts, causing a rapid decline in prices and resulting in financial losses for investors who bought in during the bubble's peak...</p>
          <img src={box} alt="box" className="box-image" />
          <p>Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas maecenas aliquam tellus viverra...</p>
        </div>
        <div className="box-footer">
          <p>15-03-2024</p>
          <a href="#read-more" className="read-more">READ MORE</a>
        </div>
      </div>

      <div className="box-section">
        <div className="box-badge">Fund investment update</div>
        <div className="box-header">
          <div className="box-icon">
            <img src={boxLogo} alt="boxLogo" />
          </div>
          <div className="box-title">
            <h3>Ace Green Recycling</h3>
            <p>Battery Recycling | Bengaluru</p>
          </div>
        </div>
        <div className="box-content">
          <p>The dot-com bubble, a late 1990s economic event, marked an era of rapid internet expansion and speculative investing. Share prices of numerous technology companies, especially those online, surged to unsustainable levels. Investors were captivated by the potential of the digital world, often overlooking traditional metrics like revenue and profits. The bubble burst in 2000, leading to widespread business failures and financial losses. The dot-com bubble's legacy includes lessons about speculative excess, the importance of sound valuation, and the significance of genuine business fundamentals. It serves as a reminder of how market enthusiasm can lead to inflated expectations and subsequent market crashes....</p>
          <p>Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas maecenas aliquam tellus viverra...</p>
        </div>
        <div className="box-footer">
          <p>15-03-2024</p>
          <a href="#read-more" className="read-more">READ MORE</a>
        </div>
      </div>

      <div className="box-section">
        <div className="box-badge">Fund investment update</div>
        <div className="box-badge live-deal">Live deal</div>

        <div className="box-header">
          <div className="box-icon">
            <img src={boxLogo} alt="boxLogo" />
          </div>
          <div className="box-title">
            <h3>Ace Green Recycling</h3>
            <p>Battery Recycling | Bengaluru</p>
          </div>
        </div>
        <div className="box-content">
          <p>The Japan real estate bubble, also known as the "bubble economy," emerged during the late 1980s. Fueled by speculative fervor and easy credit, property and stock prices skyrocketed to unsustainable levels. Tokyo's land became more valuable than all of California. In 1991, the bubble burst, leading to a prolonged period of economic stagnation called the "Lost Decade." Real estate values plummeted, leaving banks and investors with massive debt...</p>
          <img src={red} alt="red" className="box-image" />
          <p>Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas maecenas aliquam tellus viverra...</p>
        </div>
        <div className="box-footer">
          <p>15-03-2024</p>
          <a href="#view-deal" className="view-deal">VIEW DEAL</a>
        </div>
      </div>
    </div>
  );
};

export default Box;