import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import styles from './Footer.module.scss';
export const Footer = () => {
  return (
    <footer className={styles.root}>
      <Container>
        <Row className="d-flex align-items-center">
          <Col xxl={3} className={styles.leftContent}>
            <div>
              <Image src="../img/logo.svg" />
              <h2>FromBoard Delivery</h2>
            </div>
            <p>2023© Ни одно право не защищено, копируйте сколько влезет </p>
          </Col>
          <Col xxl={6} className={styles.nav}>
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="me-auto">
                  <Nav.Link href="">Калькулятор</Nav.Link>
                  <Nav.Link href="">О нас</Nav.Link>
                  <Nav.Link href="">Гарантии</Nav.Link>
                  <Nav.Link href="">Отзывы</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col xxl={3} className={styles.rightContent}>
            <div>
              <h3>+7 (800) 123 45-67</h3>
              <p>Звонки по России бесплатны</p>
            </div>
          </Col>
        </Row>
        <Row className={styles.offert}>
          <Col xxl={8}>
            <p>
              НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ. Просим обратить внимание на то, что
              цены носят информационный и ознакомительный характер, а значит ни
              в какой мере не являются публичной офертой, которая определена в
              ст. 437 ГК РФ. Вся информация на сайте может содержать неточности,
              орфографические и иные ошибки, она не является полной,
              окончательно и исчерпывающей
            </p>
          </Col>
          <Col xxl={4} className={styles.creater}>
            <p>Created by sh0rk1n</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
