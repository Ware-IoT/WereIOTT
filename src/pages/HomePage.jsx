import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { kelasTerbaru } from "../data-20240730T034603Z-001/data/index";
import CardKeunggulan from "../components/CardKeunggulan"

import Keunggulan1 from "../assets/img/12.jpg"
import Keunggulan2 from "../assets/img/ab.jpg"
import Keunggulan3 from "../assets/img/k.png"
const HomePage = () => {
  // Mengambil tiga elemen pertama dari kelasTerbaru
  const topThreeKelas = kelasTerbaru.slice(0, 3);

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <div>
                <h1 className="mb-4">Temukan <br /> <span>Solusi Pergudanganmu </span> <br /> Bersama Kami </h1>
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, labore perferendis quam magni at sunt?</p>
                <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2">Lihat Produk</button>
                <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2">Lihat Promo</button>
              </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <div>
                <img src={HeroImage} alt="Hero" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className=" kelas w-100 min-vh-100">
        <Container>
          <Row>
            <h1 className="text-center fw-bold">Produk Terbaru</h1>
            <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum tempore quaerat, quasi odio dolor commodi.</p>
          </Row>
          <Row>
            <div className=" CardKeunggulan row justify-content-center">
            <div className="Card col-4">
              <CardKeunggulan image = {Keunggulan1}/>
            </div>
            <div className="Card col-4">
              <CardKeunggulan image = {Keunggulan2}/>
            </div>
            <div className="Card col-4">
              <CardKeunggulan image = {Keunggulan3}/>
            </div>
            </div>
            
            
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
