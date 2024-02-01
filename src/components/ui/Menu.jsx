import styled from "styled-components";
import Link from "next/link";

export default function Menu(){
    return (
    <StyledMenu>
        <Link href="/models">Models</Link>
        <Link href="/head_office">Head Office</Link>
        <Link href="/origin">Origin</Link>
    </StyledMenu>
    )
}

const StyledMenu = styled.nav`

    display: flex;
    align-items: center;
    margin-left: auto;

    a {
        text-decoration: none;
        color: white;
        margin: 0 6px 0 6px;
        font-family: var(--fonte-nav);
        font-weight: 200;
    }

`;