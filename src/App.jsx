
import React, { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import MobileNavbar from "./components/MobileNavbar";
import MoreMenu from "./components/MoreMenu";
import Stories from "./components/Stories";
import StoryViewer from "./components/StoryViewer";
import PostList from "./components/PostList";
import RightSidebar from "./components/RightSidebar";
import CreatePost from "./components/CreatePost";
import SearchPanel from "./components/SearchPanel";
import Notifications from "./components/Notifications";
import Explore from "./components/Explore";
import Reels from "./components/Reels";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import SavedPosts from "./components/SavedPosts";
import Settings from "./components/Settings";
import ShareModal from "./components/ShareModal";
import SwitchAccount from "./components/SwitchAccount";

import { samplePosts } from "./data/posts";
import { sampleStories } from "./data/stories";
import { switchAccounts } from "./data/users";
import { loadData, saveData } from "./utils";

import "./styles/Sidebar.css";
import "./styles/Stories.css";
import "./styles/Post.css";
import "./styles/RightSidebar.css";
import "./styles/Modals.css";
import "./styles/Responsive.css";

function App() {
  const [page, setPage] = useState("home");
  const [panel, setPanel] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSwitch, setShowSwitch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [storyIndex, setStoryIndex] = useState(-1);
  const [sharePost, setSharePost] = useState(null);
  const [toast, setToast] = useState("");
  const [unreadMessages, setUnreadMessages] = useState(3);

  const [posts, setPosts] = useState(() => loadData("posts", samplePosts));
  const [stories, setStories] = useState(() => loadData("stories", sampleStories));
  const [viewedStories, setViewedStories] = useState(() => loadData("viewed", []));
  const [following, setFollowing] = useState(() => loadData("following", {}));
  const [accountName, setAccountName] = useState(() => loadData("account", "virat.kohli"));
  const [settings, setSettings] = useState(() =>
    loadData("settings", {
      dark: false,
      privateAccount: false,
      notifications: true
    })
  );

  const currentUser =
    switchAccounts.find((user) => user.username === accountName) || switchAccounts[0];

  useEffect(() => {
    saveData("posts", posts);
  }, [posts]);

  useEffect(() => {
    saveData("stories", stories);
  }, [stories]);

  useEffect(() => {
    saveData("viewed", viewedStories);
  }, [viewedStories]);

  useEffect(() => {
    saveData("following", following);
  }, [following]);

  useEffect(() => {
    saveData("account", accountName);
  }, [accountName]);

  useEffect(() => {
    saveData("settings", settings);
  }, [settings]);

  useEffect(() => {
    document.body.classList.toggle("dark", settings.dark);
  }, [settings.dark]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setStoryIndex(-1);
        setShowCreate(false);
        setShowMore(false);
        setShowSettings(false);
        setShowSwitch(false);
        setSharePost(null);
        setPanel("");
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  }

  function handleMenu(name) {
    setMenuOpen(false);

    if (name === "more") {
      setShowMore(!showMore);
      return;
    }

    setShowMore(false);

    if (name === "search" || name === "notifications") {
      setPanel(panel === name ? "" : name);
      return;
    }

    setPanel("");

    if (name === "create") {
      setShowCreate(true);
      return;
    }

    if (name === "messages") setUnreadMessages(0);

    setPage(name);
    window.scrollTo(0, 0);
  }

  function toggleLike(id) {
    setPosts(posts.map((post) =>
      post.id === id
        ? {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  }

  function toggleSave(id) {
    const post = posts.find((post) => post.id === id);

    setPosts(posts.map((item) =>
      item.id === id ? { ...item, saved: !item.saved } : item
    ));

    if (post) {
      showToast(post.saved ? "Removed from saved" : "Saved to your collection");
    }
  }

  function addComment(id, text) {
    const comment = {
      id: Date.now(),
      username: currentUser.username,
      text
    };

    setPosts(posts.map((post) =>
      post.id === id
        ? {
            ...post,
            comments: [...post.comments, comment],
            totalComments: post.totalComments + 1
          }
        : post
    ));
  }

  function publishPost(image, caption) {
    const hashtags = caption.match(/#\w+/g) || [];
    const newPost = {
      id: Date.now(),
      username: currentUser.username,
      avatar: currentUser.avatar,
      verified: currentUser.verified,
      location: "",
      timeAgo: "now",
      timeFull: "JUST NOW",
      image,
      likes: 0,
      likedBy: "",
      caption: caption.replace(/#\w+/g, "").trim(),
      hashtags,
      totalComments: 0,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setShowCreate(false);
    setPage("home");
    showToast("Your post has been shared!");
  }

  function toggleFollow(username) {
    const isFollowing = following[username];

    setFollowing({ ...following, [username]: !isFollowing });
    showToast(isFollowing ? "Unfollowed " + username : "You are now following " + username);
  }

  function addStory(image) {
    const story = {
      id: Date.now(),
      username: currentUser.username,
      avatar: currentUser.avatar,
      image
    };

    setStories([story, ...stories]);
    showToast("Your story has been added!");
  }

  function markViewed(id) {
    if (!viewedStories.includes(id)) {
      setViewedStories([...viewedStories, id]);
    }
  }

  function changeSetting(key, value) {
    setSettings({ ...settings, [key]: value });
  }

  function switchTo(username) {
    setAccountName(username);
    setShowSwitch(false);
    setPage("home");
    showToast("Switched to " + username);
  }

  function resetEverything() {
    if (window.confirm("This will delete all saved data of this demo and reload. Continue?")) {
      Object.keys(localStorage)
        .filter((key) => key.startsWith("insta_"))
        .forEach((key) => localStorage.removeItem(key));

      window.location.reload();
    }
  }

  const savedCount = posts.filter((post) => post.saved).length;

  let content;

  if (page === "home") {
    content = (
      <>
        <div className="feed-column">
          <Stories
            stories={stories}
            viewed={viewedStories}
            currentUser={currentUser}
            onOpen={setStoryIndex}
            onAddStory={addStory}
          />
          <PostList
            posts={posts}
            currentUser={currentUser}
            following={following}
            onLike={toggleLike}
            onSave={toggleSave}
            onComment={addComment}
            onShare={setSharePost}
            onFollow={toggleFollow}
            onToast={showToast}
          />
        </div>
        <RightSidebar
          currentUser={currentUser}
          following={following}
          onFollow={toggleFollow}
          onSwitch={() => setShowSwitch(true)}
        />
      </>
    );
  } else if (page === "explore") {
    content = <div className="page-column"><Explore posts={posts} /></div>;
  } else if (page === "reels") {
    content = <div className="page-column"><Reels onToast={showToast} /></div>;
  } else if (page === "messages") {
    content = <div className="page-column"><Messages currentUser={currentUser} /></div>;
  } else if (page === "profile") {
    content = (
      <div className="page-column">
        <Profile currentUser={currentUser} posts={posts} following={following} onToast={showToast} />
      </div>
    );
  } else if (page === "saved") {
    content = (
      <div className="page-column">
        <SavedPosts posts={posts} onUnsave={toggleSave} />
      </div>
    );
  }

  return (
    <div className="app">
      <MobileNavbar
        page={page}
        currentUser={currentUser}
        onMenu={handleMenu}
        onToggleDrawer={() => setMenuOpen(!menuOpen)}
      />

      <Sidebar
        page={page}
        panel={panel}
        open={menuOpen}
        currentUser={currentUser}
        unreadMessages={unreadMessages}
        onMenu={handleMenu}
      />

      {menuOpen && <div className="drawer-backdrop" onClick={() => setMenuOpen(false)} />}

      {showMore && (
        <MoreMenu
          savedCount={savedCount}
          onClose={() => setShowMore(false)}
          onSettings={() => {
            setShowMore(false);
            setShowSettings(true);
          }}
          onSaved={() => {
            setShowMore(false);
            setPanel("");
            setPage("saved");
          }}
          onSwitch={() => {
            setShowMore(false);
            setShowSwitch(true);
          }}
          onLogout={resetEverything}
        />
      )}

      <SearchPanel
        open={panel === "search"}
        posts={posts}
        following={following}
        onFollow={toggleFollow}
        onClose={() => setPanel("")}
        onOpenPost={() => {
          setPanel("");
          setPage("home");
        }}
      />

      <Notifications open={panel === "notifications"} onClose={() => setPanel("")} />

      <div className="main-area">{content}</div>

      {showCreate && (
        <CreatePost
          currentUser={currentUser}
          onPublish={publishPost}
          onClose={() => setShowCreate(false)}
        />
      )}

      {storyIndex >= 0 && (
        <StoryViewer
          stories={stories}
          index={storyIndex}
          onChange={setStoryIndex}
          onClose={() => setStoryIndex(-1)}
          onViewed={markViewed}
          onToast={showToast}
        />
      )}

      {sharePost && (
        <ShareModal
          post={sharePost}
          onClose={() => setSharePost(null)}
          onToast={showToast}
        />
      )}

      {showSettings && (
        <Settings
          settings={settings}
          onChange={changeSetting}
          onReset={resetEverything}
          onClose={() => setShowSettings(false)}
        />
      )}

      {showSwitch && (
        <SwitchAccount
          accounts={switchAccounts}
          current={currentUser.username}
          onSelect={switchTo}
          onClose={() => setShowSwitch(false)}
        />
      )}

      {toast && <div className="toast-message">{toast}</div>}
    </div>
  );
}

export default App;
