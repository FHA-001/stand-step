# STAND & STEP

The public frontend for STAND & STEP — Strategic Agenda for Northern Development: Science, Technology & Engineering Perspective.

## Local development

From the workspace root:

```bash
pnpm install
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/stand-step run dev
```

Open `http://localhost:5173`.

## Production build

```bash
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/stand-step run build
```

The static output is written to `dist/public`.

## Notes

- Content is stored in `src/data/site.ts` as typed local data and is intentionally ready for a future content service.
- Forms are frontend-only demonstrations. They do not send or store submissions.
- No database, authentication, Supabase connection, or Replit-specific application dependency is required by this frontend.