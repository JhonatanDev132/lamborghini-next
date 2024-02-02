import Head from "next/head";
import styled from "styled-components";



export default function Home() {
    return (
      <>
      <Head>
        <title>Lamborghini</title>
        <meta name="keywords" content="Lamborghini, cars" />
      </Head>

        <StyledSection>
          <h2>Direzione <br /> cor tauri</h2>
        </StyledSection>
        <StyledModels>
          <h3>Models</h3>

          <div>
          <p>See our models</p>

          <button>Models</button>
          </div>
        </StyledModels>
        <StyledNews>
          <h3>News</h3>

          <h2>Lamborghini <br /> World</h2>

        </StyledNews>
      </>
    );
  }

const StyledSection = styled.section`

      background-image: url("/image/revuelto.jpeg") ;
      background-repeat: no-repeat;
      height: 500px;
      min-height: 95vh;
      background-size: cover;
      background-position: center;


    h2 {
        color: white;
        font-family: var(--fonte-nav);
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 3rem;
        letter-spacing: -0.1rem;


        position: relative;
        top: 12rem;
        text-align: left;
        padding-left: 1.5rem;
        text-transform: uppercase;

    }
`;

const StyledModels = styled.section`

background-image: url("/image/museum.webp");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
height: 600px;
min-height: 50vh;

display: flex;
justify-content: space-around;
flex-direction: column;
padding-left: 2rem;

h3 {
font-size: 1.6rem;
font-family: var(--fonte-nav);
font-weight: 600;



letter-spacing: 0.1rem;
text-transform: uppercase;

color: black;


padding-top: 1.5rem;
padding-left: 1rem;
}

p {
  /* padding-left: 1rem; */
  /* padding-top: 10rem; */
  margin-bottom: 1rem;
  font-size: 18px;
  font-family: var(--fonte-nav);
  font-weight: 500;
  text-transform: uppercase;

  color: black;



}

button {
  /* margin-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem; */

  padding: 10px;

  border: none;
  border-radius: 2px;

  font-size: 24px;
  color: white;

  width: 6rem;

  background-color: #000;
}

div {
  display: flex;
  flex-direction: column;
}
`;

const StyledNews = styled.section`

h3 {
  font-size: 1.6rem;
  font-family: var(--fonte-nav);
  font-weight: 600;



  letter-spacing: 0.1rem;
  text-transform: uppercase;

  color: black;


  padding-top: 1.5rem;

  margin-left: 1rem;
}

h2 {
  font-size: 2.6rem;
  font-family: var(--fonte-nav);
  font-weight: 600;


  margin-left: 1rem;

  padding-top: 1rem;
}
`;