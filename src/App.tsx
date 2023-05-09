import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import DataPage from './components/DataPage';
import NotFoundPage from './components/NotFoundPage';
import ResultsPage from './components/ResultsPage';

function App() {

  return (
    <div className="App">
      <Header />
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
  );
}

export default App;
