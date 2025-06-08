import { Question } from '@/types/quiz'

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the primary goal of incident management?",
    options: [
      "To prevent all incidents from occurring",
      "To restore normal service operation as quickly as possible",
      "To find who is responsible for the incident",
      "To document everything that went wrong"
    ],
    correctAnswer: 1,
    explanation: "The primary goal is to restore normal service operation as quickly as possible while minimizing impact on business operations."
  },
  {
    id: 2,
    question: "What is the first step when an incident is detected?",
    options: [
      "Start debugging the code",
      "Call the CEO",
      "Acknowledge and triage the incident",
      "Write a post-mortem"
    ],
    correctAnswer: 2,
    explanation: "The first step is to acknowledge the incident and perform initial triage to assess severity and impact."
  },
  {
    id: 3,
    question: "What does 'MTTR' stand for in incident management?",
    options: [
      "Mean Time To Recovery",
      "Maximum Time To Respond",
      "Minimum Time To Resolve",
      "Monthly Technical Team Review"
    ],
    correctAnswer: 0,
    explanation: "MTTR stands for Mean Time To Recovery, a key metric measuring how quickly services are restored after an incident."
  },
  {
    id: 4,
    question: "When should you escalate an incident?",
    options: [
      "Only when the CEO asks about it",
      "After 24 hours of investigation",
      "When severity/impact thresholds are met or expertise is needed",
      "Never, always handle it yourself"
    ],
    correctAnswer: 2,
    explanation: "Escalation should happen when predefined severity/impact thresholds are met or when additional expertise is required."
  },
  {
    id: 5,
    question: "What is a 'war room' in incident management?",
    options: [
      "A physical room where servers are kept",
      "A dedicated space for post-incident blame sessions",
      "A collaborative space for incident response coordination",
      "A room where angry customers wait"
    ],
    correctAnswer: 2,
    explanation: "A war room is a dedicated collaborative space (physical or virtual) where the incident response team coordinates their efforts."
  },
  {
    id: 6,
    question: "What should be included in incident communication?",
    options: [
      "Technical details only",
      "Who caused the problem",
      "Status, impact, expected resolution time, and next steps",
      "Only communicate when the incident is resolved"
    ],
    correctAnswer: 2,
    explanation: "Incident communication should include current status, impact assessment, expected resolution time, and next steps to keep stakeholders informed."
  },
  {
    id: 7,
    question: "What is the purpose of a post-incident review (post-mortem)?",
    options: [
      "To assign blame to team members",
      "To identify what went wrong and improve processes",
      "To satisfy management requirements",
      "To create more documentation"
    ],
    correctAnswer: 1,
    explanation: "Post-incident reviews focus on learning from incidents to identify systemic issues and improve processes, not to assign blame."
  },
  {
    id: 8,
    question: "What is 'incident commander' role responsible for?",
    options: [
      "Fixing the technical issue personally",
      "Coordinating response efforts and making decisions",
      "Taking notes during the incident",
      "Communicating with customers only"
    ],
    correctAnswer: 1,
    explanation: "The incident commander coordinates the overall response effort, makes key decisions, and ensures effective communication."
  },
  {
    id: 9,
    question: "How should incident severity be determined?",
    options: [
      "By the loudest person in the room",
      "Based on business impact and urgency",
      "Always mark everything as critical",
      "By the number of people affected only"
    ],
    correctAnswer: 1,
    explanation: "Incident severity should be determined based on business impact and urgency, considering factors like user impact, revenue loss, and regulatory implications."
  },
  {
    id: 10,
    question: "What is 'blameless culture' in incident management?",
    options: [
      "Never investigating what went wrong",
      "Focusing on system improvements rather than individual fault",
      "Ignoring human errors completely",
      "Making sure no one gets in trouble ever"
    ],
    correctAnswer: 1,
    explanation: "Blameless culture focuses on understanding system failures and improving processes rather than punishing individuals, encouraging honest reporting and learning."
  }
]