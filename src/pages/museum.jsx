import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";

export default function HeadOffice() {
    return (
      <>
      <Head>
        <title>Museum - Lamborghini</title>
        <meta name="keywords" content="Lamborghini, Museum" />
      </Head>
        <StyledSection>
          <h1>Automobili Lamborghini</h1>

          <h2>Museum</h2>
        </StyledSection>
        <StyledNews_1>
          <div className="imagem">
          <Image
          src="/image/museum_s_01_m.webp"
          width={340}
          height={300}
          alt="Melhor SUV do mundo"
          />

          </div>

          <h2>Automobili Lamborghini Museum</h2>

          <p>
            The fascinating history, iconic models and tours of the production lines inside the Automobili Lamborghini Museum reveal 60 years of innovation that are projecting Lamborghini into the future.
            From the first visionary creations of the genius of Ferruccio Lamborghini, such as the Miura and the Countach, followed by the more recent and exclusive super sports cars like the Huracán Performante, the Aventador SVJ, and the few-offs Centenario, Sesto Elemento and Veneno, to arrive today with the first Lamborghinis with hybrid technology, the Sian and Countach LPI 800-4.
            The Automobili Lamborghini Museum offers an interactive experience, also provided by the new driving simulator that amplifies the emotions and discovery of the vehicles on display.
          </p>

          <p>
            Open every day
          </p>

          <p>
            From October 1 to April 30, from 9:30 a.m. to 6 p.m. (last entrance at 5 p.m.)
            From May 2 to September 30, from 9:30 a.m. to 7 p.m. (last entrance at 6 p.m.)
          </p>
        </StyledNews_1>
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

  @media screen and (max-width: 426px) {
    background-image: linear-gradient(to right, #262626, transparent), url("/image/museum-mobile.webp");
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    min-height: 100vh;

    h1 {
      font-size: 18px;
      padding-top: 13rem;
      margin-left: 0.8rem;
      letter-spacing: 0.1rem;
    }

    h2 {
      font-size: 35px;
      margin-left: 0.8rem;
      padding-top: 1rem;
      letter-spacing: -0.1rem;
    }
  }
`;

const StyledNews_1=styled.section`
  padding-left: 1rem;
  padding-right: 1rem;

    .imagem{
      text-align: center;
    }

    img {
      padding-top: 2rem;
    }

    h2 {
      font-size: 24px;
      font-family: var(--fonte-nav);
      font-weight: bold;
      text-transform: uppercase;

      padding-top: 2rem;

    }

    p {
      font-family: var(--fonte-texto);
      font-weight: 300;
      margin-top: 2rem;

      line-height: 1.7rem;
    }
`;