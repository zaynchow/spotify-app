import { logout } from "../spotify";
import styled from "styled-components/macro";

const StyledLoginButton = styled.a`
  background-color: var(--green);
  color: var(--white);
  padding: 10px 20px;
  margin: 20px auto;
  border-radius: 30px;
  display: inline-block;
  cursor: pointer;
`;

const Home = ({ profile }) => {
  return (
    <>
      <StyledLoginButton onClick={logout}>Log Out</StyledLoginButton>

      {profile && (
        <div>
          <h1>{profile.display_name}</h1>
          <p>{profile.followers.total} Followers</p>
          {profile.images.length && profile.images[0].url && (
            <img src={profile.images[0].url} alt="Avatar" />
          )}
        </div>
      )}
    </>
  );
};

export default Home;
export { StyledLoginButton };
