# Gerador de Links do WhatsApp

Uma aplicação web simples para converter números de telefone em links diretos para o WhatsApp.

## 🚀 Funcionalidades

- Processa múltiplos números de telefone de uma vez
- Suporta diferentes formatos de entrada:
  - (11) 99999-9999
  - 11999999999
  - 999999999
  - +55 11 99999-9999
- Adiciona automaticamente código do país (55) e DDD quando necessário
- Gera links diretos para iniciar conversas no WhatsApp
- Interface limpa e responsiva
- Validação visual de números

## 🛠️ Tecnologias Utilizadas

- Next.js 13+
- React
- Tailwind CSS

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/erick-nunes/whatsapp-link-generator.git

# Entre na pasta do projeto
cd whatsapp-link-generator

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará rodando em `http://localhost:3000`

## 💡 Como Usar

1. Cole os números de telefone na área de texto (um por linha)
2. Clique em "Processar Números"
3. Clique nos links gerados para abrir o WhatsApp

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.