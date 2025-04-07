export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyCompetition!</h1>
      <p className="text-lg mb-6">
        This platform hosts a dataset challenge for researchers and developers
        to benchmark models on visual and language understanding tasks.
      </p>
      <div className="space-x-4">
        <a
          href="/dataset"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View Dataset
        </a>
        <a
          href="/competition"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Join Competition
        </a>
      </div>
    </div>
  );
}
