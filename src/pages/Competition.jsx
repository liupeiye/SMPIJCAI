export default function Competition() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Competition Overview</h2>
      <p className="mb-4">
        This competition challenges participants to develop models that can
        understand and retrieve visual and textual information effectively.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>📅 Start Date: May 1, 2025</li>
        <li>⏰ Deadline: June 30, 2025</li>
        <li>🏆 Prizes for top 3 teams</li>
      </ul>
      <p className="mb-2 font-semibold">Evaluation Criteria:</p>
      <ul className="list-disc pl-6">
        <li>Accuracy on validation set</li>
        <li>Innovation in model design</li>
        <li>Efficiency and runtime</li>
      </ul>
    </div>
  );
}
