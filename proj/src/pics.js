import e from './assests/e.png';
import p1 from './assests/p1.png';
import p2 from './assests/p2.png';
import p3 from './assests/p3.png';

function Pictures() {
    return (
        <div className="background-container" style={{ backgroundImage: `url(${e})` }}>
        <div className="overlay-container">
          <div className="picture-wrapper">
          
            <img src={p1} alt="Pic 1"  className="picture00" />
            <img src={p2} alt="Pic 2"  className="picture11" />
            <img src={p3} alt="Pic 3" className="picture22" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Pictures;