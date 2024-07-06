import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Survey Designer</h1>
      <p className="text-xl mb-8">Create custom surveys with ease</p>
      <Button onClick={() => navigate("/create-survey")} size="lg">
        Create New Survey
      </Button>
    </div>
  );
};

export default Index;