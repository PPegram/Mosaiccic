# MOSAIC CIC website

A static website prepared for `PPegram/Mosaiccic` and `mosaiccic.com`. The HTML, CSS, JavaScript, images and fonts are included; GitHub Pages can serve them without an installation or build step.

## Start here

1. Extract `Mosaiccic-github-ready.zip` on your computer.
2. Review `docs/LAUNCH-CHECKLIST.md` before publishing.
3. Create a repository named `Mosaiccic` under the GitHub account `PPegram`.
4. Upload the extracted files and folders to the repository root. Upload the contents, not the ZIP and not an extra parent folder. `index.html` must appear at the top level.
5. Open repository Settings → Pages. Choose **Deploy from a branch**, then **main** and **/ (root)**, and save. These are GitHub’s documented branch-publishing controls. ([GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site))
6. Follow `docs/DOMAIN-SETUP.md` to configure `mosaiccic.com`.

Choose a public repository if you intend the source to be public. Confirm that your GitHub plan supports your preferred repository visibility and Pages configuration before publishing.

No repository has been created by this package, and no DNS records have been changed.

## What’s included

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `approach.html` | Purpose, focus areas, proposed process and research commitments |
| `phil-pegram.html` | Phil’s background and connection to MOSAIC |
| `contact.html` | MOSAIC and Phil’s public LinkedIn routes |
| `privacy.html` | Current website privacy information |
| `accessibility.html` | Included features and known access limitations |
| `404.html` | Missing-page page |
| `style.css`, `base.css`, `app.js` | Design, responsive behaviour and controls |
| `assets/` | Local images, logo files, fonts, licences and social preview |
| `CNAME` | Custom domain value |
| `robots.txt`, `sitemap.xml` | Search-engine discovery files |
| `scripts/build.mjs` | Editable page copy and shared HTML templates |
| `scripts/check.mjs` | Dependency-free structural checks |
| `docs/` | Launch, domain, content provenance and QA notes |

The source images from the old site have been compressed locally. The community banner is labelled as brand illustration, not presented as a photograph of a documented MOSAIC event.

## Editing

Use Node.js 18 or later if you want to regenerate the HTML. No npm installation is required.

```sh
npm run build
npm test
```

- Edit page copy and shared header/footer markup in `scripts/build.mjs`, then run `npm run build`.
- Edit design tokens and layout rules in `style.css`.
- Edit the reset and accessibility basics in `base.css`.
- Edit menu and colour controls in `app.js`.
- Replace image files in `assets/` without changing their names, or update the templates.
- The generated root HTML is ready to host. You can edit it directly, but a later build will overwrite those edits.
- Keep the `CNAME` file and the custom domain configured in GitHub Settings. A `CNAME` file alone does not configure the domain in GitHub. ([GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site))

## Optional Git upload

Create the empty repository first, without a generated README. From the extracted folder:

```sh
git init
git branch -M main
git add .
git commit -m "Launch MOSAIC CIC website"
git remote add origin https://github.com/PPegram/Mosaiccic.git
git push -u origin main
```

Git will request authentication through your configured GitHub method. Do not put a token into a source file or commit a credential.

The ZIP includes `.nojekyll` and `.gitignore`. File browsers may hide them; Git upload includes them. If using browser upload, ensure `.nojekyll` is present or create an empty file with that name in GitHub.

## Operating limits

The contact page links to LinkedIn. There is no message-submission backend, newsletter service, analytics tracker or account system, and no form that pretends to send a message. A public organisational email can be added after Phil confirms the address.

Light/dark selection applies to the current page visit and is not saved in browser storage. The next page uses the device’s colour preference.

## Rights

Recovered MOSAIC images and branding are included on the site owner’s instruction. Confirm permission and any consent requirements before public deployment. The fonts include their SIL Open Font Licence files. See `docs/CONTENT-AND-ASSETS.md`.
