import React from "react";
import ItemsList from "../components/admin/ItemsList";
import UploadNewItem from "../components/admin/UploadNewItem";

export default function AdminItems() {
  return (
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
  );
}
