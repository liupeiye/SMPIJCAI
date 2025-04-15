export default function Competition() {
  return (
    <>
      <div className="bg-gray-100 mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-4xl font-bold mb-8">Registration</h2>
            <p className="text-lg text-gray-700 mb-8">
            All teams should complete official registration on the corresponding challenge evaluation platform, providing full information for all team members and their affiliated organizations. Successfully registered teams will be eligible for ranking and awards.</p>
          </div>
      </div>

      <div className="mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-4xl font-bold mb-8">Competition Rule</h2>
            <p className="text-lg text-gray-700 mb-8">By participating in the competition, all teams agree to comply with the following rules. Violations may lead to disqualification or removal from the final leaderboard.</p>
            <p className="text-lg text-gray-700 mb-8">
              <li><strong>Result</strong>: Reproducibility Submitted solutions should be fully reproducible in a controlled environment. Participants are required to ensure that both the results and code can be verified by the organizing committee. The organizing committee reserves the right to audit or verify the submitted programs, models, and results at any stage of the competition.</li>

              <li><strong>Use of External Resources</strong>: If any external data, models, or tools are used and influence the outcome, they should be clearly documented in both the submission files and the final solution paper. Failure to disclose external resources may result in disqualification.</li>

              <li><strong>Final Interpretation</strong>: The organizing committee reserves the right to provide the final interpretation of the rules and to address any unforeseen or ambiguous situations not explicitly covered above.</li>
              
            </p>
          </div>
      </div>

    

    
    </>

  );
}
