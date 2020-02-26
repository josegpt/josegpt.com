import styled from "styled-components"

export const Container = styled.div`
background-color: ${({ theme }) => theme.colors.secondary["500"]};
color: ${({ theme }) => theme.colors.tertiary["500"]};
display: grid;
grid-template-rows: ${({ theme }) => {
  return `${theme.layout.header} calc(${theme.layout.main} - (${theme.layout.header} + ${theme.layout.footer})) ${theme.layout.footer}`
}};
`

export const Main = styled.main`
align-items: center;
display: grid;
justify-content: center;
`
