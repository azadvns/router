import { Link, NavLink } from "react-router-dom";


function Banaras(){
    return <div>
        <h1>Welcome to Banaras</h1>
        <img src="pic/varanasi.jpeg"></img>
        <br></br>
        <Link to="/allahabad">Allahabad</Link>
        <br></br>
        <Link to="/up">Up</Link>

        <NavLink to="/banaras" className={({isActive})=>isActive?"active":""}Banaras></NavLink>
    </div>
}
export default Banaras;