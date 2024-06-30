import React from 'react'
import './Homepage.css'
import Logo from '../../Assets/logo.png'
import Name from '../../Assets/Codeink1.png'

function Homepage() {
  return (
    <div>
        <div className="container">

{/* navstarts */}
          <div className="nav_container">
           <div>
           <img id="logo" src={Logo} alt="" />
           </div>
            <div>
            <button className="contact_but">Contact me</button>
            </div>
          </div>

{/* navends */}



{/* photo starts */}

          <div className="photo_container">
            



          </div>



{/* photo ends */}

{/* greeting & name starts */}
          <div className="name_container">
            <div>
              <h3 id="greetings">hey there ! </h3>
            </div>
            <div>
              <h3 id="myname">I'm Jawahar</h3>
            </div>

            <div className="cta_container">
            
            <div>
                <button className="resume_download_button"><b>Download Resume</b></button>
            </div>
            <div>
                <button className="project_button"><b> See my works</b></button>
            </div>
 
          </div>
          </div>

{/* greeting & name ends */}


{/* about starts */}

          <div className="about_container">

            
            <div>              
              <h2>
                Hi, Nice to meet you!
              </h2>
            </div>


            <div>
              <p>Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Sapiente officiis nobis 
                consequatur unde maiores velit exercitationem, 
                nemo eaque laboriosam inventore fugit provident
                soluta incidunt suscipit accusamus ad nam facere.</p>
            </div>


          </div>

{/* about ends */}


{/* skillset starts */}


    {/* designcard */}
          <div className="design_card">
           <div>
           <h1>
              Designer
            </h1>
            <h3>
            I enjoy simple content, organized designs, 
            and interactions that make sense
            </h3>
            
           </div>

            <div className="list_container">
              <div className="design_skills">

                <ul className="skills">
                  <li className="list_headings">Things that excites me</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Java Script</li>
                </ul>
              </div>
               <div className="dev-skills">
               <ul className="tools">
                  <li className="list_headings">Design tools i use</li>
                  <li>Figma</li>
                  <li>Sketch</li>
                  <li>Photoshop</li>
                  <li>Illlustator</li>
                </ul>
               </div>
            </div>
          </div>



 {/* devcard */}
 <div className="dev_card">
           <div>
           <h1>
              Designer
            </h1>
            <h3>
            I enjoy simple content, organized designs, 
            and interactions that make sense
            </h3>
            
           </div>

            <div className="list_container">
              <div className="design_skills">

                <ul className="skills">
                  <li className="list_headings">Things that excites me</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Java Script</li>
                </ul>
              </div>
               <div className="dev-skills">
               <ul className="tools">
                  <li className="list_headings">Design tools i use</li>
                  <li>Figma</li>
                  <li>Sketch</li>
                  <li>Photoshop</li>
                  <li>Illlustator</li>
                </ul>
               </div>
            </div>
          </div>


{/* skillset ends */}






{/* contact starts */}


    <div className="contact_container">
        <div>
        <h3 id="contact_heading"><b>Contact me</b></h3>
        </div>

       <div>
       <form action="" className="contact_form">
         <div className="name_mail">
         <div>
         <label htmlFor="name">Name</label><br />
         <input id="name" type="text" placeholder="Enter your name"/>
         </div>
         
         
         <div>
         <label htmlFor="mail">Email-ID</label><br />
         <input type="email" placeholder="Enter your Email"/>
         </div>
         </div>
       
          <div>
            <label htmlFor="description">Description</label><br />
            <textarea name="" id=""></textarea>
          </div>

          <div>
          <button className="form_button">Submit</button>
          </div>
        </form>

       
       </div>



    </div> 




{/* contact ends */}


<footer>


  <img src={Name} alt="" />
 <p> Reach me on</p>

</footer>









        </div>
    </div>
  )
}

export default Homepage