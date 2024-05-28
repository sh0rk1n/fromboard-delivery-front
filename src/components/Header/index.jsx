import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.root}>
      <Container className={styles.container}>
        <Row className={styles.top}>
          <Col xxl={4} xl={4} className="d-flex align-items-center">
            <Image
              className={styles.myImg}
              width={50}
              height={74}
              src="../img/logo.svg"
            />
            <h2>FromBoard Delivery</h2>
          </Col>
          <Col
            xxl={8}
            xl={8}
            className="d-flex align-items-center justify-content-end "
          >
            <div className={styles.description}>
              <p>Доставляем товары из заграницы в Россию </p>
              <p>Стоимость от 550 рублей за заказ </p>
              <p>1$ = 93₽ | 1€ = 99₽ | 1¥ = 13₽ </p>
            </div>
            <div className={styles.number}>
              <h3>+7 (800) 123 45-67</h3>
              <p>Звонки по России бесплатны</p>
            </div>
          </Col>
        </Row>
        <Row className={styles.nav}>
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="me-auto">
                <Nav.Link href="">Калькулятор</Nav.Link>
                <Nav.Link href="">О нас</Nav.Link>
                <Nav.Link href="">Гарантии</Nav.Link>
                <Nav.Link href="">Отзывы</Nav.Link>
              </Nav>
            </Navbar.Collapse>{' '}
            <Button bsPrefix={styles.customBtn}>Оставить заявку</Button>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
