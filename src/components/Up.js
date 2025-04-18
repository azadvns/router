import { Link, NavLink } from "react-router-dom";

function Up(){
    return( <div>
    <h1>Welcome to the Up</h1>
    <Link to="/lucknow">Lucknow</Link>

    <NavLink to="/up" className={({isActive})=>isActive?"active":""}Up>

    </NavLink>
    </div>
)
}
export default Up;