import styled from "styled-components"

export const Footer = styled.footer`
display: grid;
grid-row-gap: 1.28rem;
grid-template-rows: 1fr min-content;
`

export const SocialNetworks = styled.section`
align-items: center;
display: grid;
`

export const SocialNetworksList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
list-style: none;
`

export const SocialNetwork = styled.li`
background-color: ${({ theme }) => theme.colors.primary["200"]};
color: ${({ theme }) => theme.colors.primary["500"]};
border-radius: 50%;
margin: .64rem;
transition: ${({ theme }) => theme.animations.default};

&:hover {
  background-color: ${({ theme }) => theme.colors.primary["500"]};
  color: ${({ theme }) => theme.colors.secondary["500"]};
}
`

export const SocialNetworkLink = styled.a`
align-items: center;
color: inherit;
display: flex;
justify-content: center;
padding: 1.28rem;
text-decoration: none;
`

export const Copyright = styled.section`
align-items: center;
cursor: default;
display: grid;
margin-bottom: 2.56rem;
text-align: center;
transition: ${({ theme }) => theme.animations.default};
user-select: none;
`
