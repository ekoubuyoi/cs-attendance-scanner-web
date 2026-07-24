"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function Home() {
  const [status, setStatus] = useState("Testing connection...");

  useEffect(() => {
    async function testFirestore() {
      try {
        // Try reading from a "test" collection
        const querySnapshot = await getDocs(collection(db, "test"));
        setStatus(`Connected successfully! Found ${querySnapshot.size} documents.`);
      } catch (error) {
        console.error("Error connecting to Firestore: ", error);
        setStatus("Connection failed. Check console for details.");
      }
    }

    testFirestore();
  }, []);

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>CS Attendance Scanner</h1>
      <p>Database Status: <strong>{status}</strong></p>
    </main>
  );
}
