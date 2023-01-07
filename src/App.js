import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
// import Service from './Pages/Home/Service/Service';
// import Services from './Pages/Home/Services/Services';
import Notfound from './Pages/NotFound/Notfound';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/service/add' element={<AddService />} />
            <Route element={<PrivateRoute />}>
              <Route path='/booking/:serviceId' element={<Booking />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
