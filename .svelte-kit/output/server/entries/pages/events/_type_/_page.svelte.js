import { c as create_ssr_component, a as subscribe, f as set_store_value, d as escape, v as validate_component, e as each, b as add_attribute } from "../../../../chunks/ssr.js";
import { S as SectionHeader } from "../../../../chunks/SectionHeader.js";
import { c as collapsingNavbar } from "../../../../chunks/stores.js";
import { E as EventCard } from "../../../../chunks/EventCard.js";
const scitech = {
  title: "SciTech",
  eventGroups: [
    {
      name: "",
      separatePage: true,
      "card-width": 14,
      "card-height": 20,
      entries: [
        {
          id: "genai-image-challenge",
          name: "Pixel Perfect",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: "In this fun and creative challenge, participants will be provided with a target image. Using specified AI image generation tools, they must recreate an image as close to the original as possible, within a limited number of prompts and without using specific restricted phrases.",
          tagline: "Unleash Creativity, Match the Image!",
          prizePool: 1e4,
          mode: "Online",
          club: "DSAI Club",
          rulebook: "https://docs.google.com/document/d/1B97m1-ruw51L0RuWLMLXeD3d7aXlpZCYkDT-oBpZe3M/edit?usp=sharing",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Nishant Verma",
              contact: "9670004551"
            },
            {
              name: "Vedant Marodkar",
              contact: "9075250152"
            }
          ]
        },
        {
          id: "Electronics_Enigma",
          name: "Electronics Enigma",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: "Online quiz will be conducted related to electronics and technology. Certain questions related to electronics, communication systems and technology will be asked. Participants have to answer the question by choosing the options given under a certain time limit",
          tagline: "Discover the pulse of Electronics !",
          prizePool: 12e3,
          mode: "Online",
          club: "ElectroMos",
          rulebook: "#",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Ayush Kumar",
              contact: "9279199099"
            },
            {
              name: "Omendra Upadhyay",
              contact: "8247589701"
            }
          ]
        },
        {
          id: "TTF",
          name: "Tech and Tinker Fusion",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: "A hackathon will be conducted in offline mode, where participants will be given a problem statement and asked to solve using a particular software. Based on optimisation, time and complexity the top-3 winner will be chosen. The domain of problem statement and software will be declared before the hackathon",
          tagline: "Discover the pulse of Electronics !",
          prizePool: 12e3,
          mode: "Offline",
          club: "ElectroMos",
          rulebook: "#",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Divit Sharma",
              contact: "9109340021"
            },
            {
              name: "Omendra Upadhyay",
              contact: "8247589701"
            }
          ]
        },
        {
          id: "cosmotheater",
          name: "Cosmotheater",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: "The Cosmotheater is a state-of-the-art facility designed to immerse visitors in the wonders of the universe through captivating visual experiences and educational programming. Combining elements of a traditional theater with the expansive knowledge of astronomy, a cosmotheater serves as a dynamic hub for exploring celestial phenomena, the cosmos, and our place within it.",
          tagline: "Explore the Universe, Experience the Wonder.",
          prizePool: 0,
          mode: "offline",
          club: "Space Exploration Society",
          rulebook: "#",
          location: "TBD",
          POCs: [
            {
              name: "Aviral Saxena",
              contact: "9755733558"
            },
            {
              name: "Ajay Chikate",
              contact: "9021500970"
            }
          ]
        },
        {
          id: "aero-chase",
          name: "AeroChase",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: "In this exciting drone racing event, teams will be formed with the primary objective of designing, building, and customizing their own drones from scratch. Each team will be responsible for not only constructing the drone but also ensuring it meets the performance and technical specifications required to excel in various competitions like Ring of fire",
          tagline: "Soar to Victory : Where Innovation Meets Flight",
          prizePool: 0,
          mode: "offline",
          club: "Space Exploration Society",
          rulebook: "#",
          location: "TBD",
          POCs: [
            {
              name: "Anaay Sahu",
              contact: "9717673798"
            },
            {
              name: "Shashank Yadav",
              contact: "8817877625"
            }
          ]
        },
        {
          id: "starlight-snapshots",
          name: "Starlight Snapshots",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: "Step into the realm of stars and celestial wonders! In this online astrophotography competition, we invite you to showcase your talent by capturing the breathtaking beauty of the night sky, celestial bodies, and cosmic phenomena. Whether it’s the stunning sweep of the Milky Way, a close-up of the moon’s surface, or the mesmerizing trails of stars in long-exposure shots, use your creativity and technical prowess to capture space like never before.\nUnveil the mysteries of the universe through your lens—where every shot tells a story of the cosmos.",
          tagline: "Capturing Cosmos, Picturing Universe",
          prizePool: 0,
          mode: "online",
          club: "Space Exploration Society",
          rulebook: "#",
          location: "TBD",
          POCs: [
            {
              name: "Snehal Suhane",
              contact: "9406543992"
            },
            {
              name: "Kushagra Katare",
              contact: "6260773546"
            }
          ]
        },
        {
          id: "v_verse",
          name: "Virtual Verse",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: "Virtual Verse hints at offline VR games by SES, where virtual experiences come to life. It's a dream realized, merging fantasy with technology for immersive play. Players step into VR worlds crafted by SES, blurring the lines between reality and fiction. Led by innovative minds, this project promises to redefine gaming experiences, offering a surreal journey beyond traditional gameplay.",
          tagline: "Step Into Fantasy—Where Reality Meets the Virtual Dream!",
          prizePool: 0,
          mode: "offline",
          club: "Space Exploration Society",
          rulebook: "#",
          location: "TBD",
          POCs: [
            {
              name: "Aditya Jha",
              contact: "7439879074"
            },
            {
              name: "Ankit Rath",
              contact: "9304094370"
            }
          ]
        },
        {
          id: "lockout",
          name: "Lockout Tournament",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: "Welcome to the Lockout Tournament 3.0 by Ingenuity! Get ready for intense one-on-one programming battles where participants tackle randomly generated problems, earning points to advance while winners move on and losers are eliminated. With odd participant counts, the highest-rated Codeforces member will receive a special promotion. You can switch programming languages freely during the tournament. Join us during MERAZ for an electrifying display of programming prowess. Register now and let your ingenuity shine!",
          tagline: "",
          prizePool: 0,
          mode: "Offline",
          club: "Ingenuity",
          rulebook: "#",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Koosh Gupta",
              contact: "8250213794"
            },
            {
              name: "Priyanshu Kishore",
              contact: "7363971979"
            }
          ]
        },
        {
          id: "codehunt",
          name: "CodeHunt",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: "Welcome to CodeHunt by Ingenuity! Get ready for an exhilarating journey filled with intense  team programming battles. Participate in a variety of thrilling challenges designed to test your coding skills, creativity, and teamwork. Expect more than just regular coding—prepare for fun, unique tasks that will push your problem-solving abilities to the limit. Compete for substantial cash prizes as you showcase your ingenuity. This is your chance to shine among the best programmers. Don’t wait—register now and unleash your skills in this unforgettable competition.",
          tagline: "",
          prizePool: 0,
          mode: "Online",
          club: "Ingenuity",
          rulebook: "#",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Manopriya Mondal",
              contact: "7595807122"
            },
            {
              name: "Arpan Goswami",
              contact: "7439247036"
            }
          ]
        },
        {
          id: "robo_kabaddi",
          name: "RoboKabaddi",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: `RoboKabaddi is a robotic combat event where robots enter the opposing team's  arena to score points by retrieving objects based on their distance from the goal. The farther the object is from the robot's home arena, the more points it earns. To score, the robot must successfully return the object to its arena without being intercepted or "tagged out" by the opposing team's bot.`,
          tagline: "Fast, Fearless and Techy Tackles",
          prizePool: 0,
          mode: "offline",
          club: "The Epsilon Club",
          rulebook: "#",
          location: "TBD",
          POCs: [
            {
              name: "HarsH Katole",
              contact: "7773945223"
            },
            {
              name: "Anurag Jaiswal",
              contact: "7355971516"
            },
            {
              name: "Khushi Sharma",
              contact: "7976281858"
            }
          ]
        },
        {
          id: "pick_and_place",
          name: "Pick and Place Robotic Arm",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: "",
          tagline: "Fast, Fearless and Techy Tackles",
          prizePool: 0,
          mode: "offline",
          club: "The Epsilon Club",
          rulebook: "#",
          location: "TBD",
          POCs: [
            {
              name: "Anaay Sahu",
              contact: "9717673798"
            },
            {
              name: "Shavaneeth Gourav",
              contact: "8639423179"
            },
            {
              name: "Raj Mohammad",
              contact: "7985378709"
            }
          ]
        },
        {
          id: "telekinesis",
          name: "Telekinesis",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: "Telekinesis is not just your ordinary gaming event. It's a mind-bending experience where you get to play the game using only the power of your mind! With the help of an EEG headband-powered Brain-Computer Interface, you'll tap into your brain's potential and unleash your telekinetic abilities to play games like Brain Breakout, Mind Pong, and many more. Simply put on the EEG headband, focus your mind, and watch as your thoughts translate into actions on the screen. No controllers are needed - just your brainpower! Plus, each game session lasts for 10 minutes, giving you plenty of time to test your telekinetic skills.",
          tagline: "Unlock the Power of Your Mind: Game Beyond Limits!",
          prizePool: 0,
          mode: "Offline",
          club: "DSAI Club",
          rulebook: "#",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Kinshuk Gupta",
              contact: "9479003023"
            },
            {
              name: "Kesav Patneedi",
              contact: "9014041996"
            }
          ]
        },
        {
          id: "Lets-Get-Hacked",
          name: "Lets-Get-Hacked",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: " We will be hacking as many devices as possible of those who attend the session, And then we will be explaining how we did it and how to stay protected from these sort of attacks in the future. ( We still can't guarantee that all the devices will be hacked or affected.)",
          Tagline: "Beware !!! You might get Hacked 😈",
          prizePool: 0,
          mode: "Offline",
          club: "Spectre",
          Rulebook: "#",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Sumanth Guptha",
              contact: "8919945608"
            },
            {
              name: "Aryan Verma",
              contact: "8448068999"
            }
          ]
        },
        {
          id: "cyberquest",
          name: "CyberQuest : Treasure Hunt",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: "Dive into the world of cryptography and blockchain with CipherQuest, a high-stakes treasure hunt. Solve puzzles, crack codes, and uncover clues in a race to the final treasure. Featuring challenges in cryptography, smart contracts, and cybersecurity, this event is the ultimate test for tech enthusiasts eager to push their skills to the limit.",
          tagline: "Crack the Code, Claim the Gold!",
          prizePool: 0,
          mode: "offline",
          club: "Blockchain at IIT Bhilai & Spectre",
          rulebook: "#",
          location: "TBD",
          POCs: [
            {
              name: "Putla theophila",
              contact: "9640348714"
            },
            {
              name: "Sumanth Guptha",
              contact: "8919945608"
            },
            {
              name: "Aryan Verma",
              contact: "8448068999"
            }
          ]
        },
        {
          id: "pitchblock",
          name: "PitchBlock",
          image: "scitech_banners/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          description: "PitchBlock invites teams to present their innovative tech product ideas or startup concepts. While we are excited to see blockchain and Web3-based solutions, we also welcome a wider range of tech-focused projects, making it easier for everyone to participate. Judging will focus on creativity, feasibility, and business potential, with extra points for blockchain applications. Whether you’re a blockchain pro or just starting, PitchBlock is your opportunity to pitch your vision to industry experts and win exciting prizes!",
          tagline: "Vision to Venture—Lead Web3!",
          prizePool: 0,
          mode: "offline",
          club: "Blockchain at IIT Bhilai & Entrepreneurship-Cell",
          rulebook: "#",
          location: "TBD",
          POCs: [
            {
              name: "Vasu Garg",
              contact: "9084690147"
            },
            {
              name: "Amay Dixit",
              contact: "7217627792"
            }
          ]
        }
      ]
    }
  ]
};
const culturals = {
  title: "Culturals",
  eventGroups: [
    {
      name: "",
      separatePage: true,
      "card-width": 14,
      "card-height": 20,
      entries: [
        {
          id: "beyond_sight",
          name: "Beyond Sight",
          image: "culturals/beyond-sight.webp",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1RFrK8agbzHMEFzsUsk-TTVP94_hx_3j5NRwiUfgwqnM/edit?usp=drive_link",
          description: "A blindfold painting duo painting competition",
          tagline: "Brushstrokes and Blunders: A Hilarious Art Adventure!",
          prizePool: "6000",
          mode: "Offline",
          location: "Offline",
          POCs: [
            {
              name: "Aviral Saxena",
              contact: "9755733558"
            },
            {
              name: "Ashtha priya",
              contact: "6204411316"
            }
          ]
        },
        {
          id: "luminous_ink",
          name: "Luminous Ink",
          image: "culturals/luminous_ink.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1xG6d6rlbBxEKkbgX7U-WDOnNVfVfRNW7CMjIbEX6xJY/edit?usp=drive_link",
          description: "A tattoo Making Competition",
          tagline: "Uncover your hidden glow: A night of luminous, temporary tattoos!",
          prizePool: 4500,
          mode: "Offline",
          location: "Offline",
          POCs: [
            {
              name: "Aditya Jha",
              contact: "743987974"
            },
            {
              name: "Bysani Charanya",
              contact: "8985516727"
            }
          ]
        },
        {
          id: "bridging-the-blanks",
          name: "Bridging the Blanks",
          image: "culturals/bridging-the-blanks.webp",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1JpPBDnNEhG2W2PTcbiYwF2p2XcctB2uXIueo3_-OmX0/edit?usp=drive_link",
          description: "Ab online theme based art Competition",
          tagline: "Fill the void, bridge the gap, let your artistic voice clap!",
          prizePool: 4500,
          mode: "Online",
          location: "Online",
          POCs: [
            {
              name: "Chetan Rathod",
              contact: "6353770603"
            }
          ]
        },
        {
          id: "in10sity",
          name: "In10sity",
          image: "culturals/In10sity.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1NoI7_7b5Vze17CwAX0EjNbqciiqwVp5UH06O1hz3Mwo/edit?usp=drive_link",
          description: "An offline group dance competition",
          tagline: "Step It Up: Dance Beyond Boundaries!",
          prizePool: 6e3,
          mode: "Offline",
          location: "Offline (Main Stage)",
          POCs: [
            {
              name: "Bhoomi Goyal",
              contact: "9205908661"
            },
            {
              name: "Bubli",
              contact: "6002846132 "
            }
          ]
        },
        {
          id: "dance-solitaire",
          name: "Dance Solitaire",
          image: "culturals/dance-solitaire.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1pgkGSjBZh9OJuF4cG3NuXOoJrhjmn9Y_tbIhWmVqQCM/edit?usp=drive_link",
          description: "An offline solo dance competition",
          prizePool: 5e3,
          mode: "Offline",
          location: "Offline (Main Stage)",
          POCs: [
            {
              name: "Prince Patidar",
              contact: "7223862370"
            },
            {
              name: "sanjani Kumari",
              contact: "6026575101 "
            }
          ]
        },
        {
          id: "virtual-groove",
          name: "Virtual Groove",
          image: "culturals/virtual-groove.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1KmBOdQsRgbU3WNki77mG9daquUI1nlXyPPC5SR17mSY/edit?usp=drive_link",
          description: "An online solo dance competition",
          tagline: "Dance Beyond Distance, Groove Online.",
          prizePool: 0,
          mode: "Online",
          location: "Online",
          POCs: [
            {
              name: "Aditya Jha",
              contact: "7439879074"
            }
          ]
        },
        {
          id: "euphony",
          name: "Euphony",
          image: "culturals/Euphony.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1TRlmlMbvV7jHT6rLykyGhFHmvyg-Kgtz/edit",
          description: "An Online Singing competition",
          tagline: "Where screen transform into stages!!",
          prizePool: 4500,
          mode: "Online",
          location: "Online",
          POCs: [
            {
              name: "Kinshuk Gupta",
              contact: "9479003023"
            },
            {
              name: "Bammidi Hima Bindu",
              contact: "9392913645"
            }
          ]
        },
        {
          id: "surreal",
          name: "SurReal",
          image: "culturals/Surreal.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1HctLJt5zzTKxO1pV8wRMHV-b1QDZ-kDIakj1gDEHwbk/edit?usp=drive_link",
          description: "An offline singing competition",
          tagline: "Soulful sur, rhythmic taal",
          prizePool: 7e3,
          mode: "Offline",
          location: "Offline (Main Stage)",
          POCs: [
            {
              name: "Ankit Rath",
              contact: "9304094370"
            },
            {
              name: "Shashank Yadav",
              contact: "8817877625"
            }
          ]
        },
        {
          id: "shredded-battle-of-bands",
          name: "SHREDDED:Battle of Bands",
          image: "culturals/Shredded.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1Kt0l5y3ArfzQBHMR5KKXzU1rDkqnyVJNLovmIi3Pl90/edit?usp=drive_link",
          description: "Band Competition",
          tagline: "Where Music Sparks the Fight!",
          prizePool: 22e3,
          mode: "Offline",
          location: "Offline (Main Stage)",
          POCs: [
            {
              name: "Adarsh Panjwani",
              contact: "7898263842"
            },
            {
              name: "Ayush Panwar",
              contact: "8979189680"
            },
            {
              name: "Yashasvi Saxena",
              contact: "97924 07662"
            }
          ]
        },
        {
          id: "cinemeraz",
          name: "CinéMeraz",
          image: "culturals/cinemeraz.webp",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/file/d/1PXac4gVXUVJKwSdQvz6NlRW3RoMmvBQk/edit?usp=docslist_api&filetype=msword",
          description: "CinéMeraz is all about capturing special moments of “ Meraz”  in your smartphone/camera while enjoying them. This is a one-person event in which the participant has to record the short clips of “Meraz” right from the beginning of the fest, then at last have to submit a compiled video made up of these short clips.",
          tagline: "CinéMeraz: Unleash Your Meraz Moments, Capture. Connect. Compile.",
          prizePool: 6e3,
          mode: "Offline",
          location: "Offline",
          POCs: [
            {
              name: "Harshal",
              contact: "+91 9414258313"
            },
            {
              name: "Aarav Singh Parihar",
              contact: "+91 70217 97576"
            }
          ]
        },
        {
          id: "sus",
          name: "SUS - Shot Ur Story",
          image: "culturals/Cinemaestro.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1LYZs7xRl2aVjXUO3hzBbf_lIi43fdYQbr26qA3l0cIg/edit?usp=drive_link",
          description: "This will be an open-to-all contest as we will be accepting online submissions of short movies through a Google form.",
          tagline: "Embark on a Cinematic Odyssey: Craft Your Narrative Through the Lens",
          prizePool: 12e3,
          mode: "Online",
          location: "Online",
          POCs: [
            {
              name: "Purva Jivani",
              contact: "9898040800"
            },
            {
              name: "Laxman Patel",
              contact: "7828942002"
            }
          ]
        },
        {
          id: "dejavu",
          name: "Déjà vu",
          image: "culturals/deja.webp",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1J920YhlDmnPbCzpz9KAs9XW2XjwXBKvu/edit?usp=drivesdk&ouid=109467951867640822767&rtpof=true&sd=true",
          description: "This will be an open-to-all contest as we will be accepting online submissions of a small segment from a movie or web series based on the theme provided.",
          tagline: "Wait a minute! I've seen this before...",
          prizePool: 7e3,
          mode: "Online",
          location: "Online",
          POCs: [
            {
              name: "Kartikeyan Kumar",
              contact: "9156174763"
            },
            {
              name: "Chaitanya",
              contact: "9392782205"
            }
          ]
        },
        {
          id: "melas-quiz",
          name: "MELAS Quiz",
          image: "culturals/melas.webp",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1rLn2ss9bvD5PK-cAIuSQI_ocChPx4S0re6RfRZn_UKA/edit?usp=drive_link",
          description: "A fun quiz on topics Music, Entertainment, Literature, Arts and Sports",
          tagline: "Sawaalo ka MELA",
          prizePool: 4500,
          mode: "Offline",
          location: "Offline",
          POCs: [
            {
              name: "Aarya Shadangule",
              contact: "9579013256"
            },
            {
              name: "Tancia Boro",
              contact: "7002108549"
            }
          ]
        },
        {
          id: "nsfw-quiz",
          name: "NSFW quiz",
          image: "culturals/nsfw.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1XsNQo5i-9pZayAI8KnOJaB6vG9AdDsrYFnUCJlSWb0U/edit?usp=drive_link",
          description: "Not safe for work 🤫",
          tagline: "Do not peek👀",
          prizePool: 4500,
          mode: "Offline",
          location: "Offline",
          POCs: [
            {
              name: "Srijan Mishra",
              contact: "7459902997"
            },
            {
              name: "Jayant Jaiswal",
              contact: "9151257674"
            }
          ]
        },
        {
          id: "phantom-ui-ux",
          name: "Phantom - UI/UX",
          image: "culturals/Phantom.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/15zUopo6Aw2xGtH1AMl3xpy1wWa01ptIV/edit?usp=drive_link&ouid=117155742661659485288&rtpof=true&sd=true",
          description: "",
          tagline: "",
          prizePool: 4500,
          mode: "Online",
          location: "Online",
          POCs: [
            {
              name: "Aditya Kotha",
              contact: "6304328500"
            },
            {
              name: "Hemanth kumar Reddy",
              contact: "9398481212"
            }
          ]
        },
        {
          id: "artvile",
          name: "Artvile - Illustrator competition ",
          image: "culturals/product-design.jpg",
          poster: "Image-not-found.png",
          registerURL: "https://unstop.com/p/artville-meraz-40-indian-institute-of-technology-iit-bhilai-920451",
          rulebook: "https://docs.google.com/document/d/1_oZx5O7jO_oO1jdBrWpe34ZpV6vA3M4xVQjd9ndd7ug/edit?usp=drivesdk",
          description: "Are you an art lover ? Here’s the opportunity for you to show all your creativity through illustrations. Meraz 4.0 provides you a platform to be creative and bag a lot of prizes. Just be Creative!",
          tagline: "Unleash Your Imagination: Illustrate the Extraordinary!",
          prizePool: 4500,
          mode: "Online",
          location: "Online",
          POCs: [
            {
              name: "P R Raga Chandana",
              contact: "7908368395"
            }
          ]
        },
        {
          id: "murder-mystery",
          name: "Murder Mystery",
          image: "culturals/Murder-Mystery.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/172szki-WTVn26cBgcu1kH87KHuVoAJG8iJcInk280lo/edit?usp=drive_link",
          description: "A mystery solving event for detectives!!",
          tagline: "Bringing out the Sherlock Holmes in you🧐",
          prizePool: 7e3,
          mode: "Offline",
          location: "Offline",
          POCs: [
            {
              name: "Sarthak Dhandhania",
              contact: "9810792059"
            },
            {
              name: "Purva Jivani",
              contact: "9898040800"
            }
          ]
        },
        {
          id: "photo-of-the-fest-candid-edition",
          name: "Photo Of the Fest",
          image: "culturals/photo-fest.webp",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/14_XENskXv27joZezOaiN8O3f9Etotme-F8cRsqmMhP8/edit?usp=drive_link",
          description: "An immersive photography event capturing spontaneous moments and genuine emotions. Unleash your creativity, explore candid shots, and celebrate the beauty of unposed moments. Whether you're a seasoned photographer or a casual enthusiast, this event is your canvas to capture life's unscripted stories through the lens",
          tagline: "Unveil Life's Unscripted Beauty Through Your Lens",
          prizePool: 4500,
          mode: "Online",
          location: "Online",
          POCs: [
            {
              name: "Aditya Yadav",
              contact: "7470380899"
            },
            {
              name: "Krish Raghuwanshi",
              contact: "7024975399"
            }
          ]
        },
        {
          id: "online-theme-photography",
          name: "Online Theme Photography",
          image: "culturals/otp.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1cAElgG8KitliAG1XXtnWNgB8Ya8lMjTfVvdPfV9qT34/edit?usp=drive_link",
          description: "Participate  for a captivating virtual experience where participants can showcase their unique perspectives on the given theme",
          tagline: "Capture, Conquer, Clasp rewards",
          prizePool: 6e3,
          mode: "Online",
          location: "Online",
          POCs: [
            {
              name: "Ayush Raj",
              contact: "7759051325"
            },
            {
              name: "Krishna Jhanwar",
              contact: "8591565932"
            }
          ]
        },
        {
          id: "shutter-quest",
          name: "Shutter Quest",
          image: "culturals/shatter-quest.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/16qQyLNvfezDojtn8zv2RrxmgKdNI99xuPmCl7206qS0/edit?usp=drive_link",
          description: "Participants will draw themes or specific items randomly, and the challenge is to capture a stunning photo inspired by their chosen element. It's a journey of spontaneity and creativity, turning ordinary moments into extraordinary images",
          tagline: "",
          prizePool: 4500,
          mode: "Offline",
          location: "Offline",
          POCs: [
            {
              name: "Tanishq Gupta",
              contact: "8955947415"
            },
            {
              name: "Laxman Patel",
              contact: "7828942002"
            }
          ]
        },
        {
          id: "mun",
          name: "IIT Bh-Model United Nations",
          image: "culturals/Mun.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1Zu-nxf2ROSEBRdhP4fj5ozUYVWIul1-GWWVApuFJhgk/edit?usp=drive_link",
          description: "Model United Nations",
          tagline: "Where The Future Leaders of the World Meet",
          prizePool: 1e4,
          mode: "Offline",
          location: "Offline",
          POCs: [
            {
              name: "Rohit Raghuwanshi",
              contact: "7999463376"
            },
            {
              name: "Kanishka Yadav",
              contact: "8950966178"
            }
          ]
        },
        {
          id: "attire-spectra",
          name: "Attire Spectra",
          image: "culturals/Attire-spectra.jpg",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "",
          description: "",
          tagline: "Defy the norm. Redefine fashion",
          prizePool: 6e3,
          mode: "Offline",
          location: "Offline",
          POCs: [
            {
              name: "Bonta Aalaya",
              contact: "8341145002"
            },
            {
              name: "Vaishnavi Pawar",
              contact: "8830724178"
            }
          ]
        },
        {
          id: "art_hunt",
          name: "Art Hunt",
          image: "culturals/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1SaOLkhnHCHHyCeDna65Hk4rZNOhNLXQDt5gnYMU6Rvo/edit?usp=drive_link",
          description: "",
          tagline: " Unlock the clues, Discover the art, Claim the treasure!",
          prizePool: 4500,
          mode: "Offline",
          location: "Offline",
          POCs: [
            {
              name: "Lakshay Gupta",
              contact: " 9911118016"
            },
            {
              name: "Jiya Mehta",
              contact: "7990195809"
            }
          ]
        },
        {
          id: "promptopia",
          name: "Promptopia",
          image: "culturals/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1TDLhqGVgDm7KvotKaUhhM0X-Nw_we1ic2Fb2W-t5YCA/edit?usp=sharing",
          description: "Promptopia is a prompt writing challenge where participants are presented with a variety of intriguing prompts. Each participant selects one prompt and crafts a unique, imaginative piece based on it. To add an extra twist, bonus elements are provided daily, which participants can incorporate into their work to enhance their creativity and storytelling.",
          tagline: "From a Single Spark, a Story Ignites!",
          prizePool: 4500,
          mode: "Online",
          location: "Online",
          POCs: [
            {
              name: "Akshat Gupta",
              contact: "9432443604"
            },
            {
              name: "Ashutosh Kumar Jha",
              contact: "9051042158"
            }
          ]
        },
        {
          id: "meme_o_rama",
          name: "Meme-O-Rama",
          image: "culturals/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/14xK9HE_a6LNX9aaBugSqYDgKvwK_eSWvVReglCrwaqg/edit?usp=sharing",
          description: "Meme-O-Rama is an online Meme competition where participants create and submit memes based on some specific themes. Participants can compete individually or in small teams, creating original memes that adhere to specific guidelines. Memes are posted on an Instagram page. They are judged based on creativity, relevance to the theme, and audience engagement. The top three memes are awarded prizes based on a combination of judges' scores and public reactions.",
          tagline: "Meme it to Win it!",
          prizePool: 4500,
          mode: "Online",
          location: "Online",
          POCs: [
            {
              name: "Aditya Rehpade",
              contact: "9168290356"
            },
            {
              name: "Rishita Pandey",
              contact: "7067640892"
            }
          ]
        },
        {
          id: "symphoria",
          name: "Symphoria",
          image: "culturals/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/15UBmOykUHb0ADwvtGYeVvtwBnz4klz-2nsO0eyE3rYc/edit?usp=sharing",
          description: "Listen up, instrumental legends! The virtual spotlight is yours—step up and let your melodies shine in our Online Solo Instrumental Competition. Whether you rule the piano keys, shred on the guitar, or command any other instrument, this is your moment to display your talent and innovation. 🎶🎸🎹",
          tagline: "Hit the right notes and show the world your sound—it's time to play your way to the crown!",
          prizePool: 4500,
          mode: "Online",
          location: "Online",
          POCs: [
            {
              name: "Sourabh kumar",
              contact: "9102449434"
            },
            {
              name: "Vanam Hamsika",
              contact: "8639181279"
            }
          ]
        },
        {
          id: "abhivyakti",
          name: "अभिव्यक्ति",
          image: "culturals/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/129zWDUBc3nU7EinDetaGF3mPvDWSKtSrw7mlvx2SZ20/edit",
          description: '"अभिव्यक्ति" एक एकल काव्य प्रतियोगिता है, जिसमें प्रतिभागी अपनी मौलिक हिंदी रचनाएँ प्रस्तुत करेंगे। प्रतियोगिता दो चरणों में आयोजित की जाएगी: पहले चरण में प्रतिभागियों की रचनाओं की गहराई, मौलिकता और शब्दों की रचनात्मकता के आधार पर चयन किया जाएगा, और अंतिम चरण में चयनित प्रतिभागियों को दर्शकों के समक्ष अपनी प्रस्तुति देने का अवसर मिलेगा। अंतिम चरण में उन्हें दर्शकों की प्रतिक्रिया, आवाज और उच्चारण, भावभंगिमा और समग्र प्रभाव के आधार पर अंक दिए जाएंगे। प्रतियोगिता में नियमों का कड़ाई से पालन करना अनिवार्य है, जिसमें प्रॉप्स या अनुचित भाषा का उपयोग वर्जित है, और प्रतिभागियों को अपनी रचना की हार्ड कॉपी जमा करनी होगी। न्यायाधीश का निर्णय अंतिम और बाध्यकारी होगा।',
          tagline: "स्वर में छिपी कला, शब्दों में अभिव्यक्ति की शक्ति",
          prizePool: 4500,
          mode: "Online + Offline",
          location: "Online + Offline",
          POCs: [
            {
              name: "श्लोक तुलस्यान",
              contact: "9931085103"
            },
            {
              name: "बमबम",
              contact: "8521923023"
            }
          ]
        },
        {
          id: "Sports_Quiz",
          name: "Sports Quiz",
          image: "culturals/Image-not-found.png",
          poster: "Image-not-found.png",
          registerURL: "#",
          rulebook: "https://docs.google.com/document/d/1vZphG1uvGZRtjANoJBzDgUdsUEqqdi2k/edit",
          description: "Get ready for an action-packed, fun-filled sports quiz at MERAZ, where your sports knowledge will be put to the ultimate test! Dive into thrilling rounds featuring famous sports personalities like Sachin Tendulkar, Usain Bolt, and Serena Williams. Discover record-breaking feats, legendary figures, and quirky facts. This quiz promises to be an unforgettable experience, with intriguing trivia and mind-boggling stats. It’s a first in MERAZ history, so join us, have a blast, and leave with a head full of fascinating sports facts!",
          tagline: "Finally, a Place to Show Off All That Couch Coaching!",
          prizePool: 4500,
          mode: "Offline",
          location: "Offline",
          POCs: [
            {
              name: "Aditya Saini",
              contact: "8532832702"
            },
            {
              name: "Bobby Bhati",
              contact: "9873707467"
            }
          ]
        }
      ]
    }
  ]
};
const informals = {
  title: "Informals",
  eventGroups: [
    {
      name: "",
      "card-width": 14,
      separatePage: true,
      "card-height": 20,
      entries: [
        {
          id: "speed-dating",
          name: "SPEED DATING",
          image: "informals/Image-not-found.png",
          poster: "Image-not-found.png",
          tagline: "",
          prizePool: "",
          mode: "Offline",
          rulebook: "https://drive.google.com/file/d/1sysle_N8FuJJZmEUXjs-R3W16S8V8vNr/view?usp=drivesdk",
          registerURL: "#",
          description: "",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Tejavath lokeswari Naik",
              contact: "7075415121"
            },
            {
              name: "Prashant Sharma",
              contact: ""
            },
            {
              name: "Kakali Chaudhuri",
              contact: "6009861351"
            },
            {
              name: "Manvi Tyagi",
              contact: "7055826880"
            }
          ]
        },
        {
          id: "box-cricket",
          name: "BOX CRICKET",
          image: "informals/Image-not-found.png",
          poster: "Image-not-found.png",
          tagline: "",
          prizePool: "",
          mode: "Offline",
          rulebook: "https://drive.google.com/file/d/1t2BOFqub0ZE66R45cirMRJzIvyBPAePl/view?usp=drivesdk",
          registerURL: "#",
          description: "",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Vishnu Swaroop",
              contact: "6301611471"
            },
            {
              name: "Preeti Vardhan",
              contact: "8919929699"
            },
            {
              name: "Yuva Prakash",
              contact: "8988864222"
            },
            {
              name: "KGJ Amruth",
              contact: "9440766263"
            }
          ]
        },
        {
          id: "housie",
          name: "HOUSIE",
          image: "informals/Image-not-found.png",
          poster: "Image-not-found.png",
          tagline: "",
          prizePool: "",
          mode: "Offline",
          rulebook: "https://drive.google.com/file/d/1t3zHod_UJlQR_xr1O_bqUTq0lrdhRRvU/view?usp=drivesdk",
          registerURL: "#",
          description: "",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Sourav",
              contact: ""
            },
            {
              name: "Ashish",
              contact: ""
            },
            {
              name: "Eashan Hasija",
              contact: "8700653267"
            },
            {
              name: "Dara Navya",
              contact: "8125464974"
            }
          ]
        },
        {
          id: "7up",
          name: "7UP",
          image: "informals/Image-not-found.png",
          poster: "Image-not-found.png",
          tagline: "",
          prizePool: "",
          mode: "Offline",
          rulebook: "https://drive.google.com/file/d/1tAWAJmzp_xLTtMlanP6gPcrY6c8sp8t7/view?usp=drivesdk",
          registerURL: "#",
          description: "",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Kanishka Yadav",
              contact: "8950966178"
            },
            {
              name: "Kanika Shrivastav",
              contact: ""
            },
            {
              name: "Bhumi Tapadiya",
              contact: "8554093918"
            },
            {
              name: "MD Kaif Raza",
              contact: "8434133475"
            },
            {
              name: "Swagat Baghel",
              contact: "8457962757"
            }
          ]
        },
        {
          id: "e-sports",
          name: "E-SPORTS",
          image: "informals/Image-not-found.png",
          poster: "Image-not-found.png",
          tagline: "",
          prizePool: "",
          mode: "Offline",
          rulebook: "https://drive.google.com/file/d/1tBtZsmHt8LkiDMIyI1_trVXZOt1r_h97/view?usp=drivesdk",
          registerURL: "#",
          description: "",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "T.Dharshan Reddy",
              contact: ""
            },
            {
              name: "Chaitanya Kumar Ranga",
              contact: ""
            },
            {
              name: "L.Abhisekh",
              contact: ""
            },
            {
              name: "Venkata Sai",
              contact: ""
            }
          ]
        },
        {
          id: "paper-dance",
          name: "PAPER DANCE",
          image: "informals/Image-not-found.png",
          poster: "Image-not-found.png",
          tagline: "",
          prizePool: "",
          mode: "Offline",
          rulebook: "https://drive.google.com/file/d/1tC4Btco-pV_d5d6VrJUjtRkSgECy6w5A/view?usp=drivesdk",
          registerURL: "#",
          description: "",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Porumamilla Akash",
              contact: "9391885317"
            },
            {
              name: "Nagineni Thanmaie",
              contact: "8555024441"
            },
            {
              name: "Manish Kumar",
              contact: ""
            },
            {
              name: "Manoj Kumar",
              contact: "7794080011"
            }
          ]
        },
        {
          id: "feel the beat pass the heat",
          name: "FEEL THE BEAT PASS THE HEAT",
          image: "informals/Image-not-found.png",
          poster: "Image-not-found.png",
          tagline: "",
          prizePool: "",
          mode: "Offline",
          rulebook: "https://drive.google.com/file/d/1tE-wdyt7R98CgpcSNxPST1DRH-mSfBIi/view?usp=drivesdk",
          registerURL: "#",
          description: "",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Ram Charan",
              contact: "7901013344"
            },
            {
              name: "K Anil Naik",
              contact: "7815950884"
            },
            {
              name: "Neelam Johnson",
              contact: "6302032235"
            }
          ]
        },
        {
          id: "minute to win it challenge",
          name: "MINUTE TO WIN IT CHALLENGE",
          image: "informals/Image-not-found.png",
          poster: "Image-not-found.png",
          tagline: "",
          prizePool: "",
          mode: "Offline",
          rulebook: "https://drive.google.com/file/d/1tFw8hLraY4xYGj75g6mAiZIxkFS0fM8Q/view?usp=drivesdk",
          registerURL: "#",
          description: "",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Gourav Gour",
              contact: "8871910706"
            },
            {
              name: "Ishwar Chand Meena",
              contact: "7877497247"
            },
            {
              name: "Harsh Saita",
              contact: "7978471730"
            },
            {
              name: "Vatsal Yadav",
              contact: "7983709173"
            }
          ]
        },
        {
          id: "dodgeball",
          name: "DODGEBALL",
          image: "informals/Image-not-found.png",
          poster: "Image-not-found.png",
          tagline: "",
          prizePool: "",
          mode: "Offline",
          rulebook: "https://drive.google.com/file/d/1tM7bA2avF56k8-3THTpmWtwSWCAoiBZq/view?usp=drivesdk",
          registerURL: "#",
          description: "",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Rajnish",
              contact: "9462520915"
            },
            {
              name: "Shlok Tulsyan",
              contact: "9931085103"
            },
            {
              name: "Ayush Raj",
              contact: "7759051325"
            },
            {
              name: "Swarit Dixit",
              contact: "9695438194"
            }
          ]
        },
        {
          id: "memewar",
          name: "MEMEWAR",
          image: "informals/Image-not-found.png",
          poster: "Image-not-found.png",
          tagline: "",
          prizePool: "",
          mode: "Offline",
          rulebook: "https://drive.google.com/file/d/1tJqXG3nKRws-7s0hL-7PQrJjNOGAJr-7/view?usp=drivesdk",
          registerURL: "#",
          description: "",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Kanad Bajpai",
              contact: "9302860795"
            },
            {
              name: "Prakhar Raj Singhal",
              contact: "8960969612"
            },
            {
              name: "Prashant Sati",
              contact: ""
            },
            {
              name: "Khushagra Barfa",
              contact: "7869874438"
            }
          ]
        },
        {
          id: "rc car racing",
          name: "RC CAR RACING",
          image: "informals/Image-not-found.png",
          poster: "Image-not-found.png",
          tagline: "",
          prizePool: "",
          mode: "Offline",
          rulebook: "https://drive.google.com/file/d/1tHa9vzfrhlSDn-PghbFysOJWsbsvckyL/view?usp=drivesdk",
          registerURL: "#",
          description: "",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Waveson",
              contact: "8278486357"
            },
            {
              name: "Tanmay Jaiswal",
              contact: "7800859655"
            },
            {
              name: "Vaishnavi Nandyala",
              contact: "7989543780"
            }
          ]
        },
        {
          id: "slow cycle, sack race",
          name: "SLOW CYCLE, SACK RACE",
          image: "informals/Image-not-found.png",
          poster: "Image-not-found.png",
          tagline: "",
          prizePool: "",
          mode: "Offline",
          rulebook: "https://drive.google.com/file/d/1sr3jVcgkJAOJOqRlrMj6c6ClquU3WTdM/view?usp=drivesdk",
          registerURL: "#",
          description: "",
          location: "IIT Bhilai",
          POCs: [
            {
              name: "Manish Kumar",
              contact: ""
            },
            {
              name: "Priyam Kumari",
              contact: ""
            },
            {
              name: "Anu Yadav",
              contact: "8887873005"
            }
          ]
        }
      ]
    }
  ]
};
const allEventsData = {
  scitech,
  culturals,
  informals
};
const css = {
  code: '.sponsor-main-container.svelte-1vn7lvz{font-family:BluuNext, "Yusei Magic";font-size:1.5rem;text-align:center;align-items:center;display:flex;flex-direction:column;justify-content:center;background-size:cover;background-position:center;padding-bottom:9.563rem;background-position:center}.sponsor-heading.svelte-1vn7lvz{margin-top:6.25rem;color:#ffbe4a;font-family:BluuNext, "Yusei Magic"}.sub-title.svelte-1vn7lvz{margin-top:3.188rem;margin-bottom:2.25rem;font-family:"Yusei Magic", BluuNext;font-size:3rem;color:#ffbe4a;border-bottom:0.125px solid #ffbe4a;display:inline-block;align-content:center}.sponsors-grid-container.svelte-1vn7lvz{max-width:100vw;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin:0 -1rem}.single-sponsor.svelte-1vn7lvz{margin-top:1.5rem;margin-left:3rem;margin-right:3rem}@media(max-width: 1640px){.sponsors-grid-container.svelte-1vn7lvz{grid-template-columns:repeat(2, 1fr);grid-row-gap:1.625rem;grid-column-gap:7.25rem}}@media(max-width: 950px){.sponsors-grid-container.svelte-1vn7lvz{grid-template-columns:repeat(1, 1fr)}}@media(max-width: 768px){.sub-title.svelte-1vn7lvz{font-size:2.7rem}}@media(max-width: 480px){.sub-title.svelte-1vn7lvz{font-size:2.5rem}}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import SectionHeader from \\"$lib/components/SectionHeader.svelte\\";\\n  import { collapsingNavbar } from \\"$lib/stores\\";\\n  import allEventsData from \\"$lib/data/events.json\\";\\n  import EventCard from \\"$lib/components/EventCard.svelte\\";\\n\\n  export let data;\\n\\n  let eventsData = allEventsData[data.type];\\n\\n  $collapsingNavbar = false;\\n  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);\\n<\/script>\\n<style lang=\\"scss\\">.sponsor-main-container {\\n  font-family: BluuNext, \\"Yusei Magic\\";\\n  font-size: 1.5rem;\\n  text-align: center;\\n  align-items: center;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  background-size: cover;\\n  background-position: center;\\n  padding-bottom: 9.563rem;\\n  background-position: center;\\n}\\n\\n.sponsor-heading {\\n  margin-top: 6.25rem;\\n  color: #ffbe4a;\\n  font-family: BluuNext, \\"Yusei Magic\\";\\n}\\n\\n.sub-title {\\n  margin-top: 3.188rem;\\n  margin-bottom: 2.25rem;\\n  font-family: \\"Yusei Magic\\", BluuNext;\\n  font-size: 3rem;\\n  color: #ffbe4a;\\n  border-bottom: 0.125px solid #ffbe4a;\\n  display: inline-block;\\n  align-content: center;\\n}\\n\\n.sponsors-grid-container {\\n  max-width: 100vw;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0 -1rem;\\n}\\n\\n.single-sponsor {\\n  margin-top: 1.5rem;\\n  margin-left: 3rem;\\n  margin-right: 3rem;\\n}\\n\\n@media (max-width: 1640px) {\\n  .sponsors-grid-container {\\n    grid-template-columns: repeat(2, 1fr);\\n    grid-row-gap: 1.625rem;\\n    grid-column-gap: 7.25rem;\\n  }\\n}\\n@media (max-width: 950px) {\\n  .sponsors-grid-container {\\n    grid-template-columns: repeat(1, 1fr);\\n  }\\n}\\n@media (max-width: 768px) {\\n  .sub-title {\\n    font-size: 2.7rem;\\n  }\\n}\\n@media (max-width: 480px) {\\n  .sub-title {\\n    font-size: 2.5rem;\\n  }\\n}</style>\\n<svelte:head>\\n  <title>{capitalizeFirstLetter(data.type)} | Meraz'24</title>\\n  <link rel=\\"stylesheet\\" href=\\"https://fonts.googleapis.com/css?family=Lato\\" />\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.googleapis.com\\" />\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.gstatic.com\\" crossorigin />\\n  <link\\n    href=\\"https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald&family=Silkscreen&display=swap\\"\\n    rel=\\"stylesheet\\"\\n  />\\n</svelte:head>\\n\\n\\n<div\\n  class=\\"sponsor-main-container\\"\\n  style=\\"background-image: url(/assets/Background_image.webp)\\"\\n>\\n  <div class=\\"sponsor-heading\\">\\n    <SectionHeader name={eventsData[\\"title\\"]} />\\n  </div>\\n  {#each eventsData[\\"eventGroups\\"] as eventType}\\n    <div class=\\"sponsor-container\\">\\n      <div class=\\"sub-title\\">{eventType.name}</div>\\n      <div class=\\"sponsors-grid-container\\">\\n        {#each eventType.entries as eventData}\\n          <div class=\\"single-sponsor\\">\\n            {#if eventType[\\"separatePage\\"]}\\n              <a href={\\"/events/\\" + data.type + \\"/\\" + eventData.id}>\\n                <EventCard\\n                  frameContainerWidth=\\"28.75\\"\\n                  frameContainerHeight=\\"20\\"\\n                  sponsorName={eventData.name}\\n                  logoName={\\"/assets/event-images/\\" + eventData.image}\\n                />\\n              </a>\\n            {:else}\\n              <EventCard\\n                frameContainerWidth=\\"28.75\\"\\n                frameContainerHeight=\\"20\\"\\n                sponsorName={eventData.name}\\n                logoName={\\"/assets/event-images/\\" + eventData.image}\\n              />\\n            {/if}\\n          </div>\\n        {/each}\\n      </div>\\n    </div>\\n  {/each}\\n</div>\\n\\n"],"names":[],"mappings":"AAamB,sCAAwB,CACzC,WAAW,CAAE,QAAQ,CAAC,CAAC,aAAa,CACpC,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MAAM,CAC3B,cAAc,CAAE,QAAQ,CACxB,mBAAmB,CAAE,MACvB,CAEA,+BAAiB,CACf,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,QAAQ,CAAC,CAAC,aACzB,CAEA,yBAAW,CACT,UAAU,CAAE,QAAQ,CACpB,aAAa,CAAE,OAAO,CACtB,WAAW,CAAE,aAAa,CAAC,CAAC,QAAQ,CACpC,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OAAO,CACd,aAAa,CAAE,OAAO,CAAC,KAAK,CAAC,OAAO,CACpC,OAAO,CAAE,YAAY,CACrB,aAAa,CAAE,MACjB,CAEA,uCAAyB,CACvB,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,CAAC,CAAC,KACZ,CAEA,8BAAgB,CACd,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAChB,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,uCAAyB,CACvB,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,YAAY,CAAE,QAAQ,CACtB,eAAe,CAAE,OACnB,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,uCAAyB,CACvB,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACtC,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,yBAAW,CACT,SAAS,CAAE,MACb,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,yBAAW,CACT,SAAS,CAAE,MACb,CACF"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $collapsingNavbar, $$unsubscribe_collapsingNavbar;
  $$unsubscribe_collapsingNavbar = subscribe(collapsingNavbar, (value) => $collapsingNavbar = value);
  let { data } = $$props;
  let eventsData = allEventsData[data.type];
  set_store_value(collapsingNavbar, $collapsingNavbar = false, $collapsingNavbar);
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_collapsingNavbar();
  return `${$$result.head += `<!-- HEAD_svelte-1dj1z0o_START -->${$$result.title = `<title>${escape(capitalizeFirstLetter(data.type))} | Meraz&#39;24</title>`, ""}<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DotGothic16&amp;family=Oswald&amp;family=Silkscreen&amp;display=swap" rel="stylesheet"><!-- HEAD_svelte-1dj1z0o_END -->`, ""} <div class="sponsor-main-container svelte-1vn7lvz" style="background-image: url(/assets/Background_image.webp)"><div class="sponsor-heading svelte-1vn7lvz">${validate_component(SectionHeader, "SectionHeader").$$render($$result, { name: eventsData["title"] }, {}, {})}</div> ${each(eventsData["eventGroups"], (eventType) => {
    return `<div class="sponsor-container"><div class="sub-title svelte-1vn7lvz">${escape(eventType.name)}</div> <div class="sponsors-grid-container svelte-1vn7lvz">${each(eventType.entries, (eventData) => {
      return `<div class="single-sponsor svelte-1vn7lvz">${eventType["separatePage"] ? `<a${add_attribute("href", "/events/" + data.type + "/" + eventData.id, 0)}>${validate_component(EventCard, "EventCard").$$render(
        $$result,
        {
          frameContainerWidth: "28.75",
          frameContainerHeight: "20",
          sponsorName: eventData.name,
          logoName: "/assets/event-images/" + eventData.image
        },
        {},
        {}
      )} </a>` : `${validate_component(EventCard, "EventCard").$$render(
        $$result,
        {
          frameContainerWidth: "28.75",
          frameContainerHeight: "20",
          sponsorName: eventData.name,
          logoName: "/assets/event-images/" + eventData.image
        },
        {},
        {}
      )}`} </div>`;
    })}</div> </div>`;
  })}</div>`;
});
export {
  Page as default
};
