// Personal Information
const PERSONAL_INFO = {
    name: "GODISELAPALLI CHAITANYA GOWD",
    role: "Trainee at Emertxe Information Technology",
    description: "I am Chaitu, an Electronics and Communication Engineering graduate with strong skills in Embedded C/C++ and Linux OS. I am currently working on an Address Book application in C, focusing on file handling and data structures. I also have major project experience in IoT and UAV-based Plant Disease Identification and Pesticide Recommendation. Passionate about embedded systems development, I aim to create efficient, real-world solutions that integrate hardware and software.",
    resumeLink: "#" // Dummy link as requested
};

// Code Editor Content for Hero Section
const CODE_CONTENT = `#include <stdio.h>
#include <string.h>

typedef struct {
    char name[50];
    char role[100];
    char education[100];
    char specialization[100];
    char current_project[100];
    char passion[200];
} Developer;

int main() {
    Developer chaitanya = {
        "Godiselapalli Chaitanya Gowd",
        "Trainee at Emertxe Information Technology",
        "B.Tech ECE, CGPA 8.96/10",
        "Embedded Systems Development",
        "Address Book Application in C",
        "Creating efficient real-world solutions"
    };
    
    printf("Developer Profile:\\n");
    printf("Name: %s\\n", chaitanya.name);
    printf("Role: %s\\n", chaitanya.role);
    printf("Education: %s\\n", chaitanya.education);
    printf("Specialization: %s\\n", chaitanya.specialization);
    printf("Current Project: %s\\n", chaitanya.current_project);
    printf("Passion: %s\\n", chaitanya.passion);
    
    return 0;
}`;

// Projects Data
const PROJECTS = [
    {
        title: "🌱 IoT & UAV Based Plant Disease Identification and Pesticide Recommendation",
        description: "Developed a smart farming solution using drones and IoT. The UAV captures crop images, which are analyzed with deep learning to detect plant diseases. IoT sensors monitor field conditions, and the system recommends the right pesticide or fertilizer through a cloud dashboard. This helps farmers reduce costs, minimize pesticide use, and improve crop yield.",
        technologies: ["UAV (Drone)", "IoT Sensors", "Arduino", "ESP32", "Raspberry Pi", "Python", "Embedded C", "TensorFlow"],
        image: "./images/plant-disease-project.jpg", // Placeholder
        liveLink: "#", // Dummy link
        githubLink: "#" // Dummy link
    },
    {
        title: "📚 Address Book Application",
        description: "Developed a C-based contact management system with functionalities to create, edit, delete, and search contacts. Each entry stores a name, phone number, and email ID, implemented using file handling and data structures.",
        technologies: ["C Programming", "File Handling", "Data Structures"],
        image: "./images/address-book-project.jpg", // Placeholder
        liveLink: "#", // Dummy link
        githubLink: "#" // Dummy link
    }
];

// Experience & Education Data
const EXPERIENCE = [
    {
        type: "education",
        title: "BACHELOR OF TECHNOLOGY",
        subtitle: "Electronics and Communication Engineering",
        organization: "Dr.M.G.R Educational And Research Institute",
        date: "2021-2025",
        description: "CGPA-8.92/10 (up to 7th sem)"
    },
    {
        type: "education",
        title: "INTERMEDIATE",
        subtitle: "MPC",
        organization: "Sri Chaitanya Junior College Vijayawada",
        date: "2019-2021",
        description: "AP-Board of intermediate Marks-878/1000"
    },
    {
        type: "education",
        title: "SSC",
        subtitle: "Secondary Education",
        organization: "A P R S O E KODIGENAHALLI",
        date: "2019",
        description: "AP-Board of Secondary CGPA-9.7/10"
    },
    {
        type: "internship",
        title: "EMI/EMC Testing of Army Ground Systems",
        subtitle: "Technical Internship",
        organization: "DRDO, Ministry of Defence, Govt. of India",
        date: "2024",
        description: "Gained hands-on experience in electromagnetic interference and compatibility testing for defense systems."
    },
    {
        type: "internship",
        title: "Comprehensive Electronics and Embedded Systems",
        subtitle: "Technical Training",
        organization: "IIT Madras",
        date: "2024",
        description: "Advanced training in electronics and embedded systems development."
    },
    {
        type: "internship",
        title: "Virtual Internship on Industrial-Based Embedded Systems with AI & IoT",
        subtitle: "Virtual Training",
        organization: "NSIC",
        date: "2024",
        description: "Specialized training in industrial embedded systems integrated with AI and IoT technologies."
    },
    {
        type: "internship",
        title: "IoT Applications Using Raspberry Pi",
        subtitle: "Technical Training",
        organization: "NSIC",
        date: "2024",
        description: "Practical training in developing IoT applications using Raspberry Pi platform."
    },
    {
        type: "internship",
        title: "Training in Embedded Systems",
        subtitle: "Technical Training",
        organization: "Witze Technology",
        date: "2024",
        description: "Comprehensive training in embedded systems development and programming."
    },
    {
        type: "certification",
        title: "Embedded Systems Certification",
        subtitle: "Professional Certification",
        organization: "TVS",
        date: "2024",
        description: "Industry-recognized certification in embedded systems development."
    }
];

// Leadership & Achievements
const ACHIEVEMENTS = [
    "Student Coordinator for the KALAM National Technical Symposium",
    "Best NCC Cadet Award",
    "Mahatma Jyothi Phule SSC District Merit Award"
];

// Social Service & NCC Activities
const SOCIAL_SERVICE = [
    {
        icon: "fas fa-medal",
        title: "Best NCC Cadet Award",
        description: "Recognized for outstanding performance, discipline, and leadership qualities in the National Cadet Corps. Demonstrated excellence in drill, physical fitness, and community service activities."
    },
    {
        icon: "fas fa-hands-helping",
        title: "Community Service",
        description: "Actively participated in various community service initiatives including cleanliness drives, blood donation camps, and awareness programs for social causes."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Disaster Management Training",
        description: "Completed comprehensive training in disaster management and emergency response procedures. Participated in mock drills and rescue operations."
    },
    {
        icon: "fas fa-users",
        title: "Leadership Development",
        description: "Led junior cadets in various NCC activities, developed organizational skills through parade formations, and coordinated team-based exercises."
    },
    {
        icon: "fas fa-flag",
        title: "National Integration",
        description: "Promoted unity and national integration through participation in Republic Day parades, Independence Day celebrations, and cultural exchange programs."
    },
    {
        icon: "fas fa-heart",
        title: "Social Awareness Campaigns",
        description: "Organized and participated in campaigns for health awareness, environmental protection, and educational initiatives in local communities."
    }
];

// Skills Data
const SKILLS = [
    {
        name: "Embedded C/C++",
        icon: "fas fa-microchip",
        category: "programming"
    },
    {
        name: "Linux OS",
        icon: "fab fa-linux",
        category: "operating-system"
    },
    {
        name: "Photography",
        icon: "fas fa-camera",
        category: "creative"
    },
    {
        name: "Photo Editing",
        icon: "fas fa-image",
        category: "creative"
    }
];

// Contact Information
const CONTACT_INFO = {
    email: "chaituchinna45@gmail.com",
    phone: "9110706317",
    linkedin: "www.linkedin.com/in/godiselapalli-chaitanya-gowd-037b90260",
    github: "https://github.com/chaitu06-i",
    location: "India"
};

// Social Links
const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        icon: "fab fa-linkedin",
        url: "https://www.linkedin.com/in/godiselapalli-chaitanya-gowd-037b90260",
        color: "#0077b5"
    },
    {
        name: "GitHub",
        icon: "fab fa-github",
        url: "#", // Dummy link
        color: "#333"
    },
    {
        name: "Email",
        icon: "fas fa-envelope",
        url: "mailto:chaituchinna45@gmail.com",
        color: "#ea4335"
    }
];

// NCC Photos Gallery
const NCC_PHOTOS = [
    {
        image: "./images/ncc-training.jpg",
        title: "Physical Training",
        description: "Rigorous physical fitness training and drill exercises"
    },
    {
        image: "./images/ncc-award.jpg",
        title: "Best Cadet Award",
        description: "Receiving the Best NCC Cadet Award for outstanding performance"
    },
    {
        image: "./images/ncc-camp.jpg",
        title: "NCC Camp",
        description: "Annual training camp with fellow cadets and officers"
    },
    {
        image: "./images/ncc-camp1.jpg",
        title: "NCC Camp Activities",
        description: "Training activities and team building exercises during camp"
    },
    {
        image: "./images/ncc-service.jpg",
        title: "Community Service",
        description: "Participating in community service and social awareness programs"
    },
    {
        image: "./images/ncc-ceremony.jpg",
        title: "Flag Ceremony",
        description: "Flag hoisting ceremony during Independence Day celebrations"
    }
];

// Internship Certificates
const CERTIFICATES = [
    {
        title: "EMI/EMC Testing of Army Ground Systems",
        organization: "DRDO, Ministry of Defence, Govt. of India",
        description: "Completed comprehensive training in electromagnetic interference and compatibility testing for defense systems.",
        date: "2024",
        image: "./images/cert-drdo.jpg",
        receivingPhoto: null,
        icon: "fas fa-shield-alt"
    },
    {
        title: "Comprehensive Electronics and Embedded Systems",
        organization: "IIT Madras",
        description: "Advanced training program covering electronics fundamentals and embedded systems development.",
        date: "2024",
        image: "./images/cert-iit.jpg",
        receivingPhoto: "./images/receiving-iit.jpg",
        icon: "fas fa-microchip"
    },
    {
        title: "Industrial-Based Embedded Systems with AI & IoT",
        organization: "NSIC",
        description: "Virtual internship focusing on industrial embedded systems integrated with AI and IoT technologies.",
        date: "2024",
        image: "./images/cert-nsic-ai.jpg",
        receivingPhoto: null,
        icon: "fas fa-robot"
    },
    {
        title: "IoT Applications Using Raspberry Pi",
        organization: "NSIC",
        description: "Hands-on training in developing IoT applications using Raspberry Pi platform and related technologies.",
        date: "2024",
        image: "./images/cert-nsic-iot.jpg",
        receivingPhoto: null,
        icon: "fas fa-wifi"
    },
    {
        title: "Training in Embedded Systems",
        organization: "Witze Technology",
        description: "Comprehensive training program in embedded systems development and programming methodologies.",
        date: "2024",
        image: "./images/cert-witze.jpg",
        receivingPhoto: "./images/receiving-witze.jpg",
        icon: "fas fa-code"
    },
    {
        title: "Embedded Systems Certification",
        organization: "TVS",
        description: "Industry-recognized professional certification in embedded systems development and best practices.",
        date: "2024",
        image: "./images/cert-tvs.png",
        receivingPhoto: null,
        icon: "fas fa-certificate"
    },
    {
        title: "Extramile Award",
        organization: "Department of ECE, Dr.M.G.R Educational And Research Institute",
        description: "Prestigious award recognizing exceptional performance and dedication during Ecomet Association Day 2025.",
        date: "2025",
        image: "./images/cert-extramile.jpg",
        receivingPhoto: "./images/receiving-extramile.jpg",
        icon: "fas fa-trophy"
    }
];

// Typing Animation Text
const TYPING_TEXTS = [
    "GODISELAPALLI CHAITANYA GOWD",
    "Embedded Systems Developer",
    "Linux Developer"
];
