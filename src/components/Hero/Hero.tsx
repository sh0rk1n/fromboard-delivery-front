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
import hero from '../../shared/assets/img/hero.jpg'
import styles from './Hero.module.scss';
import form from '../ContactForm/ContactForm.module.scss';

export const Hero = () => {
  return (
    <section className={styles.root}>
      <Container>
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
              <Image src={hero} />
            </div>
          </Col>
          <Col>
            <div className={styles.calculator}>
              <h2>Калькулятор доставки</h2>
              <p>
                Посчитайте, сколько будет стоить перевозка <br /> покупки из
                зарубежа
              </p>
              <div className={styles.label}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Имя"
                  className={form.input}
                >
                  <Form.Control type="name" placeholder="Danil" />
                </FloatingLabel>

                <Row className="d-flex" xxl={2} lg={2} sm={2}>
                  <Col xxl={6}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Почта"
                      className={form.input}
                    >
                      <Form.Control type="text" placeholder="Почта" />
                    </FloatingLabel>
                  </Col>
                  <Col xxl={6}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Телефон"
                      className={form.input}
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>{' '}
                  </Col>
                </Row>
                <Row className="d-flex" xxl={2} lg={2} sm={2}>
                  <Col xxl={6}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Почта"
                      className={form.input}
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
                      className={form.input}
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>{' '}
                  </Col>
                </Row>

                <Row className="d-flex" xxl={2} lg={2} sm={2}>
                  <Col xxl={6}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Почта"
                      className={form.input}
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
                      className={form.input}
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>{' '}
                  </Col>
                </Row>
                <Row className="d-flex" xxl={2} lg={2} sm={2}>
                  <Col xxl={6}>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Почта"
                      className={form.input}
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
                      className={form.input}
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
