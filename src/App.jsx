import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SideBar from "./components/SideBar/SideBar";

import FeedPage from "./pages/FeedPage/FeedPage";
import AddStory from "./components/AddStory/AddStory";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PostModal from "./components/PostModal /PostModal";

function App() {
  const [showPostUpload, setShowPostUpload] = useState(false);

  return (
    <Router>
      <SideBar onShowPostUpload={() => setShowPostUpload(true)} />
      {showPostUpload && <AddStory onClose={() => setShowPostUpload(false)} />}
      <Routes>
        <Route exact path="/" element={<FeedPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
