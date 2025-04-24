/**
 * Extended destination data for timeline displays
 */

// Kyrenia Castle & Harbor logistics data
export const kyreniaLogistics = {
  flights: [
    {
      date: "Mar 20, 2025",
      time: "10:30 AM - 1:45 PM",
      flight: "TK1784",
      from: "London Heathrow (LHR)",
      to: "Ercan International Airport (ECN)",
      airline: "Turkish Airlines",
      status: "Confirmed"
    },
    {
      date: "Mar 24, 2025",
      time: "3:15 PM - 6:30 PM",
      flight: "TK1785",
      from: "Ercan International Airport (ECN)",
      to: "London Heathrow (LHR)",
      airline: "Turkish Airlines",
      status: "Confirmed"
    }
  ],
  hotels: [
    {
      name: "Kyrenia Harbor View Hotel",
      checkIn: "Mar 20, 2025",
      checkOut: "Mar 24, 2025",
      roomType: "Deluxe Sea View",
      address: "25 Harbor Road, Kyrenia",
      confirmation: "HK7891234",
      status: "Confirmed"
    }
  ],
  tours: [
    {
      name: "Kyrenia Castle & Shipwreck Museum",
      date: "Mar 21, 2025",
      time: "9:00 AM - 12:00 PM",
      meetingPoint: "Castle Main Entrance",
      guide: "Mehmet A.",
      confirmation: "TCK-12345",
      status: "Confirmed"
    },
    {
      name: "Traditional Harbor Cruise",
      date: "Mar 22, 2025",
      time: "2:00 PM - 4:00 PM",
      meetingPoint: "Kyrenia Harbor Pier 3",
      guide: "Captain Nikos",
      confirmation: "HC-56789",
      status: "Confirmed"
    }
  ],
  restaurants: [
    {
      name: "Harbor Fish Tavern",
      date: "Mar 21, 2025",
      time: "7:30 PM",
      cuisine: "Mediterranean Seafood",
      address: "10 Marina Way, Kyrenia Harbor",
      reservation: "Table for 2",
      confirmation: "RF-45678",
      status: "Confirmed"
    },
    {
      name: "Ottoman Courtyard",
      date: "Mar 22, 2025",
      time: "8:00 PM",
      cuisine: "Traditional Cypriot",
      address: "42 Castle View Street, Kyrenia",
      reservation: "Table for 2",
      confirmation: "OC-12345",
      status: "Confirmed"
    }
  ],
  museums: [
    {
      name: "Shipwreck Museum",
      date: "Mar 21, 2025",
      time: "10:00 AM - 11:30 AM",
      address: "Inside Kyrenia Castle",
      ticketType: "Included with Castle Entry",
      highlights: "Ancient Greek Merchant Vessel",
      status: "Scheduled"
    },
    {
      name: "Folk Art Museum",
      date: "Mar 23, 2025",
      time: "10:00 AM - 12:00 PM",
      address: "15 Old Town Street, Kyrenia",
      ticketType: "General Admission",
      highlights: "Traditional Cypriot Crafts",
      status: "Tickets Purchased"
    }
  ]
};

// Kyrenia Castle & Harbor milestones
export const kyreniaMilestones = [
  {
    day: "Day 1",
    title: "Castle Exploration",
    description: "Explored the main castle grounds and fortifications",
    duration: "34 min",
    type: "Non-stop",
    extendedContent: "Started the day with a guided tour of the castle's main halls and battlements. The views from the top were breathtaking, offering panoramic vistas of the Mediterranean and the charming harbor below.",
    achievement: "Discovered a hidden passage that most tourists miss, leading to an ancient cistern",
    image: "/src/assets/images/IMG/Kyrenia Castle.jpg",
    location: "Kyrenia, Cyprus"
  },
  {
    day: "Day 2",
    title: "Harbor Cruise",
    description: "Took a traditional boat tour around the harbor",
    duration: "36 min",
    type: "Non-stop",
    extendedContent: "Boarded a wooden fishing boat for a two-hour cruise of the harbor and coastline. The captain shared fascinating stories about the maritime history of Kyrenia and pointed out hidden caves and beaches only accessible by water.",
    achievement: "Spotted dolphins playing near our boat - a rare sighting according to the locals",
    image: "/src/assets/images/IMG/cruise.jpg",
    location: "Kyrenia Harbor, Cyprus"
  }
];

// Salamis Ruins milestones
export const salamisMilestones = [
  {
    day: "Day 1",
    title: "Gymnasium Complex",
    description: "Explored the Roman gymnasium and baths",
    duration: "45 min",
    type: "Non-stop",
    extendedContent: "The day began at the massive gymnasium complex, which features impressively preserved columns and intricate mosaics. The scale of the Roman baths demonstrates the importance of Salamis as a major city in the Eastern Mediterranean.",
    achievement: "Documented rare architectural details missed by most guidebooks",
    image: "/src/assets/images/IMG/Salamis Ruins, Northern Cyprus.jpg",
    location: "Famagusta, Cyprus"
  },
  {
    day: "Day 1",
    title: "Theater Excavation",
    description: "Visited the amphitheater during ongoing excavation work",
    duration: "30 min",
    type: "Non-stop",
    extendedContent: "Had the rare opportunity to observe archaeologists at work in the 15,000-seat theater. Current excavations are revealing new details about the structure's acoustics and staging mechanisms.",
    achievement: "Got permission to enter normally restricted excavation areas",
    image: "/src/assets/images/IMG/Salamis Ruins, Northern Cyprus.jpg",
    location: "Famagusta, Cyprus"
  }
];

// Bellapais Abbey milestones
export const bellapaisMilestones = [
  {
    day: "Fri, May 5",
    title: "Dawn Photography",
    description: "Early morning photoshoot before tourists arrive",
    duration: "40 min",
    type: "Non-stop",
    extendedContent: "Arrived before dawn to capture the abbey in the soft morning light. The empty cloisters and refectory have an ethereal quality when bathed in the golden sunrise glow. Perfect for long exposure photography.",
    achievement: "Photographed rare light patterns through the rose window that only occur during certain seasons",
    image: "/src/assets/images/IMG/Bellapais Abbey.jpg",
    location: "Bellapais, Cyprus"
  },
  {
    day: "Sat, May 6",
    title: "Village Exploration",
    description: "Wandered through Bellapais village and met locals",
    duration: "35 min",
    type: "Non-stop",
    extendedContent: "The village surrounding the abbey is as charming as the monument itself. Narrow streets lead to hidden courtyards and family-run restaurants. Several residents shared stories of growing up in the shadow of the abbey.",
    achievement: "Was invited to a traditional Cypriot home for dinner with a family who has lived here for generations",
    image: "/src/assets/images/IMG/Bellapais Abbey.jpg",
    location: "Bellapais Village, Cyprus"
  }
];

// Varosha milestones
export const varoshaMilestones = [
  {
    day: "Day 1",
    title: "Ghost Town Tour",
    description: "Guided tour of the abandoned resort district",
    duration: "50 min",
    type: "Guided",
    extendedContent: "Walked through the eerie streets of this once-thriving resort area, frozen in time since 1974. Saw abandoned hotels, shops, and residences with possessions still visible inside. The contrast between the modern beach area and the decaying buildings creates a surreal atmosphere.",
    achievement: "Photographed some of the newly reopened sections not yet widely documented",
    image: "/src/assets/images/IMG/Varosha and Toyota.jpg",
    location: "Famagusta, Cyprus"
  },
  {
    day: "Day 1",
    title: "Beach Access",
    description: "Visited the pristine beach next to the abandoned hotels",
    duration: "45 min",
    type: "Non-stop",
    extendedContent: "Spent time on the beautiful beach that runs alongside the fenced area of Varosha. The crystal-clear waters and golden sand make it easy to understand why this was once one of the Mediterranean's premier resort destinations.",
    achievement: "Found vintage 1970s items washed up on the shore from the abandoned hotels",
    image: "/src/assets/images/IMG/Varosha and Toyota.jpg",
    location: "Varosha Beach, Famagusta, Cyprus"
  }
];

// Export as default object for convenience
export default {
  kyreniaLogistics,
  kyreniaMilestones,
  salamisMilestones,
  bellapaisMilestones,
  varoshaMilestones
};
