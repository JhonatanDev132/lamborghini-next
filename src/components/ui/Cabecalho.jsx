import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Menu from "./Menu";

export default function Cabecalho() {
    return (
        <StyledHeader>
        <h1>
            <Link href="/">

            <Image
            src="/image/lamborghini.svg"
            width={40}
            height={40}
            alt="Tá ligado né, é ela... o touro"
            />

           </Link>
        </h1>
        <Menu />
        </StyledHeader>
    );
}

const StyledHeader = styled.header`

background-color: var(--cor-fundo);
height: 60px;
box-sizing: border-box;
padding: 8px 20px;
display: flex;

h1 {
    padding: 0;
    margin: 0;
}

img {
    color: transparent;
    height: fit-content;
    height: 45px;
    vertical-align: middle;
}

nav {
    display: flex;
    margin-left: auto;
    align-items: center!important;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 6px 0 6px;
    font-family: var(--fonte-nav);
    font-weight: 200;
}
`;