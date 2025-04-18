import { motion } from "framer-motion";
import PlanCard from "./PlansCard";

const plans = [
  {
    title: "Start",
    price: 19,
    features: [
      { label: "2 GB of hosting space", active: true },
      { label: "14 days of free backups", active: true },
      { label: "Social integrations", active: false },
      { label: "Advanced client billing", active: false },
    ],
    highlighted: false,
  },
  {
    title: "Enterprise",
    price: 49,
    features: [
      { label: "2 GB of hosting space", active: true },
      { label: "14 days of free backups", active: true },
      { label: "Social integrations", active: true },
      { label: "Advanced client billing", active: false },
    ],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: 99,
    features: [
      { label: "2 GB of hosting space", active: true },
      { label: "14 days of free backups", active: true },
      { label: "Social integrations", active: true },
      { label: "Advanced client billing", active: true },
    ],
    highlighted: false,
  },
];

const PricingTable = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">
            Simple & flexible pricing built for everyone
          </h2>
          <p className="mt-4 text-gray-500">
            Start with 14-day free trial. No credit card needed. Cancel at
            anytime.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <PlanCard key={idx} plan={plan} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
