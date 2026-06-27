export const projects = [
  {
    id: 1,
    name: "Clothify",
    description: "A modern clothing e-commerce platform with clean UI and basic backend. Browse, filter and shop your favourite styles online!",
    tech: ["React", "Node.js", "MongoDB", "Bootstrap"],
    github: "https://github.com/",
    live: "https://clotify.com",
    image: null,
    featured: false,
    highlight: "My 1st basic project (ReactJS , Nodejs , Mongodb)",
    subPanels: []
  },
  {
    id: 2,
    name: "Safe Vehicle",
    description: "A smart vehicle safety system with 4 panels — Visitor, User, Garage & Admin. Includes real-time alerts, Google Maps integration and Power BI dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Google Maps API", "Power BI", "Twilio"],
    github: "https://github.com/",
    preview:"https://safevehciel.com",
    live: "",
    image: null,
    featured: true,
    highlight: "🏆 College 1st Rank | Highest Marks",
    subPanels: [
      {
        name: "Visitor Panel",
        icon: "👥",
        desc: "Public facing panel — view nearby garages, services and contact info.",
        github: "https://github.com/",
        live: "https://safevehciel.com",
        image: null
      },
      {
        name: "User Panel",
        icon: "🙋",
        desc: "Registered users can book services, track vehicle and get real-time alerts.",
        github: "https://github.com/",
        live: "https://safevehciel.com",
        image: null
      },
      {
        name: "Garage Panel",
        icon: "🔧",
        desc: "Garage owners manage bookings, services and customer requests.",
        github: "https://github.com/",
        live: "https://safevehciel.com",
        image: null
      },
      {
        name: "Help User Panel",
        icon: "🆘",
        desc: "Emergency help system — users can request immediate roadside assistance.",
        github: "https://github.com/",
        live: "https://safevehciel.com",
        image: null
      }
    ]
  }
]