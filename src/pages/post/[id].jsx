import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import serverApi from "../api/server";



export async function getStaticProps({ params }) {
    const { id } = params;
    console.log(id);

    try {
        const resposta = await fetch(`${serverApi}/news/${id}.json`)

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
          }
    }
}


export async function getStaticPaths() {
    return {
      paths: [],

      fallback: "blocking",
    }
  }

export default function Post({ post }){
    const tituloPagina = `${post.title} - Lamborghini`;
    return (
    <>
    <Head>
        <title>{tituloPagina}</title>
        <meta name="description" content={post.description}/>
    </Head>

    <StyledPost>
        <h2>{post.title}</h2>
        <Container>
            <h3>{post.category}</h3>
            <p>{post.date}</p>
            <p>{post.description}</p>
        </Container>
    </StyledPost>
    </>
);
}

const StyledPost = styled.article`
    h2::before {
        content: "📑 ";
    }
`;