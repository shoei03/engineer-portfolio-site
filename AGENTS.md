# AI Agents Guide

This file provides context for AI agents working on this project.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Runtime**: Bun
- **Package Manager**: Bun

## Project Structure

```
/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── .github/            # GitHub configs
│   ├── workflow.yml    # CI/CD pipeline
│   └── ISSUE_TEMPLATE/ # Issue templates
└── .vscode/            # Editor settings
```

## Development Workflow

1. Make changes to code
2. Run type checking: `bun run type-check`
3. Run linter: `bun run lint`
4. Format code: `bun run format`
5. Build: `bun run build`

## Code Style Preferences

- **Indentation**: 2 spaces
- **Semicolons**: Yes
- **Quotes**: Double quotes
- **Trailing commas**: ES5
- **Arrow functions**: Always use parentheses

## Common Tasks

### Adding a New Page

1. Create file in `app/` directory
2. Export default component
3. Add metadata if needed

### Adding a New Component

1. Create component file
2. Use TypeScript interfaces for props
3. Include proper TypeScript types
4. Add Tailwind classes for styling

### Styling Guidelines

- Use Tailwind utility classes
- Support dark mode with `dark:` variants
- Ensure mobile-first responsive design
- Use semantic color names (not raw colors)

## CI/CD Pipeline

The GitHub Actions workflow runs on push/PR to main:

1. Type checking
2. Linting
3. Building

All checks must pass before merging.

## Important Notes

- This is a portfolio website project
- Focus on clean, modern UI/UX
- Ensure accessibility standards
- Mobile responsiveness is critical
- Performance optimization matters
