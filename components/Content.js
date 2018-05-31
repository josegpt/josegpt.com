import styled from 'styled-components'

export default styled.div`
  background-color: #E1E1E1;
  border-radius: .3rem;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  justify-content: center;
  margin: 3rem 0;
  max-height: 65%;
  overflow-y: auto;
  padding: 3rem;

  &::-webkit-scrollbar {
      width: .3rem;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: dodgerblue;
    outline: .1rem solid #eee;
  }
`
