# 🔗 Integración con systeme.io - Guía Completa

## ✅ Estado de la Integración

Tu web **ya está completamente integrada** con systeme.io. Aquí está lo que funciona automáticamente:

### 📧 Puntos de Captura Activos

1. **Newsletter (Homepage)** ✅
   - Ubicación: Banner de newsletter en la página principal
   - Tags enviados: `["newsletter"]`
   - API: `/api/systeme/subscribe`

2. **Onboarding Flow (ES + EN)** ✅
   - Ubicación: `/onboarding` y `/en/onboarding`
   - Tags enviados según respuestas del usuario:
     - `onboarding-completado`
     - `objetivo-{respuesta}`
     - `rol-{respuesta}`
     - `equipo-{respuesta}`
   - API: `/api/systeme/subscribe`

3. **Webhook Receiver** ✅
   - Endpoint: `/api/systeme/webhook`
   - Recibe eventos de systeme.io para sincronización bidireccional

---

## 🔧 Configuración en systeme.io

### 1. Obtener tu API Key

1. Inicia sesión en [systeme.io](https://systeme.io)
2. Ve a tu **Foto de Perfil** → **Settings** (Configuración)
3. Haz clic en **API** en el menú lateral
4. Copia tu **API Key** (ya está en tu `.env`: `mkyvdcwvqw8gf44fflz7y1ybqjlz7yi8p0feipwyfvwbfwkn4cdqwbd4tbs2xvbx`)

Tu API Key ya está configurada correctamente en `.env`:
```env
SYSTEME_API_KEY=mkyvdcwvqw8gf44fflz7y1ybqjlz7yi8p0feipwyfvwbfwkn4cdqwbd4tbs2xvbx
```

---

### 2. Configurar Webhooks (Opcional pero Recomendado)

Los webhooks permiten que systeme.io notifique a tu web cuando ocurren eventos (nuevos contactos, ventas, etc.)

#### Paso 1: Ir a Configuración de Webhooks
1. En systeme.io, ve a **Foto de Perfil** → **Settings**
2. Haz clic en **Webhooks**
3. Clic en **Create** (Crear)

#### Paso 2: Configurar el Webhook
- **Nombre**: `Synth Web Integration`
- **Webhook URL**: `https://synth.com.es/api/systeme/webhook?token=TU_TOKEN_SECRETO`
- **Secret Key**: Crea una clave secreta (ej: `synth_webhook_2025`)

**Importante**: Agrega esta variable a tu `.env`:
```env
SYSTEME_WEBHOOK_SECRET=synth_webhook_2025
```

#### Paso 3: Seleccionar Eventos
Marca los eventos que quieres recibir:
- ✅ **Contact Created** (Contacto creado)
- ✅ **Contact Updated** (Contacto actualizado)
- ✅ **Tag Added** (Tag añadido)
- ✅ **Tag Removed** (Tag eliminado)
- ✅ **Order Completed** (Pedido completado) - si usas ventas

#### Paso 4: Guardar
Haz clic en **Save** para activar el webhook.

---

### 3. Crear Tags en systeme.io

Para organizar tus contactos, crea estos tags manualmente en systeme.io:

#### Tags de Newsletter:
- `newsletter`

#### Tags de Onboarding (Español):
- `onboarding-completado`
- `objetivo-probar-una-nueva-idea-de-producto-o-campaña`
- `objetivo-entender-mejor-a-mis-clientes-actuales`
- `objetivo-explorar-un-problema-de-negocio-sin-una-hipótesis-clara`
- `objetivo-mejorar-cómo-preparo-entrevistas-o-focus-groups`
- `objetivo-solo-estoy-explorando`
- `rol-fundador/a-/-emprendedor/a`
- `rol-marketing-/-crecimiento`
- `rol-diseño-/-ux-/-producto`
- `rol-investigación-/-estrategia`
- `rol-agencia-/-consultor/a`
- `rol-estudiante-/-académico/a`
- `equipo-solo-yo`
- `equipo-2-10-personas`
- `equipo-11-50-personas`
- `equipo-51+-personas`

#### Tags de Onboarding (Inglés):
- `onboarding-completed`
- `goal-test-a-new-product-or-campaign-idea`
- `goal-understand-my-current-customers-better`
- `goal-explore-a-business-problem-without-a-clear-hypothesis`
- `goal-improve-how-i-prepare-interviews-or-focus-groups`
- `goal-i'm-just-exploring`
- `role-founder-/-entrepreneur`
- `role-marketing-/-growth`
- `role-design-/-ux-/-product`
- `role-researcher-/-strategist`
- `role-agency-/-consultant`
- `role-student-/-academic`
- `team-just-me`
- `team-2-10-people`
- `team-11-50-people`
- `team-51+-people`

**Cómo crear tags**:
1. Ve a **Contacts** → **Tags**
2. Haz clic en **+ Create Tag**
3. Ingresa el nombre del tag
4. Guarda

---

### 4. Crear Automatizaciones de Email

Ahora puedes crear secuencias de correo automáticas basadas en los tags.

#### Ejemplo 1: Serie de Bienvenida a Newsletter

1. Ve a **Automations** → **Workflows**
2. Crea un nuevo workflow: **"Newsletter Welcome Series"**
3. **Trigger**: Tag `newsletter` es añadido
4. **Acciones**:
   - Email 1 (inmediato): "Bienvenido a Synth - Aquí está tu primer insight"
   - Wait 2 días
   - Email 2: "Caso de éxito: Cómo [Cliente] redujo 90% sus costos"
   - Wait 3 días
   - Email 3: "Webinar: Introducción a Focus Groups Sintéticos"

#### Ejemplo 2: Onboarding Personalizado por Rol

**Para Fundadores/Emprendedores**:
1. Crea workflow: **"Onboarding - Fundadores"**
2. **Trigger**: Tag `rol-fundador/a-/-emprendedor/a` es añadido
3. **Acciones**:
   - Email 1: "Cómo validar tu idea de startup en 48 horas"
   - Email 2: "Caso de éxito: Startup que pivotó gracias a Synth"
   - Email 3: "Invitación a comunidad de fundadores"

**Para Agencias**:
1. Crea workflow: **"Onboarding - Agencias"**
2. **Trigger**: Tag `rol-agencia-/-consultor/a` es añadido
3. **Acciones**:
   - Email 1: "Cómo Synth aumenta tu ROI con clientes"
   - Email 2: "White-label: Presenta Synth como tu servicio"
   - Email 3: "Programa de partners exclusivo"

#### Ejemplo 3: Re-engagement por Objetivo

**Para usuarios explorando**:
1. Crea workflow: **"Re-engage Explorers"**
2. **Trigger**: Tag `objetivo-solo-estoy-explorando` es añadido
3. **Condición**: Si no ha completado acción en 7 días
4. **Acciones**:
   - Email: "¿Necesitas ayuda para empezar? Agenda una demo 1:1"
   - Si hace clic → Asignar a sales
   - Si no responde en 3 días → Agregar a secuencia educativa

---

## 📊 Segmentación Avanzada

Usa combinaciones de tags para crear audiencias súper específicas:

### Ejemplo: Fundadores de Equipos Pequeños que Quieren Probar Ideas
**Filtros**:
- Tag: `rol-fundador/a-/-emprendedor/a`
- Tag: `equipo-2-10-personas`
- Tag: `objetivo-probar-una-nueva-idea-de-producto-o-campaña`

**Campaña sugerida**: "Curso intensivo: De idea a validación en 1 semana"

### Ejemplo: Agencias con Equipos Grandes que Buscan Eficiencia
**Filtros**:
- Tag: `rol-agencia-/-consultor/a`
- Tag: `equipo-11-50-personas` O `equipo-51+-personas`

**Campaña sugerida**: "Enterprise plan + soporte dedicado + formación de equipo"

---

## 🧪 Pruebas y Validación

### 1. Probar la Integración de Newsletter

```bash
# Desde tu terminal o con Postman
curl -X POST https://synth.com.es/api/systeme/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@ejemplo.com",
    "firstName": "Test",
    "lastName": "Usuario",
    "tags": ["newsletter"]
  }'
```

**Resultado esperado**: 
- Código 200
- Contacto creado en systeme.io con tag `newsletter`

### 2. Probar el Onboarding

1. Ve a `/onboarding` en tu web
2. Completa el flujo (registra una cuenta si no tienes)
3. Verifica en systeme.io que el contacto tenga los tags correctos

### 3. Verificar Webhook

```bash
# Endpoint de diagnóstico
curl https://synth.com.es/api/systeme/subscribe
```

Esto te mostrará el estado de la conexión con systeme.io.

---

## 🚀 Mejores Prácticas

### 1. Limpieza de Tags
- Revisa tus tags cada mes
- Elimina contactos inactivos con tags obsoletos
- Usa convención de nombres consistente (minúsculas, guiones)

### 2. Automatizaciones Graduales
No envíes demasiados emails de golpe:
- Newsletter: máximo 1 email/semana
- Onboarding: 3-5 emails en las primeras 2 semanas
- Re-engagement: solo después de 30 días sin actividad

### 3. Personalización
Usa los datos del onboarding para personalizar:
```
Hola {{first_name}},

Como {{rol}}, sabemos que [contenido específico para ese rol]...
```

### 4. A/B Testing
Prueba diferentes secuencias para el mismo segmento:
- Workflow A: Emails educativos
- Workflow B: Emails con casos de éxito
- Mide cuál convierte mejor

---

## 🔍 Monitoreo y Análisis

### Métricas Clave en systeme.io

1. **Tasa de Apertura**:
   - Newsletter: >25% es bueno
   - Onboarding: >40% es excelente

2. **Click Rate**:
   - Newsletter: >3% es bueno
   - Onboarding: >10% es excelente

3. **Conversión**:
   - % de contactos que completan acción deseada
   - Objetivo: >5% en 30 días

### Dashboard Sugerido
Crea un dashboard con:
- Nuevos contactos/día (por fuente: newsletter vs onboarding)
- Tags más comunes (segmentos más grandes)
- Emails con mejor rendimiento
- Tasa de cancelación de suscripción

---

## 🛠️ Troubleshooting

### Problema: Los contactos no llegan a systeme.io

**Solución**:
1. Verifica que `SYSTEME_API_KEY` esté en `.env`
2. Comprueba que la API key sea válida:
   ```bash
   curl https://synth.com.es/api/systeme/subscribe
   ```
3. Revisa los logs de la consola del navegador (F12)

### Problema: Los tags no se asignan correctamente

**Solución**:
1. Verifica que los tags existan en systeme.io ANTES de enviarlos
2. Los tags deben ser lowercase y sin espacios especiales
3. Systeme.io puede tardar 1-2 minutos en sincronizar

### Problema: Los webhooks no funcionan

**Solución**:
1. Verifica que `SYSTEME_WEBHOOK_SECRET` esté en `.env`
2. Comprueba que la URL del webhook sea accesible públicamente
3. Revisa que el token en la URL coincida con el secret

---

## 📚 Recursos Adicionales

- [Documentación oficial de systeme.io API](https://api.systeme.io/documentation)
- [Webhooks de systeme.io](https://developer.systeme.io/docs/webhooks)
- [Centro de ayuda de systeme.io](https://help.systeme.io)

---

## 🎯 Próximos Pasos Recomendados

1. ✅ **Ya hecho**: Integración técnica completada
2. 📝 **Ahora**: Crear tags en systeme.io
3. 🤖 **Después**: Configurar primer workflow de bienvenida
4. 📧 **Luego**: Crear secuencias de onboarding personalizadas
5. 📊 **Finalmente**: Configurar análisis y optimización

---

**¿Necesitas ayuda?** Los endpoints están listos y funcionando. Solo necesitas configurar las automatizaciones en systeme.io según tu estrategia de marketing.
