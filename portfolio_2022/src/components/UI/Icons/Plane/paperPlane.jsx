import React, { useEffect } from 'react';
import { anime } from 'react-anime';

export const PaperPlane = () => {
  const animation = () => {
    anime({
      targets: '.morph',
      points: [
        //Debut
        {
          value:
            '460.677372 125.296036 108.040017 24.8652344 112.454079 125.296036',
        },
        //Fin
        {
          value:
            '460.677372 157.296036 112.758683 38.9677241 119.111306 145.719727',
        },
      ],
      easing: 'easeInOutQuad',
      duration: 3000,
      loop: true,
    });

    anime({
      targets: '.morph2',
      points: [
        //Debut
        { value: '108.040017 24.8652344 168.780251 0 460.677372 125.296036' },
        //Fin
        { value: '112.758683 38.9677241 184.146186 0 460.677372 157.296036' },
      ],
      easing: 'easeInOutQuad',
      duration: 3000,
      loop: true,
    });

    anime({
      targets: '.morph3',
      points: [
        //Debut
        { value: '75.3147561 38.1354167 460.677372 125.296036 0 68.5184024' },
        //Fin
        { value: '78.250435 57.8044647 460.677372 157.296036 0 100.518402' },
      ],
      easing: 'easeInOutQuad',
      duration: 3000,
      loop: true,
    });
  };

  useEffect(() => {
    animation();
  });

  return (
    <svg
      width="461"
      height="158"
      viewBox="0 0 462 158"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        fill="#CE7A9A"
        className="morph"
        points="460.677372 156.7969003567883 112.68508130034341 38.74775362289701 119.00746664747965 145.4011584954987"
      ></polygon>
      <polygon
        fill="#F3F2F4"
        className="morph2"
        points="112.68508130034341 38.74775362289701 183.90650831719458 0 460.677372 156.7969003567883"
      ></polygon>
      <polygon
        fill="#F3F2F4"
        className="morph3"
        points="78.20464431324955 57.497667108598705 460.677372 156.7969003567883 0 100.01926636302751"
      ></polygon>
    </svg>
  );
};
