import styled from "styled-components"

export const Container = styled.div`
background-color: var(--color-secondary-500);
color: var(--color-tertiary-500);
display: grid;
grid-template-rows: var(--header) calc(var(--main) - (var(--header) + var(--footer))) var(--footer);
`

export const Main = styled.main`
align-items: center;
display: grid;
justify-content: center;
`
