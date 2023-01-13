const TICKETS = [
  { section: "General Admission Left", row: "21", price: 51 },
  { section: "General Admission Left", row: "22", price: 49 },
  { section: "General Admission Left", row: "22", price: 42 },
  { section: "General Admission Left", row: "24", price: 42 },
  { section: "General Admission Right", row: "21", price: 49 },
  { section: "General Admission Right", row: "22", price: 51 },
  { section: "1", row: "2", price: 100 },
  { section: "1", row: "3", price: 115 },
  { section: "2", row: "2", price: 114 },
  { section: "2", row: "3", price: 114 },
  { section: "2", row: "4", price: 107 },
  { section: "3", row: "3", price: 108 },
  { section: "3", row: "4", price: 111 },
  { section: "3", row: "5", price: 112 },
  { section: "4", row: "2", price: 114 },
  { section: "4", row: "3", price: 114 },
  { section: "4", row: "5", price: 110 },
  { section: "201", row: "21", price: 71 },
  { section: "201", row: "22", price: 72 },
  { section: "201", row: "23", price: 75 },
  { section: "201", row: "24", price: 78 },
  { section: "201", row: "25", price: 71 },
  { section: "202", row: "21", price: 72 },
  { section: "202", row: "22", price: 75 },
  { section: "202", row: "23", price: 78 },
  { section: "202", row: "24", price: 80 },
  { section: "202", row: "25", price: 76 },
  { section: "203", row: "21", price: 81 },
  { section: "203", row: "25", price: 78 },
  { section: "204", row: "21", price: 73 },
  { section: "204", row: "25", price: 72 },
  { section: "302", row: "31", price: 35 },
  { section: "302", row: "32", price: 34 },
  { section: "302", row: "33", price: 31 },
  { section: "302", row: "34", price: 38 },
  { section: "302", row: "35", price: 41 },
  { section: "303", row: "31", price: 35 },
  { section: "303", row: "34", price: 38 },
  { section: "303", row: "35", price: 41 },
  { section: "304", row: "31", price: 35 },
  { section: "304", row: "32", price: 34 },
  { section: "304", row: "35", price: 41 },
  { section: "305", row: "31", price: 35 },
  { section: "305", row: "32", price: 34 },
  { section: "305", row: "33", price: 31 },
  { section: "305", row: "34", price: 38 },
  { section: "305", row: "35", price: 41 },
  { section: "306", row: "33", price: 31 },
  { section: "306", row: "34", price: 38 },
  { section: "306", row: "35", price: 41 },
];

const EVENTS = [
  { name: "Pugtona 500", time: "10:30 AM", imageName: "pug-race.png", date: "3/01/2023", city: "Irvine", state: "CA", venue: "FivePoint Amphitheatre", tickets: TICKETS},
  { name: "Pugs Got Talent", time: "3:30 PM", imageName: "pug-song.png", date: "3/02/2023", city: "Irvine", state: "CA", venue: "FivePoint Amphitheatre", ticket: TICKETS},
  { name: "Pug Olympics", time: "1:30 PM", imageName: "pug-olympics.png", date: "3/03/2023", city: "Irvine", state: "CA", venue: "FivePoint Amphitheatre", tickets: TICKETS},
];

export default EVENTS;