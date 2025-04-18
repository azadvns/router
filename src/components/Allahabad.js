import { Link, NavLink } from "react-router-dom";


function Allahabad(){
    return <div>
        <h1>Welcome to Allahabad</h1>
        <img src="pic/allahabad.jpeg"></img>
        <br></br>
        <Link to="/india">India</Link>
        <br></br>
        <Link to="/lucknow">Lucknow</Link>
        <NavLink to="/allahabad" className={({isActive})=>isActive?"active":""}Allahabad></NavLink>
    </div>
}
export default Allahabad;