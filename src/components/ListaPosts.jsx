import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function ListaPosts({ posts }) {
  if (posts.length === 0) return <h3 style={{ textAlign: "center" }}>Não temos notícias</h3>;

  return (
    <StyledListaPosts>
      {posts.map((post) => {
      

        return (
          <article key={post.id}>
            <div className="column">
              <h4>{post.title}</h4>
              <p className="categoria">{post.category}</p>
              <p className="data">{post.date}</p>
            </div>

            <Link href={`/post/${post.id}`}>
              Read more
            </Link>
            
          </article>
        );
      })}
    </StyledListaPosts>
  );
}

const StyledListaPosts = styled.div`
    article{
      border: 5px solid black;
      margin: 2rem;
      padding-bottom: 2rem;
    }

    article:hover {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: black;
      margin: 2rem;
      border: 2px solid black;
      padding: 0.5rem;
      margin-bottom: 1rem;
    }

    a:hover{
      background-color: #2b2b2b;
      color: white;
    }

    h4 {
      font-size: 1.8rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin-left: 1rem;
    }

    p {
      font-family: var(--fonte-texto);
      margin-left: 1rem;
      margin-right: 1rem;
      padding-bottom: 2rem;
    }

    .categoria {
      font-weight: bold;
      padding-top: 1rem;
      padding-bottom: 0.5rem;
    }

    .data {
      font-weight: 300;
      padding-bottom: 2rem;
    }

    img {
      width: 300px;
      height: 250px;
      padding-bottom: 3rem;
    }

    .imagem-centralizada {
      text-align: center;
    }

  @media screen and (min-width: 768px) {
    h4 {
      font-size: 2.5rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin-left: 2rem;
    }

    p {
      margin-left: 2rem;
      font-size: 1.4rem;
    }



    img {
      padding-right: 2rem;
      width: 400px;
      height: 300px;
    }

    a {
      padding: 1rem;
    }


  }

  @media screen and (min-width: 1024px) {
    p {
      font-size: 1.2rem;
    }

    article {

    padding-bottom: 3rem;
  }

  img {
    padding: 3rem 0 0 0;
  }

  }
`;
