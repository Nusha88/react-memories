import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Container} from "@material-ui/core";

import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar/>
        <Routes>
          <Route path="/react-memories" element={<Navigate replace to="/react-memories/posts" />} />
          <Route path="/react-memories/posts" exact element={<Home/>} />
          <Route path="/react-memories/posts/search" exact element={<Home/>} />
          <Route path="/react-memories/posts/:id" exact element={<PostDetails/>} />
          <Route path="/react-memories/auth" exact element={!user ? <Auth /> : <Navigate to="/react-memories/posts" replace />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;
