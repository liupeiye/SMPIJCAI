import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-white py-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
        Social Media Prediction Challenge<br />
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
          <Link to="https://huggingface.co/spaces/smp-challenge/SMPDVideo" className="px-6 py-3 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition">
            Sumbit Results
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 py-6 px-4">
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-8">News</h2>
          <p className="text-lg text-gray-700 mb-8">
          <li>[2025-04-20]: The new evaluation portal is opened to participants.</li>
          <li>[2025-04-15]: The challenge website is opened.</li>
          <li>[2025-04-01]: We will host the 1st Social Media Prediction Challenge with Video track this year.</li>
          </p>
        </div>
      </div>

      <div className=" py-6 px-4">
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-8">Overview</h2>
          <p className="text-lg text-gray-700 mb-8">
          With the explosive growth of social media—such as image-centric posts, short-form videos, and memes—understanding and capturing user engagement has become more important than ever. Accurate and generalizable prediction models are essential for empowering content creators, marketers, and platform designers to optimize their strategies and better connect with audiences. <strong>SMP Challenge</strong> is an annual competition that offers a unique opportunity for researchers, engineers, and practitioners to tackle cutting-edge problems and explore novel artificial intelligence techniques for social multimedia. We welcome innovative solutions and outstanding teams that aim to push the boundaries of modeling social media dynamics—ultimately contributing to advancements that can enhance both user experiences and business applications in real-world social ecosystems.

          </p>
        </div>
      </div>
      <div className="bg-gray-100 py-6 px-4">
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-8">Important Dates</h2>
          <p className="text-lg text-gray-700 mb-8">
          <li>[April 20, 2025]: The challenge website is opened.</li>
          <li>[April 20 - June 25, 2025]: Results Submission.</li>
          <li>[June 25 - June 30, 2025]: Evaluation and Reproducibility Review.</li>
          <li>[June 30, 2025]: Leaderboard Notification.</li>
          <li>[July 15, 2025]: Solution Paper Submission.</li>
          <li>[July 20, 2025]: Notification.</li>
          </p>
        </div>
      </div>

      <div className="mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-4xl font-bold mb-8">Task</h2>
          <p className="text-lg text-gray-700 mb-8">
          <strong>Social Media Popularity Prediction</strong>. In today's dynamic social media landscape—where public attention and individual interests evolve rapidly—accurately predicting the popularity of online content poses a significant challenge. The Social Media Prediction (SMP) task aims to forecast the impact of publishing different posts on social platforms, focusing on how content performance varies based on modality and context.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-6 px-4">
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-8">Data</h2>
          <p className="text-lg text-gray-700 mb-8">
          <strong>SMPD-Video</strong> is a large-scale social video dataset, consisting of 6K social short-form videos from 4.5K users. It provides anonymized photo-sharing data with rich metadata, user profiles, videos, posts, time, location, etc.
          </p>
        </div>
      </div>

      {/* <div className=" py-6 px-4">
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-8">Benchmark</h2>
          <p className="text-lg text-gray-700 mb-8">
          Social Media Prediction Video Dataset (SMPD) is a large-scale social short-form video dataset with 6K videos and 4.5K users.
          </p>
        </div>
      </div> */}

      




    </>
  );
}