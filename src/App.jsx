import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import FeedPage from "./pages/FeedPage/FeedPage";
import AddStory from "./components/AddStory/AddStory";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginSignup from "./components/LoginSignUp/LoginSignUp";

function App() {
  const [showPostUpload, setShowPostUpload] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <nav>
        <SideBar onShowPostUpload={() => setShowPostUpload(true)} />
      </nav>
      {showPostUpload && <AddStory onClose={() => setShowPostUpload(false)} />}
      <main>
        <Routes>
          <Route exact path="/" element={<FeedPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="*" element={<FeedPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
