import React from "react";

const steps = [
  {
    step: 1,
    title: "Get a Solana Wallet",
    description:
      "Download and install a Solana-compatible wallet like Phantom, Backpack, or Solflare. Make sure to back up your recovery phrase safely.",
  },
  {
    step: 2,
    title: "Fund Your Wallet",
    description:
      "Buy SOL (Solana) on an exchange like Binance or Coinbase, then transfer it to your wallet. You'll need SOL to buy $EXAGI and pay for gas fees.",
  },
  {
    step: 3,
    title: "Visit Pump.fun",
    description:
      "Go to the official Pump.fun website at https://pump.fun and connect your wallet by clicking the 'Connect Wallet' button.",
  },
  {
    step: 4,
    title: "Search for $EXAGI",
    description:
      "Use the search bar or browse trending tokens. You can also go directly using the token link: https://pump.fun/EXAGI (example).",
  },
  {
    step: 5,
    title: "Buy $EXAGI",
    description:
      "Once on the $EXAGI token page, enter the amount of SOL you'd like to spend and click 'Buy'. Confirm the transaction in your wallet.",
  },
  {
    step: 6,
    title: "Track Your Holdings",
    description:
      "Your $EXAGI tokens will appear in your wallet. You can view them in the 'Tokens' tab or track via Solana explorers like Solscan.",
  },
];

const BuyEXAGIPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          How to Buy $EXAGI on Pump.fun
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          Follow these simple steps to get your hands on $EXAGI and join the future of AI-powered learning.
        </p>

        <ol className="space-y-8">
          {steps.map(({ step, title, description }) => (
            <li key={step} className="relative pl-10">
              <div className="absolute top-1.5 left-0 w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center">
                {step}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 text-center">
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Buy $EXAGI Now
          </a>
        </div>

        <footer className="mt-20 text-center text-sm text-gray-400 border-t border-gray-200 pt-6">
          © {new Date().getFullYear()} EXAGI Team. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default BuyEXAGIPage;
