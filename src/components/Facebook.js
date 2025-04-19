import './Facebook1.css';

function Facebook(){
    return(<div>
        <h1 className='left'>Facebook</h1>
        <div className='col'>
            <h2 className='cen1'>Create a new account</h2>
        <input className='gen' type="text" placeholder="Name"></input>
        <input className='gap' type='text' placeholder='SurName'></input><br></br>
        <div className='gen'>Birthday ?</div><br></br>
        
        <select className='gap0'>
            <option>Day</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            
        </select>
        <select className='gap1'>
        <option>Month</option>
            <option>January</option>
            <option>Febuary</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
        </select>

        <select className='gap2'>
        <option>Years</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>2014</option>
            <option>2013</option>
            <option>2012</option>
            <option>2011</option>
            <option>2010</option>
            <option>2009</option>
            <option>2008</option>
            <option>2007</option>
            <option>2006</option>
            <option>2005</option>
            <option>2004</option>
            <option>2003</option>
            <option>2002</option>
            <option>2001</option>
            <option>2000</option>
            <option>1999</option>
            <option>1998</option>
            <option>1997</option>
            <option>1996</option>
            <option>1995</option>
        </select>
        {/* <br></br> */}
        <div className='gen'>Gender?</div><br></br>
      <label className='radio1'>Male <input  type='radio' name='gender' value="male"></input></label> 
      <label className='radio2'>Female <input  type='radio' name='gender' value="female"></input></label> 
      <label className='radio3'>Custom <input  type='radio' name='gender' value="custom"></input></label> 
        <br></br><br></br>
        <input className='no' type='text' placeholder='Enter Mobile No or Email Id'></input>
        <br></br><br></br>
        <input className='pass' type='password' placeholder='password'></input>
        <br></br>
        <br></br>
        <div className='font'>Your contact information may have been uploaded to Facebook by people who use our seevice.
            <a href="https://www.facebook.com/help/637205020878504?cms_id=637205020878504">Learn more</a>
            <br></br>
            <div>Clicking sign Up means you agree to our 
                <a href='https://www.facebook.com/legal/terms/update'>Terms,</a>
                <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">Privacy Policy</a>
                and
               
                <a href='https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0'>Cookie Policy</a>
           you may receive SMS notification from us.You can opt out at any time
            </div>
        </div>
        <button className='sig' type='submit'>Sign Up</button>
        <br></br>
        <h5 className='already'>Already have an account

        </h5>
        </div>
    </div>)
}
export default Facebook;