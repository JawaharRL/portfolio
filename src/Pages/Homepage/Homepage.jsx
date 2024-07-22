import { useRef,useEffect,useState} from 'react'
import { useInView } from 'react-intersection-observer';
import React from 'react'
import Swal from 'sweetalert2'
import { LineWave } from 'react-loader-spinner';
import './Homepage.css'
import Logo from '../../Assets/logo.png'
import Top from '../../Assets/top.svg'
import Name from '../../Assets/Codeink1.png'
import footerlogo from '../../Assets/footer logo.png'

function Homepage() {
  const [loading, setLoading] = useState(false);
  const { ref:myRef, inView: isvisible} = useInView();
  const [showTopBtn, setShowTopBtn] = useState(false);
  const contactSectionRef = useRef(null);
  const workSectionRef = useRef(null);
  // const resumeUrl = 'J:\\portfolio\\src\\Resume\\JawaharRL.pdf';

  const pdfUrl = "/JawaharRl.pdf"; // Update this path to your PDF file

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'JawaharRL.pdf'; // Specify the name for the downloaded file
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



{/* photo starts */}

          <div className="photo_container">
            



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
    <div>
        <h3 id="heading"><b>Skill set</b></h3>
        </div>
          <div className="design_card">
           <div className="skill">
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
           <h1>
           Frontend Development
            </h1>
            <h3>
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

          <div>
          <button type="submit" className="form_button">Send</button>
          </div>
          
         
        </form>
     
        {loading && <LineWave color={'#062DF6'} loading={loading} size={50} />}
      

       
       </div>



    </div> 



{/* contact ends */}

{showTopBtn && (
          <img src={Top} className="gototop" onClick={goToTop} />
        )}
<footer>


  <img  id="footer_logo" src={footerlogo} alt="" />
  <img  id="footer_name" src={Name} alt="" />
 <p id="social_link"> Reach me on</p>

</footer>









        </div>
    </div>
  )
}

export default Homepage