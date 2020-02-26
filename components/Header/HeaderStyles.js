import styled from "styled-components"

export const Header = styled.header`
align-items: center;
display: grid;
grid-template-columns: repeat(2, 1fr);
justify-items: center;
padding: 0 .64rem;
`

export const Navigation = styled.nav``

export const NavigationList = styled.ul`
align-items: center;
display: flex;
list-style: none;
`

export const NavigationItem = styled.li`
transition: var(--animation);

&:not(:last-child) {
  margin-right: 2.56rem;
}

&:hover,
&--active {
  color: var(--color-primary-500);
}
`

export const NavigationLink = styled.a`
&:link,
&:visited {
  color: inherit;
  display: flex;
  font-weight: 400;
  text-decoration: none;
  text-transform: lowercase;
}
`
