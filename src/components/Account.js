
import { Link } from 'react-router-dom';
import './Account1.css'
function Account(){
    return(
        <div>
            <h2 className='cen5'>Facebook</h2>
            <div className='cen'>
            <div className='cen2' >Log in to Facebook</div>
            <br></br>
            <input className='text' placeholder='Mobile No OR Email Id' type='text'></input>
            <br></br><br></br>
            <input className='text' placeholder='Password' type='password'></input>
            <br></br><br></br>
            <button className='log' type='submit'>Log in</button>
            <br></br>
            <h5 className='forget'>Forgotten account ? </h5>
            {/* <br></br> */}
            {/* <h2 className='font1'>Create new account */}
                <Link className='font1' to="/facebook">Create new account</Link>
            <br></br><br></br>
                
            {/* </h2> */}
            </div>
        </div>
    )
}
export default Account;