import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spaces[4]}px;
`
export const SignIn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    background: ${({ signIn }) => signIn ? 'linear-gradient(to right, #14163c 0%, #03217b 79%)' : 'white'};
    color: ${({ signIn }) => signIn ? 'white' : 'black'};
    box-shadow: ${({ signIn }) => signIn ? 'inset -10px -10px 50px black' : 'none'};
    border-bottom-right-radius: ${({ signIn }) => signIn && '10px'};
    border-bottom-left-radius: ${({ signIn }) => !signIn && '10px'};
`

export const SignOut = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    background: ${({ signIn }) => !signIn ? 'linear-gradient(to right, #14163c 0%, #03217b 79%)' : 'white'};
    color: ${({ signIn }) => !signIn ? 'white' : 'black'};
    box-shadow: ${({ signIn }) => !signIn ? 'inset 10px -10px 50px black' : 'none'};
    border-bottom-left-radius: 10px;
`

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: white;
  opacity: 0.75;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`

export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  color: black;
`

export const Text = styled.p`
  font-size: 16px;
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
  width: 70%;
  text-transform: none;
  letter-spacing: 0;
  @media only screen and (min-width: 320px) and (max-width: 768px), (min-width: 1280px){
    flex-direction: column;
    gap: 0.3rem;
  }
`
