// components/study-references.tsx
"use client";

import { FC, useState } from "react";
import { StudyReference, ccnaReferences } from "../../../data/references";

interface StudyReferencesProps {
  currentTopic?: string;
}

const StudyReferences: FC<StudyReferencesProps> = ({ currentTopic }) => {
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredReferences = ccnaReferences.filter(
    (ref) =>
      (selectedType === "all" || ref.type === selectedType) &&
      (!currentTopic || ref.topics.includes(currentTopic))
  );

  return (
    <div className="mt-8 space-y-6">
      <div className="border-t dark:border-gray-700 pt-6">
        <h3 className="text-2xl font-bold text-violet-800 dark:text-violet-300 mb-4">
          Study References
        </h3>

        {/* Filter buttons */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <button
            onClick={() => setSelectedType("all")}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedType === "all"
                ? "bg-violet-600 dark:bg-violet-700 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            } transition-colors`}
          >
            All
          </button>
          {["official", "documentation", "course", "book"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1 rounded-full text-sm capitalize ${
                selectedType === type
                  ? "bg-violet-600 dark:bg-violet-700 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              } transition-colors`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* References list */}
        <div className="grid gap-4">
          {filteredReferences.map((reference, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg dark:border-gray-700 hover:border-violet-500 
                dark:hover:border-violet-500 transition-colors bg-white dark:bg-gray-800"
            >
              <h4 className="font-semibold text-violet-700 dark:text-violet-400">
                {reference.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                {reference.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {reference.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-violet-100 dark:bg-violet-900 
                      text-violet-700 dark:text-violet-300 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <a
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-violet-600 dark:text-violet-400 
                  hover:text-violet-800 dark:hover:text-violet-300 transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyReferences;
