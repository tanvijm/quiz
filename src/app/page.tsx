export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Incident Management Quiz
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Test your incident management knowledge and earn free SWAG from incident.io!
          Score 80% or higher to qualify.
        </p>
        <a 
          href="/quiz"
          className="inline-block bg-incident-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-incident-600 transition-colors"
        >
          Start Quiz
        </a>
      </div>
    </main>
  )
}