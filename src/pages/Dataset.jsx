export default function Dataset() {
  return (
    <>
    <div className=" mx-auto px-6 py-16 ">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-4xl font-bold mb-8">Dataset Description</h2>
        <p className="text-gray-700 mb-8">
        <strong>The Social Media Prediction Video Dataset (SMPD)</strong>. SMPD-Video is a large-scale social video dataset, consisting of 6K social short-form videos from 4.5K users. It provides anonymized photo-sharing data with rich metadata, user profiles, videos, posts, time, location, etc. 
        </p>
        <div className="flex space-x-4">
          <a
            href="https://huggingface.co/datasets/smpchallenge/SMP-Video"
            className="inline-block px-12 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          >
            Dataset Download
          </a>
          {/* <a
            href="https://huggingface.co/datasets/smpchallenge/SMP-Video/viewer/posts/train"
            className="inline-block px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
          >
            Train Data
          </a>
          <a
            href="https://huggingface.co/datasets/smpchallenge/SMP-Video/viewer/labels/train"
            className="inline-block px-6 py-3 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition"
          >
            Train Popularity
          </a>
          <a
            href="https://huggingface.co/datasets/smpchallenge/SMP-Video/viewer/posts/test"
            className="inline-block px-6 py-3 bg-fuchsia-500 text-white rounded hover:bg-fuchsia-600 transition"
          >
            Test Data
          </a> */}
        </div>
      </div>
      
    </div>

    <div className="bg-gray-100 mx-auto px-6 py-16">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-4xl font-bold mb-8">Data Usage</h2>
        Teams are allowed to train their models using the provided training set. The test set, which remains unreleased and unknown to participants, will be used by the organizers for final evaluation to ensure a fair and unbiased assessment of all submissions.

        <table className="min-w-full mt-8 bg-white shadow-md rounded">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b">Dataset</th>
              <th className="px-6 py-3 border-b">#Post</th>
              <th className="px-6 py-3 border-b">#User</th>
              <th className="px-6 py-3 border-b">#Categories</th>
              <th className="px-6 py-3 border-b">#Duration(M)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border-b">SMP-Video</td>
              <th className="px-6 py-3 border-b">6K</th>
              <th className="px-6 py-3 border-b">4.5K</th>
              <th className="px-6 py-3 border-b">120</th>
              <th className="px-6 py-3 border-b">20</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="mx-auto px-6 py-16">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-4xl font-bold mb-8">User Data</h2>
          <pre class=" prettyprint lang-json">
            <code>
              "uid": "USER00004717",<br />
                "user_signature": "If you like my video, just follow me💕",<br />
                "user_recommend_reason": "",<br />
                "user_following_count": 8,<br />
                "user_follower_count": 31100,<br />
                "user_likes_count": 979100,<br />
                "user_video_count": 117,<br />
                "user_digg_count": 152,<br />
                "user_heart_count": 979100,<br />
                "user_friend_count": 0
            </code>
          </pre>
      </div>
    </div>

    <div className="bg-gray-100 mx-auto px-6 py-16">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-4xl font-bold mb-8">Video Data</h2>
          <pre class=" prettyprint lang-json">
            <code>
            "vid": "VIDEO00004528",<br />
            "pid": "POST00003480",<br />
            "uid": "USER00000867",<br />
            "video_height": 1024,<br />
            "video_width": 576,<br />
            "video_duration": 63,<br />
            "video_ratio": "540p",<br />
            "video_format": "mp4",<br />
            "music_title": "original sound",<br />
            "music_duration": 63
            </code>
          </pre>
      </div>
    </div>

    <div className="mx-auto px-6 py-16">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-4xl font-bold mb-8">Post Data</h2>
          <pre class=" prettyprint lang-json">
            <code>
            "pid": "POST00004593",<br />
            "uid": "USER00005028",<br />
            "post_content": [<br />
                "Replying",<br />
                "to",<br />
                "Ezzibear",<br />
                "christmas",<br />
                "fyp",<br />
                "foryoupage",<br />
                "foryoupageofficiall",<br />
                "christmasideas",<br />
                "christmaslist2023",<br />
                "christmaslist2023",<br />
                "inspire",<br />
                "famous",<br />
                "amazing",<br />
                "likes",<br />
                "ideaforyourmam"],<br />
            "post_location": "IE",<br />
            "post_suggested_words": [],<br />
            "post_text_language": "un",<br />
            "video_path": "validation/USER00005028/VIDEO00005795.mp4",<br />
            "post_time": "2023-10-07 10:30"<br />
            </code>
          </pre>
      </div>
    </div>

    </>
  );
}