# 🚀 Guía de Deployment - Custodia360 en Vercel

## Repositorio GitHub
**URL del Repositorio**: https://github.com/carnuv-Toqfip-7vahne/custodia360-app

## Instrucciones para Deployment en Vercel

### 1. Conectar repositorio con Vercel

1. Ir a [vercel.com](https://vercel.com) y hacer login
2. Hacer clic en "**New Project**"
3. Importar desde GitHub: `carnuv-Toqfip-7vahne/custodia360-app`
4. Vercel detectará automáticamente que es un proyecto Next.js

### 2. Configuración del Build

Vercel usará automáticamente la configuración del `vercel.json`:
- **Framework**: Next.js
- **Build Command**: `bun run build`
- **Install Command**: `bun install`
- **Node Version**: 18.x (recomendado)

### 3. Variables de Entorno (CRÍTICO)

Configurar estas variables en Vercel Dashboard → Settings → Environment Variables:

#### Email (Resend)
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@custodia360.com
```

#### Aplicación
```
NEXT_PUBLIC_APP_URL=https://tu-dominio.vercel.app
```

#### Supabase (opcional - configurar según sea necesario)
```
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

### 4. Deployment

1. Hacer clic en "**Deploy**"
2. Vercel iniciará el build automáticamente
3. El deployment estará listo en ~2-3 minutos

### 5. Configuración Post-Deployment

#### A. Configurar Dominio Personalizado (Opcional)
1. En Vercel Dashboard → Settings → Domains
2. Añadir `custodia360.com` o el dominio deseado

#### B. Verificar Email System
1. Probar formulario de contacto en `/contacto`
2. Verificar recepción de emails

### 6. Actualizaciones Futuras

✅ **Actualizaciones Automáticas**: Cada `git push` al repositorio desplegará automáticamente
- Push a `main` → Deployment automático a producción
- Las ramas feature crearán preview deployments

### 7. URLs Importantes

- **Repositorio**: https://github.com/carnuv-Toqfip-7vahne/custodia360-app
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Production URL**: Se generará después del deployment

### 8. Estructura del Proyecto

```
custodia360-app/
├── src/
│   ├── app/           # App Router (Next.js 13+)
│   ├── components/    # Componentes compartidos
│   ├── lib/          # Librerías y configuración
│   └── hooks/        # Custom hooks
├── vercel.json       # Configuración de Vercel
├── package.json      # Dependencias y scripts
└── tailwind.config.js # Configuración de Tailwind
```

## ⚡ Features Incluidas

- ✅ Next.js 15 con App Router
- ✅ Tailwind CSS para diseño responsivo
- ✅ Sistema de emails con Resend
- ✅ Formularios de contacto y contratación
- ✅ Dashboards multi-rol (Entidad, Delegado, Directo)
- ✅ Integración con Supabase lista
- ✅ Optimizado para Vercel

## 📧 Configuración de Email

El sistema usa **Resend** para emails transaccionales:
1. Crear cuenta en [resend.com](https://resend.com)
2. Obtener API key
3. Configurar dominio verificado
4. Añadir variables de entorno en Vercel

## 🔧 Development Local

```bash
bun install
bun dev
```

La aplicación correrá en `http://localhost:3000`

---

🤖 **Generado con Same** | **Ready for Production** ✨
