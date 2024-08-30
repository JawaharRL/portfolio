import { useRef,useEffect,useState, lazy} from 'react'
import { useInView } from 'react-intersection-observer';
import React from 'react'
import Swal from 'sweetalert2'
import { LineWave } from 'react-loader-spinner';
import './Homepage.css'
import Logo from '../../Assets/logo.png'
import figmalogo from '../../Assets/figma.svg'
import pslogo from '../../Assets/photoshop.svg'
import ailogo from '../../Assets/illustrator.svg'
import htmllogo from '../../Assets/html5.svg'
import csslogo from '../../Assets/css3.svg'
import reactlogo from '../../Assets/react.svg'
import pic from '../../Assets/pic.png'
import Top from '../../Assets/top.svg'
import Name from '../../Assets/Codeink1.png'
import portfoliocode from '../../Assets/portfoliocode.png'
import erpcode from '../../Assets/erpcode.png'
import erpimg from '../../Assets/erpimg.webp'
import taxiappimg from '../../Assets/taxiappimg.webp'
import clothwebimg from '../../Assets/clothwebimg.webp'
import weatherappimg from '../../Assets/weatherappimg.webp'
import taxiappsignup from '../../Assets/taxiappsignup.jpeg'
import restaurantposter from '../../Assets/restaurantposter.webp'
import  footwearposter from '../../Assets/footwearposter.webp'
import  clothposter from '../../Assets/clothposter.png'
import footerlogo from '../../Assets/footer logo.png'
// import Projectcard from '../../Componants/Projectcard/Projectcard.js'
const Projectcard =lazy(()=>import ('../../Componants/Projectcard/Projectcard.js'))

function Homepage() {
  const weatherapplink="https://www.figma.com/design/pFmN8Sc2sOfUAgjHEiKkhd/Weather-app?node-id=2-2&t=QZdVzgGzG5qPbzde-1"
  const taxiappsignuplink="https://www.figma.com/design/xE4Uvd5oZ1BGlx72JAB4AG/Tagyourtaxi?node-id=0-1&t=nPiTF1VPxBxbIS9i-1"
  const erpimglink="https://www.figma.com/design/k08kclPuAvi9VwdvQT6nEj/ERP?node-id=470-262&t=pyS2g6s8lLx309vc-1"
  const clothwebimglink="https://www.figma.com/design/RRthXppkyvAgzAnLXbvQse/Clothweb?node-id=0-1&t=O8V6zuQBXPXhMNYB-1"
  const taxiappimglink="."

  const restaurantposterlink="/restaurantposter.webp"

   const erprepolink="https://github.com/JawaharRL/erp-frontend.git"
  const Portfoliorepolink="https://github.com/JawaharRL/portfolio.git"


  const [hoveredRole, setHoveredRole] = useState();
  const [loading, setLoading] = useState(false);
  const { ref:myRef, inView: isvisible} = useInView();
  const [showTopBtn, setShowTopBtn] = useState(false);
  const contactSectionRef = useRef(null);
  const workSectionRef = useRef(null);
  

  const pdfUrl = "JawaharRL-Resume.pdf"; 

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'JawaharRL-Resume.pdf'; // Specify the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
  
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "f12d1f9f-b20c-43fd-96a3-498f648cc0ee");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    setLoading(false);
    if (res.success) {
      Swal.fire({
        title: "success",
        text: "Message sent succesfully!",
        icon: "success"
        
      });
    }
  };

  
  

  const scrollToContact = () => {
    const yCoordinate = contactSectionRef.current.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};
  const scrollToWork= () => {
    const yCoordinate = workSectionRef.current.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};





  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
        <div className="container">

{/* navstarts */}
          <div className="nav_container">
           <div>
           <img id="logo" src={Logo} alt="" />
           </div>
            <div>
            <button className="contact_but" onClick={scrollToContact}>Contact me</button>
            </div>
          </div>

{/* navends */}

{/* bgstarts */}




{/* bgends */}

{/* photo starts */}



<div className={`photo_container ${hoveredRole}`}>
      <div
        className="roles designer"
        onMouseEnter={() => setHoveredRole('designer-hover')}
        onMouseLeave={() => setHoveredRole(null)}
      >
        Designer
        <div  className="logo-set1">
        <img className="design_logos" src={figmalogo} alt="" />
        <img  className="design_logos" src={pslogo} alt="" />
        <img  className="design_logos" src={ailogo} alt="" />
        </div>
      </div>
      <div className="image_container">
        <img className="profile_pic" src={pic} alt="Profile" />
      </div>
      <div
        className="roles developer"
        onMouseEnter={() => setHoveredRole('developer-hover')}
        onMouseLeave={() => setHoveredRole(null)}
      >
        Developer
        <div  className="logo-set2">
        <img className="design_logos" src={htmllogo} alt="" />
        <img  className="design_logos" src={csslogo} alt="" />
        <img  className="design_logos" src={reactlogo} alt="" />
        </div>
      </div>
      <div class="circle circle1"></div>
<div class="circle circle2"></div>
<div class="circle circle3"></div>
<div class="circle circle4"></div>
<div class="circle circle5"></div>
    </div>


 



{/* photo ends */}

{/* greeting & name starts */}
          <div className="name_container">
            <div>
              <h3 ref={myRef} id="greetings">hey there ! </h3>
            </div>
            <div>
              <h3 id="myname">I'm Jawahar</h3>
            </div>

            <div className="cta_container">
            
            <div> 

                <button className="resume_download_button" onClick={handleDownload }><b>Download Resume</b></button>
            </div>
            <div>
                <button className="project_button" onClick={scrollToWork}><b> See my works</b></button>
            </div>
 
          </div>
          </div>

{/* greeting & name ends */}


{/* about starts */}
        <div>
        <h3 id="heading"><b>About me</b></h3>
        </div>

          <div className="about_container">

            
            <div>              
              <h2 className="aboutme_heading">
                Hi, Nice to meet you!
              </h2>
            </div>


            <div className="aboutme_body">
              <p>
              Hello!, I am Jawahar, a UI/UX and graphic design enthusiast specializing in Adobe Photoshop, Illustrator, and Figma. With a strong foundation in design techniques and a commitment to continuous learning.
              </p>
            </div>


          </div>

{/* about ends */}


{/* skillset starts */}


    {/* designcard */}
    <div>
        <h3 id="heading"><b>Skill set</b></h3>
        </div>
          <div className="design_card">
           <div className="skill">
           <h1 id="skill_heading">
              Designer
            </h1>
            <h3  id="skill_description">
            I enjoy simple content, organized designs, 
            and interactions that make sense
            </h3>
            
           </div>

            <div className="list_container">
              <div className="design_skills">

                <ul className="skills">
                  <li className="list_headings">Things that excites me</li>
                  <li>Web design</li>
                  <li>App design</li>
                  <li>Logo making</li>
                </ul>
              </div>
               <div className="design_tools">
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
           <div className="skill">
           <h1 id="skill_heading">
           Frontend Development
            </h1>
            <h3 id="skill_description">
            Crafting code from the beginning and watching ideas 
            unfold in browsers excites me.
            </h3>
            
           </div>

            <div className="list_container">
              <div className="dev_skills">

                <ul className="skills">
                  <li className="list_headings">Things that excites me</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Java Script</li>
                </ul>
              </div>
               <div className="dev_tools">
               <ul className="tools">
                  <li className="list_headings">Design tools i use</li>
                  <li>Bootstrap</li>
                  <li>React JS</li>
                  <li>Tailwind css</li>
                  {/* <li>Illlustator</li> */}
                </ul>
               </div>
            </div>
          </div>


{/* skillset ends */}






{/* WORKS starts */}
        <div ref={workSectionRef }>
            <h3 id="heading"><b>My works</b></h3>
        </div>
        <h3 className="catagory">UI Projects</h3>
        <div className="projects">

        <Projectcard title="Cloth website" button_name="View figma" workimg={clothwebimg} goto={clothwebimglink}/> 
        <Projectcard title="ERP Application" button_name="View figma" workimg={erpimg} goto={erpimglink}/>
        <Projectcard title="Taxi app signup flow" button_name="View figma" workimg={taxiappsignup} goto={taxiappsignuplink}/>
        <Projectcard title="Weather app" button_name="View figma" workimg={weatherappimg} goto={weatherapplink} />
        <Projectcard title="Taxi app" button_name="View figma"  workimg={taxiappimg} goto={taxiappimglink}/>
        </div>
        <h3 className="catagory">Poster Designs</h3>
        <div className="projects">
          
        <Projectcard title="Restaurant poster" button_name="View" workimg={restaurantposter} goto={restaurantposterlink}/>
        <Projectcard title="Footwear poster" button_name="View" workimg={footwearposter}/>
        <Projectcard title="Clothshop poster" button_name="View" workimg={clothposter}/>
       
        </div>
        <h3 className="catagory">Frontend Projects</h3>
        <div className="projects">
          
        <Projectcard title="ERP Application" button_name="open repo" workimg={erpcode} goto={erprepolink}/>
        <Projectcard title="Portfolio" button_name="open repo" workimg={portfoliocode}  goto={Portfoliorepolink}/>

        </div>
{/* WORKS ends */}
{/* contact starts */}


    <div className="contact_container"  >
        <div ref={contactSectionRef}>
        <h3 id="heading"><b>Contact me</b></h3>
        </div>

       <div>
       <form action="" onSubmit={onSubmit}>
        <div  className="contact_form">
         <div className="name">
         <label id="name_label" htmlFor="name">Name</label><br />
         <input id="name" type="text" name='name' placeholder="Enter your name" required/>
         </div>
         
         
         <div className="email">
         <label id="email_label" htmlFor="email">Email-ID</label><br />
         <input type="email" name='email' placeholder="Enter your Email" required/>
         </div>
      
  
          <div className="description">
            <label id="description_label" htmlFor="message">Description</label><br />
            <textarea name="message" placeholder="Your message" required></textarea>
          </div>
          </div>
          {loading && < LineWave className="hi"color={'#7510F7'} loading={loading} size={50}  />}
          <div>
          <button type="submit" className="form_button">Send</button>
          </div>
          
         
        </form>
     
       
      

       
       </div>



    </div> 



{/* contact ends */}

{showTopBtn && (
          <img src={Top} className="gototop" onClick={goToTop} />
        )}
<footer>


  <img  id="footer_logo" src={footerlogo} alt="" />
  <img  id="footer_name" src={Name} alt="" />
 <p id="social_link"> Designed and Developed by Jawahar RL</p>

</footer>









        </div>
    </div>
  )
}

export default Homepage
