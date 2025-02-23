import React from "react";
import UsersList from "../components/admin/UsersList";

export default function AdminUsers() {
  return (
    <motion.div
      transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <UsersList />
      </div>
    </motion.div>
  );
}
