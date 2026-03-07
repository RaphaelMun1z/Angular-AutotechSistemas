src/app/
├── core/                 # Essencial da aplicação (Singletons, Interceptors, Guards)
│   ├── guards/           # Proteção de rotas (ex: auth.guard.ts)
│   ├── interceptors/     # Interceptadores HTTP (ex: token.interceptor.ts)
│   └── services/         # Serviços globais (ex: comunicação base com a API Spring/backend, AuthService)
│
├── shared/               # Recursos reutilizáveis em qualquer lugar (Dumb Components)
│   ├── ui/               # Componentes visuais genéricos (botões, modais, tabelas, cards)
│   ├── pipes/            # Pipes customizados (ex: formatação de moeda, datas)
│   └── directives/       # Diretivas customizadas (ex: máscaras de input)
│
├── layouts/              # Estruturas de página globais
│   ├── main-layout/      # Layout principal com Header, Sidebar e Footer
│   └── auth-layout/      # Layout simplificado para telas de Login/Cadastro
│
├── domain/               # (Ou 'models') Modelos de dados globais
│   ├── interfaces/       # Contratos TypeScript (ex: Product, User, ChatMessage)
│   └── types/            # Tipos utilitários
│
└── features/             # O coração do projeto: organizado por domínio de negócio
    ├── auth/             # Tudo relacionado a autenticação
        ├── components/
        ├── pages/        # Telas (login.component.ts)
        └── services/