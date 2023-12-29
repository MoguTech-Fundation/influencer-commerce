import { useEffect, useState } from "react";
import supabase from "../service/SupabaseService";

export default function useSupabase(table, select = "*", ifSingle = false) {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function genData() {
      const select = await supabase.from(table).select(select);
      const { data: baseData, error: baseError } = ifSingle
        ? await select.single()
        : select;
      setData(baseData);
      setError(baseError);
    }
    genData();
  }, []);

  if (!table) {
    return {
      data: null,
      error: "Table is required",
    };
  }
  console.log("useSupabase", data, error);
  return { data, error };
}
