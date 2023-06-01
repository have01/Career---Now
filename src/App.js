import './App.css';
import { Route, Routes } from 'react-router-dom';

import Login from "./pages/Login"
import { Suspense, lazy } from 'react';
function App() {
  const Home = lazy(() => import("./pages/Home"))
  return (
    <Suspense fallback={<><h1>loading....</h1></>}>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        /> <Route
          path="login"
          element={<Login />}
        />

      </Routes>
    </Suspense>

  );
}

export default App;
