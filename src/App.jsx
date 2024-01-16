import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SideBar from './components/SideBar/SideBar';

import FeedPage from './pages/FeedPage/FeedPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import PostDetailPage from './pages/PostDetailPage/PostDetailPage';
import NotificationsPage from './pages/NotificationsPage/NotificationsPage';
import SearchPage from './pages/SearchPage/SearchPage';
import AuthenticationPages from './pages/AuthenticationPages/AuthenticationPages';

function App() {
  return (
    <Router>
      <SideBar />

      <Routes>
        <Route exact path="/" element={<FeedPage />} />
        <Route path="/:username" component={ProfilePage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/p/:postId" component={PostDetailPage} />
        <Route path="/notifications" component={NotificationsPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/auth" component={AuthenticationPages} />
      </Routes>

    </Router>
  );
}

export default App;
