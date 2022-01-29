import { accessToken, getCurrentUserProfile } from "./spotify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { catchErrors } from "./utils";
import Home, { StyledLoginButton } from "./pages/Home";
import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`


  :root {
    --black : #121212;
    --green: #1D8954;
    --white: #fff;

    --font: 'Circular Std', -apple-system, BlinkMacSystemFont,system-ui,sans-serif;
  }
  
  html {
    box-sizing:border-box;
  }

  *, *:before,*:after {
    box-sizing:inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background-color:black;
    color:white;
  }

  a{text-decoration:none}
`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);
    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        {!token ? (
          <StyledLoginButton
            className="App-link"
            href="http://localhost:8888/login"
          >
            Login to Spotify
          </StyledLoginButton>
        ) : (
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/top-artists" element={<h1>Top Artists</h1>} />
              <Route path="/top-tracks" element={<h1>Top Tracks</h1>} />
              <Route path="/playlists/:id" element={<h1>Playlist</h1>} />
              <Route path="/playlists" element={<h1>Playlists</h1>} />
              <Route path="/" element={<Home profile={profile} />} />
            </Routes>
          </Router>
        )}
      </header>
    </div>
  );
}

export default App;
