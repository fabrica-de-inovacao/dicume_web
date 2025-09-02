# Placeholders do DICUMÊ - Guia de Substituição (Atualizado)

Este documento lista todos os placeholders identificáveis no código que devem ser substituídos pelas imagens reais.

## 📱 Hero Section

### Phone Mockup Principal

- **Localização**: `components/Hero.tsx` - Phone mockup central
- **Dimensões**: 256x480px (w-64 h-[480px])
- **Placeholder**: Mockup do app com interface de busca e categorias
- **Substituir por**: Mockup real do app DICUMÊ em mão
- **Código**: Linha ~120-180 em Hero.tsx

### Hand Holding Phone

- **Localização**: `components/Hero.tsx` - Elemento decorativo
- **Dimensões**: 80x80px (w-20 h-20)
- **Placeholder**: Círculo cinza opaco
- **Substituir por**: Mão segurando o celular (PNG com fundo transparente)
- **Código**: Linha ~185 em Hero.tsx

## 🎯 Features Section

### Feature Card 1 - Alimentos Regionais

- **Localização**: `components/Features.tsx` - Primeiro card
- **Dimensões**: 320x440px (w-32 h-44)
- **Placeholder**: `PLACEHOLDER_FEATURE_1: App mockup com alimentos (320x440px)`
- **Substituir por**: Screenshot do app mostrando alimentos regionais
- **Código**: Linha ~95-105 em Features.tsx

### Feature Card 2 - Nutrição Personalizada

- **Localização**: `components/Features.tsx` - Segundo card
- **Dimensões**: 320x440px (w-32 h-44)
- **Placeholder**: `PLACEHOLDER_FEATURE_2: Pessoa usando o app (320x440px)`
- **Substituir por**: Screenshot do app mostrando recomendações personalizadas
- **Código**: Linha ~107-117 em Features.tsx

### Feature Card 3 - Salvamento Rápido

- **Localização**: `components/Features.tsx` - Terceiro card
- **Dimensões**: 320x440px (w-32 h-44)
- **Placeholder**: `PLACEHOLDER_FEATURE_3: Salvamento rápido (320x440px)`
- **Substituir por**: Screenshot do app mostrando funcionalidade de salvamento
- **Código**: Linha ~119-129 em Features.tsx

## 🔄 How It Works Section

### Phone Mockup - Meu Prato

- **Localização**: `components/HowItWorks.tsx` - Mockup do lado direito
- **Dimensões**: 256x480px (w-64 h-[480px])
- **Placeholder**: Mockup do app mostrando tela "Meu Prato"
- **Substituir por**: Screenshot real da tela de montagem de pratos
- **Código**: Linha ~100-180 em HowItWorks.tsx

## 💬 Testimonials Section

### Avatar Placeholders

- **Localização**: `components/Testimonials.tsx` - Avatares dos usuários
- **Dimensões**: 48x48px (w-12 h-12)
- **Placeholders**: Emojis (👩‍🦰, 👨‍🦲, 👩‍⚕️, 👨‍💼, 👩‍🦱)
- **Substituir por**: Fotos reais dos usuários (formato circular)
- **Código**: Linha ~130 em Testimonials.tsx

## 📱 Final CTA Section

### Phone Mockup - Prato Salvo

- **Localização**: `components/FinalCTA.tsx` - Mockup do lado direito
- **Dimensões**: 256x480px (w-64 h-[480px])
- **Placeholder**: Mockup do app mostrando tela "Prato Salvo!"
- **Substituir por**: Screenshot real da tela de confirmação
- **Código**: Linha ~100-180 em FinalCTA.tsx

### Hand Holding Phone (Final CTA)

- **Localização**: `components/FinalCTA.tsx` - Elemento decorativo
- **Dimensões**: 80x80px (w-20 h-20)
- **Placeholder**: Círculo cinza opaco
- **Substituir por**: Mão segurando o celular (PNG com fundo transparente)
- **Código**: Linha ~185 em FinalCTA.tsx

## 🎨 Elementos Decorativos

### Background Circles (Hero)

- **Localização**: `components/Hero.tsx` - Elementos flutuantes
- **Dimensões**: Várias (12x12px, 10x10px, 8x8px, etc.)
- **Placeholders**: Círculos com emojis
- **Substituir por**: Elementos visuais decorativos ou remover
- **Código**: Linha ~15-50 em Hero.tsx

### Connecting Lines (Hero)

- **Localização**: `components/Hero.tsx` - Linhas SVG
- **Placeholder**: Linhas pontilhadas conectando elementos
- **Substituir por**: Elementos visuais decorativos ou remover
- **Código**: Linha ~55-75 em Hero.tsx

## 🎯 Ícones e Elementos UI

### Ícones Lucide React

- **Localização**: Todos os componentes
- **Status**: ✅ Já implementados
- **Manter**: Não precisa substituir

### Semáforo Nutricional

- **Localização**: Vários componentes (mockups)
- **Dimensões**: 3x3px, 4x4px, 6x6px (círculos coloridos)
- **Placeholder**: Círculos coloridos (success, warning, danger)
- **Substituir por**: Ícones reais do semáforo nutricional
- **Código**: Várias linhas nos mockups

## 📋 Checklist de Substituição

### Prioridade Alta

- [ ] Mockup principal do Hero (256x480px)
- [ ] Screenshots dos Features (320x440px cada)
- [ ] Mockup do How It Works (256x480px)
- [ ] Mockup do Final CTA (256x480px)

### Prioridade Média

- [ ] Mãos segurando celular (80x80px)
- [ ] Avatares dos usuários (48x48px)
- [ ] Ícones do semáforo nutricional

### Prioridade Baixa

- [ ] Elementos decorativos do Hero
- [ ] Linhas conectivas
- [ ] Círculos de fundo

## 🎨 Formatos Recomendados

### Imagens

- **Formato**: WebP (preferencial) ou PNG
- **Resolução**: @2x e @3x para dispositivos de alta densidade
- **Otimização**: Comprimir para web

### Ícones

- **Formato**: SVG (preferencial) ou PNG
- **Tamanho**: Múltiplos tamanhos (16px, 24px, 32px)

### Mockups

- **Formato**: PNG com fundo transparente
- **Resolução**: Alta qualidade para dispositivos retina

## 🔧 Como Substituir

1. **Localize o placeholder** no código usando Ctrl+F
2. **Substitua o elemento** pela imagem real
3. **Ajuste as dimensões** se necessário
4. **Teste a responsividade** em diferentes telas
5. **Otimize a performance** comprimindo as imagens

## 📝 Notas Importantes

- Mantenha as proporções originais dos placeholders
- Use imagens otimizadas para web
- Teste em diferentes dispositivos
- Mantenha a acessibilidade (alt text)
- Considere lazy loading para imagens grandes

## 🚀 Mudanças Recentes

### Removido:

- ✅ Referências às lojas (App Store/Google Play)
- ✅ Botões de download das lojas
- ✅ Badges das lojas

### Ajustado:

- ✅ Textos para "versão beta"
- ✅ CTAs para "Experimentar DICUMÊ"
- ✅ Placeholders visíveis com dimensões
- ✅ Design otimizado sem dependências das lojas
