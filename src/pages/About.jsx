import bw from "../assets/bowu.jpg"; 
import py from "../assets/peiyeliu.jpg"; 
import qs from "../assets/qiushihuang.jpeg"; 
import wj from "../assets/jiawang.jpg"; 
import zy from "../assets/zhaoyangzeng.png"; 
import lb from "../assets/beiliu.jpg"; 

const team = [
  { name: "Bo Wu", affiliation: "MIT-IBM Watson AI Lab", email: "bo.wu@ibm.com", img: bw },
  { name: "Peiye Liu", affiliation: "Alibaba Group", email: "liupeiye.lpy@alibaba-inc.com", img: py },
  { name: "Qiushi Huang", affiliation: "University of Surrey", email: "qiushi.huang@surrey.ac.uk", img: qs },
  { name: "Jia Wang", affiliation: "Guangdong Pharmaceutical University", email: "vicky.ee08@nycu.edu.tw", img: wj },
  { name: "Zhaoyang Zeng", affiliation: "International Digital Economy Academy", email: "zhaoyanzeng@tencent.com", img: zy },
  // { name: "Wen-Huang Cheng", affiliation: "National Yang Ming Chiao Tung University", email: "whcheng@nycu.edu.tw", img: "../assets/wenhuangcheng.jpg" },
  { name: "Bei Liu", affiliation: "Microsoft Research Asia", email: "bei.liu@microsoft.com", img: lb },
  // { name: "Jiebo Luo", affiliation: "University of Rochester", email: "jluo@cs.rochester.edu", img: "../assets/jieboluo.jpg" },
  

];


export default function About() {
  return (
    <>
    <div className="mx-auto px-6 py-16">
      <div className="max-w-5xl mx-auto text-left">
      <h2 className="text-4xl font-bold mb-8">About Us</h2>
      {/* <p className="text-gray-700 mb-8">
        We are a community of machine learning researchers and engineers committed to building
        open, reproducible benchmarks and datasets. Our mission is to accelerate
        innovation in AI through collaborative challenges and accessible resources.
      </p> */}
      <p className="text-gray-700">📧 Contact us at: <strong>social.media.prediction@gmail.com</strong></p>
      </div>
    </div>


    <div className="bg-gray-100 mx-auto px-6 py-16">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-4xl font-bold mb-8">Citation</h2>
        <p className="text-lg text-gray-700 mb-8">
        If you like or use the resources from the challenge, please read and cite the following references:</p>
        <pre className="whitespace-pre-wrap text-sm text-gray-800">
        {`
  @inproceedings{{SMP2023,
    title={{SMP Challenge: An Overview and Analysis of Social Media Prediction Challenge}},
    author={{Wu, Bo and Liu, Peiye and Cheng, Wen-Huang and Liu, Bei and Zeng, Zhaoyang and Wang, Jia and Huang, Qiushi and Luo, Jiebo}},
    booktitle={{Proceedings of the 31th ACM International Conference on Multimedia}},
    year={{2023}}
  }}

  @inproceedings{{Wu2017DTCN,
      title={{Sequential Prediction of Social Media Popularity with Deep Temporal Context Networks}},
      author={{Wu, Bo and Cheng, Wen-Huang and Zhang, Yongdong and Qiushi, Huang and Jintao, Li and Mei, Tao}},
      booktitle={{International Joint Conference on Artificial Intelligence (IJCAI)}},
      year={{2017}}
  }}

  @inproceedings{{Wu2016TemporalPrediction,
      author = {{Wu, Bo and Mei, Tao and Cheng, Wen-Huang and Zhang, Yongdong}},
      title = {{Unfolding Temporal Dynamics: Predicting Social Media Popularity Using Multi-scale Temporal Decomposition}},
      booktitle = {{Proceedings of the Thirtieth AAAI Conference on Artificial Intelligence (AAAI)}},
      year = {{2016}}
  }}

  @inproceedings{{wu2016time,
    title={{Time matters: Multi-scale temporalization of social media popularity}},
    author={{Wu, Bo and Cheng, Wen-Huang and Zhang, Yongdong and Mei, Tao}},
    booktitle={{Proceedings of the 24th ACM international conference on Multimedia}},
    year={{2016}}
  }
  }
  `}
    </pre>
      </div>
    </div>

    <div className=" mx-auto px-6 py-16">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-3xl font-semibold text-left mb-8">Our Teams</h2>
        <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-50 border rounded overflow-hidden shadow-sm text-center">
              <div className="w-32 h-32 mx-auto mt-6 overflow-hidden rounded-full">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{member.affiliation}</p>
                {/* <a href={`mailto:${member.email}`} className="text-sm text-blue-600 hover:underline">
                  {member.email}
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



    </>
  );
}
