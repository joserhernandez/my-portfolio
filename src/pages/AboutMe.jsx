import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from "../components/Card";
import { useState } from 'react'


const AboutMe = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <Container fluid className='vh-100 bg-color d-flex flex-column'>
                {/* <Row>
                    <NavBar />
                </Row> */}
                <Row className='flex-grow-1 p-5'>
                    <Col className="d-flex flex-column justify-content-around p-4">
                        <h2 className="font-primary multicolor" style={{ fontSize: '4rem', color: '#E19864', whiteSpace: 'nowrap' }}>
                            {"<"}About me{"/>"}
                        </h2>
                        <p className="font-secondary fs-5 fw-light">
                            Hello, I'm José Roberto Hernández, an enthusiastic student and aspiring software developer
                            focusing on Frontend development. I recently graduated with a degree in Computer Engineering
                            from the Universidad Centroamericana José Simeón Cañas (UCA). <br/>                           I enjoy creating user web interfaces that are not only functional but also visually appealing.
                            Additionally, I've worked on Android projects and data analysis, viewing each project as an opportunity
                            to learn something new. While I'm still in the learning process, I aim to contribute to the software world
                            with my enthusiasm and dedication. <br/>
                            In my free time, I love watching movies, spending quality time with friends, and practicing bowling.
                        </p>
                    </Col>
                    <Col className=" d-flex flex-column p-4 justify-content-center align-items-center">
                        <h3 className="font-primary fw-medium text-center mb-3">Skills</h3>  
                        <div className="d-flex justify-content-center align-content-center flex-wrap">                          
                            <Cards srcImage={"/src/assets/logos/HTML5.svg"} title={"HTML"}/>
                            <Cards srcImage={"/src/assets/logos/CSS3.svg"} title={"CSS"}/>
                            <Cards srcImage={"/src/assets/logos/JavaScript.svg"} title={"JavaScript"}/>
                            <Cards srcImage={"/src/assets/logos/Bootstrap.svg"} title={"Bootstrap"}/>
                            <Cards srcImage={"/src/assets/logos/React.svg"} title={"React"}/>
                            <Cards srcImage={"/src/assets/logos/Node.js.svg"} title={"Node.js"}/>
                            <Cards srcImage={"/src/assets/logos/PostgresSQL.svg"} title={"PostgreSQL"}/>
                            <Cards srcImage={"/src/assets/logos/Kotlin.svg"} title={"Kotlin"}/>
                            <Cards srcImage={"/src/assets/logos/Java.svg"} title={"Java"}/>
                            <Cards srcImage={"/src/assets/logos/CSharp.svg"} title={"C#"}/>
                            <Cards srcImage={"/src/assets/logos/Git.svg"} title={"Git"}/>
                            <Cards srcImage={"/src/assets/logos/Figma.svg"} title={"Figma"}/>                         
                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default AboutMe