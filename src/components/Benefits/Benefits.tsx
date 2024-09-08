import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import icon_1 from "../../shared/assets/img/icon-1.svg"
import icon_2 from "../../shared/assets/img/icon-2.svg"
import icon_3 from "../../shared/assets/img/icon-3.svg"
import icon_4 from "../../shared/assets/img/icon-4.svg"
import icon_5 from "../../shared/assets/img/icon-5.svg"
import icon_6 from "../../shared/assets/img/icon-6.svg"
import cls from './Benefits.module.scss';

export const Benefits = () => {
  return (
    <section className={cls.root}>
      <Container>
        <h1>Наши преимущества</h1>
        <Row xxl={3} xl={2} lg={2} md={1} className="mt-4">
          <Col className={cls.benefits}>
            <Image src={icon_1} />
            <div>
              <h2>Растоможка груза</h2>
              <p>
                Мы берём на себя все формальности и бумажную волокиту, связанную
                с растаможкой груза
              </p>
            </div>
          </Col>
          <Col className={cls.benefits}>
            <Image src={icon_2} />
            <div>
              <h2>Надёжная упаковка</h2>
              <p>
                Все товары упаковываются нашими специалистами с особым вниманием
                к деталям, гарантируя, что они дойдут в безопасности и в
                отличном состоянии
              </p>
            </div>
          </Col>
          <Col className={cls.benefits}>
            <Image src={icon_3} />
            <div>
              <h2>Быстро и выгодно</h2>
              <p>
                Мы предлагаем быструю и выгодную доставку, чтобы вы могли
                насладиться покупками как можно скорее.
              </p>
            </div>
          </Col>
          <Col className={cls.benefits}>
            <Image src={icon_4} />
            <div>
              <h2>Удобный сервис</h2>
              <p>
                Стремимся сделать процесс доставки максимально удобным для вас,
                чтобы опыт остался приятным и беззаботным
              </p>
            </div>
          </Col>
          <Col className={cls.benefits}>
            <Image src={icon_5} />
            <div>
              <h2>Прозрачность работы</h2>
              <p>
                Мы предоставляем полный контроль над каждым этапом доставки,
                от момента заказа до момента прибытия заказа
              </p>
            </div>
          </Col>
          <Col className={cls.benefits}>
            <Image src={icon_6} />
            <div>
              <h2>Страхование груза</h2>
              <p>
                Наше страхование обеспечивает полную защиту и покрытие почти все
                неприятные и неожиданные ситуации
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
