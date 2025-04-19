
import './Sign1.css'
function Sign() {
    
    return (
        <div className='col'>
            <h1>Sign up</h1>
            <input type="text" placeholder="Name" ></input><br></br>
            <input type="text" placeholder="LastName"></input><br></br>
            <input type="number" placeholder="Mobile No"></input><br></br>
            <input type="email id" placeholder="Email Id"></input><br></br>
            <input type="password" placeholder="password"></input><br></br>
            <button className='cen' id='t1' type="submit">Submit</button>
        </div>
    )
}
export default Sign;