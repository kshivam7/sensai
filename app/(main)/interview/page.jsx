import { getAssessments } from "@/actions/interview";
import QuizList from "./_components/quizlist";
import PerformanceChart from "./_components/performance-charts";
import StateCards from "./_components/state-card";

const InterviewPage = async() => {
  const assessments = await getAssessments();
  return (
      <div>
        <h1 className='text-6xl font-bold gradient-title mb-5'>
          Interview Prepration
        </h1>

        <div className="space-y-6">
          <StateCards assessments={assessments}/>
          <PerformanceChart assessments={assessments}/>
          <QuizList assessments={assessments}/>
        </div>
      </div>

  );
};

export default InterviewPage;