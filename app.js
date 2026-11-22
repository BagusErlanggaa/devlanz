(() => {
'use strict';
const nul = () => ({ style: {}, classList: { add() {}, remove() {}, toggle() {}, contains: () => false }, setAttribute() {}, addEventListener() {} });
const $ = s => document.querySelector(s) || nul(), WA = '628567325691';
const PG = document.body.dataset.page || 'home';
const cur = location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let lang = 'id', first = true, yearly = 0;
try { lang = localStorage.getItem('lz-lang') || ((navigator.language || 'id').toLowerCase().startsWith('id') ? 'id' : 'en'); } catch (e) {}
const t = p => Array.isArray(p) ? p[lang === 'id' ? 0 : 1] : p;
const wa = m => `https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
const rp = n => 'Rp ' + n.toLocaleString('id-ID');
const dly = i => `style="--d:${Math.min(i * .08, .4).toFixed(2)}s"`;

/* ---------- STATIC TEXT [id, en] ---------- */
const D = {
consult:['Konsultasi →','Consult →'],
eyebrow:['Studio Desain & Pengembangan Digital — Independen','Independent Design & Digital Development Studio'],
h1:['Website yang dibangun dengan presisi<span class="text-blue">.</span>','Websites built with precision<span class="text-blue">.</span>'],
heroP:['Kami merancang dan membangun website, toko online, dan aplikasi web yang cepat, aman, dan mudah dikelola. Desain bersih, kode rapi, hasil yang terukur untuk pertumbuhan bisnis Anda.','We design and build fast, secure, easy-to-manage websites, online stores, and web apps. Clean design, tidy code, and measurable results for your business growth.'],
cta1:['Mulai Proyek →','Start a Project →'], cta2:['Lihat Layanan','View Services'],
mkLink:['Lihat Showcase','View Showcase'], mkTag:['Studio Desain & Kode — 2026','Design & Code Studio — 2026'],
mkP:['Tipografi presisi, arsitektur informasi bersih, dan optimasi performa tanpa kompromi untuk brand modern.','Precise typography, clean information architecture, and uncompromising performance for modern brands.'],
mkMob:['Sempurna di Semua Layar','Perfect on Every Screen'],
trust:['Dipercaya oleh puluhan bisnis & kreator','Trusted by dozens of businesses & creators'],
s1e:['01 — Layanan','01 — Services'], s1h:['Apa yang kami kerjakan','What we do'],
s1p:['Dari identitas visual sampai kode produksi, satu studio menangani seluruh alur kerja agar hasil akhir konsisten dan tanpa kompromi.','From visual identity to production code, one studio handles the entire workflow so the final result stays consistent and uncompromising.'],
s2e:['02 — Proses','02 — Process'], s2h:['Dari ide ke peluncuran','From idea to launch'],
s3e:['03 — Portofolio Pilihan','03 — Selected Portfolio'], s3h:['Karya nyata yang telah diluncurkan','Real work, already launched'],
s3p:['Bukan sekadar mockup konsep. Setiap website dirancang dan dikembangkan dengan standar kode produksi yang rapi, responsif, dan siap menghasilkan konversi nyata.','Not just concept mockups. Every website is designed and built to clean production standards, responsive and ready to deliver real conversions.'],
oH:['Kategori industri lainnya yang kami layani','Other industries we serve'],
oP:['Struktur arsitektur informasi disesuaikan dengan target pasar bisnis Anda.','Information architecture tailored to your business target market.'],
oA:['Konsultasikan kebutuhan spesifik Anda →','Discuss your specific needs →'],
s4e:['04 — Testimoni','04 — Testimonials'], s4h:['Apa kata mereka tentang Lanz Dev','What they say about Lanz Dev'],
s4p:['Kepuasan dan hasil bisnis nyata adalah ukuran sukses kami. Berikut pengalaman langsung para pemilik bisnis dan pengambil keputusan yang mempercayakan website mereka kepada kami.','Satisfaction and real business results are how we measure success. Here are first-hand experiences from business owners and decision-makers who trusted us with their websites.'],
s5e:['05 — Paket & Investasi','05 — Packages & Investment'], s5h:['Investasi transparan per proyek','Transparent per-project pricing'],
s5p:['Biaya jasa pembuatan website profesional tanpa sistem langganan tersembunyi. Source code, domain, dan aset 100% milik Anda.','Professional website pricing with no hidden subscriptions. Source code, domain, and assets are 100% yours.'],
bm:['Biaya Proyek (Sekali Bayar)','Project Fee (One-time)'], by:['+ Managed Support 1 Tahun','+ 1-Year Managed Support'],
gH:['Investasi aman tanpa rasa khawatir','Safe investment, zero worries'],
gP:['Kami menanggung risiko agar Anda dapat fokus mengembangkan bisnis dengan tenang.','We carry the risk so you can focus on growing your business with peace of mind.'],
g1t:['Garansi Revisi Sampai Disetujui','Revisions Until Approved'],
g1d:['Kami tidak langsung menulis kode sebelum Anda menyetujui visual mockup final. Arah visual dan tipografi direvisi hingga 100% cocok dengan karakter brand Anda tanpa biaya tambahan.','We do not write code until you approve the final visual mockup. Visual direction and typography are revised until they fit your brand 100%, at no extra cost.'],
g1b:['100% Kepuasan Desain','100% Design Satisfaction'],
g2t:['Garansi Skor PageSpeed 90+','PageSpeed 90+ Guarantee'],
g2d:['Website lambat membuang biaya iklan. Setiap website kami jamin meraih skor Google PageSpeed 90+ dan lolos Core Web Vitals. Jika di bawah 90, kami optimasi gratis sampai tercapai.','Slow websites waste ad spend. Every site is guaranteed a Google PageSpeed score of 90+ and passes Core Web Vitals. If it falls below 90, we optimize for free until it does.'],
g2b:['Teruji di Google PageSpeed','Verified on Google PageSpeed'],
g3t:['Free Support 30–60 Hari Pasca Rilis','Free Support 30–60 Days After Launch'],
g3d:['Setelah website live, Anda tidak ditinggal sendirian. Kami memberikan garansi perbaikan bug gratis, pendampingan kendala teknis, dan konsultasi konten agar transisi berjalan mulus.','After launch you are not left alone. We provide free bug fixes, technical assistance, and content consulting for a smooth transition.'],
g3b:['Pendampingan Teknis Penuh','Full Technical Support'],
gS:['Seluruh paket juga mencakup <strong>100% kepemilikan source code & domain</strong> tanpa biaya terselubung.','Every package also includes <strong>100% ownership of source code & domain</strong> with no hidden fees.'],
gA:['Punya pertanyaan spesifik? Tanya tim →','Have a specific question? Ask the team →'],
s6e:['06 — FAQ','06 — FAQ'], s6h:['Pertanyaan umum','Common questions'],
s7e:['07 — Kontak','07 — Contact'], s7h:['Mulai percakapan','Start a conversation'],
s7p:['Isi formulir, lalu pesan Anda akan terbuka langsung di WhatsApp dan dikirim ke tim kami. Kami membalas dalam waktu kurang dari 24 jam kerja.','Fill in the form and your message opens directly in WhatsApp and goes to our team. We reply within 24 business hours.'],
locV:['Gandul, Depok, Jawa Barat · Remote','Gandul, Depok, West Java · Remote'], hrsL:['Jam kerja','Working hours'], hrsV:['Sen–Jum, 09.00–18.00 WIB','Mon–Fri, 09:00–18:00 WIB (GMT+7)'], locL:['Lokasi','Location'],
fN:['Nama lengkap *','Full name *'], fP:['Nomor WhatsApp','WhatsApp number'], fS:['Kebutuhan','Needs'], fB:['Perkiraan anggaran','Estimated budget'], fD:['Target selesai','Target deadline'], fM:['Pesan *','Message *'],
phN:['Contoh: Rian Pratama','e.g. Rian Pratama'], phM:['Ceritakan kebutuhan atau pertanyaan Anda...','Tell us about your needs or questions...'],
note:['Pesan dikirim melalui WhatsApp ke 0856-7325-691.','Your message is sent via WhatsApp to 0856-7325-691.'],
send:['Kirim via WhatsApp →','Send via WhatsApp →'],
ctaH:['Siap membangun yang berikutnya<span class="text-blue">.</span>','Ready to build the next one<span class="text-blue">.</span>'], ctaB:['Hubungi via WhatsApp →','Contact via WhatsApp →'],
fAbout:['Studio desain dan pengembangan digital independen. Dibangun dengan presisi, dirancang agar bertahan lama.','An independent design and digital development studio. Built with precision, designed to last.'],
fNav:['Navigasi','Navigation'], fSvc:['Layanan','Services'], fCon:['Hubungi','Contact'],
copy:['© 2026 Lanz Dev. Hak Cipta Dilindungi Undang-Undang.','© 2026 Lanz Dev. All rights reserved.'], top:['Kembali ke atas ↑','Back to top ↑']
};
const META_HOME = {
title:['Lanz Dev — Jasa Pembuatan Website & Pengembangan Digital Profesional Indonesia','Lanz Dev — Professional Website Development & Digital Studio in Indonesia'],
desc:['Lanz Dev adalah studio web development profesional independen di Depok, Jawa Barat, oleh M. Bagus Erlangga. Jasa pembuatan website perusahaan, landing page, toko online, web top up game otomatis, sistem LMS, dan web app Laravel kustom.','Lanz Dev is an independent professional web development studio in Depok, West Java, by M. Bagus Erlangga. Company websites, landing pages, online stores, automated game top-up sites, LMS platforms, and custom Laravel web apps.']
};

const META_ABOUT = {
title:['Tentang Kami — Lanz Dev | Profil M. Bagus Erlangga','About Us — Lanz Dev | M. Bagus Erlangga Profile'],
desc:['Kenali Lanz Dev, studio pengembangan digital independen di Depok yang dipimpin oleh M. Bagus Erlangga. Membangun website performa tinggi dengan dedikasi langsung tanpa perantara.','Meet Lanz Dev, an independent digital development studio in Depok led by M. Bagus Erlangga. Building high-performance websites with direct dedication and no middlemen.']
};
const META_SERVICES = {
title:['Layanan Web Development — Lanz Dev | Jasa Pembuatan Website','Web Development Services — Lanz Dev | Professional Website Development'],
desc:['Layanan lengkap pembuatan website profesional oleh Lanz Dev di Depok: Website Perusahaan, Landing Page Konversi, Top Up Game Otomatis, LMS Coding, dan Web App Laravel kustom.','Complete professional website services by Lanz Dev in Depok: Company Websites, Conversion Landing Pages, Automated Game Top-Up, Coding LMS, and custom Laravel Web Apps.']
};
const META_PRICING = {
title:['Paket & Harga — Lanz Dev | Investasi Jasa Pembuatan Website','Pricing & Packages — Lanz Dev | Website Development Investment'],
desc:['Daftar harga transparan jasa pembuatan website profesional oleh Lanz Dev. Tanpa biaya langganan tersembunyi. Source code 100% milik Anda.','Transparent pricing for professional website development by Lanz Dev. No hidden subscription fees. Source code is 100% yours.']
};
const META_CONTACT = {
title:['Hubungi Kami — Lanz Dev | Konsultasi Proyek Website','Contact Us — Lanz Dev | Website Project Consultation'],
desc:['Hubungi Lanz Dev di Depok untuk konsultasi pembuatan website perusahaan, landing page, atau aplikasi web kustom bersama M. Bagus Erlangga.','Contact Lanz Dev in Depok for a consultation on company websites, landing pages, or custom web apps with M. Bagus Erlangga.']
};
const META = { home: META_HOME, about: META_ABOUT, services: META_SERVICES, pricing: META_PRICING, contact: META_CONTACT };
Object.assign(D, {
aEye:['Tentang Studio & Pendiri','About the Studio & Founder'],
aH1:['Dedikasi langsung, tanpa perantara birokratis<span class="text-blue">.</span>','Direct dedication, no bureaucratic middlemen<span class="text-blue">.</span>'],
aP:['Lanz Dev didirikan oleh <strong>M. Bagus Erlangga</strong> atas keyakinan bahwa website terbaik lahir dari komunikasi transparan dan eksekusi teknis yang presisi.','Lanz Dev was founded by <strong>M. Bagus Erlangga</strong> on the belief that the best websites come from transparent communication and precise technical execution.'],
aLoc:['Indonesia, Depok','Depok, Indonesia'], aRem:['Remote Worldwide','Remote Worldwide'],
aH2:['Membangun infrastruktur web modern yang andal, scalable, dan estetik.','Building reliable, scalable, and aesthetic modern web infrastructure.'],
aBody:['Dengan pengalaman lebih dari 8 tahun dalam arsitektur web modern, saya telah mengembangkan berbagai platform digital: mulai dari toko online top-up game otomatis dengan volume ribuan transaksi (<a href="https://www.lanzstoreid.com" target="_blank" rel="noopener" class="text-ink font-semibold underline">Lanz Store ID</a>), learning management system interaktif (<a href="https://becoding.onlinet.id" target="_blank" rel="noopener" class="text-ink font-semibold underline">Becoding LMS</a>), hingga website profil perusahaan agrikultur terkemuka (<a href="https://www.agrilinkteknologisolusi.co.id/" target="_blank" rel="noopener" class="text-ink font-semibold underline">Agrilink Teknologi</a>).','With more than 8 years of experience in modern web architecture, I have built a range of digital platforms: from an automated game top-up store handling thousands of transactions (<a href="https://www.lanzstoreid.com" target="_blank" rel="noopener" class="text-ink font-semibold underline">Lanz Store ID</a>), an interactive learning management system (<a href="https://becoding.onlinet.id" target="_blank" rel="noopener" class="text-ink font-semibold underline">Becoding LMS</a>), to the company profile of a leading agriculture company (<a href="https://www.agrilinkteknologisolusi.co.id/" target="_blank" rel="noopener" class="text-ink font-semibold underline">Agrilink Teknologi</a>).'],
aS1v:['8+ Thn','8+ Yrs'], aS1:['Pengalaman Digital','Digital Experience'], aS2:['Website Selesai','Websites Delivered'], aS3:['Komitmen Deadline','Deadline Commitment'],
aCta:['Konsultasi Langsung dengan Founder →','Talk Directly with the Founder →'],
aPe:['Prinsip Fundamental','Core Principles'], aPh:['Mengapa bekerja sama dengan Lanz Dev','Why work with Lanz Dev'],
p1t:['Presisi Tipografi & Grid','Typography & Grid Precision'], p1d:['Setiap margin, proporsi teks, dan elemen UI dipandu sistem grid Swiss yang ketat.','Every margin, text proportion, and UI element is guided by a strict Swiss grid system.'],
p2t:['Kecepatan & Performa','Speed & Performance'], p2d:['Website dimuat di bawah 500 milidetik dengan skor PageSpeed 90+ dan CDN Cloudflare teroptimasi.','Websites load in under 500 milliseconds with a PageSpeed score of 90+ and an optimized Cloudflare CDN.'],
p3t:['Kepemilikan Penuh 100%','100% Full Ownership'], p3d:['Source code, lisensi domain, dan aset digital diserahkan utuh kepada Anda tanpa vendor-lock.','Source code, domain licenses, and digital assets are handed over to you in full, with no vendor lock-in.'],
p4t:['Garansi & Support Nyata','Real Warranty & Support'], p4d:['Pendampingan teknis gratis 30–60 hari pasca rilis untuk memastikan operasional Anda lancar.','Free technical support for 30–60 days after launch to keep your operations running smoothly.']
});

Object.assign(D, {
sEye:['Layanan Kami','Our Services'],
sH1:['Solusi website terukur untuk bisnis berkembang<span class="text-blue">.</span>','Measurable website solutions for growing businesses<span class="text-blue">.</span>'],
sP:['Dari rancangan wireframe sampai kode produksi, setiap produk kami bangun menggunakan teknologi mutakhir yang cepat, aman, dan mudah dikelola.','From wireframes to production code, every product is built with modern technology that is fast, secure, and easy to manage.'],
prEye:['Investasi & Skema Biaya','Investment & Pricing Scheme'],
prH1:['Investasi transparan per proyek<span class="text-blue">.</span>','Transparent per-project pricing<span class="text-blue">.</span>'],
prP:['Biaya jasa pembuatan website profesional done-for-you. Tanpa skema bulanan tersembunyi. Seluruh source code dan domain menjadi aset permanen Anda.','Professional done-for-you website pricing. No hidden monthly fees. All source code and domains become your permanent assets.'],
pb1d:['Kami menyajikan wireframe dan mockup desain terlebih dahulu. Koding baru dimulai setelah Anda 100% puas.','We present wireframes and design mockups first. Coding only begins once you are 100% satisfied.'],
pb2d:['Website dimuat dalam waktu di bawah 1 detik dengan standar Google Core Web Vitals tinggi.','Websites load in under 1 second and meet high Google Core Web Vitals standards.'],
pb3d:['Jika ada bug atau kendala teknis setelah peluncuran, tim kami memperbaikinya segera tanpa biaya ekstra.','If a bug or technical issue appears after launch, we fix it promptly at no extra cost.'],
cEye:['Saluran Resmi','Official Channel'],
cH1:['Mari diskusikan ide proyek Anda<span class="text-blue">.</span>','Let us discuss your project idea<span class="text-blue">.</span>'],
cP:['Punya rencana peluncuran produk, peremajaan website perusahaan, atau butuh sistem kustom? Kami siap mendengar dan memberi saran teknis terbaik.','Planning a product launch, a company website refresh, or need a custom system? We are ready to listen and give the best technical advice.'],
cDesc:['Studio pengembangan perangkat lunak dan desain web independen.','Independent software development and web design studio.'],
cWa:['WhatsApp Resmi','Official WhatsApp'], cResp:['Respons cepat &lt; 2 jam kerja','Fast response &lt; 2 business hours'],
cLoc:['Lokasi & Jangkauan','Location & Coverage'], cLocV:['Gandul, Depok, Jawa Barat, Indonesia','Gandul, Depok, West Java, Indonesia'],
cLocS:['Melayani klien di seluruh Indonesia & remote global','Serving clients across Indonesia & remote worldwide'],
cHrs:['Jam Kerja Konsultasi','Consultation Hours'], cHrsV:['Senin – Jumat, 09.00 – 18.00 WIB','Monday – Friday, 09:00 – 18:00 WIB (GMT+7)'],
cFH:['Kirim Ringkasan Kebutuhan','Send Your Project Brief'],
cPh:['Nomor WhatsApp *','WhatsApp Number *'], cNeed:['Kebutuhan Proyek *','Project Needs *'], cMsg:['Deskripsi Singkat *','Short Description *'],
cphN:['Nama Anda','Your name'], cphM:['Ceritakan tujuan website Anda, referensi tampilan yang disukai, atau target peluncuran...','Tell us your website goals, preferred design references, or launch target...'],
cNote:['Pesan akan diteruskan ke WhatsApp resmi.','Your message will be forwarded to the official WhatsApp.']
});

/* ---------- DATA [id, en] ---------- */
const NAV = [[['Beranda','Home'],'/'],[['Layanan','Services'],'/services'],[['Studio & Tim','Studio & Team'],'/about'],[['Portofolio','Portfolio'],'/#karya'],[['Paket Harga','Pricing'],'/pricing'],[['Testimoni','Testimonials'],'/#testimoni'],[['FAQ','FAQ'],'/#faq'],[['Kontak','Contact'],'/contact']];
const STATS = [['0.38',2,[' dtk',' s'],['Waktu muat rata-rata','Average load time']],['99.98',2,['%','%'],['Ketersediaan sistem','System uptime']],['24',0,[' jam',' h'],['Respons awal','First response']],['100',0,['%','%'],['Responsif semua layar','Responsive on all screens']]];
const BRANDS = [
['LANZ STORE ID','font-display font-black tracking-tight text-[13px]','<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M16 10v4M14 12h4"/>'],
['BECODING','font-mono font-bold text-[13px] tracking-tight','<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'],
['AGRILINK TEKNOLOGI','font-sans font-bold text-[12px] tracking-wider uppercase','<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],
['BAGUS ERLANGGA','font-display font-extrabold text-[12px]','<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>'],
['bhinneka.tech','font-mono font-semibold text-[13px] tracking-tight lowercase','<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>'],
['DOMPET SAMPAH','font-sans font-bold text-[12px] tracking-wider uppercase','<path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>']];
const SVC = [
[['Website Perusahaan','Company Website'],['Situs profil multipage dengan struktur informasi jelas, kredibel, dan siap diindeks mesin pencari.','Multipage profile sites with clear information structure, credible, and ready to be indexed by search engines.'],['Multipage','SEO','CMS','PHP']],
[['Landing Page','Landing Page'],['Satu halaman berfokus konversi untuk kampanye, peluncuran produk, atau acara.','A single conversion-focused page for campaigns, product launches, or events.'],[['Konversi','Conversion'],'A/B',['Cepat','Fast']]],
[['Toko Online & Katalog','Online Store & Catalog'],['Katalog produk, keranjang interaktif, dan checkout langsung ke WhatsApp dengan format pesanan rapi.','Product catalog, interactive cart, and checkout straight to WhatsApp with a neat order format.'],[['Keranjang','Cart'],'QRIS','WhatsApp']],
[['UI/UX & Sistem Desain','UI/UX & Design System'],['Riset, wireframe, prototipe, dan sistem desain tipografis yang konsisten dan bisa diskalakan.','Research, wireframes, prototypes, and a consistent, scalable typographic design system.'],[['Riset','Research'],['Prototipe','Prototype'],'Figma']],
[['Aplikasi Web Kustom','Custom Web Apps'],['Dashboard, portal klien, dan alat internal berbasis Laravel & MySQL yang dibangun sesuai alur kerja bisnis Anda.','Dashboards, client portals, and internal tools built on Laravel & MySQL, tailored to your business workflow.'],['Laravel','PHP','MySQL','Dashboard']],
[['Perawatan & Optimasi','Maintenance & Optimization'],['Audit performa, perbaikan SEO teknis, keamanan, backup terjadwal, dan pembaruan rutin.','Performance audits, technical SEO fixes, security, scheduled backups, and routine updates.'],[['Performa','Performance'],'Backup',['Keamanan','Security']]]];
const STEPS = [
[['Discovery','Discovery'],['Kami memahami tujuan, target audiens, kompetitor, dan ruang lingkup proyek.','We understand your goals, target audience, competitors, and project scope.'],['1–3 hari','1–3 days']],
[['Desain','Design'],['Wireframe, arah visual, lalu desain final yang Anda setujui sebelum pengembangan.','Wireframes, visual direction, then a final design you approve before development.'],['3–7 hari','3–7 days']],
[['Pengembangan','Development'],['Implementasi responsif, optimasi performa, SEO on-page, dan integrasi WhatsApp.','Responsive implementation, performance optimization, on-page SEO, and WhatsApp integration.'],['1–3 minggu','1–3 weeks']],
[['Peluncuran','Launch'],['Pengujian lintas perangkat, pemasangan domain dan SSL, serta pendampingan awal.','Cross-device testing, domain and SSL setup, plus initial support.'],['1–2 hari','1–2 days']]];
const CASES = [
[['Profil Perusahaan','Company Profile'],['Kontraktor, konsultan, manufaktur','Contractors, consultants, manufacturing'],['Multipage · SEO · Formulir','Multipage · SEO · Forms']],
[['Toko Online UMKM','SME Online Store'],['Fashion, kuliner, kerajinan','Fashion, food, crafts'],['Katalog · Keranjang · WhatsApp','Catalog · Cart · WhatsApp']],
[['Portofolio Kreatif','Creative Portfolio'],['Fotografer, arsitek, desainer','Photographers, architects, designers'],['Galeri · Studi kasus · Kontak','Gallery · Case studies · Contact']],
[['Klinik & Layanan','Clinics & Services'],['Kesehatan, kecantikan, jasa','Health, beauty, services'],['Jadwal · Layanan · Peta','Schedule · Services · Map']],
[['Pendidikan & Kursus','Education & Courses'],['Bimbel, pelatihan, komunitas','Tutoring, training, communities'],['Program · Pendaftaran · Blog','Programs · Registration · Blog']],
[['Event & Undangan','Events & Invitations'],['Acara, peluncuran, pernikahan','Events, launches, weddings'],['Landing · RSVP · Galeri','Landing · RSVP · Gallery']]];
const PROJECTS = [
{ title:'Lanz Store ID', client:'Lanz Store ID', industry:['Top Up Game & Digital Goods','Game Top-Up & Digital Goods'], url:'www.lanzstoreid.com', link:'https://www.lanzstoreid.com',
  desc:['Platform top-up game dan produk digital otomatis 24 jam dengan integrasi payment gateway QRIS & Virtual Account, validasi User ID game instan, serta notifikasi WhatsApp real-time.','24/7 automated game top-up and digital goods platform with QRIS & Virtual Account payment gateway, instant game User ID validation, and real-time WhatsApp notifications.'],
  metric:['Otomatis 24 Jam · Payment QRIS','24/7 Automated · QRIS Payment'], badge:['Top Up Game Otomatis','Automated Game Top-Up'],
  tags:['Top Up Game','Payment Gateway QRIS',['Cek ID Otomatis','Auto ID Check'],['WhatsApp Notif','WhatsApp Alerts']], img:'photo-1542751371-adc38448a05e' },
{ title:'Bagus Erlangga Portfolio', client:'M. Bagus Erlangga', industry:['Personal Portfolio & Tech Showcase','Personal Portfolio & Tech Showcase'], url:'www.baguserlangga.dev', link:'https://www.baguserlangga.dev',
  desc:['Website portofolio developer profesional dengan pendekatan tipografi Swiss modern, arsitektur performa tinggi Google PageSpeed 100, interaksi mulus, dan showcase proyek digital.','Professional developer portfolio with a modern Swiss typographic approach, high-performance architecture scoring Google PageSpeed 100, smooth interactions, and a digital project showcase.'],
  metric:['PageSpeed 100 · Minimalist UX','PageSpeed 100 · Minimalist UX'], badge:['Personal Developer Portfolio','Personal Developer Portfolio'],
  tags:['Personal Portfolio','Tailwind CSS','PageSpeed 100','Modern Web'], img:'photo-1507238691740-187a5b1d37b8' },
{ title:'Becoding LMS', client:'Becoding Indonesia', industry:['Platform Edukasi & Kursus Coding','Education & Coding Course Platform'], url:'becoding.onlinet.id', link:'https://becoding.onlinet.id',
  desc:['Learning Management System (LMS) interaktif untuk kursus coding online, dilengkapi dashboard materi video, sistem ujian/kuis interaktif, pelacakan progres, dan sertifikat otomatis.','Interactive Learning Management System (LMS) for online coding courses, with a video lesson dashboard, interactive exams/quizzes, progress tracking, and automatic certificates.'],
  metric:['Multi-User LMS · Sertifikat Otomatis','Multi-User LMS · Auto Certificates'], badge:['Platform LMS Edukasi','Education LMS Platform'],
  tags:['LMS Platform','E-Learning Coding',['Dashboard Siswa','Student Dashboard'],['Sertifikat Otomatis','Auto Certificates']], img:'photo-1516321318423-f06f85e504b3' },
{ title:'Agrilink Teknologi Solusi', client:'PT Agrilink Teknologi Solusi', industry:['Agrikultur Modern & Solusi B2B','Modern Agriculture & B2B Solutions'], url:'agrilinkteknologisolusi.co.id', link:'https://www.agrilinkteknologisolusi.co.id/',
  desc:['Website company profile resmi perusahaan teknologi agrikultur dengan struktur arsitektur multipage kredibel, katalog solusi industri cerdas, SEO korporat, dan formulir kemitraan B2B.','Official company profile website of an agritech company with a credible multipage architecture, smart industry solution catalog, corporate SEO, and a B2B partnership form.'],
  metric:['Corporate Profile · SEO On-Page','Corporate Profile · On-Page SEO'], badge:['Company Profile Korporat','Corporate Company Profile'],
  tags:['Company Profile','Smart Agriculture','B2B Inquiries','SEO Architecture'], img:'photo-1586528116311-ad8dd3c8310d' }];
const TESTI = [
{ q:['Sistem top up otomatis di lanzstoreid.com berjalan sangat stabil 24 jam tanpa kendala. Integrasi payment gateway QRIS dan pengecekan User ID instan membuat transaksi pelanggan selesai dalam hitungan detik. Omset naik signifikan dan operasional jauh lebih hemat tenaga.','The automated top-up system at lanzstoreid.com runs very stably 24/7 without issues. QRIS payment gateway integration and instant User ID checks let customer transactions finish in seconds. Revenue rose significantly and operations take far less effort.'],
  name:'Bagus Erlangga', role:['CEO LANZ STORE','CEO LANZ STORE'], company:'Lanz Store ID', tag:['Top Up Game Otomatis & QRIS','Automated Game Top-Up & QRIS'], avatar:'photo-1507003211169-0a1dd7228f2d' },
{ q:['Website company profile agrilinkteknologisolusi.co.id memberikan kredibilitas luar biasa di hadapan mitra korporat dan dinas pertanian. Tampilan multipage-nya sangat elegan, rapi, dan cepat diakses di semua perangkat. Pelayanan Mas Bagus sangat profesional.','The company profile website agrilinkteknologisolusi.co.id gives us outstanding credibility with corporate partners and agriculture agencies. The multipage layout is elegant, tidy, and fast on every device. Mas Bagus is very professional.'],
  name:'Ir. H. Sudirman', role:['Direktur Utama','President Director'], company:'PT Agrilink Teknologi Solusi', tag:['Company Profile Korporat Multipage','Multipage Corporate Profile'], avatar:'photo-1500648767791-00dcc994a43e' },
{ q:['Platform LMS becoding.onlinet.id mempermudah siswa belajar coding secara terstruktur. Fitur video materi, kuis, dan penerbitan sertifikat otomatis bekerja tanpa celah. Mas Bagus mendampingi dari awal sampai sistem siap digunakan ratusan siswa.','The LMS platform becoding.onlinet.id makes it easy for students to learn coding in a structured way. Video lessons, quizzes, and automatic certificates work flawlessly. Mas Bagus guided us from the start until the system was ready for hundreds of students.'],
  name:'Reza Firmansyah', role:['Head of Academic','Head of Academic'], company:'Becoding Indonesia', tag:['Learning Management System (LMS)','Learning Management System (LMS)'], avatar:'photo-1573496359142-b8d87734a5a2' }];
const PLANS = [
{ n:['Landing Page','Landing Page'], d:['Satu halaman fokus konversi tinggi untuk kampanye, iklan, peluncuran produk, atau UMKM.','A single high-conversion page for campaigns, ads, product launches, or SMEs.'], p:1490000, pa:1990000, time:['3–5 hari kerja','3–5 business days'],
  note:['Investasi proyek (sekali bayar)','Project investment (one-time)'], notea:['Termasuk managed hosting & support 1 thn','Includes managed hosting & 1-year support'],
  f:[['1 Halaman fokus konversi & responsif','1 responsive, conversion-focused page'],['Desain custom modern (bukan template pasaran)','Modern custom design (not a stock template)'],['Domain .com / .id & SSL gratis tahun pertama','Free .com / .id domain & SSL for the first year'],['Integrasi formulir checkout ke WhatsApp','Checkout form integrated with WhatsApp'],['Optimasi kecepatan Google PageSpeed 90+','Google PageSpeed 90+ speed optimization'],['Garansi revisi & pendampingan 30 hari','Revision warranty & 30-day support']],
  cta:['Pesan Landing Page →','Order Landing Page →'] },
{ n:['Website Bisnis','Business Website'], d:['Solusi profil multipage komprehensif dan kredibel untuk korporat, klinik, agensi, atau UMKM.','A comprehensive, credible multipage profile for corporates, clinics, agencies, or SMEs.'], p:3490000, pa:4490000, time:['7–14 hari kerja','7–14 business days'],
  note:['Investasi proyek (sekali bayar)','Project investment (one-time)'], notea:['Termasuk managed server & backup 1 thn','Includes managed server & 1-year backup'],
  f:[['Hingga 5–7 Halaman multipage terstruktur','Up to 5–7 structured pages'],['Struktur SEO semantik & Google Search Console','Semantic SEO structure & Google Search Console'],['Desain sistem tipografi & identitas terarah','Typography system & guided identity design'],['Email bisnis domain kustom (info@namaweb.id)','Custom-domain business email (info@yoursite.id)'],['Integrasi Google Maps & form WhatsApp','Google Maps & WhatsApp form integration'],['Source code diserahkan penuh tanpa vendor-lock','Full source code handover, no vendor lock-in'],['Garansi & support prioritas 60 hari','Warranty & 60-day priority support']],
  cta:['Pilih Paket Bisnis →','Choose Business Plan →'], hot:1 },
{ n:['Toko Online & Web App','Online Store & Web App'], d:['Katalog dinamis, e-commerce, atau dashboard kustom berbasis Laravel & MySQL yang siap scale-up.','Dynamic catalog, e-commerce, or custom dashboard on Laravel & MySQL, ready to scale.'], p:6900000, pa:8400000, time:['2–4 minggu','2–4 weeks'],
  note:['Investasi proyek (sekali bayar)','Project investment (one-time)'], notea:['Termasuk server managed & maintenance 1 thn','Includes managed server & 1-year maintenance'],
  f:[['Semua fitur Paket Website Bisnis','All Business Website features'],['Katalog produk interaktif & keranjang belanja','Interactive product catalog & shopping cart'],['Checkout otomatis ke WhatsApp / integrasi QRIS','Automatic WhatsApp checkout / QRIS integration'],['Dashboard admin CMS Laravel & MySQL','Laravel & MySQL admin CMS dashboard'],['Database teroptimasi & backup otomatis','Optimized database & automatic backups'],['Sesi pelatihan admin 1-on-1 & dokumentasi','1-on-1 admin training session & documentation'],['Maintenance & support prioritas 90 hari','Maintenance & 90-day priority support']],
  cta:['Mulai Proyek Kustom →','Start Custom Project →'] }];
const FAQ = [
[['Berapa lama proses pengerjaan website?','How long does a website take?'],['Untuk Landing Page biasanya selesai dalam 3–5 hari kerja, sedangkan Website Bisnis multipage memerlukan waktu 7–14 hari kerja setelah konten dan materi awal terkumpul.','A Landing Page is usually done in 3–5 business days, while a multipage Business Website takes 7–14 business days once content and initial materials are ready.']],
[['Bagaimana jika hasil desain belum sesuai ekspektasi?','What if the design does not meet my expectations?'],['Kami memberikan Garansi Revisi Desain Sampai Disetujui. Kami menyajikan wireframe dan mockup visual terlebih dahulu sebelum menulis satu baris kode pun. Tahap pemrograman baru dimulai setelah Anda 100% puas dengan desain final.','We offer a Design Revision Guarantee until approved. We present wireframes and visual mockups before writing a single line of code. Development only starts once you are 100% happy with the final design.']],
[['Bagaimana jika ada bug atau error setelah website rilis?','What if there is a bug or error after launch?'],['Semua paket kami sertakan garansi Free Support & Bug Fixing selama 30 hingga 60 hari kerja setelah rilis. Jika ditemukan kendala teknis atau tampilan yang kurang pas, tim kami memperbaikinya segera tanpa biaya tambahan.','All packages include free Support & Bug Fixing for 30 to 60 business days after launch. If a technical issue or visual glitch appears, we fix it promptly at no extra cost.']],
[['Apakah skor Google PageSpeed 90+ benar-benar dijamin?','Is a Google PageSpeed score of 90+ really guaranteed?'],['Ya, kami memberikan jaminan tertulis skor Google PageSpeed 90+ dan waktu muat di bawah 1 detik. Setiap halaman dioptimalkan dengan aset terkompresi dan jaringan edge CDN Cloudflare.','Yes, we give a written guarantee of a Google PageSpeed score of 90+ and load times under 1 second. Every page is optimized with compressed assets and the Cloudflare edge CDN.']],
[['Bagaimana sistem pembayaran proyek?','How does project payment work?'],['Sistem pembayaran transparan dan aman: 50% di awal sebagai uang muka (DP) untuk pengerjaan desain & struktur, dan 50% pelunasan setelah website selesai diuji dan siap diluncurkan ke domain utama.','Payment is transparent and safe: 50% upfront as a down payment for design & structure work, and 50% upon completion, after the site is tested and ready to launch on your main domain.']],
[['Siapa yang memiliki hak atas source code dan domain?','Who owns the source code and domain?'],['100% milik Anda. Setelah pelunasan proyek, seluruh aset kode sumber, akses domain, dan materi desain diserahkan penuh kepada Anda tanpa sistem kontrak kunci vendor (no vendor lock-in).','100% yours. After full payment, all source code, domain access, and design materials are handed over to you with no vendor lock-in.']]];
const OPT = {
subject:[['Website Perusahaan','Company Website'],['Landing Page','Landing Page'],['Toko Online','Online Store'],['UI/UX Design','UI/UX Design'],['Aplikasi Web Kustom','Custom Web App'],['Perawatan & Optimasi','Maintenance & Optimization'],['Lainnya','Other']],
budget:[['Belum tahu','Not sure yet'],['< Rp 2 juta','< Rp 2 million'],['Rp 2–5 juta','Rp 2–5 million'],['Rp 5–15 juta','Rp 5–15 million'],['> Rp 15 juta','> Rp 15 million']],
deadline:[['Fleksibel','Flexible'],['1–2 minggu','1–2 weeks'],['1 bulan','1 month'],['2–3 bulan','2–3 months']]};
const SV = [
['web-perusahaan','01 / CORPORATE',['Website Perusahaan (Company Profile)','Company Website (Company Profile)'],['Profil multipage komprehensif dengan struktur informasi rapi, desain korporat kredibel, serta SEO teroptimasi untuk menarik calon klien B2B dan investor.','A comprehensive multipage profile with tidy information structure, credible corporate design, and optimized SEO to attract B2B clients and investors.'],['Multipage',['SEO Semantik','Semantic SEO'],['Email Bisnis','Business Email']],['Website Perusahaan','Company Website']],
['landing-page','02 / CONVERSION',['Landing Page Fokus Konversi','Conversion-Focused Landing Page'],['Satu halaman berdaya konversi tinggi untuk kampanye iklan, peluncuran produk baru, atau lead generation dengan waktu muat instan di bawah 0.5 detik.','A single high-conversion page for ad campaigns, new product launches, or lead generation, with instant load times under 0.5 seconds.'],['Copywriting','Ultra-Fast','WhatsApp Form'],['Landing Page','Landing Page']],
['topup-ecommerce','03 / E-COMMERCE',['Top Up Game & Toko Online','Game Top-Up & Online Store'],['Platform transaksi otomatis 24 jam dengan validasi ID game instan, integrasi payment gateway QRIS, Virtual Account, serta notifikasi WhatsApp otomatis.','A 24/7 automated transaction platform with instant game ID validation, QRIS and Virtual Account payment gateway integration, and automatic WhatsApp notifications.'],['Payment QRIS',['Cek ID Otomatis','Auto ID Check'],['Dashboard Omset','Revenue Dashboard']],['Top Up Game','Game Top-Up']],
['lms-custom','04 / EDUCATION & WEB APP',['Sistem LMS & Aplikasi Web Kustom','LMS & Custom Web Applications'],['Portal e-learning untuk kursus online dengan sistem modul materi video, ujian kuis otomatis, sertifikat digital dinamis, serta hak akses multi-user.','An e-learning portal for online courses with video lesson modules, automatic quiz exams, dynamic digital certificates, and multi-user access control.'],['Laravel','Multi-User LMS',['Sertifikat Otomatis','Auto Certificates']],['Sistem LMS','LMS']],
['speed-seo','05 / PERFORMANCE',['Audit Performa & Optimasi PageSpeed','Performance Audit & PageSpeed Optimization'],['Meningkatkan skor Google Core Web Vitals website Anda hingga 95+, kompresi gambar otomatis WebP, minifikasi script, dan konfigurasi CDN Cloudflare.','Raising your website Google Core Web Vitals score up to 95+, with automatic WebP image compression, script minification, and Cloudflare CDN configuration.'],['Score 90+','Cloudflare Edge','Core Web Vitals'],['Audit Performa','Performance Audit']],
['maintenance','06 / MAINTENANCE',['Perawatan & Keamanan Rutin','Routine Maintenance & Security'],['Layanan pemeliharaan server, pencadangan (backup) database otomatis, perpanjangan domain & SSL, serta penanganan error/bug prioritas.','Server maintenance, automatic database backups, domain & SSL renewal, and priority error/bug handling.'],[['Backup Rutin','Routine Backups'],['Proteksi DDoS','DDoS Protection'],['Bantuan 24 Jam','24h Support']],['Perawatan Website','Website Maintenance']]];
Object.assign(OPT, {
cSubject:[['Landing Page Fokus Konversi','Conversion-Focused Landing Page'],['Website Perusahaan (Company Profile)','Company Website (Company Profile)'],['Top Up Game / Toko Online','Game Top-Up / Online Store'],['Sistem LMS / Web App Kustom','LMS / Custom Web App'],['Audit Performa & PageSpeed','Performance Audit & PageSpeed'],['Kebutuhan Lainnya','Other Needs']],
cBudget:[['Rp 1,5 jt – Rp 3 jt','Rp 1.5 – 3 million'],['Rp 3 jt – Rp 6 jt','Rp 3 – 6 million'],['Rp 6 jt – Rp 15 jt','Rp 6 – 15 million'],['> Rp 15 jt','> Rp 15 million']]});
const FSVC = [[['Website Perusahaan','Company Website'],'/services#web-perusahaan'],[['Landing Page Konversi','Conversion Landing Page'],'/services#landing-page'],[['Top Up Game & E-Commerce','Game Top-Up & E-Commerce'],'/services#topup-ecommerce'],[['Sistem LMS & Web App','LMS & Web Apps'],'/services#lms-custom'],[['Audit Performa & Speed SEO','Performance Audit & Speed SEO'],'/services#speed-seo']];
const ck = '<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>';
const star = '<svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
const U = (id, w, q) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
const waMsg = (id, en) => wa(lang === 'id' ? id : en);

/* ---------- RENDER ---------- */
function render() {
  document.documentElement.lang = lang;
  const M = META[PG] || META.home;
  document.title = t(M.title);
  $('meta[name=description]').content = t(M.desc);
  document.querySelectorAll('[data-i]').forEach(e => e.innerHTML = t(D[e.dataset.i]));
  document.querySelectorAll('[data-p]').forEach(e => e.placeholder = t(D[e.dataset.p]));
  $('#lang').innerHTML = `<span class="${lang === 'id' ? 'text-ink' : 'text-zinc-400'}">ID</span><span class="text-zinc-300 mx-1">|</span><span class="${lang === 'en' ? 'text-ink' : 'text-zinc-400'}">EN</span>`;
  const nc = h => h === cur ? 'text-ink font-bold' : 'hover:text-ink';
  $('#nav').innerHTML = NAV.map(([n, h]) => `<a href="${h}" class="${nc(h)} transition-colors">${t(n)}</a>`).join('');
  $('#mnav').innerHTML = NAV.map(([n, h]) => `<a href="${h}" class="py-1.5 ${nc(h)} block">${t(n)}</a>`).join('') + `<a href="/contact" class="btn btn-dark justify-center mt-2">${t(D.consult)}</a>`;
  $('#fnav').innerHTML = NAV.map(([n, h]) => `<li><a class="hover:text-ink" href="${h}">${t(n)}</a></li>`).join('');
  $('#fsvc').innerHTML = FSVC.map(([n, h]) => `<li><a class="hover:text-ink" href="${h}">${t(n)}</a></li>`).join('');
  $('#stats').innerHTML = STATS.map(([v, dec, u, l], i) => `<div class="py-6 pr-4 rv" ${dly(i)}><dd class="display text-3xl md:text-5xl" data-n="${v}" data-dec="${dec}" data-suf="${t(u)}">${v}${t(u)}</dd><dt class="mt-2 text-xs text-zinc-500">${t(l)}</dt></div>`).join('');
  $('#brands').innerHTML = BRANDS.map(([n, c, p]) => `<div class="flex items-center gap-2 hover:text-zinc-900 transition-colors cursor-default group" title="${n}"><svg class="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${p}</svg><span class="${c} text-zinc-500 group-hover:text-zinc-900 transition-colors">${n}</span></div>`).join('');
  $('#services').innerHTML = SVC.map(([n, d, g], i) => `<article class="p-8 border-r border-b border-zinc-200 hover:bg-zinc-50 transition-colors flex flex-col gap-4 rv" ${dly(i % 3)}><span class="font-mono text-xs text-zinc-400">${String(i + 1).padStart(2, '0')}</span><h3 class="text-xl font-bold">${t(n)}</h3><p class="text-sm text-zinc-600 leading-relaxed grow">${t(d)}</p><div class="flex flex-wrap gap-2 pt-2">${g.map(x => `<span class="px-2 py-1 border border-zinc-300 rounded text-[10px] font-semibold uppercase tracking-wider">${t(x)}</span>`).join('')}</div><a class="text-xs font-bold hover:underline" target="_blank" rel="noopener" href="${waMsg('Halo Lanz Dev, saya tertarik dengan layanan ' + t(n) + '.', 'Hello Lanz Dev, I am interested in your ' + t(n) + ' service.')}">${lang === 'id' ? 'Tanya layanan ini →' : 'Ask about this service →'}</a></article>`).join('');
  $('#steps').innerHTML = STEPS.map(([n, d, w], i) => `<div class="bg-ink p-8 space-y-4 rv" ${dly(i)}><span class="display text-5xl text-zinc-700">${i + 1}</span><h3 class="font-bold text-lg">${t(n)}</h3><p class="text-sm text-zinc-400 leading-relaxed">${t(d)}</p><span class="inline-block text-[10px] uppercase tracking-widest font-semibold text-zinc-400">${t(w)}</span></div>`).join('');
  $('#projects').innerHTML = PROJECTS.map((p, i) => `
<article class="rounded-xl border border-zinc-200 overflow-hidden bg-white shadow-xs hover:shadow-xl hover:border-zinc-900 hover:-translate-y-1 transition-all duration-300 flex flex-col group rv" ${dly(i % 2)}>
  <div class="bg-zinc-100/90 border-b border-zinc-200 px-4 py-2.5 flex items-center justify-between">
    <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-zinc-300 group-hover:bg-red-400 transition-colors"></span><span class="w-2.5 h-2.5 rounded-full bg-zinc-300 group-hover:bg-amber-400 transition-colors"></span><span class="w-2.5 h-2.5 rounded-full bg-zinc-300 group-hover:bg-emerald-400 transition-colors"></span></div>
    <div class="bg-white border border-zinc-200 rounded-md px-3 py-1 text-[11px] font-mono text-zinc-500 flex items-center gap-1.5 shadow-2xs max-w-[210px] truncate"><svg class="w-3 h-3 text-zinc-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg><span class="truncate">${p.url}</span></div>
    <span class="text-[10px] font-mono uppercase font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">Live</span>
  </div>
  <div class="relative aspect-16/10 overflow-hidden bg-zinc-900">
    <img src="${U(p.img, 800, 70)}" srcset="${U(p.img, 600, 70)} 600w, ${U(p.img, 1000, 70)} 1000w" sizes="(min-width:768px) 560px, 100vw" alt="${p.title}" width="800" height="500" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" loading="lazy" decoding="async" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-5"><div class="text-white space-y-1"><span class="text-[10px] font-mono uppercase tracking-widest text-zinc-300 font-semibold">${t(p.badge)}</span><h3 class="text-xl font-bold tracking-tight text-white">${p.title}</h3></div></div>
  </div>
  <div class="p-6 flex flex-col justify-between grow space-y-5 bg-white">
    <div class="space-y-3">
      <div class="flex flex-wrap items-center justify-between gap-2 text-xs"><span class="font-mono text-zinc-500 uppercase tracking-wider">${p.client} · <strong class="text-zinc-800">${t(p.industry)}</strong></span><span class="font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">${t(p.metric)}</span></div>
      <p class="text-sm text-zinc-600 leading-relaxed">${t(p.desc)}</p>
      <div class="flex flex-wrap gap-1.5 pt-1">${p.tags.map(x => `<span class="px-2 py-0.5 border border-zinc-200 bg-zinc-50 rounded text-[10px] font-medium text-zinc-600">${t(x)}</span>`).join('')}</div>
    </div>
    <div class="pt-4 border-t border-zinc-100 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
      <a href="${p.link}" target="_blank" rel="noopener" class="btn btn-dark !py-2.5 !px-4 text-xs font-bold inline-flex items-center gap-1.5 w-full sm:w-auto justify-center">${lang === 'id' ? 'Lihat Website Live ↗' : 'View Live Website ↗'}</a>
      <a href="${waMsg('Halo Mas Bagus, saya tertarik membuat website dengan model seperti ' + p.title + ' (' + p.url + ').', 'Hello Bagus, I would like a website similar to ' + p.title + ' (' + p.url + ').')}" target="_blank" rel="noopener" class="text-xs font-semibold text-zinc-700 hover:text-black transition-colors w-full sm:w-auto text-center sm:text-right">${lang === 'id' ? 'Pesan konsep ini →' : 'Order this concept →'}</a>
    </div>
  </div>
</article>`).join('');
  $('#cases').innerHTML = CASES.map(([n, s, f], i) => `<div class="p-8 border border-zinc-200 rounded-xl space-y-6 hover:border-ink hover:-translate-y-1 transition-all rv" ${dly(i % 3)}><div class="eyebrow">${t(s)}</div><h3 class="display text-2xl">${t(n)}</h3><div class="text-xs text-zinc-500 border-t border-zinc-200 pt-4">${t(f)}</div></div>`).join('');
  $('#testimonials').innerHTML = TESTI.map((x, i) => `
<div class="p-8 rounded-xl border border-zinc-200 bg-white hover:border-zinc-900 transition-all duration-300 shadow-xs flex flex-col justify-between space-y-6 group rv" ${dly(i % 2)}>
  <div class="space-y-4"><div class="flex items-center justify-between"><div class="flex text-amber-500 gap-0.5">${star.repeat(5)}</div><span class="px-2 py-0.5 border border-zinc-200 bg-zinc-50 rounded text-[10px] font-mono text-zinc-500 uppercase tracking-wider">${t(x.tag)}</span></div>
  <p class="text-sm text-zinc-700 leading-relaxed font-normal">"${t(x.q)}"</p></div>
  <div class="flex items-center gap-3.5 pt-4 border-t border-zinc-100"><img src="${U(x.avatar, 100, 70)}" alt="${x.name}" width="44" height="44" class="w-11 h-11 rounded-full object-cover border border-zinc-200 shrink-0" loading="lazy" decoding="async" /><div><h4 class="text-sm font-bold text-zinc-900">${x.name}</h4><p class="text-xs text-zinc-500">${t(x.role)} · <span class="font-medium text-zinc-700">${x.company}</span></p></div></div>
</div>`).join('');
  plans();
  $('#faqs').innerHTML = FAQ.map(([q, a]) => `<details class="border-b border-zinc-200 py-5"><summary class="flex items-center justify-between gap-4 font-semibold text-sm">${t(q)}<span class="plus text-xl transition-transform">+</span></summary><p class="pt-3 text-sm text-zinc-600 leading-relaxed max-w-2xl">${t(a)}</p></details>`).join('');
  for (const k in OPT) { const s = $('#' + k), v = s.selectedIndex > 0 ? s.selectedIndex : 0; s.innerHTML = OPT[k].map(o => `<option>${t(o)}</option>`).join(''); s.selectedIndex = v; }
  $('#svc6').innerHTML = SV.map(([id, tag, n, d, g, w], i) => `<article id="${id}" class="p-8 border border-zinc-200 rounded-xl bg-white hover:border-zinc-900 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 rv" ${dly(i % 3)}><div class="space-y-4"><span class="font-mono text-xs text-zinc-400">${tag}</span><h2 class="text-xl font-bold text-zinc-900">${t(n)}</h2><p class="text-xs text-zinc-600 leading-relaxed">${t(d)}</p><div class="flex flex-wrap gap-1.5 pt-1">${g.map(x => `<span class="px-2 py-0.5 border border-zinc-200 rounded text-[10px] font-semibold text-zinc-700 bg-zinc-50">${t(x)}</span>`).join('')}</div></div><a href="${waMsg('Halo Lanz Dev, saya tertarik dengan layanan ' + w[0] + '.', 'Hello Lanz Dev, I am interested in your ' + w[1] + ' service.')}" target="_blank" rel="noopener" class="text-xs font-bold text-zinc-900 hover:underline inline-flex items-center gap-1">${lang === 'id' ? 'Konsultasi Layanan Ini →' : 'Consult This Service →'}</a></article>`).join('');
  $('#pplans').innerHTML = PLANS.map((p, i) => `<div class="rounded-2xl border ${p.hot ? 'border-2 border-zinc-900 shadow-xl relative' : 'border-zinc-200 shadow-xs'} p-8 flex flex-col justify-between gap-8 bg-white hover:-translate-y-1 transition-transform duration-300 rv" ${dly(i)}>${p.hot ? `<span class="absolute -top-3.5 right-6 px-3 py-1 rounded-full text-[10px] font-bold bg-ink text-white uppercase tracking-wider">${lang === 'id' ? 'Paling Populer' : 'Most Popular'}</span>` : ''}<div class="space-y-5"><div><h3 class="text-lg font-bold text-zinc-900">${t(p.n)}</h3><p class="text-xs text-zinc-500 mt-1 leading-relaxed">${t(p.d)}</p></div><div class="border-y border-zinc-200 py-4"><div class="font-mono text-3xl font-bold text-zinc-900">${rp(p.p)}</div><div class="text-[11px] text-zinc-500 mt-2 flex items-center justify-between gap-2"><span>${t(p.note)}</span><span class="font-mono font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded shrink-0 inline-flex items-center gap-1.5"><svg class="w-3 h-3 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${t(p.time)}</span></div></div><ul class="space-y-3 text-xs text-zinc-700">${p.f.map(x => `<li class="flex items-center gap-2">${ck}<span>${t(x)}</span></li>`).join('')}</ul></div><a target="_blank" rel="noopener" href="${waMsg('Halo Lanz Dev, saya ingin memesan paket ' + t(p.n) + ' (' + rp(p.p) + ').', 'Hello Lanz Dev, I would like to order the ' + t(p.n) + ' package (' + rp(p.p) + ').')}" class="btn justify-center ${p.hot ? 'btn-dark' : 'btn-line'}">${t(p.cta)}</a></div>`).join('');
  $('#aWa').href = waMsg('Halo Mas Bagus, saya ingin konsultasi proyek.', 'Hello Bagus, I would like to discuss a project.');
  $('#ctaWa').href = waMsg('Halo Lanz Dev, saya ingin konsultasi.', 'Hello Lanz Dev, I would like a consultation.');
  if ($('#faqs').style && document.getElementById('faqs')) {
  const ld = document.getElementById('faq-ld') || Object.assign(document.createElement('script'), { id: 'faq-ld', type: 'application/ld+json' });
  ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang === 'id' ? 'id-ID' : 'en-US', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: t(q), acceptedAnswer: { '@type': 'Answer', text: t(a) } })) });
  document.head.appendChild(ld); }
  if (!first) document.querySelectorAll('.rv').forEach(e => e.classList.add('in'));
  else watch();
}
function plans() {
  $('#plans').innerHTML = PLANS.map((p, i) => { const price = yearly ? p.pa : p.p; return `
<div class="rounded-xl p-8 flex flex-col justify-between gap-8 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rv ${p.hot ? 'border-2 border-ink shadow-md' : 'border border-zinc-200'}" ${dly(i)}>
  <div class="space-y-5">
    <div class="flex items-center justify-between"><h3 class="text-lg font-bold">${t(p.n)}</h3>${p.hot ? `<span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-ink text-white uppercase tracking-wider">${lang === 'id' ? 'Paling Populer' : 'Most Popular'}</span>` : ''}</div>
    <p class="text-xs text-zinc-500 leading-relaxed">${t(p.d)}</p>
    <div class="border-y border-zinc-200 py-4"><div class="font-mono text-3xl font-bold">${rp(price)}</div>
      <div class="text-[11px] text-zinc-500 mt-2 flex items-center justify-between gap-2"><span>${t(yearly ? p.notea : p.note)}</span><span class="font-mono font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded shrink-0 inline-flex items-center gap-1.5"><svg class="w-3 h-3 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${t(p.time)}</span></div></div>
    <ul class="space-y-3 text-xs text-zinc-700">${p.f.map(x => `<li class="flex items-center gap-2">${ck}<span>${t(x)}</span></li>`).join('')}</ul>
  </div>
  <a target="_blank" rel="noopener" href="${waMsg('Halo Lanz Dev, saya ingin memesan paket ' + t(p.n) + ' (' + rp(price) + ').', 'Hello Lanz Dev, I would like to order the ' + t(p.n) + ' package (' + rp(price) + ').')}" class="btn justify-center ${p.hot ? 'btn-dark' : 'btn-line'}">${t(p.cta)}</a>
</div>`; }).join('');
  if (!first) document.querySelectorAll('#plans .rv').forEach(e => e.classList.add('in'));
  const on = 'px-4 py-2 rounded-md bg-ink text-white transition-colors', off = 'px-4 py-2 rounded-md text-zinc-600 hover:text-ink transition-colors';
  $('#bm').className = yearly ? off : on; $('#by').className = yearly ? on : off;
}

/* ---------- ANIMATION ---------- */
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target; el.classList.add('in'); io.unobserve(el);
  if (el.dataset.n) count(el);
}), { threshold: .12, rootMargin: '0px 0px -40px 0px' }) : null;
function watch() {
  document.querySelectorAll('.rv').forEach(e => io ? io.observe(e) : e.classList.add('in'));
  document.querySelectorAll('[data-n]').forEach(e => io && io.observe(e));
}
function count(el) {
  if (reduce) return;
  const n = +el.dataset.n, d = +el.dataset.dec, s = el.dataset.suf, T = 1400, t0 = performance.now();
  (function step(now) { const p = Math.min((now - t0) / T, 1), e = 1 - Math.pow(1 - p, 3); el.textContent = (n * e).toFixed(d) + s; if (p < 1) requestAnimationFrame(step); })(t0);
}

/* ---------- EVENTS ---------- */
function setLang(l) {
  lang = l; try { localStorage.setItem('lz-lang', l); } catch (e) {}
  document.body.classList.add('lg'); document.body.classList.add('sw');
  setTimeout(() => { render(); document.body.classList.remove('sw'); }, 150);
}
$('#lang').onclick = () => setLang(lang === 'id' ? 'en' : 'id');
$('#bm').onclick = () => { yearly = 0; plans(); };
$('#by').onclick = () => { yearly = 1; plans(); };
const mn = $('#mnav'), bg = $('#burger');
bg.onclick = () => { mn.classList.toggle('hidden'); mn.classList.toggle('flex'); bg.setAttribute('aria-expanded', mn.classList.contains('flex')); };
mn.onclick = () => { mn.classList.add('hidden'); mn.classList.remove('flex'); bg.setAttribute('aria-expanded', 'false'); };
let tick = false;
addEventListener('scroll', () => { if (tick) return; tick = true; requestAnimationFrame(() => { $('#hd').classList.toggle('sc', scrollY > 10); tick = false; }); }, { passive: true });
$('#wa-form').addEventListener('submit', e => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target)), id = lang === 'id';
  const m = [id ? 'Halo Lanz Dev, saya ingin berkonsultasi.' : 'Hello Lanz Dev, I would like a consultation.', '', (id ? 'Nama: ' : 'Name: ') + f.name, f.email && 'Email: ' + f.email, f.phone && 'WhatsApp: ' + f.phone, (id ? 'Kebutuhan: ' : 'Needs: ') + f.subject, (id ? 'Anggaran: ' : 'Budget: ') + f.budget, (id ? 'Target selesai: ' : 'Deadline: ') + f.deadline, '', id ? 'Pesan:' : 'Message:', f.message].filter(x => x !== undefined && x !== false && x !== null).join('\n');
  window.open(wa(m), '_blank', 'noopener');
});
$('#contact-page-form').addEventListener('submit', e => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target)), id = lang === 'id';
  const m = [id ? 'Halo Lanz Dev, saya ingin berkonsultasi mengenai proyek website.' : 'Hello Lanz Dev, I would like to consult about a website project.', '', (id ? '*Nama:* ' : '*Name:* ') + f.name, '*WhatsApp:* ' + f.phone, (id ? '*Kebutuhan:* ' : '*Needs:* ') + f.subject, (id ? '*Anggaran:* ' : '*Budget:* ') + f.budget, '', id ? '*Pesan / Deskripsi:*' : '*Message / Description:*', f.message].join('\n');
  window.open(wa(m), '_blank', 'noopener');
});
render(); first = false;
})();
