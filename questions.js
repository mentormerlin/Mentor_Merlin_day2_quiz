// Questions data for Mentor Merlin quiz
// Each question object contains:
//  - id: unique identifier
//  - question: the question text
//  - type: question type ("mcq" for multiple choice, "tf" for true/false,
//    "fitb" for fill in the blanks, "image" for image-based)
//  - options: array of answer options (for MCQ)
//  - correctIndex or correctAnswer: index of the correct option or answer
//  - explanation: a brief explanation shown after submission

const questions = [
    {
        id: 1,
        type: 'mcq',
        question: 'When was Cyril Roy Consultancy Pvt. Ltd. (Mentor Merlin) founded?',
        options: [' 2015', ' 2018', ' 2021', ' 2019'],
        correctIndex: 1, // 2018
        explanation:
            'Cyril Roy Consultancy Private Limited, operating as Mentor Merlin, was incorporated on 27 June 2018 and began offering training programmes soon after.'
    },
    {
        id: 2,
        type: 'mcq',
        question: "What is Mentor Merlin's motto?",
        options: [' Learn Fast, Pass First', ' Nurses First', ' Why wait? Just Merlin it!', ' Excellence through Exams'],
        correctIndex: 2,
        explanation:
            "Mentor Merlin’s tagline on its home page proudly reads: 'Why Wait? Just Merlin It!', highlighting their commitment to swift, effective learning." 
    },
    {
        id: 3,
        type: 'mcq',
        question: 'What does the Mentor Merlin India (CRC) team handle globally?',
        options: [
            ' Only HR tasks',
            ' Only CBT training',
            ' Operations, content, and all training (except UK OSCE)',
            ' UK exams only'
        ],
        correctIndex: 2,
        explanation:
            'The India (CRC) team manages operations, content creation and all training activities for Mentor Merlin worldwide except the UK OSCE programme.'
    },
    {
        id: 4,
        type: 'mcq',
        question: 'Which statement best describes Mentor Merlin UK Ltd?',
        options: [
            ' Offers all online courses',
            ' Handles nurse migration',
            ' Dedicated only to OSCE training in the UK',
            ' Offers OET and CBT coaching'
        ],
        correctIndex: 2,
        explanation:
            'Mentor Merlin UK Ltd primarily focuses on preparing nurses for the NMC OSCE exam through dedicated on‑site training in the United Kingdom.'
    },
    {
        id: 5,
        type: 'mcq',
        question: 'What city was the first UK OSCE centre by Mentor Merlin opened in?',
        options: [' Leeds', ' London', ' Manchester', ' Northampton'],
        correctIndex: 3,
        explanation:
            'Mentor Merlin established its first dedicated UK OSCE training centre in Northampton to serve nurses seeking on‑site preparation.'
    },
    {
        id: 6,
        type: 'mcq',
        question: 'What was introduced by Mentor Merlin in 2024?',
        options: [
            ' OET Live Coaching',
            ' CBT Mobile App',
            ' Visitor Visa OSCE (VC OSCE) Programme',
            ' Nurses Abroad Campaign'
        ],
        correctIndex: 2,
        explanation:
            'In 2024 Mentor Merlin launched its Visitor Visa OSCE (VC OSCE) programme, allowing nurses to complete OSCE training on a visitor visa in the UK.'
    },
    {
        id: 7,
        type: 'mcq',
        question: "What does the 'Mentor Merlin History and Culture' session aim to do?",
        options: [
            ' Train nurses in OSCE',
            ' Build connection, confidence and belief in Mentor Merlin’s future',
            ' Teach CRM tools',
            ' Recruit mentors'
        ],
        correctIndex: 1,
        explanation:
            'The History and Culture session familiarises trainees with Mentor Merlin’s journey and values, building connection, confidence and belief in the company’s future.'
    },
    {
        id: 8,
        type: 'mcq',
        question: 'What is a common concern for nurses planning to move to the UK?',
        options: [
            ' Lack of public transport',
            ' Paperwork and exam fears',
            ' Shortage of shopping malls',
            ' Cultural food differences'
        ],
        correctIndex: 1,
        explanation:
            'Most nurses worry about navigating complex paperwork and passing the required English‑language and clinical exams when relocating to the UK.'
    },
    {
        id: 9,
        type: 'mcq',
        question: 'Which online platforms do most nurses use to research about UK NMC registration?',
        options: [
            ' Instagram and LinkedIn',
            ' WhatsApp groups and Facebook groups',
            ' Pinterest and Twitter',
            ' Medium and Reddit'
        ],
        correctIndex: 1,
        explanation:
            'Nurses often join dedicated WhatsApp and Facebook groups to share information and experiences about the UK NMC registration process.'
    },
    {
        id: 10,
        type: 'mcq',
        question: 'What is the mission of Mentor Merlin?',
        options: [
            ' Become the largest coaching provider',
            ' Empower nurses through learning',
            ' Launch training apps for doctors',
            ' Support only UK‑based nurses'
        ],
        correctIndex: 1,
        explanation:
            'Mentor Merlin’s mission is to empower nurses by providing comprehensive learning resources that help them achieve professional success.'
    },
    {
        id: 11,
        type: 'mcq',
        question: 'Which tool is used by Mentor Merlin for handling chats and support?',
        options: [' HubSpot', ' Intercom', ' Chatwoot', ' Salesforce'],
        correctIndex: 2,
        explanation:
            'The chat bubble on Mentor Merlin’s website is powered by Chatwoot – an open‑source customer support platform used for real‑time chat and ticketing.'
    },
    {
        id: 12,
        type: 'mcq',
        question: 'How many nurses have successfully passed their OSCE with Mentor Merlin’s help (as of 2025)?',
        options: [' Over 1,000', ' Over 5,000', ' Over 10,000', ' Over 50,000'],
        correctIndex: 2,
        explanation:
            'Mentor Merlin proudly advertises that more than 10,000 nurses have passed their OSCE with its guidance by 2025.'
    },
    {
        id: 13,
        type: 'mcq',
        question: 'Why do nurses choose the UK as their career destination?',
        options: [
            ' For tourism',
            ' For climate',
            ' For better salary, career growth and stability',
            ' Because of language similarity'
        ],
        correctIndex: 2,
        explanation:
            'The UK offers nurses attractive salaries, clear career progression and long‑term job stability, making it a preferred destination.'
    },
    {
        id: 14,
        type: 'mcq',
        question: 'What are the core values of Mentor Merlin?',
        options: [
            ' Quality, Speed, Aggression',
            ' Excellence, Integrity, Innovation, Support',
            ' Fame, Vision, Team',
            ' Freedom, Profit, Service'
        ],
        correctIndex: 1,
        explanation:
            'Mentor Merlin upholds excellence, integrity, innovation and support as its guiding values – the pillars upon which its training programmes are built.'
    },
    {
        id: 15,
        type: 'mcq',
        question: 'What is a key expectation nurses have from sales consultants?',
        options: [
            ' Fast application form filling',
            ' Transparent, patient communication and support',
            ' Surprise discounts',
            ' Only email follow‑up'
        ],
        correctIndex: 1,
        explanation:
            'Nurses expect sales consultants to patiently answer questions and provide transparent guidance, building trust throughout the application process.'
    }
];
