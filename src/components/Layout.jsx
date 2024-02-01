import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader>
        <h1>
          <Link href="/">
              <Image
              src="/image/lamborghini.svg"
              width={48}
              height={48}
              alt="Logo da nossa queridinha lamborghini"
              >Lamborghini</Image>
          </Link>
        </h1>
        <nav>
        <Link href="/models">Models</Link>
        <Link href="/head_office">Head Office</Link>
        <Link href="/origin">Origin</Link>
        </nav>
      </StyledHeader>
        <main className="limitador">{children}</main>
    </>
  );
}

const StyledHeader = styled.header`

`;

