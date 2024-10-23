import styled from "styled-components/macro";

const StyledLoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .test-login-container {
    margin-top: 60px;
    text-align: center;
  }
`;

const StyledLoginButton = styled.a`
  display: inline-block;
  background-color: var(--green);
  color: var(--white);
  border-radius: var(--border-radius-pill);
  font-weight: 700;
  font-size: var(--fz-lg);
  padding: var(--spacing-sm) var(--spacing-xl);

  &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);
  }
`;

const Login = () => (
  <StyledLoginContainer>
    <StyledLoginButton href={`${process.env.REACT_APP_PROD_BASE_URL}/login`}>
      Log in to Spotify
    </StyledLoginButton>
    <div className="test-login-container">
      <h5>Test Email Address: spotify.analytics.test@gmail.com</h5>
      <h5>Test Password: Spotify123@</h5>
    </div>
  </StyledLoginContainer>
);

export default Login;
