import LoginForm from "../components/forms/LoginForm";
import GoBackButton from "../components/headersAndNavigation/GoBackButton";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <motion.div
      transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="p-6 border shadow-lg rounded-2xl w-80">
          <GoBackButton />
          <h2 className="mb-4 text-xl font-bold text-slate-200">Login</h2>
          <LoginForm />
        </div>
      </div>
    </motion.div>
  );
}
