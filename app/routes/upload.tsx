import Navbar from "~/components/Navbar";
import { usePuterStore } from "~/lib/puter";
import FileUploader from "~/components/Fileuploader";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState  } from "react";
const upload = () => {
  const { auth } = usePuterStore();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const [file , setFile] = useState<File | null>(null);
  const handleFileSelect = (file: File | null) => {
        setFile(file)
    }
  return (
    <main className="bg-[url('../../public/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />
      <section className="main-section max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg mt-15">
        <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4"> 
                            <div className="form-div">
                                <label htmlFor="company-name">Company Name</label>
                                <input type="text" name="company-name" placeholder="Company Name" id="company-name" />
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-title">Job Title</label>
                                <input type="text" name="job-title" placeholder="Job Title" id="job-title" />
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-description">Job Description</label>
                                <textarea rows={2} name="job-description" placeholder="Job Description" id="job-description" />
                            </div>
                            <div className="form-div">
                                <label htmlFor="uploader">Upload Resume</label>
                                <FileUploader onFileSelect={handleFileSelect} />
                            </div>

                            <button className="primary-button" type="submit">
                                Analyze Resume
                            </button>
                        </form>
      </section>

      <button
        onClick={auth.signOut}
        className="
    fixed
    bottom-5
    left-5
    bg-red-500
    text-white
    px-5
    py-3
    rounded-full
    shadow-lg
    hover:bg-red-600
    active:scale-95
    transition
    duration-200
    font-semibold
    z-50
    cursor-pointer
  "
      >
        Log Out
      </button>
    </main>
  );
};

export default upload;
