import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { PATH_SIGN_UP, PATH_SIGN_IN } from './constants/RouteConstants';
import { SignUp, SignIn } from './components/auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={PATH_SIGN_IN} element={<SignIn />} />
          <Route path={PATH_SIGN_UP} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
