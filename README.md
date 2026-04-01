# 🏛️ Arova Identity & Credential Registry

A high-end, production-ready **React + Supabase ecosystem** for issuing, managing, and publicly verifying digital credentials for Arova Technologies personnel.

---

## ✨ Core Features

### 🛡️ Secret Panel (Admin Dashboard)

* **Architectural UI**
  Custom dashboard with a "Blueprint" aesthetic using *Space Grotesk* and *Inter* typography.

* **Identity Matrix**
  Searchable, filterable master table with full CRUD (Create, Read, Update, Delete).

* **In-Browser Image Processing**
  Avatar uploads auto-resized to 400px using HTML5 Canvas.

* **Document Management**
  Upload and manage PDF/Image-based certificates.

* **Skill Matrix System**
  Pill-based tagging system (predefined + custom skills).

* **Instant Export**
  Export full registry as CSV in one click.

* **Mobile Responsive**
  Optimized with sliding drawer and scrollable tables.

---

### 🔍 Public Verification Gateway (`/verify`)

* **Role-Aware Prefixing**
  PostgreSQL triggers generate IDs like `ARV-DEV-XXXXXX`.

* **Credential Validation**
  Public page to verify authenticity, duration, skills, and status.

* **Direct Downloads**
  Secure access to original certificate files.

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite), React Router DOM
* **Styling:** Tailwind CSS
* **Backend:** Supabase (PostgreSQL, Auth, Storage)

---

## 📁 Project Structure

```
arova-registry/
├── node_modules/
├── public/
│   ├── awpc-avant-guard-bold.woff2
│   └── favicon.ico                 
├── src/
│   ├── components/
│   │   ├── admin/
│   │   │   ├── CertificateForm.jsx
│   │   │   ├── IdentityMatrix.jsx
│   │   │   └── Login.jsx
│   │   └── layout/
│   │       ├── Footer.jsx
│   │       └── Navbar.jsx
│   ├── pages/
│   │   ├── SecretPanel.jsx
│   │   ├── Verify.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── supabaseClient.js
├── .env
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Local Setup & Installation

### 1. Clone & Install

```bash
git clone <repository-url>
cd arova-registry
npm install
```

### 2. Environment Configuration

Create `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Fonts

Place font inside `/public`:

```
/public/awpc-avant-guard-bold.woff2
```

Reference in CSS:

```css
url('/awpc-avant-guard-bold.woff2')
```

### 4. Run Dev Server

```bash
npm run dev
```

---

## 📦 Supabase Backend Configuration

### 1. Database Schema

```sql
CREATE TABLE interns (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()) NOT NULL,
  verification_id TEXT UNIQUE,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL,
  duration TEXT DEFAULT '3 Months',
  performance_badge TEXT,
  avatar_url TEXT,
  certificate_url TEXT,
  hub_location TEXT DEFAULT 'Remote',
  summary TEXT,
  skills TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'Active'
);

ALTER TABLE interns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users"
ON interns FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users"
ON interns FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users"
ON interns FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Enable delete for authenticated users"
ON interns FOR DELETE TO authenticated USING (true);
```

---

### 2. Role-Aware ID Generator (Trigger)

```sql
CREATE OR REPLACE FUNCTION generate_intern_id() 
RETURNS TRIGGER AS $$
DECLARE
    role_prefix TEXT;
    random_part TEXT;
    suffix_part TEXT;
BEGIN
    CASE 
        WHEN NEW.role ILIKE '%Software%' OR NEW.role ILIKE '%Dev%' THEN role_prefix := 'DEV';
        WHEN NEW.role ILIKE '%Design%' OR NEW.role ILIKE '%UI%' THEN role_prefix := 'DSGN';
        WHEN NEW.role ILIKE '%Sales%' OR NEW.role ILIKE '%Marketing%' THEN role_prefix := 'MKT';
        WHEN NEW.role ILIKE '%HR%' OR NEW.role ILIKE '%Human%' THEN role_prefix := 'HR';
        ELSE role_prefix := 'GEN';
    END CASE;

    random_part := upper(substring(md5(random()::text) from 1 for 6));
    suffix_part := upper(substring(md5(random()::text) from 1 for 2));

    NEW.verification_id := 'ARV-' || role_prefix || '-' || random_part || '-' || suffix_part;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_intern_id
BEFORE INSERT ON interns
FOR EACH ROW
EXECUTE FUNCTION generate_intern_id();
```

---

### 3. Storage Buckets

Create 2 public buckets:

* `intern-avatars`
* `intern-certificates`

#### Policies:

* **Public:** SELECT access
* **Admin:** INSERT, UPDATE, DELETE (authenticated only)

---

## 🧠 Final Note

Architected and designed for **Arova Technologies** — built to scale from a simple internship system into a **full credential verification platform**.
