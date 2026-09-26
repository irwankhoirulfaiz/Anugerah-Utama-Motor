# Anugerah Utama Motor — Next.js

Konversi website showroom mobil dari vanilla HTML ke Next.js (App Router) +
Firebase, supaya data unit mobil bisa diedit lewat halaman `/admin` tanpa
sentuh kode.

## Struktur

```
app/
  page.jsx            → halaman utama (/)
  katalog/page.jsx     → halaman katalog tipe mobil (/katalog)
  admin/page.jsx        → halaman kelola unit mobil (CRUD), butuh login
  admin/login/page.jsx  → halaman login admin
  globals.css           → semua styling (gabungan dari index.html + katalog.html)
components/              → Navbar, Footer, UnitCard, UnitGrid
lib/
  firebase.js            → koneksi ke Firebase (auth + firestore)
  units.js               → fungsi CRUD & realtime listener untuk data unit mobil
```

## 1. Cara jalanin project ini (tanpa install apa pun di laptop)

Karena laptop kerja gak bisa instal software dari luar, pakai **StackBlitz**
— semua proses `npm install` dan `next dev` jalan di browser:

1. Buka https://stackblitz.com
2. Pilih **"Import from GitHub"** (paling gampang: upload dulu folder ini ke
   repo GitHub baru lewat web github.com, lalu import URL repo-nya ke
   StackBlitz) — atau pilih **"Upload Project"** kalau StackBlitz versi lu
   support upload folder langsung.
3. StackBlitz otomatis `npm install` dan jalanin `next dev`. Preview
   langsung muncul di panel kanan.
4. Semua file bisa diedit langsung di browser, perubahan auto-preview.

## 2. Setup Firebase (buat login admin + database unit mobil)

1. Buka https://console.firebase.google.com, buat project baru (boleh pakai
   project Firebase yang sama dengan tool PKY DC kalau mau, atau bikin baru
   khusus untuk website ini).
2. **Authentication** → tab *Sign-in method* → aktifkan **Email/Password**.
3. Masih di Authentication → tab *Users* → **Add user**, isi email & password
   buat akun admin lu sendiri (ini yang dipakai login ke `/admin`).
4. **Firestore Database** → **Create database** → mode production (nanti
   atur rules-nya di langkah 6) → pilih region terdekat (misal
   `asia-southeast2`).
5. Buka **Project Settings** (ikon gerigi) → scroll ke *Your apps* → klik
   ikon `</>` (Web) → daftarkan app → copy semua value `firebaseConfig` yang
   muncul.
6. Buat file `.env.local` di root project (copy dari `.env.local.example`)
   lalu isi dengan value dari langkah 5:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   ```
7. Atur **Firestore Rules** (tab *Rules* di Firestore) supaya publik cuma
   bisa baca, tapi cuma admin yang login yang bisa nulis:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /units/{unitId} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```

Setelah env terisi, `/` dan `/katalog` akan otomatis nampilin unit yang lu
tambahkan lewat `/admin` (kalau koleksi `units` masih kosong, halaman
otomatis nampilin 4 contoh unit sebagai placeholder).

## 3. Foto unit mobil

Paling simpel: upload foto ke Google Drive/Imgur/ImgBB dulu, ambil link
gambarnya, tempel ke field **URL Foto** waktu tambah unit di `/admin`. Kalau
nanti mau upload foto langsung dari `/admin`, itu perlu tambahan Firebase
Storage — bisa nyusul kalau dibutuhkan.

## 4. Deploy ke internet (Vercel, gratis, tanpa terminal)

1. Push folder ini ke repo GitHub (bisa lewat StackBlitz → "Connect to
   GitHub" / "Export to GitHub", atau upload manual via github.com).
2. Buka https://vercel.com → Sign up pakai akun GitHub.
3. **Add New Project** → pilih repo ini → Vercel otomatis detect Next.js.
4. Sebelum klik Deploy, buka bagian **Environment Variables**, masukin
   6 variabel `NEXT_PUBLIC_FIREBASE_...` yang sama kayak di `.env.local`.
5. Klik **Deploy**. Selesai — website online dengan URL `*.vercel.app`
   (bisa disambungkan ke domain sendiri nanti kalau mau).

## Catatan

- Halaman `/katalog` (penjelasan tipe MPV/City Car/SUV/Double Cabin) sengaja
  dibuat statis di kode karena isinya konten edukasi, bukan data unit yang
  sering berubah.
- Halaman `/admin` cuma bisa diakses kalau sudah login (dicek lewat Firebase
  Auth). Gak ada tombol daftar akun baru dari sisi user — akun admin memang
  dibuat manual dari Firebase Console (poin 3 di atas), biar gak sembarang
  orang bisa daftar jadi admin.
