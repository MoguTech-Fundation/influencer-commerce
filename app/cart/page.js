"use client";

import { useEffect } from "react";
import useSupabase from "../hooks/useSupabase";

export default function Cart() {
  const { data, error } = useSupabase("cart");
  useEffect(() => {}, []);
  console.log("Cart", data, error);
  return <>{JSON.stringify({ data, error })}</>;
}
