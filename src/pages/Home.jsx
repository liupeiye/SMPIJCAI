import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-white py-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
          The 1st Social Media Prediction Video Challenge<br />
        </h1>
        <h1 className="text-2xl font-extrabold mb-6 text-gray-900">
          The International Joint Conferences on Artificial Intelligence (IJCAI)<br />
          August 16-22, 2025 Montreal, Canada
        </h1>

        <div className="flex justify-center gap-4">
          <Link to="/dataset" className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
            View Dataset
          </Link>
          <Link to="/competition" className="px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 transition">
            Join Competition
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 py-6 px-4">
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-8">News</h2>
          <p className="text-lg text-gray-700 mb-8">
          <li>[2025-04-15]: The challenge website is opened.</li>
          <li>[2025-04-01]: We will host the 1st Social Media Prediction Challenge with Video track this year.</li>
          </p>
        </div>
      </div>

      <div className=" py-6 px-4">
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-8">Overview</h2>
          <p className="text-lg text-gray-700 mb-8">
          <strong>SMP Challenge</strong> is an annual challenge that seeks excellent research teams or solutions for social multimodal prediction and meaningfully improving people's social lives and business scenarios. The challenges for researchers looking at their models on social media data are large-scale, multimodal, and multivariate.<br />
          <strong>Social Media Prediction (SMP)</strong> With the ever-changing public attention and individual interests, predicting the exact values accurately of online popularity is even more important than before. Social Media Popularity Prediction focuses on predicting the impact of sharing different posts for a publisher on social media. This year, we will have two tracks SMP-Image and SMP-Video for social images and videos<br />
          </p>
        </div>
      </div>
      <div className=" py-6 px-4">
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-8">Important Dates</h2>
          <p className="text-lg text-gray-700 mb-8">
          <li>[April 15, 2025]: The challenge website is opened.</li>
          <li>[April 20 - June 15, 2025]: Results Submission.</li>
          <li>[June 15 - June 25, 2025]: Evaluation and Reproducibility Review.</li>
          <li>[June 25, 2025]: Leaderboard Notification.</li>
          <li>[July 15, 2025]: Solution Paper Submission.</li>
          <li>[July 20, 2025]: Notification.</li>
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-6 px-4">
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-8">Benchmark</h2>
          <p className="text-lg text-gray-700 mb-8">
          Social Media Prediction Video Dataset (SMPD) is a large-scale social short-form video dataset with 6K videos and 4.5K users.
          </p>
        </div>
      </div>

      




    </>
  );
}