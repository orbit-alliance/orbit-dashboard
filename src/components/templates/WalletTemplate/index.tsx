"use client";
import Header from "@/components/organism/Header";
import { api42 } from "@/services/apis/api";
import React, { FormEvent } from "react";

const WalletTemplate: React.FC = () => {
  const submitWalletAddress = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const walletAddress = formData.get("wallet") as string;
      const { data: api_wallet_address } = await api42.post("/wallet", {
        walletId: walletAddress,
      });
      if (api_wallet_address.status === 200)
        alert("Endereço da carteira enviado com sucesso!")
    } catch (error) {
      console.error("Error submitting wallet address:", error);
    }
  };
  return (
    <>
      <Header />
      <div className="flex w-[97dvw] h-[93dvh] flex-col justify-center items-center">
        <h1 className="text-2xl mb-4">Digite o endereço da sua carteira</h1>
        <form onSubmit={submitWalletAddress} className="join">
          <div>
            <label className="input validator join-item w-100">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="text" placeholder="0x000.." name="wallet" required />
            </label>
          </div>
          <button className="btn btn-primary join-item">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default WalletTemplate;
