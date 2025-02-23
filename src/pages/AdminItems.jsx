import React from "react";
import ItemsList from "../components/admin/ItemsList";
import UploadNewItem from "../components/admin/UploadNewItem";

export default function AdminItems() {
  return (
    <motion.div
      transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h1 className="main-title">Admin Page</h1>
        <div className="flex">
          <div>
            <ItemsList />
          </div>
          <div>
            <UploadNewItem />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
