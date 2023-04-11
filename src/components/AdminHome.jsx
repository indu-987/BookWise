import "../styles/adminhome.css"
import hr from "../imagen/hrt.png"
import lb from "../imagen/lib.png"
import ac from "../imagen/account.png"
import sr from "../imagen/sr.png"
import nag from "../images/mainlogo.jpg"
import h1 from "../images/h1.jpg"
import h2 from "../images/h2.jpg"
import h3 from "../images/h3.jpg"
import h5  from "../images/h5.jpg"
import  gp from "../images/gp.jpg"
import all from "../images/allione.jpg"
import f1 from "../images/fall.jpg"



const AdminHome = () => {
    return ( 
        <div className="adminHome">
           <section>
            {/*navbar started  */}
              <div className="nav">
               <img src={nag} alt="" />
                <h1 style={{color:" #019875",marginLeft:10,marginTop:30,fontSize:30}}>Library</h1>
               <div className="comp">
               <ul className="list">
                <li><img src={hr} alt="" /><h1>Donate</h1></li>
                <li><img src={lb} alt="" /><h1>Library</h1></li>
                <li><img src={ac} alt="" /><h1>Account</h1></li>
                <li><img src={sr} alt="" /><h1>Search</h1></li>
               </ul> 
                </div>
              </div>
            {/*navbar ended */}

            {/*1sr section starts 1st image section */}
            <div className="firstpage">
            <img src={h1} alt="" />
            <div className="content">
            <p>NatGeo Photographer</p>
            <h5 style={{fontSize:18,fontWeight:"lighter"}} >On Thursday, April 20 at 7:00 pm, hear from award-winning
               photographer Pete McBride on the value of protecting our lands and waters.</h5>
            </div>
            </div>
            {/*1sr section ends */}


            {/*2nd sections started   2nd image section*/}
            <div className="secondsection">
              <img src={h2} alt="" style={{height:300, marginTop:160 ,marginLeft:150 ,width:800}} />
              <div className="para">
                <p>HELP</p>
                <p className="p1heading">Resume Writing Help</p>
                <p>Do you find yourself back on the job market? Get help writing or tidying up your resume from Greenwich Library's Business Librarian. They’ll help you format
                   and include key points so that you'll land the interview!</p>
              </div>
            </div>
            {/*2nd section ended */}

            {/*3rd section started  vector image*/}
            <div className="third">
            <img src={h3} alt="" />
            <div className="para1">
              <p style={{marginLeft:430}}>April Events</p>
               <p style={{fontSize:20 ,marginLeft:100,fontWeight:10}}>Join us for a full slate of programming and
                events at the Greenwich Libraries! These printable one-page Library 
                calendars are fridge-ready.</p>
            </div>
            </div>
            {/*3rd section ended */}


            {/*4th section stated  grid content */}
            <div className="fourth">
            
            <div className="fourth1">
              <h1 style={{fontSize:40}}>Tax Help</h1>
              <p style={{fontSize:20}}>On Saturday, April 8 from 9:00 am  2:00 pm,
                 drop in for one of our last sessions of one-on-one 
                 tax prep assistance with AARP volunteers.</p>
                 </div>
                 <div className="fourth2">
              <h1 style={{fontSize:40}}> Interviewing</h1>
              <p style={{fontSize:20}}>On Monday, April 10 at 1:00 pm, give yourself the edge over 
              the other candidates during the interview process with career coach Noelle Gross.</p>
                 </div>
                 <div className="fourth3">
              <h1 style={{fontSize:40}}>Senior Living</h1>
              <p style={{fontSize:20}}>On Wednesday, April 12 at 6:00 pm, learn about different options,
               best practices, and resources available for the care of a senior loved one.</p>
                 </div>
                 <div className="fourth4">
              <h1 style={{fontSize:40}}>Grow a Plant from Seed</h1>
              <p style={{fontSize:20}}>On Thursday, April 13 at 7:00 pm at Byram Shubert Library, learn the steps from seed to garden with Ellen Zampino.</p>
                 </div>
            </div>
           {/*4th section ended */}

           {/*5th section started 3rd image started */}
           <div className="fifth">

           <img src={h5} alt="" style={{height:300, marginTop:160 ,marginLeft:150 ,width:800}} />
              <div className="para2">
                <p style={{fontSize:15}}>DONATE</p>
                <p className="p2heading">Become a Volunteer</p>
                <p style={{fontSize:20}}>Find Your Place! Become a part of the amazing Friends of Greenwich Library team to 
                  help bring exceptional programming and resources to your community.</p>
              </div>

           </div>
           {/*5th setion ended */}

           
           {/*6th section started   book list started */}
           <div className="sixth">
            <h1 >2023 Business Books To Read</h1>
            <div className="sixthimg">
              <img src={gp} alt="" />
              <img src={all} alt="" />
              <img src={f1} alt="" />


            </div>
            <img src="" alt="" />
           </div>
           {/*6th section ended */}






           </section>
        </div>
     );
}
 
export default AdminHome;