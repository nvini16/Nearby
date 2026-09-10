# Nearby

Rede social baseada em localização, voltada para descoberta de lugares, experiências e comunidades próximas.

O projeto está sendo desenvolvido como uma aplicação mobile com arquitetura de monorepo, preparada para evolução gradual do frontend, componentes compartilhados e backend.

## Stack

- TypeScript
- React Native
- Expo
- Expo Router
- pnpm
- Turborepo

## Arquitetura

```text
Nearby/
├── apps/
│   └── mobile/
│       ├── src/
│       │   ├── app/
│       │   ├── components/
│       │   ├── constants/
│       │   └── global.css
│       ├── assets/
│       ├── app.json
│       └── package.json
│
├── packages/
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── turbo.json
```

A aplicação principal está em `apps/mobile`.

A navegação utiliza Expo Router. As rotas ficam em `apps/mobile/src/app`, enquanto componentes específicos da interface ficam separados em `apps/mobile/src/components`.

O sistema visual está centralizado em `src/constants/theme.ts`, permitindo manter cores, tipografia, espaçamento e demais tokens de interface consistentes.

## Aplicação Mobile

A aplicação utiliza Expo SDK 57, React Native 0.86 e React 19.

Rotas atualmente implementadas:

```text
/
└── Home

/explore
└── Explorar
```

A Home já possui componentes próprios para elementos da interface, incluindo o cabeçalho e itens de experiência.

A configuração do aplicativo está em `apps/mobile/app.json`.

## Monorepo

O projeto utiliza pnpm workspaces e Turborepo.

Os workspaces são definidos em:

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

O Turborepo coordena tarefas compartilhadas de desenvolvimento, build, lint e verificação de tipos.

Comandos principais:

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
```

Para trabalhar especificamente com o aplicativo mobile:

```bash
cd apps/mobile
pnpm start
```

Ou:

```bash
pnpm android
pnpm ios
pnpm web
```

## Estrutura de componentes

Os componentes são organizados por domínio de interface.

```text
src/components/
├── home/
│   ├── ExperienceItem.tsx
│   └── homeHeader.tsx
└── ui/
```

Essa organização permite que componentes específicos de uma tela ou domínio permaneçam separados de componentes de uso geral.

## Design System

O design system inicial está centralizado em:

```text
apps/mobile/src/constants/theme.ts
```

A aplicação utiliza uma identidade visual baseada em tons claros de azul, com tokens centralizados para evitar valores de estilo espalhados pelo código.

Exemplo:

```ts
import { Colors, Spacing, Typography } from '@/constants/theme';
```

A intenção é que novas telas e componentes utilizem esses tokens em vez de definir valores visuais arbitrariamente.

## Estado atual

O projeto encontra-se em fase inicial de desenvolvimento.

Atualmente, o foco está na construção da interface mobile, definição da arquitetura de componentes e consolidação do design system.

Funcionalidades de produto como autenticação, persistência de dados, feed social, localização, comunidades e interação entre usuários ainda fazem parte da evolução planejada do projeto.

## Desenvolvimento

Requisitos:

- Node.js
- pnpm 10+
- Expo
- ambiente React Native compatível com Expo

Instalação:

```bash
git clone https://github.com/nvini16/Nearby.git
cd Nearby
pnpm install
```

Executar em desenvolvimento:

```bash
pnpm dev
```

Para executar diretamente o aplicativo mobile:

```bash
cd apps/mobile
pnpm start
```

## Princípios do projeto

O desenvolvimento do Nearby segue alguns princípios:

- arquitetura modular;
- componentes reutilizáveis;
- separação entre domínio e apresentação;
- centralização do design system;
- TypeScript como linguagem principal;
- evolução incremental da arquitetura;
- preparação para compartilhamento de código dentro do monorepo.

## Status

Em desenvolvimento.

O projeto ainda não representa uma versão final ou um produto pronto para produção.
