import React from 'react';
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from 'react-bootstrap';
import styles from './ContactForm.module.scss';
export const ContactForm = () => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <h1>Остались вопросы?</h1>
        <div className={styles.wrappper}>
          <Row className="d-flex" xxl={2} lg={2} sm={2}>
            <Col xxl={6}>
              <FloatingLabel
                controlId="floatingPassword"
                label="Имя"
                className={styles.input}
              >
                <Form.Control type="text" placeholder="Имя" />
              </FloatingLabel>
            </Col>
            <Col xxl={6}>
              <FloatingLabel
                controlId="floatingPassword"
                label="Почта"
                className={styles.input}
              >
                <Form.Control type="text" placeholder="Почта" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex" xxl={2} lg={2} sm={2}>
            <Col xxl={6}>
              <FloatingLabel
                controlId="floatingPassword"
                label="Телефон"
                className={styles.input}
              >
                <Form.Control type="text" placeholder="Телефон" />
              </FloatingLabel>
            </Col>
            <Col xxl={6}>
              <FloatingLabel
                controlId="floatingPassword"
                label="Тема вопроса"
                className={styles.input}
              >
                <Form.Control type="text" placeholder="Тема вопроса" />
              </FloatingLabel>{' '}
            </Col>
          </Row>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Сообщение..."
            className={styles.input}
          >
            <Form.Control
              placeholder="Leave a comment here"
              style={{ height: 150 }}
            />
          </FloatingLabel>
          <div className={styles.myCustomBtn}>
            <Button>Оставить заявку</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
