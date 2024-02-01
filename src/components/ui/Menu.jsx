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
    color: black;
`;