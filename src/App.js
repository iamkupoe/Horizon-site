import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App main-container" style={{position:"relative", minHeight:"100vh", display:"block", paddingBottom:"420px"}}>
      <div className="flex-container" style={{backgroundColor:"blue", width:"100%", height:"50px", display:"flex"}}>
        <div className="row logo">
          <img src="images/logo.png" style={{height:"40px", width:"", textAlign:"left", marginLeft:"0px", paddingTop:"5px"}}></img>
        </div>
        {/*Navbar flags*/}
        <div className="row flags" style={{with:"33%"}}>
          <img src="images/gh.png" style={{height:"30px", width:"40px", marginLeft:"450px", marginTop:"5px", marginRight:"5px"}}></img>
          <img src="images/ng.png" style={{height:"30px", width:"40px", marginRight:"5px"}}></img>
          <img src="images/kn.png" style={{height:"30px", width:"40px"}}></img>
        </div>
        {/*About us*/}
        <div className="row about-us">
          <a href="#" style={{color:"white", width:"", height:"20px", marginLeft:"500px", textDecoration:"none", marginTop:"20px", fontFamily:"Sans Serif", fontSize:"18px"}}>About Us</a>
        </div>
      </div>
      <div className="carousel">
        <div className="row slide-container">
           {/*Full width carousel*/}
           <div className="mySlide fade">
             <img src="images/hori.jpg" style={{width:"100%", height:"400px"}}></img>
           </div>
        </div>
      </div>
      {/*Thumbnails*/}
      <div className="text">
      <h3>PLANS</h3> </div>
      <div className="plans" style={{width:"100%", height:"50px", display:"flex", flexDirection:"row"}}>
         <div className="row plan-plan" style={{height:"10vh"}}>
         <div className="thumbnail" style={{border:"1px solid lightgray", marginLeft:"10px"}}>
           <img src="images/virtual.jpg" style={{width:"320px", height:"150px"}}></img>
             <div className="caption">
             <h3 id="edit">VIRTUAL OFFICES</h3>
                <p>Our virtual office allows your business to get our location address,
                phone servces and also you become a member
                of our community with benefits such 
                as access to our meeting rooms.</p>
            </div>
         </div>
         </div>
         <div className="row plan-plan" style={{height:"10px"}}>
         <div className="thumbnail" style={{border:"1px solid lightgray", marginLeft:"10px"}}>
         <img src="images/custom1.jpg" style={{width:"320px", height:"150px"}}></img>
             <div className="caption">
             <h3 id="edit">CUSTOM OFFICES</h3>
                <p style={{textAlign:"left"}}>Our customized offices offer a grea
                 location for your business and your
                 can customize your office to suit your
                 preferences Also you become a
                 member of our community with benefits
                 such as access to our meeting rooms. </p>
            </div>
         </div>
         </div>
         <div className="row plan-plan" style={{height:"10px"}}>
         <div className="thumbnail" style={{border:"1px solid lightgray", marginLeft:"10px"}}>
         <img src="images/serviced.jpg" style={{width:"320px", height:"150px"}}></img>
             <div className="caption">
             <h3 id="edit">SERVICED OFFICES</h3>
                <p>Our serviced offices offer a great location
                 for your business and we provide services such
                 as internet utitilities and offers from
                 our partners. Also, you become a
                 member of our community with benefits
                 such as access to our meeting rooms.</p>
            </div>
         </div>
         </div>
         <div className="row plan-plan" style={{height:"10px"}}>
         <div className="thumbnail" style={{border:"1px solid lightgray", marginLeft:"10px"}}>
         <img src="images/meeting.jpg" style={{width:"320px", height:"150px"}}></img>
             <div className="caption">
             <h3 id="edit">MEETING ROOMS</h3>
                <p>Our meeting rooms offer a great location for
                 your meetings with your clients or business partners.
                 We provide presentation equipment and coffee.
                 Also, you become amember of our community with benefits
                 such as access to our meeting rooms.</p>
            </div>
         </div>
         </div>
      </div> 
           {/*Footer*/}
      <div className="footer">
      <div className="row flex-container" style={{backgroundColor:"blue", position:"absolute", bottom:"0", width:"100%", height:"170px", display:"flex"}}>
           <div className="kenya" style={{width:"30%", height:"50px"}}>
              <h5 id="f-left" style={{color:"red"}}>VISIT US IN KENYA</h5>
              <h6 id="s-left" style={{color:"lightgreen"}}>Nairobi, Kenya</h6> 
              <p id="left" style={{color:"white"}}>
                Belgravia Center,14 Riverside drive,
                4th floor,off Riverside Drive
                Hanover Center,14 Riverside Drive
                6th floor,4th Riverside Drive
              </p>
              
            </div>
            <div className="Ghana" style={{width:"30%", height:"50px"}}>
              <h5 id="f-left" style={{color:"red"}}>VISIT US IN GHANA</h5>
              <h6 id="s-left" style={{color:"lightgreen"}}>Accra, Ghana</h6> 
              <p id="left" style={{color:"white"}}>
              One Airport square,Airport City,
              8th floor
              </p>
              
            </div>
            <div className="Nigeria" style={{width:"30%", height:"50px"}}>
              <h5 id="f-left" style={{color:"red"}}>VISIT US IN NIGERIA</h5>
              <h6 id="s-left" style={{color:"lightgreen"}}>Lagos, Nigeria</h6> 
              <p id="left" style={{color:"white"}}>
              Sterling Bank Building
              </p>
              
            </div>
        </div>
      </div>
        
    </div>
  );
}

export default App;
