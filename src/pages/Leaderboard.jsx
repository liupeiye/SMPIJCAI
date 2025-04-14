export default function Leaderboard() {
    return (
      <>
        <div className="bg-gray-100 mx-auto px-6 py-8">
          <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-4xl font-bold mb-8">Evaluation</h2>
            <p className="text-lg text-gray-700 mb-8">
            The evaluation will be conducted via our online evaluation platform. While the training dataset is publicly released, the testing dataset will be withheld and used exclusively for evaluation purposes. Submission rankings will be determined based on the following quantitative metrics: <br />
            <strong>SMP Video Metric</strong>: Submissions will be evaluated using Mean Absolute Percentage Error (MAPE) to assess prediction accuracy.
            </p>
          </div>
      </div>

      <div className=" mx-auto px-6 py-16">
          <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-4xl font-bold mb-8">Submission</h2>
            <p className="text-lg text-gray-700 mb-8">
            Each submission is required to be formatted in a JSON File as follows.
            <pre className="prettyprint lang-json">
            {`{
    "version": "VERSION 1.2",
    "result": [
      {
        "post_id": "post6374637",
        "popularity_score": 2.1345
      },
      ...
      {
        "post_id": "post3637373",
        "popularity_score": 3.1415
      }
    ],
    "external_data": {
      "used": "true",
      "details": "VGG-19 pre-trained on ImageNet training set"
    }
            }`}
            </pre>
            </p>
          </div>
      </div>

      <div className="bg-gray-100 mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-3xl font-bold mb-8">Leaderboard</h2>
            <p className="text-lg text-gray-700 mb-8">
            Please check that the leaderboard will be released after the challenge ends.</p>
          </div>
      </div>
      </>
  
    );
  }
  