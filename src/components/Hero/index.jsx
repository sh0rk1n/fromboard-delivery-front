import React from 'react';
import {
  Col,
  Container,
  FloatingLabel,
  Image,
  Form,
  Button,
  Row,
} from 'react-bootstrap';
import styles from './Hero.module.scss';
const Hero = () => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Col className={styles.content}>
          <Col>
            <div className={styles.description}>
              <div>
                <h1>
                  Без проблемная доставка купленных вещей из США, Европы и Азии
                  в Россию
                </h1>
                <p className={styles.description}>
                  Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш
                  сервис позволяет вам легко и удобно заказывать товары со всего
                  мира и получать их в России
                </p>
              </div>
              <Image src={'../img/hero.jpg'} />
            </div>
          </Col>
          <Col>
            <div className={styles.calculator}>
              <h2>Калькулятор доставки</h2>
              <p>
                Посчитайте, сколько будет стоить перевозка <br /> покупки из
                зарубежа
              </p>
              <div style={{ padding: '0 100px' }}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Имя"
                  className={styles.input}
                >
                  <Form.Control type="name" placeholder="Danil" />
                </FloatingLabel>

                <Row className="d-flex" xxl={2} lg={2}>
                  <Col xxl={6}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Почта"
                      className={styles.input}
                    >
                      <Form.Control type="text" placeholder="Почта" />
                    </FloatingLabel>
                  </Col>
                  <Col xxl={6}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Телефон"
                      className={styles.input}
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>{' '}
                  </Col>
                </Row>
                <Row className="d-flex" xxl={2} lg={2}>
                  <Col xxl={6}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Почта"
                      className={styles.input}
                    >
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        style={{ height: '10px' }}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xxl={6}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Телефон"
                      className={styles.input}
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>{' '}
                  </Col>
                </Row>

                <Row className="d-flex" xxl={2} lg={2}>
                  <Col xxl={6}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Почта"
                      className={styles.input}
                    >
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        style={{ height: '10px' }}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xxl={6}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Телефон"
                      className={styles.input}
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>{' '}
                  </Col>
                </Row>
                <Row className="d-flex" xxl={2} lg={2}>
                  <Col xxl={6}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Почта"
                      className={styles.input}
                    >
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        style={{ height: '10px' }}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xxl={6}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Телефон"
                      className={styles.input}
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>{' '}
                  </Col>
                </Row>

                <Button>Заказать расчёт</Button>
              </div>
            </div>
          </Col>
        </Col>
      </Container>
    </section>
  );
};

export default Hero;