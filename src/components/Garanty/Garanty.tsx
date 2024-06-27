import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import styles from './Garanty.module.scss';

export const Garanty = () => {
  return (
    <section className={styles.root}>
      <Container>
        <h1>Гарантии качества</h1>
        <p>
          Наши гарантии качества включают в себя полный спектр документов,
          необходимых <br /> для ввоза и вывоза товаров, а также для успешного
          бизнеса на мировом рынке. <br /> Мы предоставляем вам надёжность и
          уверенность
        </p>
        <Row xxl={4} xl={2}>
          <Col>
            <Image src="../img/sample-1.svg" />
            <h3>Свидетельство о регистрации в РФ</h3>
          </Col>
          <Col>
            <Image src="../img/sample-2.svg" />
            <h3>Свидетельство о регистрации в США</h3>
          </Col>
          <Col>
            <Image src="../img/sample-3.svg" />
            <h3>Свидетельство о регистрации в Китае</h3>
          </Col>
          <Col>
            <Image src="../img/sample-4.svg" />
            <h3>Свидетельство о регистрации в Великобритании</h3>
          </Col>
        </Row>
        <div className={styles.myCustomBtn}>
          <Button>Показать больше документов</Button>
        </div>
      </Container>
    </section>
  );
};
