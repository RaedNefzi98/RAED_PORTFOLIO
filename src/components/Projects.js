import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import MSC from "../assets/img/MSC.png";
import AngWS from "../assets/img/AngWS.png";
import KRYPT from "../assets/img/KRYPT.png";
import ECOM from "../assets/img/ECOM.png";
import FORKY from "../assets/img/FORKI.jpg";
import MICRO from "../assets/img/MICROS.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Full Stack MERN Social Network",
      description: "Express.js/MongoDB & React.js/MaterialUI",
      imgUrl: MSC,
      url: "https://youtu.be/TwFEfeguP1Q"
    },
    {
      title: "Angular Product Store with Stripe payment",
      description: "Express.js & Angular ",
      imgUrl: AngWS,
      url: "https://www.youtube.com/watch?v=Mp8lqADs50U&t=1s&ab_channel=raed.N"
    },
    {
      title: "Full Stack Modern Ecommerce WEB-APP with Stripe payment",
      description: "Sanity & React.js/Next.js",
      imgUrl: ECOM,
      url: "https://www.youtube.com/watch?v=-n-m97waePY&ab_channel=raed.N"
    },

    {
      title: "WEB3 Crypto Transaction Application",
      description: "Solidity/Hardhat & React.js/TailWind",
      imgUrl: KRYPT,
      url: "https://github.com/RaedNefzi98/WEB3_TRANSACTION_APP"
    },
    
    {
      title: "RECIPE SEARCH APP",
      description: "Javascript & Scss & Html",
      imgUrl: FORKY,
      url: "https://github.com/RaedNefzi98/RECIPE_SEARCH_APP"
    },
    {
      title: "Product Ordering APP",
      description: "Spring Docker Kafka RabbitMq ElasticSearch",
      imgUrl: MICRO,
      url: "https://github.com/RaedNefzi98/SPRING_ADVANCED_MICROSERVICES_ARCHITECTURE"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
