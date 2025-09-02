# DICUMÊ - Design Tokens

## 🎨 Paleta de Cores

### Cores Principais

```css
--color-primary: #6D4C41        /* Marrom principal */
--color-primary-light: #8D6E63  /* Marrom claro */
--color-primary-dark: #5D4037   /* Marrom escuro */
--color-on-primary: #FFFFFF     /* Texto sobre primário */
```

### Cores Secundárias

```css
--color-secondary: #2196F3      /* Azul secundário */
--color-background: #FAFAFA     /* Fundo da página */
--color-surface: #FFFFFF        /* Superfícies (cards) */
--color-outline: #E0E0E0        /* Bordas e divisores */
```

### Cores de Texto

```css
--color-text-primary: #212121   /* Texto principal */
--color-text-secondary: #757575 /* Texto secundário */
```

### Cores Semânticas

```css
--color-success: #4CAF50        /* Verde - sucesso */
--color-warning: #FF9800        /* Laranja - atenção */
--color-danger: #F44336         /* Vermelho - erro */
```

## 📏 Espaçamentos

### Gaps e Margens

```css
--gap-section: 64px             /* Espaçamento entre seções */
--radius-lg: 16px               /* Border radius grande */
--radius-xl: 24px               /* Border radius extra grande */
```

### Sombras

```css
--shadow-soft: 0 6px 16px rgba(0, 0, 0, 0.06); /* Sombra suave */
```

## 🔤 Tipografia

### Fontes

- **Headings**: Montserrat (SemiBold/Bold)
- **Body**: Inter (Regular)
- **Botões**: Montserrat (Medium)

### Tamanhos Desktop

- **H1**: 48px (Hero), 32px (Seções)
- **H2**: 32px
- **H3**: 20-24px
- **Body**: 16px
- **Botões**: 16px

### Line Heights

- **Headings**: 1.05-1.2
- **Body**: 1.5

## 📱 Breakpoints

```css
/* Mobile First */
@media (min-width: 768px) {
  /* Tablet */
}
@media (min-width: 1200px) {
  /* Desktop */
}
```

## 🎯 Componentes

### Botões

- **Primary**: `bg-primary text-white rounded-xl px-8 py-4`
- **Secondary**: `border-2 border-outline text-text-primary rounded-xl px-8 py-4`
- **Hover**: `hover:scale-1.05 transition-transform duration-200`

### Cards

- **Background**: `bg-white rounded-2xl shadow-soft`
- **Hover**: `hover:shadow-lg hover:-translate-y-1 transition-all duration-300`

### Containers

- **Max Width**: `max-w-7xl mx-auto`
- **Padding**: `px-6 lg:px-24`

## 🎬 Animações

### Durações

- **Fast**: 200ms
- **Normal**: 300ms
- **Slow**: 500ms
- **Very Slow**: 800ms

### Easing

- **Default**: `ease-out`
- **Bounce**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`

### Keyframes

```css
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 📐 Layout

### Grid System

- **Desktop**: 2 colunas onde aplicável
- **Tablet**: 1 coluna com ajustes de escala
- **Mobile**: Layout em pilha

### Espaçamentos Responsivos

- **Desktop**: 64px entre seções
- **Mobile**: 32px entre seções
- **Padding lateral**: 96px (desktop), 40-48px (tablet), 20px (mobile)

## 🎨 Estados

### Hover

- **Botões**: `scale(1.05)`
- **Cards**: `translateY(-4px) + shadow increase`
- **Links**: `color change`

### Focus

- **Outline**: `2px solid var(--color-secondary)`
- **Offset**: `2px`

### Active

- **Botões**: `scale(0.95)`

## 📱 Mobile Considerations

### Touch Targets

- **Mínimo**: 44x44px
- **Botões**: 48px de altura
- **Links**: Padding adequado para touch

### Typography Scaling

- **H1 Mobile**: 32px (reduzido de 48px)
- **Body**: Mantém 16px
- **Botões**: Mantém 16px

## 🎯 Acessibilidade

### Contraste

- **AA Standard**: 4.5:1 para texto normal
- **AAA Standard**: 7:1 para texto pequeno
- **Todos os textos**: Testados para contraste adequado

### Focus Management

- **Visible focus**: Sempre visível
- **Keyboard navigation**: Totalmente navegável
- **Screen readers**: Aria-labels em elementos interativos
