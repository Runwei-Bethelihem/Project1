import tfr from './assests/tfr.png';
export default function NavBar (){
    return (
         <nav className ="nav">
        <a href = "/" className = "site-title">
        <img src={tfr} alt="Logo" className="logo" />
        <span>TrustFund</span>
        <span className="italic">Registry<sup>™</sup></span>
        </a>
        
        <u1>  
            <a href = "/aboutus">ABOUT US</a>    
            <a href = "/gifting">GIFTING</a>
            <a href = "/learn">LEARN</a>
            <a href = "/help">HELP</a>  
        </u1>
        <u2>
            <a href = "/login">LOGIN</a>
            
            <a href = "/createaccount" className="createAccountButton"> CREATE AN ACCOUNT </a>
        </u2> 
    </nav>
    )
}


