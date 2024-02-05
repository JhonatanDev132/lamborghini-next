import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Menu from "./Menu";

export default function Cabecalho() {
    return (
        <StyledHeader>

            <Link href="/">

            <Image
            src="/image/lamborghini.svg"
            width={40}
            height={40}
            alt="Tá ligado né, é ela... o touro"
            />

           </Link>

        <Menu />
        </StyledHeader>
    );
}

const StyledHeader = styled.header`

@media screen and (max-width: 428px) {


    background-color: var(--cor-fundo);
    height: 60px;
    box-sizing: border-box;
    padding: 8px 20px;
    display: flex;

    position: fixed;
    z-index: 5;
    width: 100%;

    img {
        color: transparent;
        height: fit-content;
        height: auto;
        width: auto;
        vertical-align: middle;
    }
}

@media screen and (max-width: 768px) {


background-color: var(--cor-fundo);
height: 60px;
box-sizing: border-box;
padding: 8px 20px;
display: flex;

position: fixed;
z-index: 5;
width: 100%;

img {
    color: transparent;
    height: fit-content;
    height: 45px;
    vertical-align: middle;
}
}

@media screen and (min-width: 768px) {
    background-color: var(--cor-fundo);
    height: 80px;
    box-sizing: border-box;
    padding: 20px 80px;
    display: flex;

    position: fixed;
    z-index: 5;
    width: 100%;

    img {
        color: transparent;
        height: fit-content;
        height: 45px;
        vertical-align: middle;
    }
}
`;