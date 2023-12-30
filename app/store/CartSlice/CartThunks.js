import supabase from "../../service/SupabaseService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const productAddToCart = createAsyncThunk(
  "product/addToCartThunk",
  async (payload) => {
    console.log("productAddToCart playload", payload);
    const { user_id, product_id } = payload;
    let { data, error } = await supabase
      .from("cart")
      .select()
      .eq("product_id", product_id)
      .single();

    if (error) {
      console.error(error);
      return { data, error };
    }

    console.log("productAddToCart", data, error);

    if (data) {
      let rsp = await supabase
        .from("cart")
        .update({
          product_count: data.product_count + 1,
        })
        .eq("product_id", product_id)
        .select();
      console.log("productAddToCart newData", data, error);
      return rsp;
    } else {
      let rsp = await supabase
        .from("cart")
        .insert([{ product_id: payload, product_count: 1, user_id }])
        .select();
      return rsp;
    }
  }
);
