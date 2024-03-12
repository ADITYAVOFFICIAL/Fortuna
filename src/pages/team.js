import React, { useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdityaImg from '../assets/aditya.png';
import SahilImg from '../assets/sahil.png';
import VishalImg from '../assets/vishal.png';
import ShankyImg from '../assets/shanky.png';
import '../App.css'; // Import the CSS file containing the glowing effect class

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
                        className="glowy"
                        style={{ marginBottom: '20px' }}
                    >
                        <Card.Meta title="Aditya Verma" description="Project Manager & Developer" />
                    </Card>
                </Col>
                <Col span={6} data-aos="fade-up" data-aos-delay="100">
                    <Card
                        cover={<img alt="Team Member 2" src={SahilImg} />}
                        className="glowy"
                        style={{ marginBottom: '20px', marginLeft: '20px' }}
                    >
                        <Card.Meta title="Sahil Adhikari" description="Developer" />
                    </Card>
                </Col>
                <Col span={6} data-aos="fade-up" data-aos-delay="200">
                    <Card
                        cover={<img alt="Team Member 3" src={VishalImg} />}
                        className="glowy"
                        style={{ marginBottom: '20px', marginLeft: '20px' }}
                    >
                        <Card.Meta title="Vishal Mohan Nair" description="Developer" />
                    </Card>
                </Col>
                <Col span={6} data-aos="fade-up" data-aos-delay="300">
                    <Card
                        cover={<img alt="Team Member 4" src={ShankyImg} />}
                        className="glowy"
                        style={{ marginBottom: '20px', marginLeft: '20px' }}
                    >
                        <Card.Meta title="Adityasankar Sengupta" description="Developer" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Team;
