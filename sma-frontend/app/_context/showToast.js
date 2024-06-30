"use client";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

export default function ShowToast({ children }) {
  return (
    <div>
      {children}
      <Toaster />
    </div>
  );
}
