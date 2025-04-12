export default function Competition() {
  return (
    <>

    <div className="bg-gray-100 mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-4xl font-bold mb-6">Task</h2>
          <p className="text-lg text-gray-700 mb-8">
          <strong>Social Media Popularity Prediction</strong> The overconsumption of online information has its limitations, so online word-of-mouth helps us to efficiently discover emerging topics, interesting news, or new products from the information ocean. Therefore, predicting online popularity became a crucial task for online media, brand owners, social influencers, and individuals.<br />
          The task focuses on predicting the impact of sharing different posts for a publisher on social media. Given a multimodal post from a publisher, the goal is to automatically predict the future popularity after the post is publicly shared.
          </p>
        </div>
    </div>

    <div className="mx-auto px-6 py-8">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-4xl font-bold mb-6">Evaluation</h2>
          <p className="text-lg text-gray-700 mb-8">
          The evaluation will be based on the online evaluation server and platform. We released the training dataset and withhold the testing dataset for evaluation. <br />
          <strong>SMP-Video</strong>: We will measure the received solutions by the Mean Absolute Percentage Error (MAPE).

          </p>
        </div>
    </div>

    <div className="bg-gray-100 mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-4xl font-bold mb-6">Submission</h2>
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
    </>

  );
}
