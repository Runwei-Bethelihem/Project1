const Pages = () => {
    return (
      <div className="pages-container">
        <div className="initial-text">
  <h1 style={{margin: '0', padding: '0',  fontFamily: 'Poppins, sans-serif'}}>Have questions?</h1>
  <h1 style={{margin: '0', padding: '0'}}><p style={{margin: '0', padding: '0', fontStyle: 'italic', fontFamily: 'Poppins, sans-serif'}}>We've got you covered.</p></h1>
</div>
        <div className="sections-container">
          <div className="left-section">
            <LeftSection />
          </div>
          <div className="right-section">
            <RightSection />
          </div>
        </div>
      </div>
    );
  };
const LeftSection = () => {
    return (
      <div>
        <div className ="p1">
        <h1>Topics</h1>
        <div className="line">Setting Up A Child’s Trust Fund</div>
        <div className="line">Sending Gifts to Trust Funds</div>
        <div className="line">Managing Personal Account</div>
        <div className="line">Account Security </div>
        <div className="line">Tax information </div>
      </div>
      </div>
    );
  };
  
const RightSection = () => {
    return (
      <div >
        <div className ="p2">
        <p1> What Exactly Is A 529 Savings Plan? </p1>
        <p>What Are The Benefits Associated With A 529 Account? </p>
        <p> What Can My Savings Be Spent On?</p>
        <p> What Is The Difference Between 529 And UTMA?</p>
        <p> How Much Can I Contribute?</p>
        <p> How Do I Transfer A 529 Account To Trust Fund Registry? </p>
    </div>
      </div>
    );
  };
  
  export default Pages;