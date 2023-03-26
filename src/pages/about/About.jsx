import Header from '../../components/Header'
import './about.css'
import HeaderImage from '../../images/header_bg_1.jpg'
import StroyImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'


const About = () => {
  return (
    <>
        <Header title='About' image={HeaderImage}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Libero, reprehenderit. Doloremque earum fuga sint deleniti
             illum pariatur ipsum cupiditate, ut error id cumque. Ut est
            eaque cupiditate at maxime hic.
        </Header>

        <section className="about_story">
            <div className="container about_story-container">
                <div className="about_section-image">
                    <img src={StroyImage} alt="Our_Story_Image" />
                </div>
                <div className="about_section-content">
                    <h1>Our Story</h1>
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Tempore voluptas magni ab quia doloribus, non autem sint excepturi, 
                       aliquid, deserunt culpa. Labore porro voluptate, placeat voluptatem 
                       magnam voluptatum rem cum.
                    </p>
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Tempore voluptas magni ab quia doloribus, non autem sint excepturi, 
                       aliquid, deserunt culpa. Labore porro voluptate, placeat voluptatem 
                       magnam voluptatum rem cum.
                    </p>
                </div>
            </div>
        </section>
        
        <section className="about_Vision">
            <div className="container about_Vision-container">
               
                <div className="about_section-content">
                    <h1>Our Vision</h1>
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Tempore voluptas magni ab quia doloribus, non autem sint excepturi, 
                       aliquid, deserunt culpa. Labore porro voluptate, placeat voluptatem 
                       magnam voluptatum rem cum.
                    </p>
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Tempore voluptas magni ab quia doloribus, non autem sint excepturi, 
                       aliquid, deserunt culpa. Labore porro voluptate, placeat voluptatem 
                       magnam voluptatum rem cum.
                    </p>
                </div>
                <div className="about_section-image">
                    <img src={VisionImage} alt="Our_Vision_Image" />
                </div>
            </div>
        </section>
    </>
    
    
  )
}

export default About