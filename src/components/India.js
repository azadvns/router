import { Link, NavLink } from "react-router-dom";


function India(){
    return <div>
        <h1>Welcome to India</h1>
        <img src="pic/india.png"></img>
        <br></br>
        <Link to="/up"> Up</Link>
        <NavLink to="./india" className={({isActive})=>isActive?"active":""}India>

        </NavLink>
    </div>
}
export default India;