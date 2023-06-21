import Button from "../component/Button";
import BlackButton from "../component/BlackButton";
import JobCards from "../component/JobCards";
import JobData from "../assets/job-directory-data.json"

function Home() {
    // import jason data
    // use the data to replicate job card
    // every react function must return a TSX
    return (
        <div>
            {/* header */}
            <div className="flex justify-between items-center mx-[200px] h-[80px]"> 
                <h1 className="text-xl font-bold">Kerja-IT </h1>
            
            <div className="space-x-2">
            <Button text='Talents'/>
            <Button text='Post jobs'/>
            <BlackButton text='Fatin Yazim'/>
            </div>
        </div>
    

    <div className="flex justify-between items-center px-[200px] h-[80px] bg-blue-700"> 
    <p className="text-white"> 👻 Tired of being ghosted by employers?</p>
    <Button text='Edit  My Profile'/>
    </div>
 {/* hero */}
 <div className="h-auto py-10 flex justify-center items-center flex-col space-y-4">
        <h1 className="text-3xl font-bold">Find Tech Jobs In Malaysia 🇲🇾</h1>
        <p>Let employers find you. Or apply to companies directly.</p>
        <div className="space-x-2">
          <BlackButton text="🎯 I want companies to find me" />
          <Button text="🔍 Search Jobs" />
          </div>
          </div>

{/* Cards container */}
<div className="flex justify-center items-center flex-wrap gap-4 ">
          {/* job cards */}
          {JobData.map((job, index) => {
          return <JobCards job={job} key={index} />;
        })}
          
          
    </div>
    </div>
    );
}

export default Home;