# AR Alumínios

Site institucional da AR Alumínios (António da Costa Rego, Lda.), serralharia civil em Quintãs, Lordosa — Viseu, desde 1985.

Site estático (HTML, CSS e JavaScript puro), sem build, sem CMS e sem base de dados — pronto para hospedar em qualquer servidor estático (GitHub Pages, Render, Netlify, etc.).

## Estrutura

- `index.html` — Início
- `produtos.html` — Produtos (Alumínio / Inox)
- `portfolio.html` — Portfólio fotográfico de obras reais
- `servicos.html` — Serviços
- `empresa.html` — Empresa
- `orcamento.html` — Pedir orçamento (formulário)
- `contactos.html` — Contactos (formulário)
- `css/style.css`, `js/main.js` — estilo e comportamento partilhados
- `assets/` — logótipo e fotografias

## Formulários

Os formulários de "Pedir Orçamento" e "Contactos" usam o [FormSubmit](https://formsubmit.co/) para enviar por email para `geral@araluminios.com`, sem necessidade de servidor próprio. **No primeiro envio, a FormSubmit manda um email de confirmação para essa caixa de correio — é preciso clicar no link de ativação para os envios seguintes funcionarem.**

## Publicar no GitHub Pages

Em *Settings → Pages*, escolher a branch `main` e a pasta `/ (root)`.
