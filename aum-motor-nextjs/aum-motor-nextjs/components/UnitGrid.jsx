"use client";

import { useEffect, useState } from "react";
import { subscribeUnits, SAMPLE_UNITS } from "@/lib/units";
import UnitCard from "./UnitCard";

export default function UnitGrid() {
  const [units, setUnits] = useState(null); // null = masih loading

  useEffect(() => {
    const unsubscribe = subscribeUnits((data) => {
      setUnits(data);
    });
    return () => unsubscribe();
  }, []);

  // Selama loading atau kalau koleksi Firestore masih kosong, tampilkan data contoh
  const displayUnits = units && units.length > 0 ? units : SAMPLE_UNITS;
  const isSample = !units || units.length === 0;

  return (
    <>
      <div className="unit-grid">
        {displayUnits.slice(0, 4).map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
      {isSample && (
        <p
          style={{
            marginTop: 26,
            fontSize: 13,
            color: "var(--ink-soft)",
            textAlign: "center",
          }}
        >
          *Kartu unit di atas contoh tampilan. Tambahkan unit asli lewat
          halaman admin.
        </p>
      )}
    </>
  );
}
