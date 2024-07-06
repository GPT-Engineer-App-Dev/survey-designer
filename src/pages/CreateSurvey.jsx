import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const inputTypes = ["dropdown", "text", "number", "slider"];

const CreateSurvey = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentType, setCurrentType] = useState(inputTypes[0]);

  const addQuestion = () => {
    if (currentQuestion.trim() === "") {
      toast.error("Question cannot be empty");
      return;
    }
    setQuestions([...questions, { question: currentQuestion, type: currentType }]);
    setCurrentQuestion("");
    setCurrentType(inputTypes[0]);
    toast.success("Question added successfully");
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
    toast.success("Question removed successfully");
  };

  const saveSurvey = () => {
    console.log("Survey saved:", questions);
    toast.success("Survey saved successfully");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create New Survey</h1>
      
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Enter question"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
          className="mb-2"
        />
        <Select value={currentType} onValueChange={setCurrentType}>
          <SelectTrigger className="mb-2">
            <SelectValue placeholder="Select input type" />
          </SelectTrigger>
          <SelectContent>
            {inputTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={addQuestion}>Add Question</Button>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Survey Questions</h2>
        {questions.map((q, index) => (
          <div key={index} className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded">
            <span>{q.question} ({q.type})</span>
            <Button variant="destructive" size="sm" onClick={() => removeQuestion(index)}>Remove</Button>
          </div>
        ))}
      </div>

      {questions.length > 0 && (
        <Button onClick={saveSurvey}>Save Survey</Button>
      )}
    </div>
  );
};

export default CreateSurvey;