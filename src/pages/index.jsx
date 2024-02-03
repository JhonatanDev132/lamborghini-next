import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";



export default function Home() {
    return (
      <>
      <Head>
        <title>Lamborghini</title>
        <meta name="keywords" content="Lamborghini, cars" />
      </Head>

        <StyledSection>
          <h1>Direzione <br /> cor tauri</h1>
        </StyledSection>
        <StyledModels>
          <h2>Models</h2>

          <div>
          <p>See our models</p>

          <Link href="/models">Models</Link>
          </div>
        </StyledModels>
        <StyledNews>
          <h2>News</h2>

          <h3>Lamborghini World</h3>

        </StyledNews>
      </>
    );
  }

const StyledSection = styled.section`

  @media screen and (max-width: 426px) {
    background-image: url("/image/revuelto.jpeg") ;
      background-repeat: no-repeat;
      height: 500px;
      min-height: 100vh;
      background-size: cover;
      background-position: center;


    h1 {
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
  }

  @media screen and (max-width: 768px) {
    background-image: url("/image/revuelto.jpeg") ;
      background-repeat: no-repeat;
      height: 500px;
      min-height: 100vh;
      background-size: cover;
      background-position: center;


    h1 {
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
  }

  @media screen and (min-width: 768px) {
      background-image: linear-gradient(to right, #27262652, transparent),url("/image/revuelto.jpeg") ;
      background-repeat: no-repeat;
      height: 500px;
      min-height: 100vh;
      background-size: cover;
      background-position: center;

      h1 {
        color: white;
        font-family: var(--fonte-nav);
        font-weight: 700;
        font-size: 6rem;
        line-height: 6rem;
        letter-spacing: 0.1rem;


        padding-top: 29rem;
        text-align: left;
        margin-left: 10rem;
        text-transform: uppercase;
  }


  }
`;

const StyledModels = styled.section`

@media screen and (max-width: 426px) {

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

h2 {
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

a {
  /* margin-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem; */

  padding: 10px;

  border: none;
  border-radius: 2px;

  text-align: center;

  font-size: 24px;
  color: white;
  text-decoration: none;

  width: 6rem;

  background-color: #000;
}

div {
  display: flex;
  flex-direction: column;
}
}

@media screen and (max-width: 768px) {

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

h2 {
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

a {
  /* margin-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem; */

  padding: 10px;

  border: none;
  border-radius: 2px;

  text-align: center;

  font-size: 24px;
  color: white;
  text-decoration: none;

  width: 6rem;

  background-color: #000;
}

div {
  display: flex;
  flex-direction: column;
}
}

@media screen and (min-width: 768px) {
background-image: linear-gradient(to right, #2525258c, transparent), url("/image/museum.webp");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
height: 700px;
min-height: 50vh;

display: flex;
justify-content: space-around;
flex-direction: column;
padding-left: 2rem;

h2 {
font-size: 1.6rem;
font-family: var(--fonte-nav);
font-weight: 600;



letter-spacing: 0.1rem;
text-transform: uppercase;

color: White;


margin-left: 5rem;
}

p {
  /* padding-left: 1rem; */
  /* padding-top: 10rem; */
  margin-bottom: 1rem;
  font-size: 18px;
  font-family: var(--fonte-nav);
  font-weight: 500;
  text-transform: uppercase;

  color: white;



}

a {
  /* margin-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem; */

  padding: 10px;

  border: none;
  border-radius: 2px;

  font-size: 24px;
  font-family: var(--fonte-nav);

  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;


  width: 8rem;

  background-color: #fff;
}

div {
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
}
}
`;

const StyledNews = styled.section`
@media screen and (max-width: 425px) {
h2 {
  font-size: 1.6rem;
  font-family: var(--fonte-nav);
  font-weight: 600;



  letter-spacing: 0.1rem;
  text-transform: uppercase;

  color: black;


  padding-top: 1.5rem;

  margin-left: 1rem;
}

h3 {
  font-size: 2.6rem;
  font-family: var(--fonte-nav);
  font-weight: 600;


  margin-left: 1rem;

  padding-top: 1rem;
}
}

@media screen and (max-width: 768px) {
h2 {
  font-size: 1.6rem;
  font-family: var(--fonte-nav);
  font-weight: 600;



  letter-spacing: 0.1rem;
  text-transform: uppercase;

  color: black;


  padding-top: 1.5rem;

  margin-left: 1rem;
}

h3 {
  font-size: 2.6rem;
  font-family: var(--fonte-nav);
  font-weight: 600;


  margin-left: 1rem;

  padding-top: 1rem;
  text-transform: uppercase;
}
}

@media screen and (min-width: 768px) {
h2 {
  font-size: 1.6rem;
  font-family: var(--fonte-nav);
  font-weight: 700;



  letter-spacing: 0.1rem;
  text-transform: uppercase;


  color: black;


  padding-top: 1.5rem;
  margin-left: 20rem;
}

h3 {
  font-size: 5rem;
  font-family: var(--fonte-texto);
  font-weight: 600;



  text-transform: uppercase;


  margin-left: 10rem;

  padding-top: 1rem;
}
}
`;