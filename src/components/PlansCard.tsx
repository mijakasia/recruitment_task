import { motion } from "framer-motion";

type Feature = {
  label: string;
  active: boolean;
};

type Plan = {
  title: string;
  price: number;
  features: Feature[];
  highlighted: boolean;
};

type Props = {
  plan: Plan;
  index: number;
};

const PlanCard = ({ plan, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div>
        <div
          className={`rounded-xl border ${
            plan.highlighted
              ? "bg-indigo-900 text-white border-indigo-900 shadow-lg scale-[1.03]"
              : "bg-white text-gray-900 border-gray-200"
          } p-8 flex flex-col items-center transition`}
        >
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
            {plan.title}
          </h3>
          <div className="flex items-start justify-center gap-2 mb-4">
            <p className="text-4xl font-bold flex">
              <span className="text-sm align-top mr-0.5">$</span>
              {plan.price}
            </p>
            <div className="text-sm text-gray-500 leading-tight">
              <p>per user</p>
              <p>per month</p>
            </div>
          </div>
          <p
            className={`mb-6 text-center ${
              plan.highlighted ? "text-white" : "text-gray-600"
            }`}
          >
            All the features you need to keep your personal files safe,
            accessible, and easy to share.
          </p>
        </div>

        <div className="flex flex-col items-center text-sm text-gray-700 px-8 pt-6 pb-8 text-center">
          <ul className="mb-6 space-y-2 text-left">
            {plan.features.map((feature, i) => (
              <li
                key={i}
                className={`flex gap-2 items-center ${
                  feature.active ? "text-gray-400" : "text-gray-300"
                }`}
              >
                <span
                  className={feature.active ? "text-trial" : "text-transparent"}
                >
                  ✓
                </span>
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${
              plan.highlighted
                ? "bg-trial text-white hover:opacity-90"
                : "bg-white border border-indigo-300 text-indigo-900 hover:bg-indigo-50"
            }`}
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PlanCard;
