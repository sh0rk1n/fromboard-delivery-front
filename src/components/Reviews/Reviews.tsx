import React from 'react';
import styles from './Reviews.module.scss';
import { Col, Container, Image, Row } from 'react-bootstrap';
export const Reviews = () => {
  return (
    <section className={styles.root}>
      <Container>
        <h1>Отзывы</h1>

        <Row xxl={2} xl={2} lg={1} sm={1}>
          <Col>
            <div className={styles.review}>
              <h3>
                Я заказала последний iPhone из США через ваш сервис, и доставка
                прошла быстро и без каких‑либо проблем. Гарантии качества и
                надёжная упаковка сделали мой опыт покупки невероятно позитивным
              </h3>
              <div>
                <p>Анна</p>
                <Image src="../img/quotes.svg" />
              </div>
            </div>
          </Col>
          <Col>
            <div className={`${styles.review} ${styles.secondRev}`}>
              <h3>
                Я уже несколько лет заказываю дизайнерскую одежду из Франции
                через ваш сервис, и он никогда меня не подводил. Важно иметь
                надёжную компанию, которая позаботится о вашем заказе
                и предоставит все необходимые документы для ввоза в Россию
              </h3>
              <div>
                <p>Алексей</p>
                <Image src="../img/quotes.svg" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
