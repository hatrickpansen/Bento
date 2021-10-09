// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Patrick",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Weather
  weatherKey: "ee06fe3c6776557f2022d4b887b56b97",
  weatherIcons: "OneDark", // 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "55.396229",
  defaultLongitude: "10.390600",

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: "0",
      name: "itsLearning",
      icon: "book-open",
      link: "https://sdu.itslearning.com/",
    },
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "GMail",
      icon: "inbox",
      link: "https://gmail.com/",
    },
    {
      id: "3",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "4",
      name: "Reddit",
      icon: "bookmark",
      link: "https://reddit.com",
    },
    {
      id: "5",
      name: "YouTube",
      icon: "youtube",
      link: "https://youtube.com/",
    },
    {
      id: "6",
      name: "Facebook",
      icon: "facebook",
      link: "https://faceboom.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: "music",
  secondListIcon: "coffee",

  // Links
  lists: {
    firstList: [
      {
        name: "Inspirational",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        name: "Classic",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        name: "Oldies",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        name: "Rock",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    ],
    secondList: [
      {
        name: "Linkedin",
        link: "https://linkedin.com/",
      },
      {
        name: "Figma",
        link: "https://figma.com/",
      },
      {
        name: "Dribbble",
        link: "https://dribbble.com",
      },
      {
        name: "Telegram",
        link: "https://webk.telegram.org",
      },
    ],
  },
};
