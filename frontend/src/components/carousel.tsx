import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

const Carousel: React.FC = () => {
  return (
    <BootstrapCarousel>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-50"
          src="/card_01.png"
        />
        <BootstrapCarousel.Caption>
          <h3>1</h3>
          <p>KB국민 My WESH 카드</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-50"
          src="/card_02.png"
        />
        <BootstrapCarousel.Caption>
          <h3>2</h3>
          <p>신한카드 Mr.Life</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-50"
          src="/card_03.png"
        />
        <BootstrapCarousel.Caption>
          <h3>3</h3>
          <p>알띁교통플러스 카드</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
};

export default Carousel;
