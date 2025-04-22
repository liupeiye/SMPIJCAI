export default function Competition() {
  return (
    <>
      <div className="bg-gray-100 mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-4xl font-bold mb-8">Registration</h2>
            <p className="text-lg text-gray-700 mb-8">
            All teams should complete official registration on the corresponding challenge evaluation platform, providing full information for all team members and their affiliated organizations. Successfully registered teams will be eligible for ranking and awards.</p>
            <a
            href="https://huggingface.co/spaces/smp-challenge/SMPDVideo"
            className="inline-block px-12 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            >
            Register
            </a><br /> 
            <br />

          </div>
      </div>

      <div className=" mx-auto px-6 py-16">
          <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-4xl font-bold mb-8">Submission</h2>
            <p className="text-lg text-gray-700 mb-8">
            <strong>Step1: Login</strong><br /> 
            Participants must log in to the competition platform using their registered credentials to access the submission portal.<br /><br /> 
            <a
            href="https://huggingface.co/spaces/smp-challenge/SMPDVideo"
            className="inline-block px-12 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            >
            Login
            </a><br /> 
            <br />

            <strong>Step2: Submit </strong><br />
            Upload your entry (e.g., result files, documents, or code) in the specified format and according to the guideline s before the deadline.<br /> <br /> 
            <a
            href="https://huggingface.co/spaces/smp-challenge/SMPDVideo"
            className="inline-block px-12 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            >
            Submit
            </a><br /> 
            <br />
            <strong>Step3: Check Result</strong><br />
            After submission, participants can track the evaluation status and will be notified once results are announced.

            </p>
          </div>
        </div>

      <div className="bg-gray-100 mx-auto px-6 py-16">
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
