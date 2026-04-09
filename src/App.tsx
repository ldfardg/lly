import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import DataAnalysisCourse from "@/pages/DataAnalysisCourse";
import PythonCourse from "@/pages/PythonCourse";
import DataCollectionCourse from "@/pages/DataCollectionCourse";
import SupplyChainCourse from "@/pages/SupplyChainCourse";
import DatabaseCourse from "@/pages/DatabaseCourse";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/data-analysis" element={<DataAnalysisCourse />} />
        <Route path="/courses/python" element={<PythonCourse />} />
        <Route path="/courses/data-collection" element={<DataCollectionCourse />} />
        <Route path="/courses/supply-chain" element={<SupplyChainCourse />} />
        <Route path="/courses/database" element={<DatabaseCourse />} />
        <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
      </Routes>
    </Router>
  );
}
