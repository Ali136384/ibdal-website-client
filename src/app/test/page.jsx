
"use client";
import React, { useEffect } from "react";
import axios from "axios";
export default function Page() {
  const getData = async () => {
    try {
      const result = await axios.get(
        "https://server-gd2ipybva-yosaoya.vercel.app/get-about"
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return <div>Page</div>;
}
