# 🎮 Minecraft Bedrock Server List - Futuristic Design

Website list server Minecraft Bedrock dengan tampilan futuristik yang keren! Menampilkan server-server terbaik dengan design glassmorphism, animasi particles, dan efek visual yang memukau.

## ✨ Fitur

- 🌌 **Design Futuristik** - Glassmorphism effect dengan gradient dan animasi
- 🔍 **Search Function** - Cari server favorite dengan mudah
- 📱 **Responsive Design** - Tampil sempurna di semua device
- 📋 **Copy IP & Port** - Klik sekali untuk copy server address
- ⚡ **Animated Particles** - Background particles yang smooth
- 🎨 **Gradient Effects** - Warna-warna neon yang eye-catching
- 🌟 **Interactive Cards** - Hover effects dan animasi smooth

## 🚀 Cara Deploy ke Vercel

### Metode 1: Deploy via Vercel Dashboard (Termudah)

1. **Persiapan File**
   - Download semua file dari repository ini
   - Pastikan ada file: `index.html`, `vercel.json`, `package.json`

2. **Upload ke GitHub**
   ```bash
   # Buat repository baru di GitHub
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repo-name.git
   git push -u origin main
   ```

3. **Deploy di Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan GitHub
   - Klik "Add New Project"
   - Import repository GitHub kamu
   - Klik "Deploy"
   - Selesai! Website kamu akan live dalam beberapa detik

### Metode 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel**
   ```bash
   vercel login
   ```

3. **Deploy Project**
   ```bash
   cd minecraft-servers
   vercel --prod
   ```

### Metode 3: Deploy Manual (Drag & Drop)

1. Buka [vercel.com](https://vercel.com)
2. Klik "Add New Project"
3. Pilih "Browse" atau drag & drop folder project
4. Klik "Deploy"
5. Done! 🎉

## 📁 Struktur File

```
minecraft-servers/
│
├── index.html      # File utama website
├── vercel.json     # Konfigurasi Vercel
├── package.json    # Package info
└── README.md       # Dokumentasi
```

## 🎨 Kustomisasi

### Menambah Server Baru

Edit file `index.html`, cari bagian `const servers = [...]` dan tambahkan server baru:

```javascript
{
    name: "Server Name",
    icon: "🎮",
    ip: "server.address.com",
    port: "19132",
    players: "1000+",
    type: "Survival",
    region: "Asia",
    version: "1.20+",
    description: "Deskripsi server kamu...",
    tags: ["Tag1", "Tag2", "Tag3"]
}
```

### Mengubah Warna

Cari bagian CSS di file `index.html` dan edit gradient colors:

```css
/* Main gradient background */
background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2a1a3a 100%);

/* Accent colors */
#00f5ff /* Cyan */
#00ff88 /* Green */
#ff00ff /* Magenta */
```

### Mengubah Stats

Edit bagian stats bar di HTML:

```html
<div class="stat-card">
    <div class="stat-number">50+</div>
    <div class="stat-label">Total Servers</div>
</div>
```

## 🛠️ Teknologi

- **HTML5** - Struktur website
- **CSS3** - Styling & animations
- **JavaScript** - Interactivity & search
- **Vercel** - Hosting & deployment

## 📱 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Browsers

## 🎯 Performance

- ⚡ Fast loading time
- 🎨 Smooth animations (60fps)
- 📦 Small file size (< 50KB)
- 🚀 Optimized untuk Vercel CDN

## 📝 License

MIT License - Feel free to use and modify!

## 🤝 Contributing

Ingin menambahkan server atau improve design?
1. Fork repository
2. Buat branch baru
3. Commit changes
4. Push & create pull request

## 💬 Support

Jika ada pertanyaan atau issue:
- Open GitHub Issue
- Contact via email

## 🌟 Credits

Made with ⚡ by MS Hadianto & Syaakila
Powered by Vercel

---

**Happy Gaming! 🎮⛏️**
