import logo1 from './assests/br.png';
import logo2 from './assests/fid.png';
import logo3 from './assests/jp.png';
import logo4 from './assests/sipc.png';
import logo5 from './assests/mq.jpg';

export default function Boxes() {
    return (
      <div>
      <h1 style={{textAlign: 'center'}}><p>Check the fine print.</p></h1>
      <div className="container">
        <div className="box">
        <div>
        <h2>Privacy Policies</h2> 
          <div className="inner-box">  
          <h2><span>TrustFund</span>
          <span className="italic">Registry</span> Privacy Policy</h2>
            <p>This discloses our privacy practices for 
              personal information we collect when 
              you use or access our products, 
              services, features, or content. </p>
              <div className="buttonContainer">
              <button className="whitebutton">Download PDF</button>
              <button className="purplebutton">Read Article -></button>
            </div>
            </div>
          </div>
          <div className="inner-box">
          <h2><span>TrustFund</span>
          <span className="italic">Registry</span> Privacy Policy</h2>
            <p>This discloses our privacy practices for 
              personal information we collect when 
              you use or access our products, 
              services, features, or content. </p>
            <div className="buttonContainer">
              <button className="whitebutton">Download PDF</button>
              <button className="purplebutton">Read Article -></button>
            </div>
          </div>
          <div className="inner-box">
            <h2><span>TrustFund</span>
            <span className="italic">Registry</span> Privacy Policy</h2>
            <p>This discloses our privacy practices for 
              personal information we collect when 
              you use or access our products, 
              services, features, or content. </p>
            <div className="buttonContainer">
              <button className="whitebutton">Download PDF</button>
              <button className="purplebutton">Read Article -></button>
            </div>
          </div>
        </div>
        <div className="box">
        <div>
        <h2>Regulatory Compliance</h2>
          <div className="inner-box">
            <h2><span>TrustFund</span>
            <span className="italic">Registry</span> GLBA Notice 2</h2>
            <p>This explains our information-sharing 
              practices and how we safeguard sensitive 
              data.</p>
            <div className="buttonContainer">
              <button className="whitebutton">Download PDF</button>
              <button className="purplebutton">Read Article -> </button>
            </div>
            </div>
          </div>
          <div className="inner-box">
          <h2><span>TrustFund</span>
          <span className="italic">Registry</span> GLBA Notice 2</h2>
            <p>This explains our information-sharing 
              practices and how we safeguard sensitive 
              data.</p>
            <div className="buttonContainer">
              <button className="whitebutton">Download PDF</button>
              <button className="purplebutton">Read Article -></button>
            </div>
          </div>
          <div className="inner-box">
          <h2><span>TrustFund</span>
          <span className="italic">Registry</span> GLBA Notice 2</h2>
            <p>This explains our information-sharing 
              practices and how we safeguard sensitive 
              data.</p>
            <div className="buttonContainer">
              <button className="whitebutton">Download PDF</button>
              <button className="purplebutton">Read Article -></button>
            </div>
          </div>
        </div>
        <div className="box">
          <div>
            <h2>Terms and Conditions</h2>
          <div className="inner-box">
            <h2><span>TrustFund</span>
            <span className="italic">Registry</span> Terms of Service</h2>
            <p>These Account Terms of Service (“TOS”) 
              are a legally binding agreement between 
              you, <span>TrustFund</span>
              <span className="italic">Registry</span> and our financial 
              institution partners.</p>
            <div className="buttonContainer">
              <button className="whitebutton">Download PDF</button>
              <button className="purplebutton">Read Article -></button>
            </div>
            </div>
          </div>
          <div className="inner-box">
          <h2><span>TrustFund</span>
          <span className="italic">Registry</span> Terms of Service</h2>
            <p>These Account Terms of Service (“TOS”) 
              are a legally binding agreement between 
              you, <span>TrustFund</span>
              <span className="italic">Registry</span> and our financial 
              institution partners.</p>
            <div className="buttonContainer">
              <button className="whitebutton">Download PDF</button>
              <button className="purplebutton">Read Article -></button>
            </div>
          </div>
          <div className="inner-box">
          <h2><span>TrustFund</span>
          <span className="italic">Registry</span> Terms of Service</h2>
            <p>These Account Terms of Service (“TOS”) 
              are a legally binding agreement between 
              you, <span>TrustFund</span>
              <span className="italic">Registry</span> and our financial 
              institution partners.</p>
            <div className="buttonContainer">
              <button className="whitebutton">Download PDF</button>
              <button className="purplebutton">Read Article -></button>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{textAlign: 'center'}}><p>20,000+ families and children
       are investing with us.</p></h1>

<div className="footer">
        <div className="left-section">
          <h2><p>We’ve partnered with 
          the most trusted financial services.</p> </h2>
          <img src={logo2} alt="Logo2" className="logo11" />
          <img src={logo1} alt="Logo1" className="logo12" />
          <img src={logo3} alt="Logo3" className="logo13" />
        </div>
        <div className="right-section">
          <h2>Every account-holder is</h2>
          <img src={logo4} alt="Logo4" className="logo14" />
          <img src={logo5} alt="Logo5" className="logo15" />
        </div>



      </div>
      </div>
    
    );
  }
  