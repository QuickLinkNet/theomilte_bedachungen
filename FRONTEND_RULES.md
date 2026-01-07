# Frontend Development Rulebook

## Core Principles

### 1. Mobile First Development
- Entwickle zuerst für mobile Geräte
- 3 Breakpoints:
  - Mobile: Standard (< 768px)
  - Tablet: `md:` (768px - 1024px)
  - Desktop: `lg:` (≥ 1024px)

### 2. Modularity & Configurability
- Jede Komponente muss wiederverwendbar sein
- Props für alle konfigurierbaren Werte
- Keine Hard-Coded Werte in Komponenten

### 3. File Size Management
- Maximale Dateigröße: 400 Zeilen
- Bei Überschreitung: Refactoring in kleinere Module

### 4. Tech Stack
- Vite als Build Tool
- React 18+ mit TypeScript
- Tailwind CSS für Styling

## Component Architecture

### 5. Component Structure
```
src/
├── components/
│   ├── ui/           # Basis UI-Komponenten (Button, Input, Card)
│   ├── features/     # Feature-spezifische Komponenten
│   └── layout/       # Layout-Komponenten (Header, Footer, Container)
├── hooks/            # Custom React Hooks
├── types/            # TypeScript Interfaces & Types
├── utils/            # Helper Functions
└── constants/        # Konstanten & Konfiguration
```

### 6. Naming Conventions
- Komponenten: PascalCase (`UserProfile.tsx`)
- Hooks: camelCase mit "use" Prefix (`useAuth.ts`)
- Utils: camelCase (`formatDate.ts`)
- Types/Interfaces: PascalCase mit "I" Prefix für Interfaces (`IUser`)
- Constants: UPPER_SNAKE_CASE (`MAX_FILE_SIZE`)

### 7. Component Pattern
```typescript
// Props Interface
interface IComponentNameProps {
  required: string;
  optional?: number;
  children?: React.ReactNode;
}

// Component
export const ComponentName: React.FC<IComponentNameProps> = ({
  required,
  optional = defaultValue,
  children
}) => {
  return (
    // JSX
  );
};
```

## TypeScript Rules

### 8. Strict Typing
- Keine `any` Types (außer absolut notwendig)
- Explizite Return Types für Funktionen
- Props immer mit Interface definieren
- Enums für feste Wertesammlungen

### 9. Type Organization
- Gemeinsame Types in `src/types/`
- Component-spezifische Types in derselben Datei
- Export von wiederverwendbaren Types

## Styling Guidelines

### 10. Tailwind CSS Best Practices
- Nutze Tailwind Utility Classes
- Für komplexe/wiederholte Styles: Custom Classes in `index.css`
- Responsive Design mit Breakpoint-Prefixen (`md:`, `lg:`)
- Dark Mode Support mit `dark:` Prefix (wenn benötigt)

### 11. Design System
- Definiere Farben in `tailwind.config.js`
- Konsistente Spacing-Scale (4px, 8px, 16px, 24px, 32px, etc.)
- Wiederverwendbare Komponenten für UI-Elemente

## State Management

### 12. State Rules
- Lokaler State mit `useState` für Component-State
- `useContext` für App-weiten State
- Props Drilling vermeiden (max. 2 Ebenen)
- Supabase für persistenten State/Daten

### 13. Side Effects
- `useEffect` nur wenn notwendig
- Cleanup Functions immer implementieren
- Dependencies Array korrekt definieren

## Performance

### 14. Optimization
- `React.memo` für teure Komponenten
- `useMemo` für teure Berechnungen
- `useCallback` für Callbacks an optimierte Child-Komponenten
- Lazy Loading für große Komponenten
- Image Optimization (WebP, lazy loading)

### 15. Code Splitting
- Route-based Code Splitting
- Dynamic Imports für große Libraries

## Accessibility

### 16. A11y Requirements
- Semantisches HTML (section, article, nav, etc.)
- ARIA Labels wo notwendig
- Keyboard Navigation Support
- Ausreichender Farbkontrast (WCAG AA)
- Alt-Texte für alle Bilder

## Code Quality

### 17. Code Cleanliness
- Keine auskommentierter Code
- Keine `console.log` in Production
- Beschreibende Variablen- und Funktionsnamen
- Maximal 3 verschachtelte Ebenen

### 18. DRY Principle
- Wiederholten Code in Funktionen/Komponenten auslagern
- Custom Hooks für wiederholte Logic
- Utility Functions für gemeinsame Operationen

## Error Handling

### 19. Error Management
- Try-Catch für asynchrone Operationen
- Error Boundaries für React Components
- User-friendly Error Messages
- Loading States für asynchrone Operationen

## Documentation

### 20. Code Documentation
- JSDoc für komplexe Funktionen
- README für größere Features
- Inline Comments nur für komplexe Logic
- Props Documentation in Interface

## Git & Collaboration

### 21. File Organization
- Ein Export pro Datei für Komponenten
- Index Files für saubere Imports
- Absolute Imports vermeiden (relative verwenden)

### 22. Reusability First
- Komponenten müssen in verschiedenen Kontexten funktionieren
- Props statt Hard-Coded Values
- Composition über Inheritance

---

## Quick Checklist vor jedem Commit

- [ ] Mobile First umgesetzt?
- [ ] Alle Dateien unter 400 Zeilen?
- [ ] TypeScript Errors behoben?
- [ ] Komponente ist modular und konfigurierbar?
- [ ] Responsive auf allen 3 Breakpoints?
- [ ] Keine Hard-Coded Values?
- [ ] Accessibility beachtet?
- [ ] Performance optimiert?
- [ ] Naming Conventions eingehalten?
- [ ] Code ist sauber und dokumentiert?
