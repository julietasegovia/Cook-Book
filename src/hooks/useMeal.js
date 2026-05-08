import { useState, useEffect } from "react";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export function useMeals(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${BASE_URL}${endpoint}`);
                if (!res.ok) throw new Error("Unable to fetch");
                const json = await res.json();
                setData(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [endpoint]);

    return { data, loading, error };
}