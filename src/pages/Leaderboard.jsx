export default function Leaderboard() {
    return (
      <>

        <div className="bg-gray-100 mx-auto px-6 py-16">
          <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-4xl font-bold mb-8">Submission</h2>
            <p className="text-lg text-gray-700 mb-8">
            <strong>Step1: Login</strong><br /> 
            Participants must log in to the competition platform using their registered credentials to access the submission portal.<br />

            <strong>Step2: Submit </strong><br />
            Upload your entry (e.g., result files, documents, or code) in the specified format and according to the guidelines before the deadline.<br /> 

            <strong>Step3: Check Result</strong><br />
            After submission, participants can track the evaluation status and will be notified once results are announced.

            </p>
          </div>
        </div>
        <div className=" mx-auto px-6 py-16">
          <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-4xl font-bold mb-8">Submission Format</h2>
            <p className="text-lg text-gray-700 mb-8">
            The submission is required to be formatted in a CSV File as follows (including header):
            <pre className="prettyprint lang-json">
            {`{
            pid, popularity_score
            POST00005748,0.1
            POST00004665,0.2
            '''
            }`}
            </pre>
            The submission CSV file should contain 2001 lines.


            </p>
          </div>
      </div>

        <div className="bg-gray-100 mx-auto px-6 py-16">
          <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-4xl font-bold mb-8">Evaluation</h2>
            <p className="text-lg text-gray-700 mb-8">
            The evaluation will be conducted via our online evaluation platform. While the training dataset is publicly released, the testing dataset will be withheld and used exclusively for evaluation purposes. Submission rankings will be determined based on the following quantitative metrics: <br />
            <strong>SMP Video Metric</strong>: Submissions will be evaluated using Mean Absolute Percentage Error (MAPE) to assess prediction accuracy.
            </p>
          </div>
      </div>

      

      <div className="mx-autopx-6 py-16">
        <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-3xl font-bold mb-8">Leaderboard</h2>
            <p className="text-lg text-gray-700 mb-8">
            The competition will maintain both a public and a private leaderboard.<br />

            The public leaderboard will show the evaluation performances. The private leaderboard will be used for the final evaluation and will include non-overlapping data from the public leaderboard.<br />

            The final ranking is determined by the rankings across all evaluation metrics after the Submission Due.</p>
          </div>
      </div>
      </>
  
    );
  }
  