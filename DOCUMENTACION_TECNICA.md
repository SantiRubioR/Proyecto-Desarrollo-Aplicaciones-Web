# Documentación Técnica - Alimentación Saludable Infantil

## 📋 Tabla de Contenidos

1. [Stack Tecnológico](#stack-tecnológico)
2. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
3. [Por qué Supabase](#por-qué-supabase)
4. [Variables de Entorno](#variables-de-entorno)
5. [Estructura de Base de Datos](#estructura-de-base-de-datos)
6. [Instalación y Configuración](#instalación-y-configuración)
7. [Guía de Desarrollo](#guía-de-desarrollo)

---

## 🛠️ Stack Tecnológico

### Frontend

| Tecnología | Versión | Propósito |
|----------|---------|----------|
| **Next.js** | 16.0.3 | Framework React con App Router |
| **React** | 19.2.0 | Librería UI y componentes |
| **TypeScript** | ^5 | Tipado estático y seguridad |
| **Tailwind CSS** | ^4.1.9 | Estilos y diseño responsive |
| **Shadcn/ui** | Latest | Componentes UI accesibles |
| **React Hook Form** | ^7.60.0 | Gestión de formularios |
| **Lucide React** | ^0.454.0 | Iconos consistentes |

### Backend

| Tecnología | Versión | Propósito |
|----------|---------|----------|
| **Supabase** | Latest | Base de datos PostgreSQL |
| **PostgreSQL** | 15+ | Base de datos relacional |
| **Server Actions** | Next.js 16 | Funciones del servidor |
| **Node.js** | 18+ | Runtime JavaScript |

### Herramientas de Desarrollo

| Herramienta | Propósito |
|----------|----------|
| **Vercel** | Hosting y deployment |
| **Git** | Control de versiones |
| **ESLint** | Linting de código |

---

## 🏗️ Arquitectura del Proyecto

\`\`\`
proyecto-alimentacion-saludable/
├── app/
│   ├── layout.tsx              # Layout global
│   ├── page.tsx                # Página raíz
│   ├── globals.css             # Estilos globales
│   └── actions/
│       └── testimonials.ts     # Server Actions
│
├── components/
│   ├── header.tsx              # Encabezado
│   ├── sidebar.tsx             # Menú lateral
│   ├── footer.tsx              # Pie de página
│   ├── layout.tsx              # Layout wrapper
│   ├── share-story-modal.tsx   # Modal de testimonios
│   ├── testimonial-card.tsx    # Card de testimonios
│   └── pages/
│       ├── home.tsx            # Página inicio
│       ├── recipes.tsx         # Recetas
│       ├── community.tsx       # Comunidad
│       ├── education.tsx       # Guías educativas
│       ├── games.tsx           # Juegos
│       └── alerts.tsx          # Alertas
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts           # Cliente (navegador)
│   │   └── server.ts           # Cliente (servidor)
│   ├── utils.ts                # Funciones utilitarias
│   └── types.ts                # Tipos TypeScript
│
├── public/                     # Assets estáticos
├── scripts/                    # Scripts SQL
└── package.json                # Dependencias
\`\`\`

### Flujo de Datos

\`\`\`
┌─────────────────────────────────────┐
│  Usuario en el Navegador            │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  React Component (Modal)            │
│  share-story-modal.tsx              │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Server Action                      │
│  app/actions/testimonials.ts        │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Supabase Client (Servidor)         │
│  lib/supabase/server.ts             │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  PostgreSQL Database                │
│  Tabla: testimonios                 │
└─────────────────────────────────────┘
\`\`\`

---

## 💾 Por qué Supabase

### ✅ Razones Principales

| Razón | Beneficio |
|-------|----------|
| **PostgreSQL Potente** | Base de datos relacional confiable y rápida |
| **Auth Integrada** | Autenticación sin código adicional |
| **Row Level Security** | Privacidad y control de acceso automático |
| **Real-time API** | Actualizaciones en vivo (opcional) |
| **REST + GraphQL** | APIs automáticas desde la BD |
| **Panel Admin** | Gestiona datos visualmente |
| **Precio Justo** | Tier gratuito generoso |

---

## 🔐 Variables de Entorno

### Necesarias

\`\`\`bash
# Supabase - OBLIGATORIAS
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...tu-clave-aqui

# Supabase - Opcional (servidor)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...clave-servicio-aqui
\`\`\`

### Dónde Obtenerlas

1. Ve a https://supabase.com/dashboard
2. Selecciona tu proyecto
3. Haz clic en **Settings → API**
4. Copia:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret** → `SUPABASE_SERVICE_ROLE_KEY`

---

## 🗄️ Estructura de Base de Datos

### Tabla: `testimonios`

\`\`\`sql
CREATE TABLE testimonios (
  id BIGSERIAL PRIMARY KEY,
  nombre_acudiente VARCHAR(255) NOT NULL,
  relacion VARCHAR(50) NOT NULL,
  nombre_nino VARCHAR(255) NOT NULL,
  comentario TEXT NOT NULL,
  estrellas INTEGER CHECK (estrellas >= 1 AND estrellas <= 5),
  logro VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

### Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | BIGSERIAL | ID único (Primary Key) |
| `nombre_acudiente` | VARCHAR | Nombre del padre/madre |
| `relacion` | VARCHAR | "Madre", "Padre", "Abuelo", etc |
| `nombre_nino` | VARCHAR | Nombre del niño |
| `comentario` | TEXT | Historia/experiencia |
| `estrellas` | INTEGER | Calificación 1-5 |
| `logro` | VARCHAR | Logro alcanzado |
| `created_at` | TIMESTAMP | Fecha de creación |
| `updated_at` | TIMESTAMP | Última actualización |

### Policies (Row Level Security)

\`\`\`sql
-- Todos pueden ver testimonios
SELECT: Enable for all users

-- Todos pueden crear testimonios
INSERT: Enable for all users

-- Solo creador puede actualizar
UPDATE: Enable for authenticated users 
WHERE user_id = auth.uid()

-- Solo creador puede eliminar
DELETE: Enable for authenticated users 
WHERE user_id = auth.uid()
\`\`\`

---

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- Git
- Cuenta de Supabase (gratis)

### Paso 1: Clonar

\`\`\`bash
git clone https://github.com/tu-usuario/alimentacion-saludable.git
cd alimentacion-saludable
\`\`\`

### Paso 2: Instalar Dependencias

\`\`\`bash
npm install
\`\`\`

### Paso 3: Variables de Entorno

\`\`\`bash
# Crear .env.local
touch .env.local
\`\`\`

Agregar en `.env.local`:

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_key
\`\`\`

### Paso 4: Crear Tabla en Supabase

1. Abre Supabase Dashboard
2. Ve a **SQL Editor**
3. Copia el contenido de `scripts/001_create_testimonios_table.sql`
4. Ejecuta el script

### Paso 5: Ejecutar

\`\`\`bash
npm run dev
\`\`\`

Accede a http://localhost:3000

---

## 💻 Guía de Desarrollo

### Estructura de un Componente

\`\`\`tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function MiComponente() {
  const [estado, setEstado] = useState(false)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Título</h1>
      <Button onClick={() => setEstado(!estado)}>
        Cambiar estado
      </Button>
    </div>
  )
}
\`\`\`

### Server Action Pattern

\`\`\`typescript
'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function crearTestimonio(datos: DatosForm) {
  const supabase = createServerClient(...)
  
  const { data, error } = await supabase
    .from('testimonios')
    .insert([datos])
  
  if (error) throw new Error(error.message)
  return data
}
\`\`\`

### Estilización con Tailwind

\`\`\`tsx
<div className="flex items-center justify-between gap-4 p-4 bg-orange-50 rounded-lg">
  <h2 className="text-lg font-semibold text-orange-900">Título</h2>
  <Button className="bg-orange-600 hover:bg-orange-700">Acción</Button>
</div>
\`\`\`

### Comandos Útiles

\`\`\`bash
# Linting
npm run lint

# Build
npm run build

# Producción
npm start
\`\`\`

---

## 📞 Soporte

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación Supabase](https://supabase.com/docs)
- Abre un issue en el repositorio

---

**Última actualización:** Noviembre 2025
