import { accessToken, logout, getCurrentUserProfile } from "./spotify";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);
    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile();
        setProfile(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a className="App-link" href="http://localhost:8888/login">
            Login to Spotify
          </a>
        ) : (
          <>
            <h1>Logged in</h1>
            <button onClick={logout}>Logout</button>
            {profile && (
              <>
                <h1>{profile.display_name}</h1>
                <p>{profile.followers.total} followers</p>
              </>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
