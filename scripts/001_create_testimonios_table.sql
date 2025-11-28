-- Crear tabla de testimonios
CREATE TABLE IF NOT EXISTS testimonios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  quote TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  achievement TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE testimonios ENABLE ROW LEVEL SECURITY;

-- Política: Cualquiera puede ver todos los testimonios
CREATE POLICY "Anyone can view testimonials"
  ON testimonios FOR SELECT
  USING (true);

-- Política: Cualquiera puede crear testimonios
CREATE POLICY "Anyone can create testimonials"
  ON testimonios FOR INSERT
  WITH CHECK (true);

-- Política: Usuarios pueden actualizar solo sus testimonios
CREATE POLICY "Users can update own testimonials"
  ON testimonios FOR UPDATE
  USING (user_id = auth.uid() OR user_id IS NULL)
  WITH CHECK (user_id = auth.uid() OR user_id IS NULL);

-- Política: Usuarios pueden eliminar solo sus testimonios
CREATE POLICY "Users can delete own testimonials"
  ON testimonios FOR DELETE
  USING (user_id = auth.uid() OR user_id IS NULL);
