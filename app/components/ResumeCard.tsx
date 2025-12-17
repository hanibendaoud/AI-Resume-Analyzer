import { Link } from "react-router"
import ScoreCircle from "./ScoreCircle"
const ResumeCard = ({resume  }: {resume : Resume}) => {
  return (
    <Link to={`/resume`} className="resume-card animate-in fade-in duration-1000">
        <div className="resume-card-header">
            <div className="flex flex-col gap-2">
            
            </div>
            <div><ScoreCircle score={2}/></div>
        </div>
        <div className="gradient-border animate-in fade-in duration-1000">
            <div className="w-full h-full">
                    <img src="../../public/images/resume_01.png" alt="resume" className="w-full h-[350px] max-sm:h-[200px] object-cover" />
                </div>
        </div>
    </Link> 
  )
}

export default ResumeCard