import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import styles from './Header.module.scss';
import { Logo } from '../../shared/ui/Logo/Logo';

export const Header = () => {
  return (
    <header className={styles.root}>
      <Container>
        <Row className={styles.top}>
          <Col
            xxl={4}
            xl={4}
            lg={6}
            sm={6}
            className="d-flex align-items-center"
          >
            <Logo />
          </Col>
          <Col
            xxl={8}
            xl={8}
            lg={6}
            sm={6}
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
          <Navbar className="d-flex align-items-center" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="d-flex" id="basic-navbar-nav ">
              <Nav className="me-auto d-flex">
                <Nav.Link href="">Калькулятор</Nav.Link>
                <Nav.Link href="">О нас</Nav.Link>
                <Nav.Link href="">Гарантии</Nav.Link>
                <Nav.Link href="">Отзывы</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button bsPrefix={styles.customBtn}>Оставить заявку</Button>
          </Navbar>
        </Row>
        <Row>
          <div className={styles.descriptionBottom}>
            <p>Доставляем товары из заграницы в Россию </p>
            <p>Стоимость от 550 рублей за заказ </p>
            <p>1$ = 93₽ | 1€ = 99₽ | 1¥ = 13₽ </p>
          </div>
        </Row>
      </Container>
    </header>
  );
};
