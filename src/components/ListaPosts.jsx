import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function ListaPosts({ posts }) {
  if (posts.length === 0) return <h3 style={{ textAlign: "center" }}>Não temos notícias</h3>;

  return (
    <StyledListaPosts>
      {posts.map((post, index) => {
        const isImageOnLeft = index % 2 === 0; // Alterna entre esquerda e direita

        return (
          <article key={post.id} className={isImageOnLeft ? "left" : "right"}>
            <Link href={`/posts/${post.id}`}>
            <div className="column">
              <h4>{post.title}</h4>
              <p className="categoria">{post.category}</p>
              <p className="data">{post.date}</p>
              <p>{post.description}</p>
            </div>
            <div className="imagem-centralizada">
            <Image
              src={post.image}
              width={400}
              height={300}
              alt={`image of ${post.image}`}
            />
            </div>
            </Link>
          </article>
        );
      })}
    </StyledListaPosts>
  );
}

const StyledListaPosts = styled.div`
    article:hover {
      cursor: pointer;
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


  }

  @media screen and (min-width: 1024px) {
    p {
      font-size: 1.2rem;
    }

    article {
    display: flex;
    padding-bottom: 3rem;
  }

  img {
    padding: 3rem 0 0 0;
  }

    article.left {
    flex-direction: row;
    padding-right: 2rem;
  }

    article.right {
    flex-direction: row-reverse;
    padding-left: 2rem;
  }
  }
`;
