import logo1 from './assests/br.png';
import logo2 from './assests/fid.png';
import logo3 from './assests/jp.png';
import logo4 from './assests/sipc.png';
import logo5 from './assests/mq.jpg';

export default function Boxes() {
    return (
      <div>
      <h1 style={{textAlign: 'center', fontFamily: 'Poppins, sans-serif'}}><p>Check the fine print.</p></h1>
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
              <button className="whitebutton"><a href="https://drive.google.com/file/d/1EPx9L-55_7STWhcYZveeDPvcP5m0RkRx/view?usp=drive_link"download>Download PDF</a></button>
              <button className="purplebutton"><a href="https://drive.google.com/file/d/1EPx9L-55_7STWhcYZveeDPvcP5m0RkRx/view?usp=drive_link">Read Article -></a></button>
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
      <h1 style={{textAlign: 'center', fontFamily: 'Poppins, sans-serif'}}><p>20,000+ families and children</p> </h1>
      <h1 style={{textAlign: 'center', fontFamily: 'Poppins, sans-serif'}}><p2>are investing with us.</p2></h1>

<div className="footer">
        <div className="left-section">
          <h2 style={{textAlign: 'center', fontFamily: 'Poppins, sans-serif'}}><p>We’ve partnered with </p> </h2>
          <h2 style={{textAlign: 'center', fontFamily: 'Poppins, sans-serif'}}><p2> the most trusted financial services.</p2></h2>
          <div className="left-logos">
          <img src={logo2} alt="Logo2" className="logo11" />
          <img src={logo1} alt="Logo1" className="logo12" />
          <img src={logo3} alt="Logo3" className="logo13" />
          </div>
        </div>
        <div className="right-section">
          <h2 style={{fontFamily: 'Poppins, sans-serif'}}>Every account-holder is</h2>
          <img src={logo4} alt="Logo4" className="logo14" />
          <img src={logo5} alt="Logo5" className="logo15" />
        </div>



      </div>
      </div>
    
    );
  }
  