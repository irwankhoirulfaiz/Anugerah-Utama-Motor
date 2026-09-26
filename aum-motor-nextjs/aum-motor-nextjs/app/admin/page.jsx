"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { subscribeUnits, addUnit, updateUnit, deleteUnit } from "@/lib/units";

const CATEGORY_OPTIONS = ["MPV", "City Car", "SUV", "Double Cabin"];

const emptyForm = {
  name: "",
  category: CATEGORY_OPTIONS[0],
  description: "",
  photoUrl: "",
  tag: "Hubungi Kami",
  featured: false,
};

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState(undefined); // undefined = belum dicek, null = belum login
  const [units, setUnits] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  // Cek status login
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (!u) router.push("/admin/login");
    });
    return () => unsub();
  }, [router]);

  // Ambil data unit realtime dari Firestore (hanya kalau sudah login)
  useEffect(() => {
    if (!user) return;
    const unsub = subscribeUnits(setUnits);
    return () => unsub();
  }, [user]);

  function handleChange(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function startEdit(unit) {
    setEditingId(unit.id);
    setForm({
      name: unit.name || "",
      category: unit.category || CATEGORY_OPTIONS[0],
      description: unit.description || "",
      photoUrl: unit.photoUrl || "",
      tag: unit.tag || "Hubungi Kami",
      featured: !!unit.featured,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyForm);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.name.trim()) {
      setError("Nama unit wajib diisi.");
      return;
    }
    setSaving(true);
    try {
      if (editingId) {
        await updateUnit(editingId, form);
      } else {
        await addUnit(form);
      }
      cancelEdit();
    } catch (err) {
      setError("Gagal menyimpan data. Coba lagi.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Hapus unit ini?")) return;
    try {
      await deleteUnit(id);
    } catch (err) {
      setError("Gagal menghapus data.");
    }
  }

  async function handleLogout() {
    await signOut(auth);
    router.push("/admin/login");
  }

  if (user === undefined) {
    return <div className="admin-shell">Memuat...</div>;
  }
  if (!user) {
    return null; // sedang redirect ke /admin/login
  }

  return (
    <div className="admin-shell">
      <div className="admin-topbar">
        <h2 style={{ fontSize: 22 }}>Kelola Unit Mobil</h2>
        <button className="btn outline sm" onClick={handleLogout}>
          Keluar
        </button>
      </div>

      <div className="admin-card">
        <h2>{editingId ? "Edit Unit" : "Tambah Unit Baru"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="admin-field">
            <label>Nama Unit</label>
            <input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Contoh: Toyota Avanza 2019"
            />
          </div>
          <div className="admin-field">
            <label>Kategori</label>
            <select
              value={form.category}
              onChange={(e) => handleChange("category", e.target.value)}
            >
              {CATEGORY_OPTIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="admin-field">
            <label>Deskripsi Singkat</label>
            <textarea
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Contoh: Kabin luas, irit bahan bakar, cocok untuk harian."
            />
          </div>
          <div className="admin-field">
            <label>URL Foto</label>
            <input
              value={form.photoUrl}
              onChange={(e) => handleChange("photoUrl", e.target.value)}
              placeholder="https://..."
            />
          </div>
          <div className="admin-field">
            <label>Label Tombol / Harga</label>
            <input
              value={form.tag}
              onChange={(e) => handleChange("tag", e.target.value)}
              placeholder="Contoh: Rp 165 Juta atau Hubungi Kami"
            />
          </div>
          <div className="admin-field" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input
              type="checkbox"
              id="featured"
              style={{ width: "auto" }}
              checked={form.featured}
              onChange={(e) => handleChange("featured", e.target.checked)}
            />
            <label htmlFor="featured" style={{ marginBottom: 0 }}>
              Tampilkan sebagai unit unggulan
            </label>
          </div>

          {error && <p className="admin-error">{error}</p>}

          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <button className="btn" type="submit" disabled={saving}>
              {saving ? "Menyimpan..." : editingId ? "Simpan Perubahan" : "Tambah Unit"}
            </button>
            {editingId && (
              <button className="btn outline" type="button" onClick={cancelEdit}>
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h2>Daftar Unit ({units.length})</h2>
        {units.length === 0 && (
          <p style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>
            Belum ada unit. Tambahkan lewat form di atas.
          </p>
        )}
        {units.map((unit) => (
          <div className="admin-unit-row" key={unit.id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={unit.photoUrl} alt={unit.name} />
            <div className="meta">
              <h4>{unit.name}</h4>
              <span>
                {unit.category} · {unit.tag}
              </span>
            </div>
            <div className="admin-actions">
              <button type="button" onClick={() => startEdit(unit)}>
                Edit
              </button>
              <button type="button" className="danger" onClick={() => handleDelete(unit.id)}>
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
