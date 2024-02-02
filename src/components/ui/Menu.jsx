import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useState } from 'react';

export default function Menu(){
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredLink(index);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };


    return (
    <StyledMenu>
        <NavItem>
        <Link href="/models" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
          Models
        </Link>
        {hoveredLink === 1 && <Barra />}
      </NavItem>
      <NavItem>
        <Link href="/museum" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
          Museum
        </Link>
        {hoveredLink === 2 && <Barra />}
      </NavItem>
    </StyledMenu>
    )
}

const StyledMenu = styled.nav`
@media screen and (max-width: 426px) {

    display: flex;
    align-items: center;
    margin-left: auto;

    a {
        text-decoration: none;
        color: white;
        margin: 0 6px 0 6px;
        font-family: var(--fonte-nav);
        font-weight: 200;
        text-transform: uppercase;
    }
}

@media screen and (max-width: 768px) {

display: flex;
align-items: center;
margin-left: auto;

a {
    text-decoration: none;
    color: white;
    margin: 0 6px 0 6px;
    font-family: var(--fonte-nav);
    font-weight: 200;
    text-transform: uppercase;
}
}

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;

        margin-left: 3rem;

    a {
        text-decoration: none;
        color: white;
        margin: 0 6px 0 6px;
        font-family: var(--fonte-nav);
        font-weight: 200;
        font-size: 1rem;
        text-transform: uppercase;
    }
    }
`;

const NavItem = styled.div`
  position: relative;
  margin: 0 6px;

  a {
    text-decoration: none;
    color: white;
    font-family: var(--fonte-nav);
    font-weight: 200;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

const expand = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Barra = styled.div`
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: white;
  animation: ${expand} 0.5s linear;
`;