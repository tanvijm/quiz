# Incident Management Quiz

A Next.js quiz application designed to generate B2B leads while educating users about incident management best practices. Users who score 80% or higher qualify for free SWAG from incident.io.

## 🚀 Features

- **Interactive Quiz**: 10 comprehensive questions about incident management
- **Progress Tracking**: Visual progress indicator throughout the quiz
- **Smart Scoring**: 80% threshold requirement for SWAG eligibility
- **Lead Generation**: Integrated form for qualified users
- **Responsive Design**: Works seamlessly on all devices
- **Modern UI**: Clean design with incident.io branding

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Form Handling**: React state management

## 📋 Quiz Topics

The quiz covers essential incident management concepts including:
- Incident response procedures
- MTTR (Mean Time To Recovery)
- Escalation protocols
- Communication strategies
- Post-incident reviews
- Blameless culture
- War room coordination
- Severity assessment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tanvijm/quiz.git
cd quiz
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── quiz/
│   │   └── page.tsx      # Quiz interface
│   └── results/
│       └── page.tsx      # Results and lead form
├── components/
│   ├── QuestionCard.tsx  # Individual question component
│   └── LeadForm.tsx      # Lead capture form
├── lib/
│   ├── questions.ts      # Quiz questions data
│   └── scoring.ts        # Scoring logic
└── types/
    └── quiz.ts           # TypeScript definitions
```

## 🎯 How It Works

1. **Welcome Page**: Users are introduced to the quiz and SWAG opportunity
2. **Quiz Flow**: 10 multiple-choice questions with navigation controls
3. **Scoring**: Automatic calculation with 80% threshold for qualification
4. **Results**: Score display with conditional lead form
5. **Lead Capture**: Form submission for qualified users (80%+ score)

## 🏆 SWAG Qualification

Users must score **8 out of 10 questions (80%)** or higher to qualify for free incident.io SWAG. Qualified users will see a lead capture form to claim their reward.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Manual Deployment

```bash
npm run build
npm run start
```

## 📊 Lead Data Collection

The application collects the following information from qualified users:
- Full name
- Email address
- Company name
- Job role
- Marketing consent (optional)

## 🔧 Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript checks
```

## 🎨 Customization

### Adding Questions

Edit `src/lib/questions.ts` to add or modify quiz questions:

```typescript
{
  id: 11,
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correctAnswer: 0, // Index of correct answer
  explanation: "Explanation of the correct answer"
}
```

### Changing Score Threshold

Modify the threshold in `src/lib/scoring.ts`:

```typescript
const passed = percentage >= 80 // Change 80 to your desired percentage
```

### Styling

The app uses Tailwind CSS with custom incident.io brand colors defined in `tailwind.config.js`.

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📞 Support

For questions or support, please contact [your-email@example.com] or open an issue on GitHub.

---

Built with ❤️ for incident.io lead generation