"use client";

import { db } from "./firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const UNITS_COLLECTION = "units";

// Dengarkan perubahan koleksi "units" secara realtime.
// callback dipanggil setiap kali data berubah dengan array unit terbaru.
export function subscribeUnits(callback) {
  const q = query(collection(db, UNITS_COLLECTION), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    const units = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(units);
  });
}

export async function addUnit(unit) {
  return addDoc(collection(db, UNITS_COLLECTION), {
    ...unit,
    createdAt: serverTimestamp(),
  });
}

export async function updateUnit(id, unit) {
  return updateDoc(doc(db, UNITS_COLLECTION, id), unit);
}

export async function deleteUnit(id) {
  return deleteDoc(doc(db, UNITS_COLLECTION, id));
}

// Data contoh, dipakai kalau koleksi "units" masih kosong,
// supaya halaman gak kelihatan kosong sebelum admin isi data asli.
export const SAMPLE_UNITS = [
  {
    id: "sample-1",
    name: "MPV Keluarga",
    category: "MPV",
    description: "Kabin luas, irit bahan bakar, cocok untuk harian.",
    photoUrl:
      "https://images.unsplash.com/photo-1675311183084-755007dbb223?w=400&q=80&auto=format&fit=crop",
    tag: "Hubungi Kami",
    featured: true,
  },
  {
    id: "sample-2",
    name: "City Car",
    category: "City Car",
    description: "Lincah dan mudah diparkir untuk mobilitas dalam kota.",
    photoUrl:
      "https://images.unsplash.com/photo-1564988190211-cfee63481d3a?w=400&q=80&auto=format&fit=crop",
    tag: "Hubungi Kami",
    featured: false,
  },
  {
    id: "sample-3",
    name: "SUV",
    category: "SUV",
    description: "Tenaga besar, nyaman untuk medan luar kota.",
    photoUrl:
      "https://images.unsplash.com/photo-1654688554491-69d21d38fb91?w=400&q=80&auto=format&fit=crop",
    tag: "Hubungi Kami",
    featured: false,
  },
  {
    id: "sample-4",
    name: "Double Cabin",
    category: "Double Cabin",
    description: "Pilihan tangguh untuk kebutuhan kerja dan niaga.",
    photoUrl:
      "https://images.unsplash.com/photo-1610647929723-a8922852cd44?w=400&q=80&auto=format&fit=crop",
    tag: "Hubungi Kami",
    featured: false,
  },
];
