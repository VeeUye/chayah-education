# Gemini Agent Core Instructions

## 🚨 Core Philosophy: Test-Driven Development (TDD)

- **NON-NEGOTIABLE:** Every single piece of production code MUST be written in response to a failing test.
- **WORKFLOW:** Always follow the Red-Green-Refactor cycle.
    1. **Red:** Write a simple, failing test that clearly describes a single piece of business behavior.
    2. **Green:** Write the absolute minimum amount of code required to make the test pass.
    3. **Refactor:** Improve the code's structure and clarity while ensuring all tests remain green.

## 🧪 Testing Principles: Behavior-Driven

- **FOCUS:** Do not write "unit tests." Write behavior tests that verify business requirements from the user's
  perspective.
- **API-FIRST:** Test ONLY through the public API of a module or component. Never test internal implementation details,
  private methods, or component state.
- **COVERAGE:** Aim for 100% behavioral coverage. Every business rule and user interaction should be verified by a test.
- **TOOLS:** Use Vitest and React Testing Library. For API interactions, use MSW.
- **TEST DATA:** Use the factory functions from our test data files. Always derive test data from these factories,
  providing overrides only when necessary.

## 📐 TypeScript and Schema-First Design

- **ZOD FIRST:** If appropriate, define a `Zod` schema as the single source of truth for any data structure. Derive
  TypeScript
  types from these schemas using `z.infer`.
- **STRICT MODE:** All code, including test files, must adhere to our strict TypeScript configuration.
- **NO SHORTCUTS:** Do not use `any`, type assertions (`as Type`), or `@ts-ignore`. Use `unknown` for data from external
  sources and parse it with a Zod schema at the boundary.
- **REAL SCHEMAS IN TESTS:** Tests MUST import and use the actual project schemas and derived types. Do not redefine
  types or shapes within test files.

## 🎨 Component and Styling Rules

- **ACCESSIBILITY FIRST:** All generated markup must be semantic and accessible (WAI-ARIA).
- **CSS MODULES:** All styles must be written in SCSS using CSS Modules to ensure local scope.
- **ATOMIC DESIGN:** Structure components and styles according to Atomic Design principles.
- **STORYBOOK:** When generating Storybook files, use the following syntax:
  ```typescript
  import Component from './index';
  import { stubbedProps } from './test-data';
  import type { StoryObj, Meta } from '@storybook/react';
  
  const meta: Meta<typeof Component> = {
    title: 'ui/Component',
    component: Component,
    args: { ...stubbedProps },
  };
  export default meta;
  
  type Story = StoryObj<typeof Component>;
  
  export const Default: Story = {};
  ```

## ✒️ Code Style and Design Principles

**IMMUTABILITY:** All data structures are immutable. Never mutate objects or arrays directly. Always return new, updated
copies.

**SMALL FUNCTIONS:** Keep functions small and focused

**NO NESTING:** Avoid else keywords and nested blocks. Use guard clauses and return early.

**CLEAR NAMES:** Use descriptive, unabbreviated names for variables and functions.

**OPTIONS OBJECTS:** Functions should accept a single options object for arguments instead of multiple positional
parameters.

**NO JS SEMICOLONS:** Do not use terminating semicolons in .ts or .tsx files.