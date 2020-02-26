import styled from "styled-components"

export const Heading = styled.h1`
cursor: default;
text-align: center;
transition: ${({ theme }) => theme.animations.default};
user-select: none;
`

export const Title = styled.span`
display: block;
font-size: 8rem;
font-weight: 700;
letter-spacing: .5rem;
margin-bottom: -2rem;
`

export const SubTitle = styled.span`
color: ${({ theme }) => theme.colors.primary["500"]};
display: block;
font-size: 2rem;
font-weight: 400;
letter-spacing: .5rem;
`
