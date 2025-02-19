/* 
 Este componente se utiliza para mostrar un banner desplazable.
 Props:
  - `message`: El mensaje que se mostrará en el banner.
  - `speed`: La velocidad del desplazamiento del texto. Default es 50.
  - `direction`: La dirección del desplazamiento. Puede ser "left" o "right". Default es "left".
  - `gradient`: Si se debe aplicar un gradiente de desvanecimiento. Default es `false`.
  - `pauseOnHover`: Si debe pausarse el desplazamiento cuando el cursor pasa por encima. Default es `false`.
 */

import Marquee from "react-fast-marquee";

const MarqueeBanner = ({
  message,
  speed = 40,
  direction = "left",
  gradient = false,
  pauseOnHover = false,
}) => (
  <Marquee
    gradient={gradient}
    speed={speed}
    direction={direction}
    pauseOnHover={pauseOnHover}
  >
    <p style={{ marginRight: "80px" }}>{message}</p>
    <p style={{ marginRight: "80px" }}>{message}</p>
    <p style={{ marginRight: "80px" }}>{message}</p>
  </Marquee>
);

export default MarqueeBanner;
