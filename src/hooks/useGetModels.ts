import { fetchAllModels } from "@/utils/api";
import { useState, useEffect } from "react";

export const useGetModels = () => {
  const [models, setModels] = useState([]);
  const [modelsLoading, setModelsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async () => {
    try {
      setModelsLoading(true);
      setError(null);
      const response = await fetchAllModels();
      setModels(response.data);
    } catch (err) {
      console.error("Error fetching models:", err);
      setError("Failed to fetch models");
      setModels([]);
    } finally {
      setModelsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    models,
    modelsLoading,
    error,
    refetch: fetchData,
  };
};
