# 🌱 Soil Sustainability Website

This is a React + Vite project focused on promoting soil sustainability, composting, gardening, and regenerative farming.

---

## 🚀 Project Setup

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 🌐 GitHub Pages Deployment (Using `/docs` Folder on `main`)

We are deploying the site directly from the `main` branch using the `/docs` folder as the GitHub Pages source.

---

### ✅ Step 1: Build Your Site
Run the build command to generate the production files inside the `dist/` folder:
```bash
npm run build
```

---

### ✅ Step 2: Move the Files to `/docs`
Take everything from the `dist/` folder and move it into a `/docs` folder at the root of the project:

```bash
mkdir docs
cp -r dist/* docs/
```

If `/docs` already exists, you can replace its contents or delete and recreate it:
```bash
rm -rf docs
mkdir docs
cp -r dist/* docs/
```

---

### ✅ Step 3: Configure GitHub Pages Source
1. Go to your repository on GitHub  
2. Navigate to **Settings** → **Pages**  
3. Under **Build and deployment**, choose:
   - **Source**: `main`
   - **Folder**: `/docs`
4. Click **Save**

✅ GitHub will automatically deploy your site from the `/docs` folder on the `main` branch.

---

### ✅ Step 4: Access Your Live Site
Once deployed, your site will be available at:  
```
https://your-username.github.io/your-repo-name/
```

For example:  
```
https://encouragingprogrammer.github.io/soil-sustainability/
```

---

## ✅ Notes
- Make sure your `vite.config.js` has the correct `base` path:
  ```javascript
  export default defineConfig({
    base: '/your-repo-name/', // Replace with your repo name!
    plugins: [react()],
  });
  ```

- Every time you make changes, **rebuild** and **update `/docs`**, then **commit and push** to `main`.

---

## ✅ Example Commands (Quick Recap)
```bash
npm run build
rm -rf docs
mkdir docs
cp -r dist/* docs/
git add docs
git commit -m "Update deployed site"
git push origin main
```

---
