# Design Atomic - Guia de Implementação

## Introdução

O Design Atomic é uma metodologia criada por Brad Frost que organiza componentes de interface em uma hierarquia inspirada na química. Esta abordagem nos permite criar sistemas de design consistentes e escaláveis.

## Estrutura da Metodologia

### 1. Atoms (Átomos)
**Localização**: `src/components/atoms/`

Os átomos são os componentes mais básicos e indivisíveis da interface. Eles não podem ser quebrados em partes menores sem perder sua funcionalidade.

**Exemplos no projeto**:
- [`Button`](src/components/atoms/Button) - Botão básico reutilizável
- [`Text`](src/components/atoms/Text) - Componente de texto com variações

**Características**:
- Componentes simples e reutilizáveis
- Não dependem de outros componentes
- Focam em uma única responsabilidade
- Altamente configuráveis via props

**Exemplo de implementação**:
```tsx
// src/components/atoms/Input/index.tsx
interface IInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: FC<IInputProps> = ({ type = "text", ...props }) => {
  return <input type={type} {...props} className={`input ${props.className}`} />;
};
```

### 2. Molecules (Moléculas)
**Localização**: `src/components/molecules/`

As moléculas são grupos de átomos unidos para formar componentes relativamente simples e reutilizáveis.

**Exemplos no projeto**:
- [`Button42Login`](src/components/molecules/Button42Login) - Combina Button, Text e Image

**Características**:
- Combinam 2 ou mais átomos
- Têm uma função específica
- Ainda são relativamente simples
- Reutilizáveis em diferentes contextos

**Exemplo de implementação**:
```tsx
// src/components/molecules/SearchField/index.tsx
const SearchField: FC = () => {
  return (
    <div className="search-field">
      <Input placeholder="Pesquisar..." />
      <Button>
        <Icon name="search" />
      </Button>
    </div>
  );
};
```

### 3. Organisms (Organismos)
**Localização**: `src/components/organism/`

Os organismos são grupos de moléculas unidas para formar seções relativamente complexas de uma interface.

**Exemplos no projeto**:
- [`Header`](src/components/organism/Header) - Barra de navegação completa

**Características**:
- Componentes complexos e específicos
- Combinam moléculas e/ou átomos
- Representam seções distintas da interface
- Podem ter estado próprio

**Exemplo de implementação**:
```tsx
// src/components/organism/UserProfile/index.tsx
const UserProfile: FC = () => {
  return (
    <div className="user-profile">
      <Avatar />
      <UserInfo />
      <ActionButtons />
    </div>
  );
};
```

### 4. Templates
**Localização**: `src/components/templates/`

Os templates são estruturas de página que organizam organismos em um layout.

**Exemplos no projeto**:
- [`LoginTemplate`](src/components/templates/LoginTemplate) - Layout da página de login
- [`WalletTemplate`](src/components/templates/WalletTemplate) - Layout da página de carteira

**Características**:
- Definem a estrutura da página
- Focam no layout, não no conteúdo
- Reutilizáveis para diferentes páginas
- Podem receber dados via props

## Boas Práticas de Implementação

### 1. Estrutura de Arquivos
```
src/components/
├── atoms/
│   ├── Button/
│   │   ├── index.tsx
│   │   ├── interface.ts
│   │   └── styles.css (opcional)
│   └── Text/
├── molecules/
├── organism/
└── templates/
```

### 2. Interfaces TypeScript
Sempre crie interfaces para as props dos componentes:

```tsx
// src/components/atoms/Button/interface.ts
export interface IButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}
```

### 3. Nomenclatura
- **Atoms**: Nomes simples (`Button`, `Input`, `Text`)
- **Molecules**: Nomes descritivos (`SearchField`, `UserCard`)
- **Organisms**: Nomes de seções (`Header`, `Sidebar`, `Footer`)
- **Templates**: Sufixo "Template" (`LoginTemplate`, `DashboardTemplate`)

### 4. Props e Composição
- Átomos devem ser altamente configuráveis
- Moléculas devem aceitar props para customização
- Organismos podem ter estado interno
- Templates devem receber dados via props

### 5. Responsabilidades
- **Atoms**: Aparência e comportamento básico
- **Molecules**: Funcionalidade específica
- **Organisms**: Lógica de negócio e estado
- **Templates**: Layout e estrutura

## Exemplo Prático: Implementando um Novo Componente

### 1. Criar o Átomo (Input)
```tsx
// src/components/atoms/Input/interface.ts
export interface IInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

// src/components/atoms/Input/index.tsx
const Input: FC<IInputProps> = ({ error, className, ...props }) => {
  return (
    <div className="input-wrapper">
      <input
        className={`input ${error ? 'input-error' : ''} ${className}`}
        {...props}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};
```

### 2. Criar a Molécula (FormField)
```tsx
// src/components/molecules/FormField/index.tsx
const FormField: FC = ({ label, error, children }) => {
  return (
    <div className="form-field">
      <Label>{label}</Label>
      {children}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};
```

### 3. Usar no Organismo
```tsx
// src/components/organism/ContactForm/index.tsx
const ContactForm: FC = () => {
  return (
    <form>
      <FormField label="Nome" error={nameError}>
        <Input value={name} onChange={setName} />
      </FormField>
      <FormField label="Email" error={emailError}>
        <Input type="email" value={email} onChange={setEmail} />
      </FormField>
      <Button type="submit">Enviar</Button>
    </form>
  );
};
```

## Benefícios do Design Atomic

1. **Consistência**: Componentes reutilizáveis garantem uma interface consistente
2. **Manutenibilidade**: Mudanças em átomos se propagam automaticamente
3. **Testabilidade**: Componentes pequenos são mais fáceis de testar
4. **Escalabilidade**: Sistema organizado cresce de forma sustentável
5. **Colaboração**: Estrutura clara facilita o trabalho em equipe

## Integração com o Projeto Atual

Baseado na estrutura existente em [`src/components`](src/components), você já está seguindo a metodologia. Para expandir:

1. **Crie mais átomos**: Input, Label, Icon, Avatar
2. **Desenvolva moléculas**: SearchField, UserCard, MenuItem
3. **Expanda organismos**: Sidebar, Footer, Navigation
4. **Adicione templates**: DashboardTemplate, ProfileTemplate

## Ferramentas Recomendadas

- **Storybook**: Para documentar e testar componentes isoladamente
- **Jest + Testing Library**: Para testes unitários

## Recursos Adicionais

- [Atomic Design por Brad Frost](https://atomicdesign.bradfrost.com/)
- [Design Systems with React](https://designsystemsbook.com/)