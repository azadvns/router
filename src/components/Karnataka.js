import { Link, NavLink } from "react-router-dom";


function Karnataka(){
    return(
        <div>
            <h1>Welcome to Karnataka</h1>
            <Link to="up">Up</Link>
            <NavLink to="/karnataka" className={({isActive})=>isActive?"active":""}Karnataka>

            </NavLink>
        </div>
    )
}
export default Karnataka;