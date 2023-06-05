import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import DataPage from './components/DataPage';
import NotFoundPage from './components/NotFoundPage';
import ResultsPage from './components/ResultsPage';
import { useEffect, useState } from "react";
import Auth from "./components/Auth";

function App() {
  const [signIn, setSignIn] = useState(true);

  useEffect(() => {
    let name = sessionStorage.getItem("name");
    let email = sessionStorage.getItem("email");
    let img = sessionStorage.getItem("profilePic");

    if (name !== null && email !== null && img !== null) {
      setSignIn(false);
    } else {
      setSignIn(true);
    }
  }, [signIn]);

  return (
    <div className="App">
      {signIn ? <Routes>
        <Route path="/foundry-app/">
          <Route path='' element={<Auth setSignIn={setSignIn} />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes> :
      <div>
        <Header setSignIn={setSignIn}/>
          <Routes>
            <Route path="/foundry-app/">
              <Route path='' element={<Main />}/>
              <Route path="data" element={<DataPage />}/>
              <Route path="results" element={<ResultsPage />}/>
              <Route path="*" element={<NotFoundPage />}/>
            </Route>
          </Routes>
        <Footer />
      </div>
      }
    </div>
  );
}

export default App;
