import React, { useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdityaImg from '../assets/aditya.png';
import SahilImg from '../assets/sahil.png';
import VishalImg from '../assets/vishal.png';
import ShankyImg from '../assets/shanky.png';
import '../App.css'; // Import the CSS file containing the glowing effect class
import { size } from 'viem';

const Team = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Team</h1>
            <Row gutter={16} justify="center">
                <Col span={6} data-aos="fade-up">
                    <Card
                        cover={<img alt="Team Member 1" src={AdityaImg} />}
                        className="glowy font-[Oswald]"
                        style={{ marginBottom: '20px' }}
                    >
                        <Card.Meta style={{fontSize:"17px"}} title={<span className="names">Aditya Verma</span>} description={<>
                            Project Manager & Developer<br />
                            <a className='iconn' href="https://github.com/ADITYAVOFFICIAL" target="_blank" rel="noopener noreferrer">GitHub</a> | <a className='iconn' href="https://www.linkedin.com/in/aditya-verma-real/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </>} />
                    </Card>
                </Col>
                <Col span={6} data-aos="fade-up" data-aos-delay="100">
                    <Card
                        cover={<img alt="Team Member 2" src={SahilImg} />}
                        className="glowy font-[Oswald]"
                        style={{ marginBottom: '20px', marginLeft: '20px' }}
                    >
                        <Card.Meta style={{fontSize:"17px"}} title={<span className="names">Sahil Adhikari</span>} description={<>
                            Developer <br />
                            <a className='iconn' href="https://github.com/sahilopl" target="_blank" rel="noopener noreferrer">GitHub</a> | <a className='iconn' href="https://www.linkedin.com/in/sahil-adhikari-57b445250/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </>} />
                    </Card>
                </Col>
                <Col span={6} data-aos="fade-up" data-aos-delay="200">
                    <Card
                        cover={<img alt="Team Member 3" src={VishalImg} />}
                        className="glowy font-[Oswald]"
                        style={{ marginBottom: '20px', marginLeft: '20px' }}
                    >
                        <Card.Meta style={{fontSize:"17px"}} title={<span className="names">Vishal Mohan Nair</span>} description={<>
                            Developer <br />
                            <a className='iconn' href="https://github.com/whis2903" target="_blank" rel="noopener noreferrer">GitHub</a> | <a className='iconn' href="https://www.linkedin.com/in/vishal-mohan-nair-6130a1177/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </>} />
                    </Card>
                </Col>
                <Col span={6} data-aos="fade-up" data-aos-delay="300">
                    <Card
                        cover={<img alt="Team Member 4" src={ShankyImg} />}
                        className="glowy font-[Oswald]"
                        style={{ marginBottom: '20px', marginLeft: '20px' }}
                    >
                        <Card.Meta style={{fontSize:"17px"}} title={<span className="names">Adityasankar Sengupta</span>} description={<>
                            Developer <br />
                            <a className='iconn' href="https://github.com/adityasankar5" target="_blank" rel="noopener noreferrer">GitHub</a> | <a className='iconn' href="https://www.linkedin.com/in/adityasankar-sengupta/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </>} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Team;
