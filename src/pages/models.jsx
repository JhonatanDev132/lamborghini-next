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
          <Image
          src="/image/olha-ela-denovo.webp"
          width={360}
          height={300}
          alt="Lamborghini Revuelto Linda"
          />
          <Image 
          src="/image/revuelto.webp"
          width={360}
          height={30}
          alt="Logo da Revuelto"
          />

          <p>
          The Revuelto is the beginning of a new era for Lamborghini, who has harnessed the power of hybridization technology to create the first HPEV (High Performance Electrified Vehicle). Responding to the need for sustainability and powerful performance, the Lamborghini Revuelto rewrites all paradigms and represents a technical masterpiece beyond anyone’s imagination. The iconic V12 engine finds a new life in this futuristic automotive masterwork that delivers unparalleled performance and driving emotions.
          </p>
        </StyledRevuelto>

        <StyledHuracan>

          <hr />

          <Image 
          src="/image/huracan.webp"
          width={360}
          height={300}
          alt="Huracan linda a mais bela de todas" 
          />
          <Image 
          src="/image/huracán_logo.webp"
          width={360}
          height={20}
          alt="Logo da Huracán"
          />
          
          <p>
            From our past, we've learned perfection. This is how the first model of the Lamborghini Huracán was born. More performance, more control, more innovation. The Huracán is equipped with a powerful V10 engine and the latest technologies to perform at its absolute best. Engineered to guarantee the best performance and control under any driving condition, it's easy to take to the limit, not to mention extremely fun, thanks to technology like the Lamborghini Doppia Frizione (LDF) dual clutch gearbox and the electronically-controlled four-wheel drive. Enjoy the best driving experience, ever. Discover all the Lamborghini Huracán models
          </p>
        </StyledHuracan>
        <StyledUrus>

          <hr />

          <Image 
          src="/image/urus.webp"
          width={360}
          height={300}
          alt="Melhor SUV do mundo" 
          /> 

          <Image 
          src="/image/urus-logo.webp"
          width={200}
          height={30}
          alt="Logo da Urus"
          />

          <p>
          Lamborghini Urus is the world’s first Super Sport Utility Vehicle, in which luxury, sportiness and performance meet comfort and versatility. It offers best-in-class driving dynamics, alongside its unmistakable elegance of design. Urus embodies the characteristics of multiple souls: sporty, elegant and off-road, and has a suitability for everyday driving in a range of environments. With its surprisingly distinct engine sound, combined with high performance, Lamborghini Urus is anything but typical.
          </p>
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
`;

const StyledRevuelto = styled.section`
padding-left: 2rem;
padding-right: 2rem;

    img {
      text-align: center;
      padding-top: 2rem;
    }
    
    
    p {
      font-family: var(--fonte-texto);
      font-weight: 300;
      margin-top: 2rem;
      padding-bottom: 1rem;
    }
`;

const StyledHuracan = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;


    img {
      text-align: center;
      padding-top: 2rem;
    }

    p {
      font-family: var(--fonte-texto);
      font-weight: 300;
      margin-top: 2rem;
      padding-bottom: 1rem;
    }
`;

const StyledUrus = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;


    img {
      text-align: center;
      padding-top: 2rem;
    }

    p {
      font-family: var(--fonte-texto);
      font-weight: 300;
      margin-top: 2rem;
      padding-bottom: 1rem;
    }
`;