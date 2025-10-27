# PSICOVERSE - Monorepo

Un monorepo completo para PSICOVERSE construido con TurboRepo y pnpm.

## 🏗️ Estructura

```
psicoverse2/
├── apps/
│   ├── web/                    # Next.js 14 App Router
│   └── mobile/                 # Expo SDK 51
├── packages/
│   ├── ui/                     # Componentes compartidos
│   ├── services/               # Servicios y tipos
│   └── validation/             # Esquemas Zod
└── ...
```

## 🚀 Apps

### Web App (Next.js 14)
- ✅ Next.js 14 con App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ React Hook Form + Zod
- ✅ TanStack Query
- ✅ Lucide React icons
- ✅ Supabase integration ready

### Mobile App (Expo SDK 51)
- ✅ Expo Router
- ✅ NativeWind
- ✅ TypeScript
- ✅ React Hook Form + Zod
- ✅ TanStack Query
- ✅ Supabase integration ready

## 📦 Packages

### @psicoverse/ui
Componentes compartidos para web y mobile:
- `Card` - Componente de tarjeta
- `Badge` - Componente de insignia

### @psicoverse/services
Servicios y tipos compartidos:
- `types.ts` - Tipos TypeScript
- `mockServices.ts` - Servicios mock
- `supabaseClient.ts` - Cliente Supabase

### @psicoverse/validation
Esquemas de validación con Zod:
- `contactSchema` - Validación de formulario de contacto
- `userSchema` - Validación de usuario
- `loginSchema` - Validación de login
- `registerSchema` - Validación de registro

## 🛠️ Scripts

```bash
# Desarrollo
pnpm dev                    # Ejecutar todas las apps
pnpm --filter web dev      # Solo web app
pnpm --filter mobile dev   # Solo mobile app

# Construcción
pnpm build                  # Construir todas las apps
pnpm --filter web build    # Solo web app
pnpm --filter mobile build  # Solo mobile app

# Linting y tipos
pnpm lint                   # Linter en todos los paquetes
pnpm typecheck             # Verificación de tipos
```

## 🎯 Características

- **Monorepo**: Gestión centralizada con TurboRepo
- **TypeScript**: Tipado fuerte en toda la aplicación
- **Tailwind CSS**: Estilos consistentes
- **React Query**: Gestión de estado del servidor
- **Formularios**: React Hook Form + Zod
- **Iconos**: Lucide React
- **Base de datos**: Supabase (configurado pero no requerido)

## 🔧 Configuración

### Variables de entorno (opcional)
```bash
# Para Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Desarrollo
1. Instalar dependencias: `pnpm install`
2. Ejecutar desarrollo: `pnpm dev`
3. Abrir http://localhost:3000 (web) o usar Expo Go (mobile)

## 📱 Landing Page

La web app incluye una landing page completa con:
- ✅ Navegación por secciones
- ✅ Sección de profesionales
- ✅ Blog de bienestar
- ✅ Tests y autoevaluaciones
- ✅ Formulario de contacto
- ✅ Chatbot FAB
- ✅ Navegación móvil
- ✅ Diseño responsive

## 🎨 Diseño

- **Fuente**: Inter
- **Colores**: Teal (principal), grises
- **Estilo**: Moderno, limpio, profesional
- **Responsive**: Mobile-first
- **Animaciones**: Transiciones suaves
