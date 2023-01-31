import profilePic from "./images/Amr.jpg";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import TwitterIcon from "@mui/icons-material/Twitter";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export const tweetBoxIcon = [
  { Icon: InsertPhotoOutlinedIcon },
  { Icon: GifBoxOutlinedIcon },
  { Icon: BallotOutlinedIcon },
  { Icon: SentimentSatisfiedOutlinedIcon },
  { Icon: CalendarTodayTwoToneIcon },
  { Icon: FmdGoodOutlinedIcon },
];

export const sideBarIcons = [
  { active: "active", Icons: HomeIcon, text: "Home" },
  { Icons: SearchIcon, text: "Explore" },
  { Icons: NotificationsNoneIcon, text: "Notifications" },
  { Icons: MailOutlineIcon, text: "Messages" },
  { Icons: BookmarkBorderIcon, text: "Bookmarks" },
  { Icons: ListAltIcon, text: "Lists" },
  { Icons: PermIdentityIcon, text: "Profile" },
  { Icons: MoreHorizIcon, text: "More" },
];

export const dateArray = Array(31)
  .fill(0)
  .map((ele, index) => ele + index);
export const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "Auguest",
  "September",
  "October",
  "November",
  "December",
];
export const yearArray = Array(25)
  .fill(2000)
  .map((year, index) => year + index);
export const whomfollow = [
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "Indian govenment official",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn1",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn2",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn3",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn4",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn5",
    folloDesignation: "indian govenment official",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn6",
    folloDesignation: "indian govenment official",
    isFollow: false,
  },
];

export const trendinsData = [
  {
    id: 1,
    trender: "#Shahrukh khan",
    tweets: "102k",
    isNotIntrested: false,
  },
  {
    id: 2,
    trender: "#Pathan",
    tweets: "30k",
    isNotIntrested: false,
  },
  {
    id: 3,
    trender: "#BioDiversity",
    tweets: "12k",
    isNotIntrested: false,
  },
  {
    id: 4,
    trender: "#SRK",
    tweets: "30k",
    isNotIntrested: false,
  },
  {
    id: 5,
    trender: "#Dipika",
    tweets: "102k",
    isNotIntrested: false,
  },
  {
    id: 6,
    trender: "#IPL",
    tweets: "300k",
    isNotIntrested: false,
  },
];

export const whatsHappenigData = [
  {
    id: 1,
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
    isNotIntrested: false,
  },
  {
    id: 2,
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
    isNotIntrested: false,
  },
  {
    id: 3,
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
    isNotIntrested: false,
  },
  {
    id: 4,
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
    isNotIntrested: false,
  },
  {
    id: 5,
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
    isNotIntrested: false,
  },
  {
    id: 6,
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
    isNotIntrested: false,
  },
  {
    id: 7,
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
    isNotIntrested: false,
  },
  {
    id: 8,
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
    isNotIntrested: false,
  },
  {
    id: 9,
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
    isNotIntrested: false,
  },
];

// module.exports = {
//   dateArray,
//   yearArray,
//   monthArray,
// };

export const tweetPosts = [
  {
    profilePic: profilePic,
    name: "Amar Sahu",
    verified: true,
    handlerName: "@amarsahu",
    organization: "United States government organization",
    followers: 200,
    followings: 400,
    joinedDate: "22 dec 2022",
    tweets: [
      {
        tweetText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        tweetPic: profilePic,
        tweetCount: 100,
        retweetCount: 100,
        likesCount: 100,
        viewsCount: "102k",
        TweetReplies: [
          {
            name: "Arjun ranavat",
            handlerName: "@Arjun6787",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            name: "charls Darvin",
            handlerName: "@charls",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
      {
        tweetText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        tweetPic: profilePic,
        tweetCount: 100,
        retweetCount: 100,
        likesCount: 100,
        viewsCount: "102k",
        TweetReplies: [
          {
            name: "Arjun ranavat",
            handlerName: "@Arjun6787",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            name: "charls Darvin",
            handlerName: "@charls",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
    ],
  },
  {
    profilePic: profilePic,
    name: "The White House",
    verified: true,
    handlerName: "@The White House",
    organization: "United States government organization",
    followers: 200,
    followings: 400,
    joinedDate: "22 dec 2022",
    tweets: [
      {
        tweetText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        tweetPic:
          "https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080",
        tweetCount: 100,
        retweetCount: 100,
        likesCount: 100,
        viewsCount: "102k",
        TweetReplies: [
          {
            name: "Arjun ranavat",
            handlerName: "@Arjun6787",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            name: "charls Darvin",
            handlerName: "@charls",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
    ],
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
    name: "Mukund",
    handlerName: "@kumarmukund",
    organization: "",
    followers: 200,
    followings: 400,
    joinedDate: "22 dec 2022",
    tweets: [
      {
        tweetText:
          "For someone to live another has to die. That is wildlife. My shot that was featured in NatGeo. Shot using @NikonIndia gear.",
        tweetPic:
          "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
        tweetCount: 200,
        retweetCount: 200,
        likesCount: 200,
        viewsCount: "10k",
        hastags: ["#wildLife", "#photoGraphy"],
        TweetReplies: [
          {
            name: "Karan kumar",
            handlerName: "@Kkumar",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            name: "Darshan patra",
            handlerName: "@patraD7898",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
    ],
  },
  {
    profilePic:"https://lh3.googleusercontent.com/pasZP7Q7djnEfYziWLb-U5F1Ga_YpGXbxoggi_H3YuCFZeXPBij6l7SuJRnh39osyU0omD-OON3O9w46qNWJ7eFhNwo1LOe0PU7gANdMGHNYgo6mPlIVJKk1AoJJVy2D7bptiaUqpw=w1920-h1080",
    name: "Usain St. Leo Bolt",
    handlerName: "@usainbolt",
    organization: "",
    followers: 200,
    followings: 400,
    joinedDate: "22 dec 2022",
    tweets: [
      {
        tweetText: "Earned..Not Given.",
        tweetPic:
          "https://lh3.googleusercontent.com/pasZP7Q7djnEfYziWLb-U5F1Ga_YpGXbxoggi_H3YuCFZeXPBij6l7SuJRnh39osyU0omD-OON3O9w46qNWJ7eFhNwo1LOe0PU7gANdMGHNYgo6mPlIVJKk1AoJJVy2D7bptiaUqpw=w1920-h1080",
        tweetCount: 700,
        retweetCount: 700,
        likesCount: 900,
        viewsCount: "100k",
        refLink: "https://www.globalwildlife.org/blog/",
        TweetReplies: [
          {
            name: "Akshay chaudari",
            handlerName: "@AC",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            name: "Sujeet mandale",
            handlerName: "@Er_Sujeet",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
    ],
  },
  {profilePic:"https://lh3.googleusercontent.com/4aSGO7MxlG112HGNyNS05HcVDtz7XAC8bUlieGaFHSyCMYJh8GVRR17I5OhcyVvxWWjR9-Ibu4vgmZhRe6rcPfJT-qAFi6TvTDAlXpLu_vooIsm3CMdTdB7JMYvheeI9474Fy9ZxFw=w1920-h1080",
    name: "Andrew Elliott",
    handlerName: "@andrewje_home",
    organization: "",
    followers: 200,
    followings: 400,
    joinedDate: "22 dec 2022",
    tweets: [
      {
        tweetText: "Stolen.. Not earned. ",
        tweetPic:
          "https://lh3.googleusercontent.com/4aSGO7MxlG112HGNyNS05HcVDtz7XAC8bUlieGaFHSyCMYJh8GVRR17I5OhcyVvxWWjR9-Ibu4vgmZhRe6rcPfJT-qAFi6TvTDAlXpLu_vooIsm3CMdTdB7JMYvheeI9474Fy9ZxFw=w1920-h1080",
        tweetCount: 400,
        retweetCount: 327,
        likesCount: 90,
        viewsCount: "7k",
        hastags: ["#sports", "#Winners"],
        TweetReplies: [
          {
            name: "Rajan kashyap",
            handlerName: "@kashyapR",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            name: "Shreyash",
            handlerName: "I_am_shreyash",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
    ],
  },
  {
    profilePic:"https://lh3.googleusercontent.com/Jt-Vf0_wj_T3HgLPsjJz-sqzds1WB_nxZR1BRG_Fy2MetPgymruJINllajLUWA9KhYdScF_ZIgbl-4ZrGw4DFI5Y4q3uImG5_-H4okqGh4Lo14AB4Fwhx8lUqSWhfaYuDVI1Qd-CHg=w1920-h1080",
    name: "RVCJ Media",
    handlerName: "@RVCJ_FB",
    organization: "",
    followers: 200,
    followings: 400,
    joinedDate: "22 dec 2022",
    tweets: [
      {
        tweetText: "Well Played Team India ",
        tweetPic:
          "https://lh3.googleusercontent.com/Jt-Vf0_wj_T3HgLPsjJz-sqzds1WB_nxZR1BRG_Fy2MetPgymruJINllajLUWA9KhYdScF_ZIgbl-4ZrGw4DFI5Y4q3uImG5_-H4okqGh4Lo14AB4Fwhx8lUqSWhfaYuDVI1Qd-CHg=w1920-h1080",
        tweetCount: 650,
        retweetCount: 699,
        likesCount: 900,
        viewsCount: "17k",
        hastags: ["#HockeyLover", "#Hockey", "#Team India"],
        TweetReplies: [
          {
            name: "Durgen",
            handlerName: "@Mess_owner",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            name: "charls Darvin",
            handlerName: "@charls",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
    ],
  },
];

// export const tweetPosts=[
//   {
//     profilePic: profilePic,
//     name: "The White House",
//     handlerName: "@The White House",
//     verified: true,
//     organization: "United States government organization",
//     tweetText:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
//     tweetPic:
//       "https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080",
//     tweetCount: 100,
//     retweetCount: 100,
//     likesCount: 100,
//     viewsCount: "102k",
//     followers: 200,
//     followings: 400,
//     joinedDate: "22 dec 2022",
//   },

//   {
//     name: "Mukund",
//     handlerName: "@kumarmukund",
//     organization: "",
//     tweetText:
//       "For someone to live another has to die. That is wildlife. My shot that was featured in NatGeo. Shot using @NikonIndia gear.",
//     tweetPic:
//       "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
//     tweetCount: 200,
//     retweetCount: 200,
//     likesCount: 200,
//     viewsCount: "10k",
//     hastags: ["#wildLife", "#photoGraphy"],
//     followers: 200,
//     followings: 400,
//     joinedDate: "22 dec 2022",
//   },
//   {
//     name: "Usain St. Leo Bolt",
//     handlerName: "@usainbolt",
//     organization: "",
//     tweetText: "Earned..Not Given.",
//     tweetPic:
//       "https://lh3.googleusercontent.com/pasZP7Q7djnEfYziWLb-U5F1Ga_YpGXbxoggi_H3YuCFZeXPBij6l7SuJRnh39osyU0omD-OON3O9w46qNWJ7eFhNwo1LOe0PU7gANdMGHNYgo6mPlIVJKk1AoJJVy2D7bptiaUqpw=w1920-h1080",
//     tweetCount: 700,
//     retweetCount: 700,
//     likesCount: 900,
//     viewsCount: "100k",
//     refLink: "https://www.globalwildlife.org/blog/",
//     followers: 200,
//     followings: 400,
//     joinedDate: "22 dec 2022",
//   },
//   {
//     name: "Andrew Elliott",
//     handlerName: "@andrewje_home",
//     organization: "",
//     tweetText: "Stolen.. Not earned. ",
//     tweetPic:
//       "https://lh3.googleusercontent.com/4aSGO7MxlG112HGNyNS05HcVDtz7XAC8bUlieGaFHSyCMYJh8GVRR17I5OhcyVvxWWjR9-Ibu4vgmZhRe6rcPfJT-qAFi6TvTDAlXpLu_vooIsm3CMdTdB7JMYvheeI9474Fy9ZxFw=w1920-h1080",
//     tweetCount: 400,
//     retweetCount: 327,
//     likesCount: 90,
//     viewsCount: "7k",
//     hastags: ["#sports", "#Winners"],
//     followers: 200,
//     followings: 400,
//     joinedDate: "22 dec 2022",
//   },
//   {
//     name: "RVCJ Media",
//     handlerName: "@RVCJ_FB",
//     organization: "",
//     tweetText: "Well Played Team India ",
//     tweetPic:
//       "https://lh3.googleusercontent.com/Jt-Vf0_wj_T3HgLPsjJz-sqzds1WB_nxZR1BRG_Fy2MetPgymruJINllajLUWA9KhYdScF_ZIgbl-4ZrGw4DFI5Y4q3uImG5_-H4okqGh4Lo14AB4Fwhx8lUqSWhfaYuDVI1Qd-CHg=w1920-h1080",
//     tweetCount: 650,
//     retweetCount: 699,
//     likesCount: 900,
//     viewsCount: "17k",
//     hastags: ["#HockeyLover", "#Hockey", "#Team India"],
//     followers: 200,
//     followings: 400,
//     joinedDate: "22 dec 2022",
//   },
//   {
//     name: "BJP",
//     handlerName: "@BJP4India",
//     organization: "",
//     tweetText: `There had been no concern even about the number of islands in the country, leave about the development.
//       But today, India is moving ahead on the path of sustainable development managing
//       the balance of the nature and employment of modern ways of development in these areas.`,
//     tweetPic:
//       "https://lh3.googleusercontent.com/gt2P-cr6YN3T1bBsebU90SaZHJGZ1V2cfkb-bLvHu2MDYYt_69e-nkr-Ih6TLG1AB9YRLspbZLHPuUdrMOybhcRKnCzQlox5Mf6UPdm9CLqkNyRiC3iSYSs_MlZLDfCJBP1QX2UUAg=w1920-h1080",
//     tweetCount: 650,
//     retweetCount: 699,
//     likesCount: 900,
//     viewsCount: "17k",
//     followers: 200,
//     followings: 400,
//     joinedDate: "22 dec 2022",
//   },
//   {
//     name: "Sudarsan Pattnaik",
//     handlerName: "@sudarsansand",
//     organization: "",
//     tweetText: `On the birth anniversary of Netaji Subhas Chandra Bose, our humble tribute to one of the greatest leaders of India’s freedom struggle.
//       My installation Sand Art at Puri beach in Odisha.`,
//     tweetPic:
//       "https://lh3.googleusercontent.com/mTTckc-jkREvxkSdJAdrDXlRb6rSl0yP4DAUwXbMg1jzWclpLBhp7LNEDs2kIAd70tD25DSoOjbxJvPdrbLrMdEtcIa-xwt7srCZ1CDtGyysE5F8Y3Txo-ZKSMJekFC5U6ZNLJxPkA=w1920-h1080",
//     tweetCount: 100,
//     retweetCount: 509,
//     likesCount: 450,
//     viewsCount: "79k",
//     hastags: ["#Freedom Fighter", "#India"],
//     followers: 200,
//     followings: 400,
//     joinedDate: "22 dec 2022",
//   },
//   {
//     name: "Arvind Kumar",
//     handlerName: "@arvindtw",
//     organization: "",
//     tweetText: `Providing a boost to the ‘Make-In-India’ campaign, @Apple is producing & exporting several #iPhone models,
//       including iPhone 12, 13, 14, and 14+, from India through its 3 contract manufacturers under the Production-Linked Incentive (PLI) scheme.`,
//     tweetPic:
//       "https://lh3.googleusercontent.com/kz4VelwgiZ13GRb399l_q9THO2vsDQUMZveP8cGVRDVs68JPkzy8cIyv0KIv6mDWhOxOwjacsar27MlBa05du9Vdzlg5GIgwW2qQjN7rBacdIxr17wo_dpj7OuaXs0NhSRTJissedA=w1920-h1080",
//     tweetCount: 100,
//     retweetCount: 509,
//     likesCount: 450,
//     viewsCount: "79k",
//     refLink: "https://twitter.com/AshwiniVaishnaw",
//     hastags: ["#Electronics", "#iphone"],
//     followers: 200,
//     followings: 400,
//     joinedDate: "22 dec 2022",
//   },
//   {
//     name: "kimkk",
//     handlerName: "@ippittipapitti",
//     organization: "",
//     tweetText: `Free education is education  funded through government spending or charitable organizations rather than tuition funding. Many models of free higher education have been proposed.
//       primar school  and other comprehensive   or compulsory education  is free in many countries `,
//     tweetPic:
//       "https://lh3.googleusercontent.com/CL56HTt6Gs_Yq_AXRzINUBKSTEk6inm4vf52hTAEWS3ZxHj2uDy3SBvAh6mDw0CMAVVzxmA11jys5rWGFU5a8oA7A0MSq4SI6ScAHjaiagG5IC_M_iA_7OkQhNMZBQuXCMX-StMHIg=w1920-h1080",
//     tweetCount: 10,
//     retweetCount: 50,
//     likesCount: 40,
//     viewsCount: "9k",
//     hastags: ["#bcm112", "#students", "#education", "#allGovernmets"],
//     refLink: "https://twitter.com/ippittipapitti",
//     followers: 200,
//     followings: 400,
//     joinedDate: "22 dec 2022",
//   },
//   {
//     name: "Dainik Bhaskar",
//     handlerName: "@DainikBhaskar",
//     organization: "Tv News",
//     tweetText:
//       "राजस्थान के सरकारी स्कूल के स्टूडेंट्स को टीचर्स के लिए पदयात्रा करनी पड़ रही है। कालासर विद्यालय में इस समय 500 स्टूडेंट्स पढ़ रहे हैं, लेकिन स्कूल में टीचर्स के पद खाली पड़े हैं। दसवीं के स्टूडेंट्स का कोर्स भी पूरा नहीं हुआ है।",
//     tweetPic:
//       "https://lh3.googleusercontent.com/9qfuVqMrGUGsmOWlloXw9xqonA1btjoBRVFGMZxIZkYANGZGoQpeQuCVSVxAQYjggYOT8kyTlsf-I4I2Ar4-izKrH8Gps7xDNq_9GJ4QyI5tERgrWH2HgB7bt1Cp65UfkZwVrpcC9A=w1920-h1080",
//     tweetCount: 10,
//     retweetCount: 50,
//     likesCount: 40,
//     viewsCount: "9k",
//     hastags: ["#Education", "#Rajasthan"],
//     refLink: "https://dainik-b.in/ekPIEaD5Jwb",
//     followers: 200,
//     followings: 400,
//     joinedDate: "22 dec 2022",
//   },
//   {
//     name: "Madhya Pradesh Tourism",
//     handlerName: "@MPTourism",
//     organization: "Mp tourism",
//     tweetText:
//       "If you are a nature-lover who loves to spend time in the jungle and adores the mighty #bigcats, plan a jungle safari in the #HeartofIndia. Wander through the lush green forests and keep your cameras handy!",
//     tweetPic:
//       "https://lh3.googleusercontent.com/gyVQi-t5YrzlIrjmHfngOfmDKQOnICIwp3fHGjesIVQ8JCj-A0IU7GU9xc0PUS1bqr_uXIbsWLApie_FMq4kEqc7HZ789NrrZxghtedBFl1VfN5owv8nYoWT4ZYAXpWUojS2Xnfv6w=w1920-h1080",
//     retweetCount: 50,
//     likesCount: 40,
//     viewsCount: "9k",
//     hastags: ["#BIGcat", "#HeartofIndia"],
//     refLink: "https://www.mptigerfoundation.org/news-corner/blog",
//     followers: 200,
//     followings: 400,
//     joinedDate: "22 dec 2022",
//     tweetData: [
//       {
//         name: "",
//         handlerName: "",
//         tweetText: "",
//         tweetPic: "",
//       },
//       {
//         name: "",
//         handlerName: "",
//         tweetText: "",
//         tweetPic: "",
//       },
//       {
//         name: "",
//         handlerName: "",
//         tweetText: "",
//         tweetPic: "",
//       },
//       {
//         name: "",
//         handlerName: "",
//         tweetText: "",
//         tweetPic: "",
//       },
//     ],
//   },
// ];
