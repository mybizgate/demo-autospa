# BizGate Auto Spa

MyBizGate website for **BizGate Auto Spa** (slug `autospa`).

- Source stays readable in Git; production artifacts are built into `dist/` by the shared MyBizGate platform.
- `main` is development, `deploy` is production. Pushing to `deploy` builds and deploys automatically.
- Hosting target: `public_html/demo/autospa/` → https://demo-autospa.mybizgate.com
- Configuration: `site.config.yml`.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000/
```

## Production build (local check)

```bash
../../platform/bin/mybizgate build .
```

## Release

```bash
git checkout main && git push origin main
git checkout deploy && git merge --ff-only main && git push origin deploy
```

Rollback: `../../platform/bin/rollback.sh demo-autospa`.
