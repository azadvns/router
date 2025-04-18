import { Link, NavLink } from "react-router-dom";


function Lucknow(){
    return <div>
        <h1>Welcome to the Lucknow</h1>
        <img src="pic/lucknow.jpeg"></img>
        <br></br>
<Link to="/banaras">Banaras</Link>
        <NavLink to="/lucknow" className={({isActive})=>isActive ?"active":""}Lucknow>

        </NavLink>
    </div>
}
export default Lucknow;