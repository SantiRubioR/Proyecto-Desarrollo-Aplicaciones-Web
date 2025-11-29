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
|:-----------|:-------:|:---------|
| Next.js | 16.0.3 | Framework React con App Router |
| React | 19.2.0 | Librería UI y componentes |
| TypeScript | ^5 | Tipado estático y seguridad |
| Tailwind CSS | ^4.1.9 | Estilos y diseño responsive |
| Shadcn/ui | Latest | Componentes UI accesibles |
| React Hook Form | ^7.60.0 | Gestión de formularios |
| Lucide React | ^0.454.0 | Iconos consistentes |

### Backend

| Tecnología | Versión | Propósito |
|:-----------|:-------:|:---------|
| Supabase | Latest | Base de datos PostgreSQL |
| PostgreSQL | 15+ | Base de datos relacional |
| Server Actions | Next.js 16 | Funciones del servidor |
| Node.js | 18+ | Runtime JavaScript |

### Herramientas de Desarrollo

| Herramienta | Propósito |
|:------------|:---------|
| Vercel | Hosting y deployment |
| Git | Control de versiones |
| ESLint | Linting de código |

---

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas

\`\`\`
📦 proyecto-alimentacion-saludable/
│
├── 📂 app/
│   ├── layout.tsx              # Layout global
│   ├── page.tsx                # Página raíz
│   ├── globals.css             # Estilos globales
│   └── 📂 actions/
│       └── testimonials.ts     # Server Actions para BD
│
├── 📂 components/
│   ├── header.tsx              # Encabezado
│   ├── sidebar.tsx             # Menú lateral
│   ├── footer.tsx              # Pie de página
│   ├── layout.tsx              # Layout wrapper
│   ├── share-story-modal.tsx   # Modal de testimonios ⭐
│   ├── testimonial-card.tsx    # Card de testimonios
│   └── 📂 pages/
│       ├── home.tsx            # Página inicio
│       ├── recipes.tsx         # Recetas
│       ├── community.tsx       # Comunidad
│       ├── education.tsx       # Guías educativas
│       ├── games.tsx           # Juegos
│       └── alerts.tsx          # Alertas
│
├── 📂 lib/
│   ├── 📂 supabase/
│   │   ├── client.ts           # Cliente Supabase (navegador)
│   │   └── server.ts           # Cliente Supabase (servidor)
│   ├── utils.ts                # Funciones utilitarias
│   └── types.ts                # Tipos TypeScript
│
├── 📂 public/                  # Assets estáticos (imágenes, iconos)
├── 📂 scripts/                 # Scripts SQL para BD
├── package.json                # Dependencias del proyecto
└── tsconfig.json               # Configuración TypeScript
\`\`\`

### Componentes Principales

**Frontend (UI/UX)**
- ✅ Header: Navegación y búsqueda
- ✅ Sidebar: Menú de secciones
- ✅ Modales: Formularios interactivos
- ✅ Cards: Componentes reutilizables
- ✅ Footer: Información y contacto

**Backend (Lógica)**
- ✅ Server Actions: Funciones asincrónicas seguras
- ✅ Supabase Client: Conexión a base de datos
- ✅ RLS Policies: Control de acceso a datos

---

## 🔄 Flujo de Datos

\`\`\`
Usuario llena formulario en navegador
           ↓
    React Component
    (share-story-modal.tsx)
           ↓
   Valida campos del formulario
           ↓
    Llama Server Action
    (createTestimonial)
           ↓
 Supabase Client (servidor)
    Se conecta a BD
           ↓
 INSERT en tabla testimonios
           ↓
  BD retorna los datos
           ↓
  Usuario ve confirmación
           ↓
 Testimonio aparece en Home
\`\`\`

### Detalle del Flujo

1. **Usuario interactúa**: Completa el formulario en el navegador
2. **Validación**: React valida que todos los campos sean correctos
3. **Envío**: Se llama la Server Action `createTestimonial`
4. **Procesamiento**: El servidor conecta con Supabase
5. **Almacenamiento**: PostgreSQL guarda el testimonio
6. **Respuesta**: Los datos se devuelven al navegador
7. **UI Actualizada**: El componente muestra el éxito
8. **Persistencia**: El dato está guardado permanentemente

---

## 💾 Por qué Supabase

### Ventajas Principales

| Ventaja | Beneficio | Caso de Uso |
|:--------|:----------|:-----------|
| **PostgreSQL Potente** | Base de datos confiable y rápida | Almacenamiento testimonios |
| **Auth Integrada** | Autenticación sin código extra | Usuarios futuros |
| **Row Level Security** | Privacidad automática | Control de acceso |
| **Real-time API** | Actualizaciones en vivo | Comentarios en tiempo real |
| **REST + GraphQL** | APIs automáticas | Consultas flexibles |
| **Panel Admin** | Gestión visual de datos | Dashboard de administrador |
| **Precio Justo** | Tier gratuito generoso | Proyectos pequeños |
| **Escalable** | Crece con tu proyecto | Futuro crecimiento |

### Alternativas Consideradas

| Alternativa | Por qué NO | Por qué SÍ Supabase |
|:------------|:-----------|:-------------------|
| Firebase | Vendor lock-in | Supabase = Open Source |
| Neon | Similar, pero menos UI | Supabase = mejor dashboard |
| MongoDB | NoSQL menos seguro | Supabase = SQL + RLS |

---

## 🔐 Variables de Entorno

### Archivo: `.env.local`

\`\`\`bash
# Supabase - OBLIGATORIAS
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...tu-clave-publica

# Supabase - OPCIONAL (solo servidor)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...clave-privada-servidor
\`\`\`

### Dónde Obtenerlas (Paso a Paso)

**1. Abre Supabase Dashboard**
   - Dirección: https://supabase.com/dashboard
   - Inicia sesión con tu cuenta

**2. Selecciona tu Proyecto**
   - Lista de proyectos a la izquierda

**3. Ve a Configuración → API**
   - Click en "Settings" (engranaje abajo izquierda)
   - Luego click en "API"

**4. Copia las Claves**
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role secret` → `SUPABASE_SERVICE_ROLE_KEY`

**5. Crea archivo `.env.local`**
   \`\`\`
   En la raíz del proyecto, crea:
   proyecto-alimentacion-saludable/
   ├── .env.local    ← Archivo nuevo aquí
   └── package.json
   \`\`\`

**6. Pega las variables**
   \`\`\`bash
   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
   \`\`\`

---

## 🗄️ Estructura de Base de Datos

### Tabla: testimonios

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

### Descripción de Campos

| Campo | Tipo | Requerido | Ejemplo | Descripción |
|:------|:-----|:----------|:--------|:-----------|
| `id` | BIGSERIAL | ✅ | 1, 2, 3... | Identificador único |
| `nombre_acudiente` | VARCHAR | ✅ | Carlos López | Nombre del padre/madre |
| `relacion` | VARCHAR | ✅ | Padre | Relación con el niño |
| `nombre_nino` | VARCHAR | ✅ | Santiago | Nombre del niño |
| `comentario` | TEXT | ✅ | Mi hijo... | Historia/experiencia completa |
| `estrellas` | INTEGER | ✅ | 5 | Calificación 1 a 5 |
| `logro` | VARCHAR | ❌ | Mejor concentración | Logro alcanzado (opcional) |
| `created_at` | TIMESTAMP | ✅ | 2025-11-28 | Fecha de creación automática |
| `updated_at` | TIMESTAMP | ✅ | 2025-11-28 | Última actualización automática |

### Row Level Security (RLS)

Estas políticas controlan quién puede ver y modificar los testimonios:

\`\`\`sql
-- Política 1: Todos pueden VER testimonios
CREATE POLICY "read_all_testimonials" 
ON testimonios FOR SELECT 
USING (true);

-- Política 2: Todos pueden CREAR testimonios
CREATE POLICY "create_testimonials" 
ON testimonios FOR INSERT 
WITH CHECK (true);

-- Política 3: Solo el creador puede ACTUALIZAR
CREATE POLICY "update_own_testimonials" 
ON testimonios FOR UPDATE 
USING (auth.uid() = user_id);

-- Política 4: Solo el creador puede ELIMINAR
CREATE POLICY "delete_own_testimonials" 
ON testimonios FOR DELETE 
USING (auth.uid() = user_id);
\`\`\`

---

## 🚀 Instalación y Configuración

### Prerrequisitos

\`\`\`
✅ Node.js 18+ instalado
✅ Git instalado en tu computadora
✅ Cuenta de Supabase (gratis en supabase.com)
✅ Un editor de código (VS Code recomendado)
\`\`\`

### Paso 1: Clonar el Repositorio

\`\`\`bash
git clone https://github.com/tu-usuario/alimentacion-saludable.git
cd alimentacion-saludable
\`\`\`

### Paso 2: Instalar Dependencias

\`\`\`bash
npm install
\`\`\`

Este comando lee `package.json` e instala todas las librerías necesarias.

### Paso 3: Configurar Variables de Entorno

\`\`\`bash
# En la raíz del proyecto, crea:
touch .env.local
\`\`\`

Abre `.env.local` y agrega:

\`\`\`bash
NEXT_PUBLIC_SUPABASE_URL=tu_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_aqui
\`\`\`

### Paso 4: Crear Tabla en Supabase

1. Abre https://supabase.com/dashboard
2. Ve a **SQL Editor** (lado izquierdo)
3. Click en **"New Query"**
4. Copia todo el contenido de `scripts/001_create_testimonios_table.sql`
5. Pégalo en el editor
6. Click en **"Run"** (botón azul)

### Paso 5: Ejecutar en Desarrollo

\`\`\`bash
npm run dev
\`\`\`

Verás algo como:
\`\`\`
▲ Next.js 16.0.3
- Ready in 1.2s
- Local:        http://localhost:3000
\`\`\`

**¡Accede a http://localhost:3000 en tu navegador!**

---

## 💻 Guía de Desarrollo

### Crear un Componente React

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

### Crear una Server Action

\`\`\`typescript
'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function crearTestimonio(datos: DatosForm) {
  const cookieStore = await cookies()
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    }
  )

  const { data, error } = await supabase
    .from('testimonios')
    .insert([datos])

  if (error) throw new Error(error.message)
  return data
}
\`\`\`

### Estilos con Tailwind CSS

\`\`\`tsx
<div className="flex items-center justify-between gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
  <h2 className="text-lg font-semibold text-orange-900">
    Título Importante
  </h2>
  <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition">
    Acción
  </button>
</div>
\`\`\`

### Comandos Útiles

| Comando | Propósito |
|:--------|:----------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye para producción |
| `npm start` | Ejecuta versión de producción |
| `npm run lint` | Verifica errores de código |

---

## 📞 Recursos y Soporte

- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

**Última actualización**: Noviembre 2025  
**Versión**: 1.0
