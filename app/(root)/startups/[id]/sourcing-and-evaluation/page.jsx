"use client"

import { useState } from "react";
import Checklist from "@/components/checklist";

function sourcingAndEvaluation({ params }) {
  const id = params.id;
  const [selectedStage, setSelectedStage] = useState("L1");
  const [selectedPriority, setSelectedPriority] = useState("P1");
  const [selectedMentor, setSelectedMentor] = useState("");

  const handleStageChange = (stage) => {
    setSelectedStage(stage);
  }

  const handlePriorityChange = (priority) => {
    setSelectedPriority(priority);
  }

  const handleMentorChange = (mentor) => {
    setSelectedMentor(mentor);
  }


  return (
    <div className="bg-transparent text-white pl-4 rounded-lg shadow-md w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Sourcing and Evaluation</h2>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <select
            id="stages"
            className="bg-gray-900 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5"
            onChange={(e) => handleStageChange(e.target.value)}
            value={selectedStage}
          >
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="L2.5">L2.5</option>
            <option value="L3">L3</option>
          </select>


          <select
            id="priority"
            className="bg-gray-900 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5"
            onChange={(e) => handlePriorityChange(e.target.value)}
            value={selectedPriority}
          >
            <option>P1</option>
            <option>P2</option>
            <option>P3</option>
          </select>
        </div>

        <select
            id="mentor"
            className="bg-gray-900 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5"
            onChange={(e) => handleMentorChange(e.target.value)}
            value={selectedMentor}
          >
            <option value="">Assign a mentor</option>
            <option value="Mentor A">Mentor A</option>
            <option>Mentor B</option>
            <option>Mentor C</option>
          </select>
      </div>
      <div>
        <Checklist stage={selectedStage}/>
      </div>
    </div>
  )
}

export default sourcingAndEvaluation 