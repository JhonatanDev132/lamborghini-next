import Head from "next/head";
import styled from "styled-components";

export default function Home() {
    return (
      <>
      <Head>
        <title>Lamborghini</title>
        <meta name="keywords" content="Lamborghini, cars" />
      </Head>
        <section>
          <h2>Lamborghini</h2>
        </section>
      </>
    );
  }

const StyledSection = styled.section`
  background-image: url("/image/revuelto.jpeg");
`;