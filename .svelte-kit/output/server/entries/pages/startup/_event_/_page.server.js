const econclaveData = [
  {
    id: "WizardGrantt",
    name: "WizardGrantt",
    description: "Elevate your established startup to new heights with the backing of Government-sponsored SBI funding at our upcoming event. Experience the power to alleviate financial burdens, ignite innovation, and accelerate growth. Seize this opportunity to fuel your entrepreneurial journey with the support of SBI funding, unlocking doors to success and propelling your venture towards unprecedented achievements. Don't miss out on this chance to transform challenges into opportunities and empower your startup's future with SBI-sponsored funding",
    registerURL: "https://docs.google.com/forms/d/e/1FAIpQLSfY_b4M2dnxBwIVhcHNnHm9g6DF46PhtdxVNFUkg8uHx26xxQ/viewform",
    rulebook: "https://docs.google.com/document/d/10rBivf9BECiJNuqkaVJTts2MymvMl34w1dJFNxBDgwg/edit?usp=sharing",
    mode: "offline",
    poster: "Wizardgran.png",
    funding: "1Cr"
  },
  {
    id: "EnchanteX",
    name: "EnchanteX",
    description: "Embark on a profound exploration of startup wisdom with our distinguished expert, unraveling the elusive secrets of success. Through his captivating narratives, he intricately transforms the challenging path of entrepreneurship into an inspiring adventure, guiding and illuminating the way for aspiring business enthusiasts. Delve deep into the realm of his enchanting insights, where every word is a stepping stone towards unlocking your entrepreneurial potential. Join us in this transformative journey, as his expertise paves the way for a brighter and more informed entrepreneurial future    ",
    mode: "offline",
    poster: "Enchantex.png"
  },
  {
    id: "MysticPitch",
    name: "MysticPitch",
    description: "Mysticpitch is a unique platform where companies present specific problem statements to participants. Attendees are then challenged to pitch innovative and effective solutions to address these real-world problems, fostering collaboration and showcasing creative problem-solving skills within a competitive environment",
    registerURL: "https://unstop.com/p/mysticpitch-indian-institute-of-technology-iit-bhilai-930394",
    rulebook: "https://docs.google.com/document/d/12xXcEuaH-uoUZhoLTEgGzBb48jGI1eL8A5QqsR1PF7g/edit?usp=sharing",
    problemlist: "https://docs.google.com/document/d/123GKCgsBqi1UWdQR3LqH3peFxKmnSy_EnhK_ZII9c38/edit?usp=sharing",
    submissionURL: "https://docs.google.com/forms/d/e/1FAIpQLSe8HP7Qsj6-rzTh067AJxrHN7zgEwHsFBthAvdeez543O1dPg/viewform",
    mode: "offline",
    poster: "Mystic.png",
    funding: "20 Lakhs"
  }
];
function load({ params }) {
  let eventsData = econclaveData;
  for (var i = 0; i < eventsData.length; i++) {
    let myEvent = eventsData[i];
    if (myEvent.id === params.event) {
      return myEvent;
    }
  }
  return "404";
}
export {
  load
};
