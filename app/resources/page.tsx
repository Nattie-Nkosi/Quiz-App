// app/resources/page.tsx
import StudyReferences from "../quiz/components/study-references";

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-violet-800 dark:text-violet-300 mb-6">
        CCNA Study Resources
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Explore official Cisco documentation, study guides, and learning
        resources to help you prepare for your CCNA certification.
      </p>
      <StudyReferences />
    </div>
  );
}
