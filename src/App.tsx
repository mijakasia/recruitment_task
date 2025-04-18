import { useAuth } from "./context/AuthContext";
import Header from "./components/Login";
import PricingTable from "./components/PricingTable";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const { loggedIn } = useAuth();

  return (
    <AnimatePresence mode="wait">
      {loggedIn ? (
        <motion.div
          key="pricing"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
        >
          <PricingTable />
        </motion.div>
      ) : (
        <motion.div
          key="header"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
        >
          <Header />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
