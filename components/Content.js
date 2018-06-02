import styled from 'styled-components'

export default styled.section`
  background-color: #DDD;
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  height: 50vh;
  overflow-y: auto;
  padding: 3rem;

  &::-webkit-scrollbar {
      width: .3rem;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 .6rem rgba(85, 85, 85, .8);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #F92720;
    outline: .1rem solid #555;
  }
`
