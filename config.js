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
      icon: "arrow-up",
      link: "https://reddit.com",
    },
    {
      id: "5",
      name: "Facebook",
      icon: "facebook",
      link: "https://facebook.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: "list",
  secondListIcon: "coffee",

  // Links
  lists: {
    firstList: [
      {
        name: "IT Dusters CompuCleaner Xpert Dust Blower - 69 eur",
        link: "https://www.amazon.de/-/en/Dusters-CompuCleaner-Xpert-Dust-Blower/dp/B01G1Z0RF0/ref=sr_1_15?crid=NT8102H03P1S&dchild=1&keywords=staubgebl%C3%A4se+elektrisch&qid=1635597376&sprefix=electric+dust+blower%2Caps%2C80&sr=8-15",
      },
      {
        name: "Monitor arm - 42.99 eur",
        link: "https://www.amazon.de/-/en/gp/product/B082B6FBYK/ref=ox_sc_act_title_1?smid=AEG7IHGI4BFG3&psc=1",
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
      /*       {
        name: "Dribbble",
        link: "https://dribbble.com",
      },
      {
        name: "Telegram",
        link: "https://webk.telegram.org",
      }, */
    ],
  },
};
