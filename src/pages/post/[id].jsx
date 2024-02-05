
import Head from "next/head";
import styled from "styled-components";
import serverApi from "../api/server";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const resposta = await fetch(`${serverApi}/news/${id}.json`);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();

    return {
      props: {
        post: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Post({ post }) {
  const tituloPagina = `${post.title} - Lamborghini`;
  return (
    <>
      <Head>
        <title>{tituloPagina}</title>
        <meta name="description" content={post.description} />
      </Head>

      <StyledPost>
        <h2>{post.title}</h2>
        <div className="categoria">
          <h3>{post.category}</h3>
          <p className="data">{post.date}</p>
        </div>
        <div className="flex">
          <p className="texto">{post.description}</p>
        <div className="imagem">
        <Image 
        src={post.image}
        width={300}
        height={200}
        alt={`image of ${post.image}`}
        />
        </div>
        </div>
      </StyledPost>
    </>
  );
}

const StyledPost = styled.article`
padding-top: 10rem;
font-family: var(--fonte-texto);

h2 {
    font-size: 3rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
}

.texto {
    padding-left: 2rem;
    padding-right: 2rem;
}

.data {
    font-weight: 300;
}

.categoria {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
}

.imagem{
    text-align: center;
    padding-top: 2rem;
}

@media screen and (min-width: 768px){
    .categoria {
        display: block;
    }

    h3 {
        padding-bottom: 1rem;
    }

    .texto {
        font-size: 1.3rem;
        padding-left: 2rem;
        text-align: left;
        padding-top: 5rem;
    }

    img {
      width: 600px;
      height: 400px;
    }

    .imagem {
        text-align: center;
        padding-left: 2rem;

    }

    .flex {
      display: flex;
      padding-right: 10rem;
      padding-left: 7rem;
    }
    
}

`;