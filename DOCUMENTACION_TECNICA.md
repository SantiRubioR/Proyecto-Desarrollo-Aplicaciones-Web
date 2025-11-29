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
|------------|---------|----------|
| **Next.js** | 16.0.3 | Framework React con App Router |
| **React** | 19.2.0 | Librería UI y componentes |
| **TypeScript** | ^5 | Tipado estático y seguridad |
| **Tailwind CSS** | ^4.1.9 | Estilos y diseño responsive |
| **Shadcn/ui** | Latest | Componentes UI accesibles y reutilizables |
| **Radix UI** | Various | Primitivos accesibles para componentes |
| **React Hook Form** | ^7.60.0 | Gestión de formularios |
| **Lucide React** | ^0.454.0 | Iconos consistentes |
| **Next Themes** | ^0.4.6 | Soporte para dark/light mode |

### Backend
| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **Supabase** | Latest | Base de datos PostgreSQL |
| **PostgreSQL** | 15+ | Base de datos relacional |
| **Server Actions** | Next.js 16 | Funciones del servidor sin API |
| **Node.js** | 18+ | Runtime JavaScript |

### Herramientas de Desarrollo
| Herramienta | Propósito |
|-------------|----------|
| **Vercel** | Hosting y deployment |
| **Git** | Control de versiones |
| **ESLint** | Linting de código |
| **TypeScript** | Type checking |

---

## 🏗️ Arquitectura del Proyecto

\`\`\`
proyecto-alimentacion-saludable/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout global
│   ├── page.tsx                 # Página raíz
│   ├── globals.css              # Estilos globales
│   └── actions/
│       └── testimonials.ts      # Server Actions para testimonios
│
├── components/                  # Componentes React reutilizables
│   ├── header.tsx              # Encabezado
│   ├── sidebar.tsx             # Menú de navegación
│   ├── footer.tsx              # Pie de página
│   ├── layout.tsx              # Layout wrapper
│   ├── theme-provider.tsx      # Proveedor de tema
│   ├── share-story-modal.tsx   # Modal formulario testimonios
│   ├── testimonial-card.tsx    # Card de testimonios
│   └── pages/                  # Páginas de cada módulo
│       ├── home.tsx            # Página de inicio
│       ├── recipes.tsx         # Recetas saludables
│       ├── community.tsx       # Comunidad
│       ├── education.tsx       # Guías educativas
│       ├── games.tsx           # Zona de juegos
│       └── alerts.tsx          # Alertas y artículos
│
├── lib/                        # Utilidades y configuraciones
│   ├── supabase/
│   │   ├── client.ts          # Cliente Supabase (navegador)
│   │   └── server.ts          # Cliente Supabase (servidor)
│   ├── utils.ts               # Funciones utilitarias
│   └── types.ts               # Tipos TypeScript
│
├── public/                     # Assets estáticos
│   └── images/                # Imágenes
│
├── scripts/                    # Scripts de base de datos
│   └── 001_create_testimonios_table.sql
│
├── package.json               # Dependencias
├── next.config.mjs            # Configuración Next.js
├── tailwind.config.js         # Configuración Tailwind
├── tsconfig.json              # Configuración TypeScript
└── components.json            # Configuración Shadcn
\`\`\`

### Flujo de Datos

\`\`\`
Usuario (Browser)
    ↓
React Component (share-story-modal.tsx)
    ↓
Server Action (app/actions/testimonials.ts)
    ↓
Supabase Client (lib/supabase/server.ts)
    ↓
PostgreSQL Database (testimonios table)
    ↓
Supabase Real-time (si está habilitado)
    ↓
React Component (actualización del estado)
\`\`\`

---

## 💾 Por qué Supabase

### Razones Principales

1. **PostgreSQL Potente**
   - Base de datos relacional confiable
   - Soporte para JSON, arrays y tipos complejos
   - Excelente rendimiento en consultas

2. **Authentication Built-in**
   - Autenticación integrada (actualmente sin requerimiento)
   - Fácil agregar OAuth, emails, etc.
   - Row Level Security (RLS) para privacidad

3. **Real-time Capabilities**
   - Actualizaciones en tiempo real (opcional)
   - Perfecto para aplicaciones colaborativas

4. **API REST y GraphQL**
   - Auto-generado desde la base de datos
   - Documentación automática
   - Excelente para consultas rápidas

5. **Almacenamiento de Archivos**
   - Integración nativa para imágenes y documentos
   - Perfecto para fotos de recetas

6. **Panel de Admin**
   - Verifica datos sin dejar tu aplicación
   - Gestión fácil de base de datos

7. **Precio Justo**
   - Tier gratuito generoso
   - Escalable conforme crece tu aplicación
   - Pagos por uso

---

## 🔐 Variables de Entorno

### Necesarias

\`\`\`bash
# Supabase - OBLIGATORIAS
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...tu-clave-aqui

# Supabase - Opcional (para operaciones servidor)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...clave-servicio-aqui
\`\`\`

### Dónde obtenerlas

1. Ve a https://supabase.com/dashboard
2. Selecciona tu proyecto
3. Ve a **Settings → API**
4. Copia los valores:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret** → `SUPABASE_SERVICE_ROLE_KEY`

---

## 🗄️ Estructura de Base de Datos

### Tabla: `testimonios`

\`\`\`sql
CREATE TABLE testimonios (
  id BIGSERIAL PRIMARY KEY,
  nombre_acudiente VARCHAR(255) NOT NULL,      -- Nombre del padre/madre
  relacion VARCHAR(50) NOT NULL,               -- "Madre", "Padre", "Abuelo", etc
  nombre_nino VARCHAR(255) NOT NULL,           -- Nombre del niño
  comentario TEXT NOT NULL,                    -- Historia/experiencia
  estrellas INTEGER CHECK (estrellas >= 1 AND estrellas <= 5),
  logro VARCHAR(255),                          -- Logro alcanzado
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

### Policies (Row Level Security)

\`\`\`sql
-- Todos pueden ver testimonios
SELECT: Enable for all users

-- Solo el creador puede actualizar su testimonio
UPDATE: Enable for authenticated users (user_id = auth.uid())

-- Solo el creador puede eliminar su testimonio
DELETE: Enable for authenticated users (user_id = auth.uid())

-- Todos pueden crear testimonios (sin autenticación requerida)
INSERT: Enable for all users
\`\`\`

---

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- Git
- Cuenta de Supabase (gratis en supabase.com)

### Pasos

#### 1. Clonar el repositorio

\`\`\`bash
git clone https://github.com/tu-usuario/alimentacion-saludable-infantil.git
cd alimentacion-saludable-infantil
\`\`\`

#### 2. Instalar dependencias

\`\`\`bash
npm install
\`\`\`

#### 3. Configurar variables de entorno

\`\`\`bash
# Crea archivo .env.local
touch .env.local

# Agrega tus variables de Supabase
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_key
\`\`\`

#### 4. Crear tabla en Supabase

1. Ve a Supabase Dashboard
2. Ve a **SQL Editor**
3. Copia y ejecuta el contenido de `scripts/001_create_testimonios_table.sql`

#### 5. Ejecutar localmente

\`\`\`bash
npm run dev
\`\`\`

La aplicación estará disponible en `http://localhost:3000`

---

## 💻 Guía de Desarrollo

### Estructura de Componentes

**Componente típico:**

\`\`\`tsx
'use client' // Si usa interactividad del cliente

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function MiComponente() {
  const [estado, setEstado] = useState(false)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Título</h1>
      <p className="text-gray-600">Descripción</p>
      <Button onClick={() => setEstado(!estado)}>
        Cambiar estado
      </Button>
    </div>
  )
}
\`\`\`

### Server Actions

**Patrón para operaciones de base de datos:**

\`\`\`typescript
'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function miAccion(datos: DatosForm) {
  const supabase = createServerClient(...)
  
  const { data, error } = await supabase
    .from('testimonios')
    .insert([datos])
  
  if (error) throw new Error(error.message)
  return data
}
\`\`\`

### Estilización

Usamos **Tailwind CSS v4** con clases de utilidad:

\`\`\`tsx
<div className="flex items-center justify-between gap-4 p-4 bg-orange-50 rounded-lg">
  <h2 className="text-lg font-semibold text-orange-900">Título</h2>
  <Button className="bg-orange-600 hover:bg-orange-700">Acción</Button>
</div>
\`\`\`

### Testing

\`\`\`bash
# Ejecutar linter
npm run lint

# Build para producción
npm run build

# Iniciar producción local
npm start
\`\`\`

---

## 📞 Soporte

Si tienes dudas técnicas:
- Consulta la [documentación de Next.js](https://nextjs.org/docs)
- Lee la [documentación de Supabase](https://supabase.com/docs)
- Abre un issue en el repositorio

---

**Última actualización:** Noviembre 2025
