import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavBar from '../components/Navbar';


const Home = () => {
    const [count, setCount] = useState(0)


    return (
        <>
            <div className='vh-100 card-overlay'>
                <Container fluid className='vh-100 bg-image d-flex flex-column'
                    >

                    <Row className='fixed-top'><NavBar/></Row>
                    <Row className='flex-grow-1 p-5'>
                        <div className='d-flex flex-column justify-content-center'>
                            <div className='p-2'>
                                <h1 className='font-primary' style={{fontSize: '5rem', whiteSpace: 'nowrap'}}>José R. <br/> Hernández</h1>
                            </div>
                            <div className="p-2">
                                <p className='font-secondary multicolor fs-4' style={{ textTransform: 'uppercase', fontWeight: '600'}}>Frontend Developer</p>
                            </div>
                            {/* <div className="mt-3 p-2">
                                <p className='fs-5 font-secondary'>"Excellence is not a destination, it is a continuous journey of improvement."</p>
                            </div> */}
                        </div>
                    </Row>
                    <a href="http://www.freepik.com"
                        className='text-end text-light text-decoration-none pb-1 fw-light'
                        style={{ fontSize: '12px', opacity: '15%'}}>
                        Designed by fullvector / Freepik
                    </a>

                </Container>
            </div>

        </>
    )
}

export default Home