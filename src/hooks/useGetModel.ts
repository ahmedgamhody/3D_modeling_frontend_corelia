import { fetchModelById } from "@/utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useGetModel = () => {
  const { id } = useParams<{ id: string }>();
  const [model, setModel] = useState({});
  const [modelLoading, setModelLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    if (!id) return;
    try {
      setModelLoading(true);
      setError(null);
      const response = await fetchModelById(id);
      setModel(response.data);
    } catch (err) {
      console.error("Error fetching model:", err);
      setError("Failed to fetch model");
      setModel({});
    } finally {
      setModelLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  return {
    model,
    modelLoading,
    error,
    refetch: fetchData,
  };
};
