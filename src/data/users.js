
export const allUsers = [
  { username: "elena_travels", fullName: "Elena Rossi", avatar: "https://i.pravatar.cc/150?img=47", followedBy: "Followed by marcus.lens" },
  { username: "studio_nordic", fullName: "Studio Nordic", avatar: "https://i.pravatar.cc/150?img=32", followedBy: "Followed by elena_travels" },
  { username: "marcus.lens", fullName: "Marcus Lee", avatar: "https://i.pravatar.cc/150?img=15", followedBy: "Followed by sara_design" },
  { username: "sara_design", fullName: "Sara Khan", avatar: "https://i.pravatar.cc/150?img=44", followedBy: "Followed by chef_mateo" },
  { username: "chef_mateo", fullName: "Mateo Garcia", avatar: "https://i.pravatar.cc/150?img=52", followedBy: "Followed by marcus.lens" },
  { username: "football.daily", fullName: "Football Daily", avatar: "https://i.pravatar.cc/150?img=60", followedBy: "Popular page" },
  { username: "cricket_fever", fullName: "Cricket Fever", avatar: "https://i.pravatar.cc/150?img=33", followedBy: "Popular page" },
  { username: "champions_league", fullName: "UEFA Champions League", avatar: "https://i.pravatar.cc/150?img=68", followedBy: "Popular page" }
];

export const suggestedUsers = [
  { username: "design_daily", avatar: "https://i.pravatar.cc/150?img=5", info: "Followed by elena_travels + 2 more" },
  { username: "urban_capture", avatar: "https://i.pravatar.cc/150?img=8", info: "Followed by marcus.lens" },
  { username: "art_weekly", avatar: "https://i.pravatar.cc/150?img=20", info: "Suggested for you" },
  { username: "minimal_craft", avatar: "https://i.pravatar.cc/150?img=25", info: "Followed by studio_nordic + 4 more" },
  { username: "coffee_culture", avatar: "https://i.pravatar.cc/150?img=38", info: "Popular creator in your area" }
];

export const switchAccounts = [
  { username: "virat.kohli", fullName: "Virat Kohli", avatar: "https://i.pravatar.cc/150?img=12", bio: "Cricketer 🏏 | Chasing dreams | Play with passion", followers: 262000000, following: 285, verified: true },
  { username: "my_sports_page", fullName: "My Sports Page", avatar: "https://i.pravatar.cc/150?img=3", bio: "Daily sports updates ⚽🏏", followers: 12400, following: 150, verified: false },
  { username: "college_student", fullName: "College Student", avatar: "https://i.pravatar.cc/150?img=11", bio: "Learning React 💻", followers: 320, following: 410, verified: false }
];

export const sampleChats = [
  {
    id: 1,
    username: "elena_travels",
    avatar: "https://i.pravatar.cc/150?img=47",
    messages: [
      { from: "them", text: "Did you watch the match last night? 🏏" },
      { from: "me", text: "Yes! What an innings!" },
      { from: "them", text: "Unbelievable finish." }
    ]
  },
  {
    id: 2,
    username: "marcus.lens",
    avatar: "https://i.pravatar.cc/150?img=15",
    messages: [
      { from: "them", text: "Sent you the stadium photos 📸" },
      { from: "me", text: "Thanks, they look great!" }
    ]
  },
  {
    id: 3,
    username: "sara_design",
    avatar: "https://i.pravatar.cc/150?img=44",
    messages: [
      { from: "them", text: "Can you review the new poster design?" }
    ]
  },
  {
    id: 4,
    username: "chef_mateo",
    avatar: "https://i.pravatar.cc/150?img=52",
    messages: [
      { from: "me", text: "Dinner after the game?" },
      { from: "them", text: "Sure, I will cook! 🍝" }
    ]
  }
];

export const sampleNotifications = [
  { id: 1, username: "elena_travels", avatar: "https://i.pravatar.cc/150?img=47", text: "liked your photo.", time: "2m" },
  { id: 2, username: "marcus.lens", avatar: "https://i.pravatar.cc/150?img=15", text: "started following you.", time: "15m" },
  { id: 3, username: "football.daily", avatar: "https://i.pravatar.cc/150?img=60", text: "commented: Great shot! 🔥", time: "1h" },
  { id: 4, username: "sara_design", avatar: "https://i.pravatar.cc/150?img=44", text: "mentioned you in a comment.", time: "3h" },
  { id: 5, username: "cricket_fever", avatar: "https://i.pravatar.cc/150?img=33", text: "liked your reel.", time: "5h" },
  { id: 6, username: "chef_mateo", avatar: "https://i.pravatar.cc/150?img=52", text: "started following you.", time: "1d" }
];
