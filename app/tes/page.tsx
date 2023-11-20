"use client";
import React from "react";
import axios, { AxiosResponse } from "axios";

interface ApiResponse {
  toAmount: number;
}

const Tes = () => {
  const startScan = () => {
    axios
      .get<ApiResponse>(
        "https://api.1inch.dev/swap/v5.2/56/quote?src=0x55d398326f99059fF775485246999027B3197955&dst=" +
          "0xfb5b838b6cfeedc2873ab27866079ac55363d37e" +
          "&amount=200000000000000000000",
        {
          headers: { Authorization: "Bearer o4krqnKV4nFRXe5GDo9kyjbyuFjY9gio" },
        }
      )
      .then((res: AxiosResponse<ApiResponse>) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <button
        className="bg-blue-600 px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-700"
        id="myButton"
        onClick={() => startScan()}
      >
        Start
      </button>
    </>
  );
};

export default Tes;
