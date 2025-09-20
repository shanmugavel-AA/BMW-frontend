
import { useParams, useNavigate } from "react-router-dom";
import caseStudies from "../data/caseStudiesData";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const caseStudy = caseStudies.find((cs) => cs.id === id);

  if (!caseStudy) {
    return <p>Case Study not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <button
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{caseStudy.title}</h1>
      <p className="mb-6">{caseStudy.fullContent}</p>
      <img src={caseStudy.img} alt={caseStudy.title} className="w-48 h-48 object-contain" />
      <p className="mt-4 italic text-gray-600">
        {caseStudy.person} — {caseStudy.role}
      </p>
    </div>
  );
}
