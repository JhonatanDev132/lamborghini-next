import styled from "styled-components";
import Image from "next/image";

export default function ListaPosts({ posts }) {
  if (posts.length === 0) return <h3 style={{ textAlign: "center" }}>Não temos notícias</h3>;

  return (
    <StyledListaPosts>
      {posts.map((post, index) => {
        const isImageOnLeft = index % 2 === 0; // Alterna entre esquerda e direita

        return (
          <article key={post.id} className={isImageOnLeft ? "left" : "right"}>
            <div className="column">
              <h4>{post.title}</h4>
              <p>{post.description}</p>
              <p className="categoria">{post.category}</p>
              <p className="data">{post.date}</p>
            </div>
            <Image
              src={post.image}
              width={500}
              height={300}
              alt={`image of ${post.image}`}
            />
          </article>
        );
      })}
    </StyledListaPosts>
  );
}

const StyledListaPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  padding-left: 4rem;
  padding-right: 6rem;

  h3 {
    color: #000;
    font-weight: 500;
  }

  p {
    font-weight: 400;
    color: #2b2b2b;
  }

  .column {
    display: flex;
    flex-direction: column;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .categoria {
    padding-top: 0.2rem;
    padding-bottom: 0.5rem;
    font-weight: bold;
  }

  .data {
    font-weight: 300;
  }

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
  }

  article.left {
    flex-direction: row;
  }

  article.right {
    flex-direction: row-reverse;
  }
`;
