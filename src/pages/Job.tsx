import { useParams } from "react-router-dom";
import JobData from "../assets/job-directory-data.json";
import Header from "../component/Header";
import SubHeader from "../component/SubHeader";

function Job() {
  const param = useParams();

  // create a function to filter element in JobData which id === param.id, return an object
  const filteredArray = JobData.filter((item) => String(item.id) === param.id);
  const [filteredJob] = filteredArray;

  // destructuring
  //   const array = [1, 2, 3];
  //   console.log(array);

  //   const [a, b, c, d, e] = array;
  //   console.log(a, b, c, d, e);

  console.log(filteredJob);

  return (
    <div>
        <div>
      <Header />
      </div>
      <SubHeader />
      {/* <div>{param.id}</div> */}

      <div className="flex justify-center items-start mt-8 mr-0">
        <h4 className="text-start w-[750px] mb-4 text-xl">
        Jobs /{" "}
        <span>
        {filteredJob.job} - {filteredJob.company}
        </span>
        </h4>
      </div>

      <div className="flex items-center justify-center h-auto">
        <div className="w-[800px] space-y-4  p-8 rounded-2xl border bg-white">
            <div className="space-x-1">
            <p className=" bg-gray-200  py-1 px-2 rounded inline-block">
              {filteredJob.company_state}
            </p>

            {filteredJob.stacks.map((stacks: string, index: number) => {
              return (
                <p
                  key={index}
                  className=" bg-gray-200 p-1 rounded inline-block"
                >
                  {stacks}
                </p>
              );
            })}

           <div className="space-y-2">
            <h1 className=" font-bold text-4xl ">{filteredJob.job}</h1>
            <h4 className=" text-2x1">{filteredJob.company}</h4>
          </div>

          <div className=" capitalize space-y-2">
            <p>
              📅 Posted on {filteredJob.post_date}{" "}
              
            </p>
            <p>
              📍  {filteredJob.district}, {filteredJob.company_state}
            </p>
            <p>💼 {filteredJob.work_type}</p>
            <p>🕒 Unspecified</p>
          </div>

          <div className="flex space-y-3">
            <a
              href={filteredJob.link}
              className=" my-5 bg-blue-800 text-white hover:bg-blue-300 px-5 py-2.5 rounded-md"
            >
              Apply Now 🚀
            </a>
          </div>

<div className="space-y-6">
    <h1 className="text-xl font-semibold"> ✍️ Job Description</h1>
</div>
 
 <div className="p-5 space-y-5">
    <div>
        <h1 className="font-bold">What you will be doing:</h1>
        <ul className="list-disc">
        {filteredJob.details.job_description.map(
                    (job_description: string, index: number) => {
                      return (
                        <li key={index} className=" p-1 rounded ">
                          {job_description}
                        </li>
                      );
                    }
                  )}
        </ul>
    </div>
    <div>
                <h1 className="font-bold">Qualification:</h1>
                <ul className="list-disc">
                  {filteredJob.details.qualification.map(
                    (qualification: string, index: number) => {
                      return (
                        <li key={index} className=" p-1 rounded ">
                          {qualification}
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
 </div>


          </div>
            </div>
        </div>
      </div>
    


  );
}

export default Job;