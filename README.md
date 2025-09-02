# DICUMÊ - Landing Page

Landing page moderna e responsiva para o aplicativo DICUMÊ, desenvolvida com Next.js, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações e micro-interações
- **Lucide React** - Ícones modernos

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## 🛠️ Instalação e Desenvolvimento

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd dicume-landing
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Execute o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

4. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Build para Produção

### Build Local

```bash
npm run build
npm start
```

### Build para Vercel (Recomendado)

1. **Conecte seu repositório ao Vercel**

   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Importe o repositório do DICUMÊ

2. **Configurações do Vercel**

   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Variáveis de Ambiente (se necessário)**

   - Adicione no painel do Vercel se houver variáveis específicas

4. **Deploy**
   - Clique em "Deploy"
   - O Vercel fará o build e deploy automaticamente

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:

- **Desktop**: ≥1200px (layout de 2 colunas)
- **Tablet**: 768px - 1199px (ajustes de escala)
- **Mobile**: <768px (layout em pilha)

## 🎨 Design System

### Cores (Tokens CSS)

```css
--color-primary: #6D4C41
--color-primary-light: #8D6E63
--color-primary-dark: #5D4037
--color-secondary: #2196F3
--color-background: #FAFAFA
--color-surface: #FFFFFF
--color-text-primary: #212121
--color-text-secondary: #757575
--color-success: #4CAF50
--color-warning: #FF9800
--color-danger: #F44336
```

### Tipografia

- **Headings**: Montserrat (SemiBold/Bold)
- **Body**: Inter (Regular)
- **Botões**: Montserrat (Medium)

## 📂 Estrutura do Projeto

```
dicume-landing/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── Header.tsx          # Cabeçalho fixo
│   ├── Hero.tsx            # Seção hero
│   ├── Features.tsx        # Recursos do app
│   ├── HowItWorks.tsx      # Como funciona
│   ├── Testimonials.tsx    # Avaliações
│   ├── FinalCTA.tsx        # CTA final
│   └── Footer.tsx          # Rodapé
├── public/                 # Assets estáticos
├── tailwind.config.js      # Configuração Tailwind
├── next.config.js          # Configuração Next.js
└── package.json
```

## 🎯 Funcionalidades

### Animações e Micro-interações

- **Hero**: Parallax suave e tilt no hover
- **Feature Cards**: Hover com translateY e shadow
- **Steps**: Reveal escalonado ao scroll
- **Testimonials**: Carousel automático com controles
- **Decorative Elements**: Float animations com delays

### Acessibilidade

- Contraste AA para todos os textos
- Alt text em imagens
- Aria-labels em botões
- Foco visível em elementos interativos
- Navegação por teclado

### Performance

- Imagens otimizadas (WebP/AVIF)
- Lazy loading de componentes
- Animações otimizadas com Framer Motion
- Bundle splitting automático do Next.js

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Linting do código
```

## 📊 Lighthouse Score

A landing page está otimizada para atingir:

- **Performance**: ≥90
- **Accessibility**: ≥95
- **Best Practices**: ≥95
- **SEO**: ≥95

## 🚀 Deploy no Vercel

### Método 1: Deploy Automático

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Método 2: Deploy Manual

```bash
# Instale o Vercel CLI
npm i -g vercel

# Login no Vercel
vercel login

# Deploy
vercel --prod
```

## 📝 Assets Pendentes

Para completar a implementação, você precisará substituir os placeholders por:

- **Logo**: SVG do DICUMÊ (horizontal e ícone)
- **Favicon**: Ícone 32x32px
- **Mockups**: Imagens do app em mão (PNG transparente)
- **Screenshots**: Telas do app (WebP/PNG @2x e @3x)
- **Ícones**: SVG do semáforo nutricional
- **Imagens de Features**: Fotos relacionadas aos recursos

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos canais oficiais do DICUMÊ.

---

**DICUMÊ** - Monte pratos mais saudáveis em segundos 🍽️
