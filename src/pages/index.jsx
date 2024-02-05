import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import ListaPosts from "@/components/ListaPosts";
import { useState } from "react";
import serverApi from "./api/server";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/news.json`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    const arrayDePosts = Object.keys(dados).map((post) => ({
      ...dados[post],
      id: post,
    }));

    const categorias = arrayDePosts.map((post) => post.category);
    const categoriasUnicas = [...new Set(categorias)];

    return {
      props: {
        posts: arrayDePosts,
        categorias: categoriasUnicas,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Home({ posts }) {
  const [listaDePosts, setListaDePosts] = useState(posts);

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
        <ListaPosts posts={listaDePosts} />

      </StyledNews>
    </>
  );
}

const StyledSection = styled.section`
  background-image: linear-gradient(to right, #27262652, transparent),
    url("/image/revuelto.jpeg");
  background-repeat: no-repeat;
  height: 500px;
  min-height: 100vh;
  background-size: cover;
  background-position: center;

  h1 {
    padding-top: 10rem;
    margin-left: 1rem ;
    font-family: var(--fonte-texto);
    font-size: 3rem;
    color: #fff;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    h1 {
      color: white;
      font-family: var(--fonte-nav);
      font-weight: 700;
      font-size: 5rem;
      line-height: 6rem;
      letter-spacing: 0.1rem;
      text-align: left;
      text-transform: uppercase;
      padding-top: 10rem;
      margin-left: 2rem;
    }
  }
`;

const StyledModels = styled.section`
  background-image: linear-gradient(to right, #2525258c, transparent),
    url("/image/museum.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;


  h2 {
    font-size: 1.6rem;
    font-family: var(--fonte-nav);
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: white;
    margin-left: 1rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 18px;
    font-family: var(--fonte-nav);
    font-weight: 500;
    text-transform: uppercase;
    color: white;
  }

  a {
    padding: 10px;
    border: none;
    border-radius: 2px;
    font-size: 24px;
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
    margin-left: 1rem;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 3rem;
      margin-left: 2rem;
    }

    p {
      font-size: 1.5rem;
    }

    a {
      font-size: 2rem;
    }

    div {
      margin-left: 2rem;
    }
  }
`;

const StyledNews = styled.section`
font-family: var(--fonte-texto);



  h2 {
    font-size: 1.6rem;
    font-family: var(--fonte-nav);
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: black;
    padding-top: 1.5rem;
    margin-left: 1rem;
  }

  h3 {
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 1rem;
    padding-top: 1rem;
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
    margin-left: 2rem;
  }

  h3 {
    font-size: 5rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 2rem;
    padding-top: 1rem;
  }


  }


`;
