import facebook from './assests/Facebook.png';
import tw from './assests/Twitter Circled.png';
import li from './assests/LinkedIn Circled.png';
import ins from './assests/Instagram Circle.png';
import cpr from './assests/cpr.png';
export default function End() {
    return (
      <div className="pictureSocial">
          <div className="socialIcons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className="picture2" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={tw} alt="Twitter" className="picture2" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={li} alt="LinkedIn" className="picture2" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={ins} alt="Instagram" className="picture2" />
        </a>
        </div>
        <div>
        <img src={cpr} alt="Instagram" className="picture3" />
      </div>
      <div className="footerText">
      <div className="backgroundcolor">
      <p>TrustFundRegistry is the tradename of TrustFundRegistry LLC, an SEC-registered investment 
        adviser. Our internet-based investment advisory services are designed to assist clients in saving for college and are not intended to provide comprehensive tax advice or 
        financial planning. Our services are available to U.S. residents only. This website shall not be considered a solicitation or offering for any 
        service or product to any person in any jurisdiction where such solicitation or offer would be unlawful.</p>

<p>Investing in securities involves risks, and investing in 529 plans in particular involves certain tax considerations and related risks. Any
 investments you make in a 529 plan through TrustFundRegistry may lose value. Historical returns, expected returns, and probability
  projections are provided for informational and illustrative purposes, and may not reflect actual future performance. Our savings 
  calculator and pricing comparison are hypothetical tools provided for illustrative purposes only and are based on important 
  assumptions described here.</p>
  </div>
      </div>
      </div>

    );
  }