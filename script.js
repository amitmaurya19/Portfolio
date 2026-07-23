// =====================================================
// MOBILE NAVIGATION
// =====================================================

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");


    const icon =
        menuButton.querySelector("i");


    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


// Close mobile menu after clicking navigation link

document
    .querySelectorAll(".nav-link")
    .forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");


            const icon =
                menuButton.querySelector("i");


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");


                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {

            threshold: 0.12

        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


// =====================================================
// PROJECT FILTERING
// =====================================================

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {

            btn.classList.remove(
                "active"
            );

        });


        button.classList.add(
            "active"
        );


        const selectedFilter =
            button.dataset.filter;


        projectCards.forEach((card) => {

            const categories =
                card.dataset.category.split(" ");


            if (

                selectedFilter === "all" ||

                categories.includes(
                    selectedFilter
                )

            ) {

                card.classList.remove(
                    "hide"
                );

            } else {

                card.classList.add(
                    "hide"
                );

            }

        });

    });

});


// =====================================================
// ACTIVE NAVIGATION ON SCROLL
// =====================================================

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const internalNavLinks =
    document.querySelectorAll(
        '.nav-link[href^="#"]'
    );


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 160;


        const sectionHeight =
            section.offsetHeight;


        if (

            window.scrollY >= sectionTop &&

            window.scrollY <
            sectionTop + sectionHeight

        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    internalNavLinks.forEach((link) => {

        link.classList.remove(
            "active"
        );


        if (

            link.getAttribute("href") ===
            `#${currentSection}`

        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


window.addEventListener(

    "scroll",

    updateActiveNavigation

);


// =====================================================
// HERO TEXT ROTATION
// =====================================================

const typingText =
    document.getElementById(
        "typingText"
    );


const phrases = [

    "real problems.",

    "secure systems.",

    "useful products.",

    "interesting ideas."

];


let phraseIndex = 0;


function changeHeroText() {

    phraseIndex =

        (phraseIndex + 1) %

        phrases.length;


    typingText.style.opacity =
        "0";


    setTimeout(() => {

        typingText.textContent =
            phrases[phraseIndex];


        typingText.style.opacity =
            "1";

    }, 250);

}


typingText.style.transition =
    "opacity 0.25s ease";


setInterval(

    changeHeroText,

    3000

);


// =====================================================
// CURRENT YEAR
// =====================================================

const currentYear =
    document.getElementById(
        "currentYear"
    );


currentYear.textContent =
    new Date().getFullYear();


// =====================================================
// NAVBAR SHADOW
// =====================================================

const header =
    document.querySelector(
        ".header"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 30) {

            header.style.boxShadow =

                "0 10px 35px rgba(0, 0, 0, 0.25)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);

// INTERACTIVE PORTFOLIO TERMINAL
const terminalBody=document.getElementById("terminalBody"),terminalInput=document.getElementById("terminalInput"),terminalHistory=document.getElementById("terminalHistory"),terminalStaticContent=document.getElementById("terminalStaticContent"),terminalHint=document.getElementById("terminalHint");

if(terminalBody&&terminalInput&&terminalHistory){
const history=[];let hi=0;let mode="root";

const projects=[
{
name:"Advanced Network Monitoring & Red Teaming Simulation",
text:`PROJECT 01
Advanced Network Monitoring & Red Teaming Simulation

Developed an Android-based network monitoring system designed to identify abnormal background network activity and potential data-exfiltration behavior.

The project included controlled red-team simulations to evaluate detection of suspicious background data transfers and security threats.

Tech:
Android • Kotlin • Network Security • Traffic Analysis`
},
{
name:"Network Intrusion Detection System",
text:`PROJECT 02
Network Intrusion Detection System

Python-based NIDS for real-time packet capture, deep packet inspection and rule-based detection of suspicious network activity.

Features:
→ Port scan detection
→ SYN flood detection
→ ARP spoofing detection
→ PCAP forensic export

Tech:
Python • Scapy • Networking • PCAP`
},
{
name:"Off-Grid Peer-to-Peer LoRa Communication System",
text:`PROJECT 03
Off-Grid Peer-to-Peer LoRa Communication System

Built an internet-independent communication system using Heltec LoRa 32 V3 boards for long-range peer-to-peer communication.

Features:
→ LoRa wireless communication
→ Morse-code signaling
→ External keypad integration
→ Off-grid communication concepts

Tech:
LoRa • ESP32 • Embedded • IoT`
},
{
name:"ChatVerse",
text:`PROJECT 04
ChatVerse

Full-stack real-time messaging platform with dynamic chat rooms, WebSocket communication, authentication and responsive UI.

Features:
→ Real-time messaging
→ Dynamic chat rooms
→ Typing indicators
→ Authentication & rate limiting

Tech:
React • Node.js • Express • Socket.io • MongoDB

GitHub:
github.com/amitmaurya19/ChatVerse

Live:
chat-verse-sigma.vercel.app`
},
{
name:"Intelligent Parking Management System",
text:`PROJECT 05
Intelligent Parking Management System

IoT-based automated parking solution combining embedded sensors, computer vision, cloud services and a web dashboard.

Features:
→ Parking-slot detection
→ License-plate recognition
→ Cloud monitoring
→ Occupancy analytics

Tech:
ESP32 • OpenCV • Flask • Firebase`
},
{
name:"Automated Attendance System with Face Recognition",
text:`PROJECT 06
Automated Attendance System with Face Recognition

Contactless attendance system using facial recognition with an administrative interface for managing records, statistics and reports.

Features:
→ Face recognition
→ Attendance automation
→ Admin dashboard
→ Automated reporting

Tech:
Python • OpenCV • Tkinter • Face Recognition`
}
];

const details={
home:`Welcome to Amit Kumar Maurya's portfolio.

Software Engineer • Cybersecurity Enthusiast • Full-Stack Developer

I build practical systems across full-stack development, cybersecurity, network monitoring, IoT and intelligent automation.`,
about:`ABOUT

I'm a Computer Science Engineer interested in building practical systems where software, cybersecurity and real-world problem solving meet.

My work spans real-time web applications, cybersecurity tools, network monitoring, IoT communication systems, computer vision and intelligent automation.

Education:
B.Tech — Computer Science & Engineering
Deen Dayal Upadhyaya Gorakhpur University
CGPA: 7.76

Location:
Gorakhpur, Uttar Pradesh, India

Core Interests:
Software • Security • Systems`,
experience:`EXPERIENCE

System and Software Security Intern
NIELIT Gorakhpur
JAN 2026 — MAR 2026

ISEA Project Phase-III • Ministry of Electronics & Information Technology, Government of India

Worked on system security, vulnerability assessment, network security, threat modeling and security research.

---

Python Development Intern
Vault of Codes
SEP 2024 — OCT 2024

Completed project-based Python development assignments involving automation, web scraping and APIs.`,
skills:`TECH STACK

Programming:
Python, C, C++, JavaScript, SQL

Web Development:
React.js, Next.js, Node.js, Express.js, Flask, Django, Tailwind CSS

Cybersecurity:
Nmap, Wireshark, Burp Suite, Metasploit, Scapy, Packet Analysis, Web Security

Data & Cloud:
MongoDB, MySQL, Firebase, NumPy, Pandas

AI & Computer Vision:
TensorFlow, OpenCV, Face Recognition

Tools & Platforms:
Git, GitHub, Linux, Kali Linux, Ubuntu, Socket.io, Vercel, Android SDK`,
achievements:`ACHIEVEMENTS

Samsung Innovation Campus 2024
National Topper — All India Rank #1 in Coding & Programming

Awards:
• ₹1,00,000 Cash Prize
• Galaxy Book4 Pro 360
• Trophy of Excellence
• Featured in Samsung Newsroom India

Google Cloud:
Arcade Premium Milestone

Open Source:
Hacktoberfest 2024 contributor

IIRS — ISRO:
Certified training in Geo-Data Sharing & Cyber Security`,
contact:`CONTACT

Email:
akmaurya2657@gmail.com

LinkedIn:
linkedin.com/in/akmaurya2657

GitHub:
github.com/amitmaurya19

Type "email" to open Gmail Compose.`,
resume:`RESUME

Type "open resume" to open my complete resume in a new browser tab.

The resume contains a structured overview of my experience, projects, technical skills, education and achievements.`
};

const aliases={project:"projects",work:"projects",exp:"experience",skill:"skills",tech:"skills",achievement:"achievements",awards:"achievements","contact-me":"contact"};

const helps=[
["home","Show portfolio introduction"],["about","Show about details"],["projects","Browse projects interactively"],["experience","Show work experience"],["skills","Show technical skills"],["achievements","Show achievements"],["resume","Show resume information"],["open resume","Open resume PDF"],["contact","Show contact details"],["email","Open Gmail Compose"],["clear","Clear terminal"],["exit","Return to default terminal screen"],["help","Show commands"]
];

const bottom=()=>requestAnimationFrame(()=>terminalBody.scrollTop=terminalBody.scrollHeight);

function cmd(t){
 const d=document.createElement("div");d.className="terminal-command-line";
 const p=document.createElement("span");p.className="terminal-prompt";p.textContent="$";
 const s=document.createElement("span");s.className="terminal-command-text";s.textContent=" "+t;
 d.append(p,s);terminalHistory.append(d);
}
function out(t,type=""){
 const d=document.createElement("div");d.className="terminal-response"+(type?" terminal-response-"+type:"");
 d.textContent=t;terminalHistory.append(d);
}
function help(){
 out("Available commands:");
 const d=document.createElement("div");d.className="terminal-help";
 helps.forEach(([c,x])=>{const a=document.createElement("span"),b=document.createElement("span");a.className="terminal-help-command";b.className="terminal-help-description";a.textContent=c;b.textContent=x;d.append(a,b)});
 terminalHistory.append(d);
}
function showProjects(){
 mode="projects";
 const list=projects.map((p,i)=>`[${i+1}] ${p.name}`).join("\n");
 out(`PROJECTS

${list}

Type a project number (1-${projects.length}) to view details.
Type "back" to return to the main terminal.`);
}
function showProject(n){
 mode="projects";
 const p=projects[n-1];
 if(!p){out(`Invalid project number: ${n}\nChoose a number from 1-${projects.length}.`,"error");return}
 out(`${p.text}

Type another project number (1-${projects.length}) to view it.
Type "back" to return to the project list.
Type "exit" to return to the default terminal screen.`);
}
function resetDefault(){
 terminalHistory.replaceChildren();
 if(terminalStaticContent)terminalStaticContent.style.display="";
 if(terminalHint)terminalHint.style.display="";
 terminalInput.value="";
 history.length=0;hi=0;mode="root";bottom();terminalInput.focus();
}
function run(raw){
 let c=raw.trim().toLowerCase();if(!c)return;
 cmd(raw.trim());if(terminalHint)terminalHint.style.display="none";
 if(aliases[c])c=aliases[c];

 if(c==="exit"){resetDefault();return}
 if(c==="clear"){terminalHistory.replaceChildren();if(terminalStaticContent)terminalStaticContent.style.display="none";if(terminalHint)terminalHint.style.display="none";bottom();return}
 if(c==="help"){help();return}
 if(c==="open resume"){out("Opening resume...","success");setTimeout(()=>window.open("assets/Amit_Kumar_Maurya_Resume.pdf","_blank","noopener,noreferrer"),200);return}
 if(c==="email"){
 out("Opening Gmail Compose...","success");
 const gmailWindow=window.open(
   "https://mail.google.com/mail/?view=cm&fs=1&to=akmaurya2657@gmail.com&su=Portfolio%20Inquiry",
   "_blank"
 );
 if(gmailWindow){
   gmailWindow.opener=null;
 }else{
   out("Gmail was blocked by your browser. Please allow pop-ups for this site and try again.","error");
 }
 return;
}

 if(c==="projects"){showProjects();return}

 if(mode==="projects"){
   if(c==="back"){showProjects();return}
   if(/^[1-6]$/.test(c)){showProject(Number(c));return}
 }

 if(details[c]){mode="root";out(details[c]);return}

 if(/^\d+$/.test(c)&&mode!=="projects"){
   out('Project numbers work after entering "projects".\nType "projects" first.',"error");return;
 }

 out('command not found: '+c+'\nType "help" to see available commands.',"error");
}

terminalInput.addEventListener("keydown",e=>{
 if(e.key==="Enter"){e.preventDefault();const v=terminalInput.value;if(!v.trim())return;history.push(v.trim());hi=history.length;terminalInput.value="";run(v);bottom()}
 else if(e.key==="ArrowUp"){e.preventDefault();if(!history.length)return;hi=Math.max(0,hi-1);terminalInput.value=history[hi]||"";setTimeout(()=>terminalInput.setSelectionRange(terminalInput.value.length,terminalInput.value.length))}
 else if(e.key==="ArrowDown"){e.preventDefault();if(!history.length)return;hi=Math.min(history.length,hi+1);terminalInput.value=hi===history.length?"":history[hi];setTimeout(()=>terminalInput.setSelectionRange(terminalInput.value.length,terminalInput.value.length))}
});
terminalBody.addEventListener("click",()=>terminalInput.focus());
}
