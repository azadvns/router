
import './Forget1.css';

function Forget(){
    return(
        <div className='center'>
<h3 className='center1'>Find Your Account</h3>
<br></br>
{/* <br></br> */}
<div className='font'>Plese enter your email address or mobile number to search for your account </div>
<br></br>
<input className='inp' type='text' placeholder='Email address or mobile number'></input>
<br></br>
{/* <br></br> */}
<button className='search' type='Search'>Search</button>
<button className='cencel' type='cancel'>Cancel</button>

        </div>
    )
}
export default Forget;