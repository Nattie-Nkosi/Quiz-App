// data/references.ts

export interface StudyReference {
  title: string;
  description: string;
  url: string;
  type: 'official' | 'book' | 'course' | 'documentation';
  topics: string[];
}

export const ccnaReferences: StudyReference[] = [
  {
    title: "Cisco CCNA Official Certification Guide",
    description: "Official certification guide covering all CCNA exam topics",
    url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
    type: "official",
    topics: ["Networking Fundamentals", "Network Access", "IP Connectivity", "IP Services", "Security Fundamentals", "Automation and Programmability"]
  },
  {
    title: "Cisco Learning Network",
    description: "Official learning resources and study materials from Cisco",
    url: "https://learningnetwork.cisco.com/s/ccna-cert",
    type: "documentation",
    topics: ["CCNA Certification", "Study Materials", "Practice Tests"]
  },
  {
    title: "Cisco DevNet",
    description: "Resources for network automation and programmability",
    url: "https://developer.cisco.com/certification/",
    type: "documentation",
    topics: ["Network Automation", "APIs", "Python", "Network Programmability"]
  },
  {
    title: "Cisco Networking Academy",
    description: "Comprehensive CCNA training and courses",
    url: "https://www.netacad.com/courses/networking",
    type: "course",
    topics: ["CCNA", "Networking Basics", "Hands-on Labs"]
  },
  {
    title: "IP Addressing and Subnetting Guide",
    description: "Official Cisco guide for IP addressing and subnetting",
    url: "https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-3.html",
    type: "documentation",
    topics: ["IP Addressing", "Subnetting", "Network Design"]
  }
];