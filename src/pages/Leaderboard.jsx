export default function Leaderboard() {
    return (
      <>


      <div className="mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-4xl font-bold mb-8">Leaderboard</h2>
            <p className="text-lg text-gray-700 mb-8">
            The competition will maintain both a public and a private leaderboard.<br />

            The public leaderboard will show the evaluation performances. The private leaderboard will be used for the final evaluation and will include non-overlapping data from the public leaderboard.<br />

            The final ranking is determined by the rankings across all evaluation metrics after the Submission Due.</p>

            <table className="min-w-full mt-8 bg-white shadow-md rounded border border-gray-200 text-center">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">Rank</th>
                  <th className="px-4 py-2 border-b">Team</th>
                  <th className="px-4 py-2 border-b">MAPE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-gray-50 even:bg-white">
                  <td className="px-4 py-2 border-b">1</td>
                  <td className="px-4 py-2 border-b">Smiles_Lab</td>
                  <td className="px-4 py-2 border-b">0.1734</td>
                </tr>
                <tr className="odd:bg-gray-50 even:bg-white">
                  <td className="px-4 py-2 border-b">2</td>
                  <td className="px-4 py-2 border-b">aaaaaa436</td>
                  <td className="px-4 py-2 border-b">0.1755</td>
                </tr>
                <tr className="odd:bg-gray-50 even:bg-white">
                  <td className="px-4 py-2 border-b">3</td>
                  <td className="px-4 py-2 border-b">eqdwdad</td>
                  <td className="px-4 py-2 border-b">0.1765</td>
                </tr>
                <tr className="odd:bg-gray-50 even:bg-white">
                  <td className="px-4 py-2 border-b">4</td>
                  <td className="px-4 py-2 border-b">tsiiiing</td>
                  <td className="px-4 py-2 border-b">0.1787</td>
                </tr>

              </tbody>
            </table><br />

            We kindly request the team to contact the organizing committee as soon as possible to update your contact information and complete the code review process. Failure to do so by the deadline may affect your eligibility for the competition.
          </div>
      </div>
      

      <div className="bg-gray-100 mx-auto px-6 py-16">
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

      <div className=" mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-4xl font-bold mb-8">Evaluation</h2>
          <p className="text-lg text-gray-700 mb-8">
          The evaluation will be conducted via our online evaluation platform. While the training dataset is publicly released, the testing dataset will be withheld and used exclusively for evaluation purposes. Submission rankings will be determined based on the following quantitative metrics: <br />
          <strong>SMP Video Metric</strong>: Submissions will be evaluated using Mean Absolute Percentage Error (MAPE) to assess prediction accuracy.
          </p>
        </div>
      </div>






      </>
  
    );
  }
  