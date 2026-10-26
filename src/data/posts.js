import im2 from "../assets/im2.jpeg";
import img1 from "../assets/img 1.jpeg";
import img3 from "../assets/img3.jpeg";
import trainVideo from "../assets/train.mp4";
import v1Video from "../assets/v1.mp4";
import vkVideo from "../assets/vk.mp4";

export const samplePosts = [
  {
    id: 1,
    username: "virat.kohli",
    avatar: "https://i.pravatar.cc/150?img=12",
    verified: true,
    location: "Wankhede Stadium, Mumbai",
    timeAgo: "1h",
    timeFull: "1 HOUR AGO",
    image:  img1,
    likes: 2494,
    likedBy: "cricket_fever",
    caption: "Pure passion 🏏🔥",
    hashtags: ["#TeamIndia", "#CricketLovers"],
    totalComments: 18492,
    comments: [
      {
        id: 101,
        username: "cricket_fever",
        text: "That shot ! 👏"
      },
      {
        id: 102,
        username: "football.daily",
        text: "Iconic sporting moment right there! ⚡"
      }
    ]
  },
  {
    id: 2,
    username: "football.daily",
    avatar: "https://i.pravatar.cc/150?img=60",
    verified: true,
    location: "Etihad Stadium, Manchester • Stadium Crowd Audio",
    timeAgo: "3h",
    timeFull: "3 HOURS AGO",
    image: im2,
    likes: 842190,
    likedBy: "",
    caption: "Unbelievable scenes! Match winner in the 90th minute ⚽🏟",
    hashtags: ["#PremierLeague", "#Football"],
    totalComments: 4280,
    comments: [
      {
        id: 201,
        username: "virat.kohli",
        text: "Pure passion! What a finish ⚽"
      }
    ]
  },
  {
    id: 3,
    username: "cricket_fever",
    avatar: "https://i.pravatar.cc/150?img=33",
    verified: true,
    location: "Lord's Cricket Ground, London",
    timeAgo: "4h",
    timeFull: "4 HOURS AGO",
    image: img3,
    likes: 638100,
    likedBy: "virat.kohli",
    caption: "Last night  🏏🌪",
    hashtags: ["#Lords", "#TestCricket"],
    totalComments: 3120,
    comments: [
      {
        id: 301,
        username: "virat.kohli",
        text: "The helicopter shot !"
      }
    ]
  },
  {
    id: 4,
    username: "champions_league",
    avatar: "https://i.pravatar.cc/150?img=68",
    verified: true,
    location: "Camp Nou, Barcelona",
    timeAgo: "6h",
    timeFull: "6 HOURS AGO",
    image: im2,
    likes: 1924500,
    likedBy: "football.daily",
    caption: "Goal of the season candidate! Absolutely sensational acrobatics ⚽🔥",
    hashtags: ["#UCL", "#Golazo"],
    totalComments: 9840,
    comments: [
      {
        id: 401,
        username: "football.daily",
        text: "Unbelievable technique and timing! What a goal ⚽"
      }
    ]
  }
];

export const exploreImages = [
  "https://picsum.photos/seed/explore1/500/500",
  "https://picsum.photos/seed/explore2/500/500",
  "https://picsum.photos/seed/explore3/500/500",
  "https://picsum.photos/seed/explore4/500/500",
  "https://picsum.photos/seed/explore5/500/500",
  "https://picsum.photos/seed/explore6/500/500",
  "https://picsum.photos/seed/explore7/500/500",
  "https://picsum.photos/seed/explore8/500/500",
  "https://picsum.photos/seed/explore9/500/500",
  "https://picsum.photos/seed/explore10/500/500",
  "https://picsum.photos/seed/explore11/500/500",
  "https://picsum.photos/seed/explore12/500/500"
];

export const sampleReels = [
  {
    id: 1,
    username: "Train_fever",
    avatar: "https://i.pravatar.cc/150?img=33",
    caption: "Nature is always good #Train",
    video: trainVideo,
    likes: 12400
  },
  {
    id: 2,
    username: "King_stories",
    avatar: "https://i.pravatar.cc/150?img=60",
    caption: "Shot of the century #king#virat#king ",
    video:vkVideo,
    likes: 8800
  },
  {
    id: 3,
    username: "nature_league",
    avatar: "https://i.pravatar.cc/150?img=68",
    caption: "Matchday vibes  #Nature",
    video:v1Video,
    likes: 20150
  }
];

export const profilePosts = [
  "https://picsum.photos/seed/profile1/400/400",
  "https://picsum.photos/seed/profile2/400/400",
  "https://picsum.photos/seed/profile3/400/400",
  "https://picsum.photos/seed/profile4/400/400",
  "https://picsum.photos/seed/profile5/400/400",
  "https://picsum.photos/seed/profile6/400/400"
];

export const profileReels = [
  "https://picsum.photos/seed/preel1/400/600",
  "https://picsum.photos/seed/preel2/400/600",
  "https://picsum.photos/seed/preel3/400/600"
];

export const profileTagged = [
  "https://picsum.photos/seed/tag1/400/400",
  "https://picsum.photos/seed/tag2/400/400",
  "https://picsum.photos/seed/tag3/400/400",
  "https://picsum.photos/seed/tag4/400/400"
];
