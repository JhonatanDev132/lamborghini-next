import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";

export default function Models() {
    return (
      <>
      <Head>
        <title>Models - Lamborghinni</title>
        <meta name="keywords" content="Lamborghini, models, cars" />
      </Head>
        <StyledSection>
          <h1>Lamborghini</h1>
          <h2>Models</h2>
        </StyledSection>
        <StyledRevuelto>


        <div className="flex">
          <div className="imagem">

          <Image
          src="/image/olha-ela-denovo.webp"
          width={340}
          height={320}
          alt="Lamborghini Revuelto Linda"
          />

          </div>
          <div className="lado">
          <Image
          src="/image/revuelto.webp"
          width={320}
          height={30}
          alt="Logo da Revuelto"
          />



          <p>
          The Revuelto is the beginning of a new era for Lamborghini, who has harnessed the power of hybridization technology to create the first HPEV (High Performance Electrified Vehicle). Responding to the need for sustainability and powerful performance, the Lamborghini Revuelto rewrites all paradigms and represents a technical masterpiece beyond anyone’s imagination. The iconic V12 engine finds a new life in this futuristic automotive masterwork that delivers unparalleled performance and driving emotions.
          </p>
          </div>
        </div>
        </StyledRevuelto>

        <StyledHuracan>



        <div className="flex">

          <div className="imagem">

          <Image
          src="/image/huracan.webp"
          width={340}
          height={320}
          alt="Huracan linda a mais bela de todas"
          />

          </div>

          <div className="lado">
          <Image
          src="/image/huracán_logo.webp"
          width={320}
          height={20}
          alt="Logo da Huracán"
          />




          <p>
            From our past, we've learned perfection. This is how the first model of the Lamborghini Huracán was born. More performance, more control, more innovation. The Huracán is equipped with a powerful V10 engine and the latest technologies to perform at its absolute best. Engineered to guarantee the best performance and control under any driving condition, it's easy to take to the limit, not to mention extremely fun, thanks to technology like the Lamborghini Doppia Frizione (LDF) dual clutch gearbox and the electronically-controlled four-wheel drive. Enjoy the best driving experience, ever. Discover all the Lamborghini Huracán models
          </p>
          </div>

        </div>
        </StyledHuracan>
        <StyledUrus>


        <div className="flex">
          <div className="imagem">

          <Image
          src="/image/urus.webp"
          width={310}
          height={310}
          alt="Melhor SUV do mundo"
          />

          </div>
          <div className="lado">
          <div className="urus">
          <Image
          src="/image/urus-logo.webp"
          width={200}
          height={30}
          alt="Logo da Urus"
          />
          </div>

          <p>
          Lamborghini Urus is the world’s first Super Sport Utility Vehicle, in which luxury, sportiness and performance meet comfort and versatility. It offers best-in-class driving dynamics, alongside its unmistakable elegance of design. Urus embodies the characteristics of multiple souls: sporty, elegant and off-road, and has a suitability for everyday driving in a range of environments. With its surprisingly distinct engine sound, combined with high performance, Lamborghini Urus is anything but typical.
          </p>
          </div>
        </div>
        </StyledUrus>
      </>
    );
  }

const StyledSection = styled.section`
h1 {
  color: white;
  font-family: var(--fonte-nav);
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.01rem;
}

h2 {
  color: white;
  font-family: var(--fonte-nav);
  text-transform: uppercase;
}

@media screen and (max-width: 425px) {

  background-image: url("/image/gate_models_hero_01_m.webp");
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  min-height: 75vh;

  h1 {
    font-size: 18px;
    padding-top: 9rem;
    margin-left: 1rem;
  }

  h2 {
    font-size: 35px;
    margin-left: 1rem;
    padding-top: 1rem;
    letter-spacing: -0.1rem;
  }

}

@media screen and (max-width: 768px) {

background-image: url("/image/gate_models_hero_01_m.webp");
background-size: cover;
background-repeat: no-repeat;
background-position: 100% 50%;
height: 500px;
min-height: 100vh;

h1 {
  font-size: 18px;
  padding-top: 10rem;
  margin-left: 5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
}

h2 {
  font-size: 35px;
  margin-left: 5rem;
  padding-top: 0.5rem;
  font-weight: 600;
  font-size: 2.5rem;
  letter-spacing: -0.1rem;
}

}


@media screen and (min-width: 768px) {

background-image: url("/image/gate_models_hero_01_big.webp");
background-size: cover;
background-repeat: no-repeat;
background-position: 10% 50%;
height: 500px;
min-height: 100vh;


h1 {
  font-size: 2rem;
  padding-top: 10rem;
  margin-left: 5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
}

h2 {
  font-size: 4rem;
  margin-left: 5rem;
  padding-top: 0.5rem;
  font-weight: 600;
  letter-spacing: -0.1rem;
}

}

`;


const StyledRevuelto = styled.section`
padding-left: 2rem;
padding-right: 2rem;

    .imagem{
      text-align: center;
    }



    img {

      padding-top: 2rem;
    }


    p {
      font-family: var(--fonte-texto);
      font-weight: 300;
      margin-top: 2rem;
      padding-bottom: 1rem;
    }

    @media screen and (max-width: 768px) {
      padding-left: 2rem;
      padding-right: 2rem;

    .imagem{
      text-align: center;
    }

    img {
      padding-top: 2rem;
    }


    p {
      font-family: var(--fonte-texto);
      font-weight: 300;
      margin-top: 2rem;
      padding-bottom: 1rem;
    }
    }

    @media screen and (min-width: 768px) {
      padding-left: 2rem;
      padding-right: 2rem;
      margin-bottom: 1rem;


    .flex {
      display: flex;
      justify-content: space-around;
    }

    .lado {
      display: flex;
      flex-direction: column;
      padding-left: 2rem;
      padding-top: 5rem;
    }

    img {
      padding-top: 2rem;
    }


    p {
      font-family: var(--fonte-texto);
      font-weight: 300;
      margin-top: 2rem;
      padding-bottom: 1rem;
    }
    }
`;

const StyledHuracan = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;

  .imagem{
      text-align: center;
    }

    img {
      padding-top: 2rem;
    }

    p {
      font-family: var(--fonte-texto);
      font-weight: 300;
      margin-top: 2rem;
      padding-bottom: 1rem;
    }

    @media screen and (max-width: 768px) {
      padding-left: 2rem;
      padding-right: 2rem;

    .imagem{
      text-align: center;
    }

    img {
      padding-top: 2rem;
    }


    p {
      font-family: var(--fonte-texto);
      font-weight: 300;
      margin-top: 2rem;
      padding-bottom: 1rem;
    }
    }

    @media screen and (min-width: 768px) {

      margin-bottom: 1rem;
      padding-left: 2rem;
      padding-right: 2rem;


    .flex {
      display: flex;
      flex-direction: row-reverse;
    }

    .lado {
      display: flex;
      flex-direction: column;
      padding-right: 2rem;
      padding-top: 5rem;
    }

    img {
      padding-top: 2rem;
    }


    p {
      font-family: var(--fonte-texto);
      font-weight: 300;
      margin-top: 2rem;
      padding-bottom: 1rem;
    }
    }
`;

const StyledUrus = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;

  .imagem{
      text-align: center;
    }

  .urus {
    margin-left: 2rem;
  }

    img {
      padding-top: 2rem;
    }

    p {
      font-family: var(--fonte-texto);
      font-weight: 300;
      margin-top: 2rem;
      padding-bottom: 1rem;
    }

    @media screen and (max-width: 768px) {
      padding-left: 2rem;
      padding-right: 2rem;

    .imagem{
      text-align: center;
    }

    img {
      padding-top: 2rem;
    }


    p {
      font-family: var(--fonte-texto);
      font-weight: 300;
      margin-top: 2rem;
      padding-bottom: 1rem;
    }
    }

    @media screen and (min-width: 768px) {
      padding-left: 2rem;
      padding-right: 2rem;


    .flex {
      display: flex;
      padding-bottom: 3rem;
    }

    .urus {
      margin-left: 0;
    }

    .lado {
      display: flex;
      flex-direction: column;
      padding-left: 2rem;
      padding-top: 4rem;
    }

    img {
      padding-top: 2rem;
    }


    p {
      font-family: var(--fonte-texto);
      font-weight: 300;
      margin-top: 2rem;
      padding-bottom: 1rem;
    }
    }
`;