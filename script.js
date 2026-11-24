// ===== Data program studi (object) =====
const dataProdi = {
    si:  { nama: "Sistem Informasi",         logo: "assets/logo-si.png" },
    ti:  { nama: "Teknik Informatika",       logo: "assets/logo-ti.png" },
    dkv: { nama: "Desain Komunikasi Visual", logo: "assets/logo-dkv.png" },
    ts:  { nama: "Teknik Sipil",             logo: "assets/logo-ts.png" }
};

// ===== Data alumni (array berisi object) =====
// Data ini contoh. Silakan ganti dengan data alumni yang sebenarnya.
const dataAlumni = [
    { nama: "Yoga Fauzi", prodi: "dkv", angkatan: 2019, pekerjaan: "Ilustrator Lepas", tempat: "Freelance", kota: "Cirebon", bidang: "Desain & Kreatif", kutipan: "Saya menerima pesanan ilustrasi dari berbagai kota." },
    { nama: "Lestari Effendi", prodi: "si", angkatan: 2020, pekerjaan: "Android Developer", tempat: "Startup transportasi", kota: "Bandung", bidang: "Teknologi Informasi", kutipan: "Tugas kuliah saya jadi cikal bakal aplikasi yang sekarang saya kerjakan." },
    { nama: "Joko Octavian", prodi: "ti", angkatan: 2017, pekerjaan: "Staf IT Pemerintah", tempat: "Dinas Pendidikan", kota: "Cirebon", bidang: "Pemerintahan", kutipan: "Saya mengurus sistem data sekolah se-kabupaten." },
    { nama: "Sinta Sulaiman", prodi: "si", angkatan: 2020, pekerjaan: "Pengelola Toko Marketplace", tempat: "Toko sendiri", kota: "Cirebon", bidang: "Wirausaha", kutipan: "Mengelola penjualan online mengajarkan saya soal ketekunan." },
    { nama: "Galih Yulianti", prodi: "ti", angkatan: 2022, pekerjaan: "Analis Sistem", tempat: "Dinas Kominfo", kota: "Cirebon", bidang: "Pemerintahan", kutipan: "Saya menghubungkan kebutuhan layanan dengan solusi teknologi." },
    { nama: "Rahmat Suryani", prodi: "dkv", angkatan: 2022, pekerjaan: "Layouter Majalah", tempat: "Penerbit media", kota: "Bandung", bidang: "Desain & Kreatif", kutipan: "Tata letak yang lega membuat tulisan lebih enak dibaca." },
    { nama: "Adit Hermawan", prodi: "si", angkatan: 2021, pekerjaan: "Business Intelligence Developer", tempat: "Perusahaan ritel", kota: "Jakarta", bidang: "Teknologi Informasi", kutipan: "Dasbor yang jelas membuat manajer cepat mengambil keputusan." },
    { nama: "Tasya Safitri", prodi: "ti", angkatan: 2016, pekerjaan: "System Administrator", tempat: "Rumah sakit", kota: "Bogor", bidang: "Teknologi Informasi", kutipan: "Server yang stabil adalah kerja sunyi yang penting." },
    { nama: "Lina Yuliansyah", prodi: "ts", angkatan: 2021, pekerjaan: "Staf Administrasi Proyek", tempat: "Kontraktor", kota: "Tangerang", bidang: "Konstruksi", kutipan: "Dokumen yang tertib membantu proyek berjalan lancar." },
    { nama: "Jaya Gunawan", prodi: "dkv", angkatan: 2020, pekerjaan: "Dosen DKV", tempat: "Perguruan tinggi", kota: "Cirebon", bidang: "Pendidikan", kutipan: "Saya ingin mahasiswa punya dasar desain yang kuat." },
    { nama: "Haikal Kurniawan", prodi: "dkv", angkatan: 2019, pekerjaan: "Content Creator", tempat: "Media digital", kota: "Jakarta", bidang: "Pemasaran & Media", kutipan: "Konsistensi membuat konten lebih penting daripada alat yang mahal." },
    { nama: "Budi Azzahra", prodi: "ti", angkatan: 2020, pekerjaan: "Backend Developer", tempat: "Startup logistik", kota: "Yogyakarta", bidang: "Teknologi Informasi", kutipan: "Rajin ikut proyek kampus membuat portofolio saya kuat." },
    { nama: "Vina Ismail", prodi: "ti", angkatan: 2022, pekerjaan: "DevOps Engineer", tempat: "Perusahaan cloud", kota: "Kuningan", bidang: "Teknologi Informasi", kutipan: "Terbiasa memakai Git sejak kuliah sangat menolong." },
    { nama: "Gilang Effendi", prodi: "ts", angkatan: 2016, pekerjaan: "Quantity Surveyor", tempat: "Kontraktor", kota: "Cirebon", bidang: "Konstruksi", kutipan: "Volume pekerjaan yang tepat membuat anggaran lebih terkendali." },
    { nama: "Farhan Prasetyo", prodi: "dkv", angkatan: 2019, pekerjaan: "Social Media Designer", tempat: "Agensi digital", kota: "Kuningan", bidang: "Pemasaran & Media", kutipan: "Tren cepat berganti, jadi saya terus belajar setiap hari." },
    { nama: "Clarissa Fahlevi", prodi: "ts", angkatan: 2020, pekerjaan: "Surveyor Pemetaan", tempat: "Konsultan survei", kota: "Bogor", bidang: "Konstruksi", kutipan: "Peta yang akurat adalah dasar perencanaan yang baik." },
    { nama: "Citra Kurniawan", prodi: "ti", angkatan: 2019, pekerjaan: "Data Engineer", tempat: "Perusahaan telekomunikasi", kota: "Bandung", bidang: "Teknologi Informasi", kutipan: "Basis data dan pemrograman jadi kombinasi yang sangat terpakai." },
    { nama: "Yusuf Kusuma", prodi: "dkv", angkatan: 2019, pekerjaan: "Web Designer", tempat: "Software house", kota: "Majalengka", bidang: "Teknologi Informasi", kutipan: "Menggabungkan desain dan kode membuat saya lebih serbabisa." },
    { nama: "Alvin Rahayu", prodi: "si", angkatan: 2020, pekerjaan: "Dosen Muda", tempat: "Perguruan tinggi", kota: "Bandung", bidang: "Pendidikan", kutipan: "Mengajar membuat saya terus belajar hal baru setiap semester." },
    { nama: "Ratna Amalia", prodi: "ti", angkatan: 2016, pekerjaan: "Technical Support Engineer", tempat: "Perusahaan software", kota: "Tangerang", bidang: "Teknologi Informasi", kutipan: "Mendengarkan masalah pelanggan adalah separuh solusinya." },
    { nama: "Laila Hidayat", prodi: "ts", angkatan: 2017, pekerjaan: "Asisten Peneliti Material", tempat: "Lembaga penelitian", kota: "Cirebon", bidang: "Pendidikan", kutipan: "Meneliti bahan lokal membuka peluang bangunan yang lebih murah." },
    { nama: "Rendi Alamsyah", prodi: "ti", angkatan: 2021, pekerjaan: "Founder Software House", tempat: "Usaha sendiri", kota: "Bekasi", bidang: "Wirausaha", kutipan: "Mulai dari proyek freelance, sekarang punya tim sendiri." },
    { nama: "Doni Hartono", prodi: "si", angkatan: 2018, pekerjaan: "Technical Writer", tempat: "Perusahaan software", kota: "Tangerang", bidang: "Teknologi Informasi", kutipan: "Menulis dokumentasi yang jelas ternyata keahlian yang langka." },
    { nama: "Ilham Octavian", prodi: "ts", angkatan: 2017, pekerjaan: "Guru Teknik Bangunan", tempat: "SMK swasta", kota: "Kuningan", bidang: "Pendidikan", kutipan: "Mengajar praktik konstruksi ke siswa SMK sangat menyenangkan." },
    { nama: "Agus Anggara", prodi: "si", angkatan: 2022, pekerjaan: "Junior Web Developer", tempat: "Software house", kota: "Kuningan", bidang: "Teknologi Informasi", kutipan: "Praktikum Web Desain adalah langkah pertama karier saya." },
    { nama: "Siti Nurhaliza", prodi: "ti", angkatan: 2020, pekerjaan: "Machine Learning Engineer", tempat: "Startup analitik", kota: "Kuningan", bidang: "Teknologi Informasi", kutipan: "Model yang bagus tidak berarti kalau datanya berantakan." },
    { nama: "Ulfa Nasution", prodi: "si", angkatan: 2018, pekerjaan: "Frontend Developer", tempat: "Startup fintech", kota: "Kuningan", bidang: "Teknologi Informasi", kutipan: "Tampilan yang rapi dan cepat adalah bentuk hormat kepada pengguna." },
    { nama: "Oktaviani Nurfadilah", prodi: "ts", angkatan: 2017, pekerjaan: "Supervisor Konstruksi", tempat: "Perusahaan properti", kota: "Bandung", bidang: "Konstruksi", kutipan: "Koordinasi antar pekerja adalah pekerjaan paling menantang." },
    { nama: "Irfan Wijaksana", prodi: "dkv", angkatan: 2018, pekerjaan: "Staf Humas dan Desain", tempat: "Pemerintah kabupaten", kota: "Cirebon", bidang: "Pemerintahan", kutipan: "Informasi publik tampil lebih mudah dipahami lewat desain." },
    { nama: "Prita Permana", prodi: "ts", angkatan: 2017, pekerjaan: "Perencana Jalan", tempat: "Konsultan transportasi", kota: "Semarang", bidang: "Konstruksi", kutipan: "Jalan yang nyaman dimulai dari perencanaan yang matang." },
    { nama: "Kania Nugraha", prodi: "ti", angkatan: 2021, pekerjaan: "Full Stack Developer", tempat: "Software house", kota: "Bandung", bidang: "Teknologi Informasi", kutipan: "Menguasai dua sisi aplikasi membuat saya lebih fleksibel." },
    { nama: "Umar Pangestu", prodi: "dkv", angkatan: 2016, pekerjaan: "Desainer Grafis Percetakan", tempat: "Percetakan sendiri", kota: "Bekasi", bidang: "Wirausaha", kutipan: "Dari desain sampai cetak, semuanya saya kerjakan sendiri." },
    { nama: "Naufal Yulianti", prodi: "dkv", angkatan: 2021, pekerjaan: "Animator 2D", tempat: "Studio animasi", kota: "Bandung", bidang: "Desain & Kreatif", kutipan: "Setiap gerakan kecil punya cerita yang ingin disampaikan." },
    { nama: "Hilda Nurhaliza", prodi: "si", angkatan: 2017, pekerjaan: "Pengelola Humas Digital", tempat: "Pemerintah kabupaten", kota: "Kuningan", bidang: "Pemasaran & Media", kutipan: "Informasi publik harus cepat, akurat, dan mudah dipahami." },
    { nama: "Olivia Tohari", prodi: "ts", angkatan: 2016, pekerjaan: "Analis Hidrologi", tempat: "Balai sungai", kota: "Kuningan", bidang: "Pemerintahan", kutipan: "Data curah hujan membantu merencanakan pengendalian banjir." },
    { nama: "Arif Ismail", prodi: "dkv", angkatan: 2017, pekerjaan: "Art Director", tempat: "Agensi kreatif", kota: "Bandung", bidang: "Desain & Kreatif", kutipan: "Kritik dosen di studio melatih saya menerima masukan." },
    { nama: "Fitri Mulyana", prodi: "si", angkatan: 2019, pekerjaan: "Sistem Analis", tempat: "Pemerintah daerah", kota: "Cirebon", bidang: "Pemerintahan", kutipan: "Analisis kebutuhan adalah keterampilan yang paling saya andalkan." },
    { nama: "Dimas Octaviani", prodi: "dkv", angkatan: 2022, pekerjaan: "Konten Kreator Edukasi", tempat: "Kanal sendiri", kota: "Majalengka", bidang: "Pemasaran & Media", kutipan: "Menjelaskan hal rumit dengan visual sederhana itu menantang." },
    { nama: "Dika Subagja", prodi: "ti", angkatan: 2018, pekerjaan: "Cyber Security Analyst", tempat: "Bank swasta", kota: "Majalengka", bidang: "Perbankan & Keuangan", kutipan: "Keamanan sistem dimulai dari kebiasaan kecil yang konsisten." },
    { nama: "Kirana Marzuki", prodi: "si", angkatan: 2016, pekerjaan: "Konsultan Sistem Pajak", tempat: "Kantor konsultan", kota: "Bandung", bidang: "Perbankan & Keuangan", kutipan: "Sistem yang baik membuat pelaporan pajak jadi jauh lebih mudah." },
    { nama: "Wahyu Siregar", prodi: "dkv", angkatan: 2017, pekerjaan: "Desainer Buku", tempat: "Penerbit", kota: "Jakarta", bidang: "Desain & Kreatif", kutipan: "Pilihan huruf yang tepat mengubah suasana sebuah buku." },
    { nama: "Lutfi Azzahra", prodi: "ts", angkatan: 2020, pekerjaan: "Inspektur Jembatan", tempat: "Dinas Bina Marga", kota: "Kuningan", bidang: "Pemerintahan", kutipan: "Pemeriksaan rutin menjaga jembatan tetap aman dilalui." },
    { nama: "Anisa Mulyana", prodi: "ti", angkatan: 2016, pekerjaan: "Technical Lead", tempat: "Startup edukasi", kota: "Bandung", bidang: "Teknologi Informasi", kutipan: "Memimpin tim berarti lebih banyak mendengar daripada menulis kode." },
    { nama: "Krisna Nasution", prodi: "dkv", angkatan: 2022, pekerjaan: "Digital Painter", tempat: "Studio ilustrasi", kota: "Bogor", bidang: "Desain & Kreatif", kutipan: "Latihan sketsa setiap hari membuat tangan saya makin luwes." },
    { nama: "Rahma Zulkifli", prodi: "ti", angkatan: 2022, pekerjaan: "QA Engineer", tempat: "Perusahaan game", kota: "Bogor", bidang: "Teknologi Informasi", kutipan: "Mencari bug ternyata menyenangkan kalau sudah terbiasa." },
    { nama: "Nadia Fauzi", prodi: "si", angkatan: 2018, pekerjaan: "UI/UX Designer", tempat: "Agensi digital", kota: "Jakarta", bidang: "Teknologi Informasi", kutipan: "Dasar HTML dan CSS dari praktikum masih saya pakai sampai sekarang." },
    { nama: "Ika Lubis", prodi: "si", angkatan: 2020, pekerjaan: "Scrum Master", tempat: "Perusahaan teknologi", kota: "Kuningan", bidang: "Teknologi Informasi", kutipan: "Tim yang saling percaya menyelesaikan proyek lebih cepat." },
    { nama: "Bayu Yuliansyah", prodi: "ts", angkatan: 2017, pekerjaan: "Kontraktor Mandiri", tempat: "CV sendiri", kota: "Semarang", bidang: "Wirausaha", kutipan: "Proyek kecil di desa jadi awal usaha saya." },
    { nama: "Novi Suherman", prodi: "ts", angkatan: 2016, pekerjaan: "Engineer Struktur", tempat: "Konsultan struktur", kota: "Bandung", bidang: "Konstruksi", kutipan: "Perhitungan yang benar melindungi nyawa banyak orang." },
    { nama: "Oki Wahyudi", prodi: "dkv", angkatan: 2022, pekerjaan: "UI Designer", tempat: "Startup fintech", kota: "Cirebon", bidang: "Teknologi Informasi", kutipan: "Desain antarmuka yang jelas membuat pengguna merasa aman." },
    { nama: "Hana Wijaksana", prodi: "ti", angkatan: 2018, pekerjaan: "Frontend Developer", tempat: "Perusahaan media", kota: "Kuningan", bidang: "Teknologi Informasi", kutipan: "JavaScript yang saya pelajari di kampus jadi dasar karier saya." },
    { nama: "Erwin Anggara", prodi: "si", angkatan: 2020, pekerjaan: "Product Designer", tempat: "Startup logistik", kota: "Tangerang", bidang: "Teknologi Informasi", kutipan: "Riset pengguna selalu mengubah arah desain saya." },
    { nama: "Dian Mulyana", prodi: "si", angkatan: 2017, pekerjaan: "Business Analyst", tempat: "Perusahaan asuransi", kota: "Kuningan", bidang: "Perbankan & Keuangan", kutipan: "Pemodelan proses bisnis dari kuliah saya pakai setiap hari." },
    { nama: "Zahra Saefullah", prodi: "si", angkatan: 2020, pekerjaan: "Admin Sistem Akademik", tempat: "Sekolah tinggi", kota: "Bandung", bidang: "Pendidikan", kutipan: "Saya mengelola sistem yang dipakai ribuan mahasiswa." },
    { nama: "Nanda Purnama", prodi: "si", angkatan: 2017, pekerjaan: "Konsultan IT", tempat: "Perusahaan konsultan", kota: "Yogyakarta", bidang: "Teknologi Informasi", kutipan: "Menjelaskan hal teknis ke klien sama pentingnya dengan coding." },
    { nama: "Tika Budiman", prodi: "si", angkatan: 2016, pekerjaan: "Database Administrator", tempat: "Koperasi simpan pinjam", kota: "Bekasi", bidang: "Perbankan & Keuangan", kutipan: "Kuliah basis data membuat saya percaya diri mengelola data nasabah." },
    { nama: "Maya Effendi", prodi: "si", angkatan: 2021, pekerjaan: "Quality Assurance", tempat: "Perusahaan e-commerce", kota: "Semarang", bidang: "Teknologi Informasi", kutipan: "Menguji aplikasi mengajarkan saya berpikir dari sisi pengguna." },
    { nama: "Hasan Utami", prodi: "si", angkatan: 2022, pekerjaan: "Digital Marketing Specialist", tempat: "Agensi pemasaran", kota: "Bekasi", bidang: "Pemasaran & Media", kutipan: "Data pengunjung situs membantu saya menyusun strategi iklan." },
    { nama: "Rina Rosadi", prodi: "ti", angkatan: 2017, pekerjaan: "AI Engineer", tempat: "Perusahaan teknologi", kota: "Jakarta", bidang: "Teknologi Informasi", kutipan: "Matematika dan logika dari kuliah ternyata sangat terpakai." },
    { nama: "Rani Hasibuan", prodi: "ts", angkatan: 2017, pekerjaan: "Konsultan Geoteknik", tempat: "Konsultan", kota: "Majalengka", bidang: "Konstruksi", kutipan: "Mengenal karakter tanah menentukan keamanan sebuah bangunan." },
    { nama: "Mutiara Purnama", prodi: "ts", angkatan: 2020, pekerjaan: "Staf Dinas PUPR", tempat: "Pemerintah daerah", kota: "Bandung", bidang: "Pemerintahan", kutipan: "Saya terlibat dalam perbaikan jalan dan irigasi." },
    { nama: "Syifa Anggraini", prodi: "ti", angkatan: 2016, pekerjaan: "Software Tester", tempat: "Perusahaan perangkat lunak", kota: "Bekasi", bidang: "Teknologi Informasi", kutipan: "Pengujian yang teliti menyelamatkan banyak waktu tim." },
    { nama: "Andi Subagja", prodi: "ts", angkatan: 2017, pekerjaan: "Drafter", tempat: "Konsultan perencana", kota: "Kuningan", bidang: "Konstruksi", kutipan: "Gambar kerja yang rapi mencegah banyak kesalahan di lapangan." },
    { nama: "Reza Wulandari", prodi: "si", angkatan: 2018, pekerjaan: "IT Support", tempat: "Universitas swasta", kota: "Tangerang", bidang: "Pendidikan", kutipan: "Saya senang membantu pengguna menyelesaikan masalah teknis." },
    { nama: "Deni Maharani", prodi: "ti", angkatan: 2018, pekerjaan: "Mobile Developer", tempat: "Perusahaan fintech", kota: "Bandung", bidang: "Teknologi Informasi", kutipan: "Mulai dari JavaScript, sekarang saya membuat aplikasi mobile." },
    { nama: "Maulana Kamil", prodi: "ti", angkatan: 2022, pekerjaan: "Network Engineer", tempat: "Penyedia internet", kota: "Bandung", bidang: "Teknologi Informasi", kutipan: "Praktikum jaringan jadi bekal utama saya bekerja." },
    { nama: "Sandi Subagja", prodi: "dkv", angkatan: 2016, pekerjaan: "Creative Director", tempat: "Agensi kreatif", kota: "Bandung", bidang: "Desain & Kreatif", kutipan: "Ide terbaik sering datang dari diskusi tim yang santai." },
    { nama: "Intan Rahayu", prodi: "ts", angkatan: 2018, pekerjaan: "Dosen Teknik Sipil", tempat: "Perguruan tinggi", kota: "Cirebon", bidang: "Pendidikan", kutipan: "Saya ingin mahasiswa terbiasa turun ke lapangan." },
    { nama: "Fajar Alamsyah", prodi: "ts", angkatan: 2019, pekerjaan: "Staf Perencanaan", tempat: "Bappeda", kota: "Cirebon", bidang: "Pemerintahan", kutipan: "Perencanaan yang matang menghemat banyak biaya pembangunan." },
    { nama: "Kevin Kamil", prodi: "ts", angkatan: 2022, pekerjaan: "Site Engineer", tempat: "Kontraktor", kota: "Majalengka", bidang: "Konstruksi", kutipan: "Pengalaman lapangan mengajarkan hal yang tidak ada di buku." },
    { nama: "Ayu Yuliansyah", prodi: "ti", angkatan: 2022, pekerjaan: "Network Security Engineer", tempat: "Penyedia internet", kota: "Cirebon", bidang: "Teknologi Informasi", kutipan: "Praktik jaringan di laboratorium kampus sangat membantu saya." },
    { nama: "Dewi Susanto", prodi: "ts", angkatan: 2019, pekerjaan: "Pengawas Proyek", tempat: "Dinas Perumahan", kota: "Kuningan", bidang: "Pemerintahan", kutipan: "Mengawasi proyek publik berarti menjaga uang rakyat." },
    { nama: "Taufik Fauzi", prodi: "si", angkatan: 2022, pekerjaan: "Staf Pemerintahan Digital", tempat: "Dinas Kominfo", kota: "Cirebon", bidang: "Pemerintahan", kutipan: "Saya senang membangun layanan digital untuk daerah sendiri." },
    { nama: "Mega Rosa", prodi: "si", angkatan: 2018, pekerjaan: "Implementator Sistem", tempat: "Penyedia aplikasi sekolah", kota: "Yogyakarta", bidang: "Teknologi Informasi", kutipan: "Saya melatih guru memakai aplikasi, dan itu menyenangkan." },
    { nama: "Jihan Komalasari", prodi: "si", angkatan: 2016, pekerjaan: "Data Entry Supervisor", tempat: "Perusahaan pembiayaan", kota: "Kuningan", bidang: "Perbankan & Keuangan", kutipan: "Ketelitian data adalah dasar semua laporan." },
    { nama: "Putri Mulyana", prodi: "dkv", angkatan: 2019, pekerjaan: "Motion Designer", tempat: "Studio animasi", kota: "Semarang", bidang: "Desain & Kreatif", kutipan: "Belajar prinsip animasi sejak awal sangat membantu." },
    { nama: "Dinda Lukman", prodi: "ts", angkatan: 2017, pekerjaan: "Pengembang Perumahan", tempat: "Usaha sendiri", kota: "Cirebon", bidang: "Wirausaha", kutipan: "Membangun rumah untuk warga sekitar terasa membanggakan." },
    { nama: "Surya Zulkifli", prodi: "dkv", angkatan: 2022, pekerjaan: "Graphic Designer", tempat: "Agensi iklan", kota: "Bekasi", bidang: "Desain & Kreatif", kutipan: "Portofolio dari tugas kuliah membuka pintu wawancara pertama saya." },
    { nama: "Elisa Wulandari", prodi: "dkv", angkatan: 2022, pekerjaan: "Brand Designer", tempat: "Perusahaan FMCG", kota: "Semarang", bidang: "Desain & Kreatif", kutipan: "Identitas merek yang baik dimulai dari riset yang teliti." },
    { nama: "Gina Kamil", prodi: "ti", angkatan: 2016, pekerjaan: "Dosen Informatika", tempat: "Perguruan tinggi", kota: "Kuningan", bidang: "Pendidikan", kutipan: "Mahasiswa yang rajin bertanya membuat saya ikut berkembang." },
    { nama: "Hesti Saputra", prodi: "dkv", angkatan: 2022, pekerjaan: "Desainer Kemasan", tempat: "Produk UMKM", kota: "Jakarta", bidang: "Desain & Kreatif", kutipan: "Kemasan yang menarik membantu produk lokal bersaing." },
    { nama: "Alya Nugraha", prodi: "dkv", angkatan: 2022, pekerjaan: "Fotografer dan Videografer", tempat: "Studio sendiri", kota: "Bekasi", bidang: "Wirausaha", kutipan: "Hobi memotret saya ubah jadi usaha yang berjalan." },
    { nama: "Yuliana Setiawan", prodi: "ts", angkatan: 2016, pekerjaan: "Staf K3", tempat: "Perusahaan properti", kota: "Jakarta", bidang: "Konstruksi", kutipan: "Keselamatan kerja harus dijaga di setiap tahap proyek." },
    { nama: "Vino Firmansyah", prodi: "si", angkatan: 2019, pekerjaan: "Staf Audit Sistem", tempat: "Bank swasta", kota: "Bekasi", bidang: "Perbankan & Keuangan", kutipan: "Pemahaman kontrol sistem informasi sangat dibutuhkan di audit." },
    { nama: "Cantika Maharani", prodi: "ti", angkatan: 2020, pekerjaan: "IT Auditor", tempat: "Kantor akuntan publik", kota: "Kuningan", bidang: "Perbankan & Keuangan", kutipan: "Memahami sistem dari sisi teknis membuat audit lebih tajam." },
    { nama: "Gita Gumilar", prodi: "dkv", angkatan: 2017, pekerjaan: "Desainer Interior Digital", tempat: "Studio arsitektur", kota: "Bogor", bidang: "Desain & Kreatif", kutipan: "Visualisasi yang baik membantu klien membayangkan ruangannya." },
    { nama: "Bagas Hamdani", prodi: "ts", angkatan: 2017, pekerjaan: "Estimator Proyek", tempat: "Kontraktor", kota: "Yogyakarta", bidang: "Konstruksi", kutipan: "Kemampuan membaca gambar sangat menentukan akurasi perhitungan." },
    { nama: "Rangga Wijaksana", prodi: "si", angkatan: 2016, pekerjaan: "Data Analyst", tempat: "Bank daerah", kota: "Bekasi", bidang: "Perbankan & Keuangan", kutipan: "Belajar SQL sejak semester 3 sangat membantu di pekerjaan." },
    { nama: "Bambang Anggraini", prodi: "si", angkatan: 2022, pekerjaan: "Project Coordinator", tempat: "Perusahaan software", kota: "Majalengka", bidang: "Teknologi Informasi", kutipan: "Koordinasi antara tim teknis dan klien adalah tantangan terbesar." },
    { nama: "Hendra Saputra", prodi: "ts", angkatan: 2021, pekerjaan: "Teknisi Laboratorium Beton", tempat: "Perusahaan beton", kota: "Cirebon", bidang: "Konstruksi", kutipan: "Hasil uji kuat tekan selalu jadi bahan evaluasi mutu." },
    { nama: "Johan Hasibuan", prodi: "si", angkatan: 2017, pekerjaan: "Pemilik Toko Online", tempat: "Usaha sendiri", kota: "Majalengka", bidang: "Wirausaha", kutipan: "Ilmu sistem informasi saya pakai untuk mengatur stok dan penjualan." },
    { nama: "Nabila Wijaksana", prodi: "ts", angkatan: 2020, pekerjaan: "Pelaksana Irigasi", tempat: "Dinas Pengairan", kota: "Bandung", bidang: "Pemerintahan", kutipan: "Air yang mengalir lancar ke sawah adalah kepuasan tersendiri." },
    { nama: "Candra Ramadhan", prodi: "dkv", angkatan: 2016, pekerjaan: "3D Artist", tempat: "Studio game", kota: "Majalengka", bidang: "Desain & Kreatif", kutipan: "Sabar mengerjakan detail kecil adalah kunci hasil yang halus." },
    { nama: "Salsabila Suryani", prodi: "ti", angkatan: 2022, pekerjaan: "Embedded Engineer", tempat: "Perusahaan elektronik", kota: "Bekasi", bidang: "Teknologi Informasi", kutipan: "Menghubungkan perangkat keras dan perangkat lunak itu seru." },
    { nama: "Rizal Kurnia", prodi: "ti", angkatan: 2018, pekerjaan: "Freelance Web Developer", tempat: "Freelance", kota: "Semarang", bidang: "Wirausaha", kutipan: "Mengerjakan proyek dari banyak klien memperkaya pengalaman saya." },
    { nama: "Wulan Sari", prodi: "si", angkatan: 2016, pekerjaan: "Product Owner", tempat: "Startup edukasi", kota: "Cirebon", bidang: "Teknologi Informasi", kutipan: "Memahami proses bisnis dan teknis membuat komunikasi tim lancar." },
    { nama: "Tegar Rahmawati", prodi: "dkv", angkatan: 2020, pekerjaan: "Desainer Merchandise", tempat: "Brand sendiri", kota: "Bekasi", bidang: "Wirausaha", kutipan: "Desain yang saya buat sendiri laku di komunitas lokal." },
    { nama: "Fikri Wahyudi", prodi: "dkv", angkatan: 2018, pekerjaan: "Visual Merchandiser", tempat: "Perusahaan ritel", kota: "Kuningan", bidang: "Pemasaran & Media", kutipan: "Tata letak toko memengaruhi cara orang memilih barang." },
    { nama: "Fauzan Gumilar", prodi: "ts", angkatan: 2019, pekerjaan: "Project Engineer", tempat: "BUMN karya", kota: "Jakarta", bidang: "Konstruksi", kutipan: "Belajar manajemen proyek sejak kuliah sangat membantu." },
    { nama: "Juwita Kusuma", prodi: "dkv", angkatan: 2021, pekerjaan: "Desainer Pameran", tempat: "Event organizer", kota: "Bandung", bidang: "Desain & Kreatif", kutipan: "Ruang yang dirancang baik bisa bercerita tanpa banyak kata." },
    { nama: "Nurul Sari", prodi: "ts", angkatan: 2019, pekerjaan: "Estimator Biaya", tempat: "Konsultan", kota: "Semarang", bidang: "Konstruksi", kutipan: "Menghitung rencana anggaran biaya melatih ketelitian saya." },
    { nama: "Indah Fatimah", prodi: "ts", angkatan: 2020, pekerjaan: "Surveyor", tempat: "Konsultan", kota: "Bekasi", bidang: "Konstruksi", kutipan: "Pengukuran yang akurat adalah dasar semua pekerjaan sipil." },
    { nama: "Cahya Maulana", prodi: "dkv", angkatan: 2017, pekerjaan: "Desainer Produk Digital", tempat: "Startup e-commerce", kota: "Kuningan", bidang: "Teknologi Informasi", kutipan: "Detail kecil di antarmuka sering menentukan kenyamanan pengguna." },
    { nama: "Amelia Handayani", prodi: "ts", angkatan: 2018, pekerjaan: "Pelaksana Lapangan", tempat: "Kontraktor", kota: "Bekasi", bidang: "Konstruksi", kutipan: "Mengawasi proyek di daerah sendiri terasa lebih bermakna." },
    { nama: "Bima Budiman", prodi: "ts", angkatan: 2019, pekerjaan: "Quality Control", tempat: "Kontraktor jalan", kota: "Bandung", bidang: "Konstruksi", kutipan: "Ketelitian saat uji material adalah kunci kualitas." },
    { nama: "Eka Suherman", prodi: "si", angkatan: 2020, pekerjaan: "ERP Consultant", tempat: "Perusahaan manufaktur", kota: "Bekasi", bidang: "Teknologi Informasi", kutipan: "Memahami alur bisnis lebih penting daripada hafal menu aplikasi." },
    { nama: "Yasmin Kamil", prodi: "ti", angkatan: 2021, pekerjaan: "Staf Teknologi Informasi", tempat: "Pemerintah provinsi", kota: "Kuningan", bidang: "Pemerintahan", kutipan: "Saya membantu menjaga layanan publik digital tetap berjalan." },
    { nama: "Zaki Gunawan", prodi: "ti", angkatan: 2016, pekerjaan: "Cloud Engineer", tempat: "Perusahaan teknologi", kota: "Kuningan", bidang: "Teknologi Informasi", kutipan: "Belajar Linux sejak semester awal sangat membantu." },
    { nama: "Qonita Dewanti", prodi: "dkv", angkatan: 2019, pekerjaan: "Desainer Kampanye", tempat: "Lembaga nirlaba", kota: "Cirebon", bidang: "Pemasaran & Media", kutipan: "Desain yang jujur membuat pesan sosial lebih mudah diterima." },
    { nama: "Zulfa Fahlevi", prodi: "ti", angkatan: 2022, pekerjaan: "Data Scientist", tempat: "Perusahaan e-commerce", kota: "Jakarta", bidang: "Teknologi Informasi", kutipan: "Statistika dari kuliah ternyata dipakai setiap hari." },
    { nama: "Hadi Komalasari", prodi: "ts", angkatan: 2020, pekerjaan: "Drafter BIM", tempat: "Konsultan perencana", kota: "Bandung", bidang: "Konstruksi", kutipan: "Pemodelan digital membuat koordinasi antar disiplin lebih mudah." },
    { nama: "Ivan Alamsyah", prodi: "dkv", angkatan: 2020, pekerjaan: "Fotografer Produk", tempat: "Studio fotografi", kota: "Bekasi", bidang: "Pemasaran & Media", kutipan: "Cahaya yang tepat membuat produk sederhana tampak istimewa." },
    { nama: "Rizki Firmansyah", prodi: "si", angkatan: 2017, pekerjaan: "Analis Data Kesehatan", tempat: "Dinas Kesehatan", kota: "Cirebon", bidang: "Pemerintahan", kutipan: "Data yang rapi membantu keputusan yang tepat untuk masyarakat." },
    { nama: "Bella Mulyana", prodi: "ts", angkatan: 2019, pekerjaan: "Site Manager", tempat: "Kontraktor gedung", kota: "Semarang", bidang: "Konstruksi", kutipan: "Jadwal dan mutu harus berjalan seimbang di lapangan." },
    { nama: "Farah Sulaiman", prodi: "ti", angkatan: 2020, pekerjaan: "Game Developer", tempat: "Studio game", kota: "Majalengka", bidang: "Teknologi Informasi", kutipan: "Hobi bermain game saya ubah jadi pekerjaan." },
    { nama: "Pandu Ramadhan", prodi: "dkv", angkatan: 2020, pekerjaan: "Video Editor", tempat: "Rumah produksi", kota: "Bogor", bidang: "Desain & Kreatif", kutipan: "Ritme potongan gambar menentukan rasa sebuah cerita." },
    { nama: "Faisal Tohari", prodi: "ti", angkatan: 2016, pekerjaan: "Guru Produktif RPL", tempat: "SMK negeri", kota: "Bandung", bidang: "Pendidikan", kutipan: "Berbagi ilmu pemrograman ke siswa SMK membuat saya bersemangat." },
    { nama: "Tiara Santoso", prodi: "dkv", angkatan: 2018, pekerjaan: "Guru Multimedia", tempat: "SMK negeri", kota: "Jakarta", bidang: "Pendidikan", kutipan: "Melihat siswa membuat karya pertamanya selalu membanggakan." },
    { nama: "Eko Winata", prodi: "ti", angkatan: 2020, pekerjaan: "Software Engineer", tempat: "Perusahaan teknologi", kota: "Cirebon", bidang: "Teknologi Informasi", kutipan: "Algoritma dan struktur data jadi bahan wawancara kerja saya." },
    { nama: "Daffa Rosadi", prodi: "ti", angkatan: 2017, pekerjaan: "iOS Developer", tempat: "Startup kesehatan", kota: "Kuningan", bidang: "Teknologi Informasi", kutipan: "Menyempurnakan detail kecil membuat aplikasi terasa nyaman dipakai." }
];

// ===== Mengambil elemen dari HTML =====
const daftar = document.getElementById("daftar-alumni");
const kolomCari = document.getElementById("kolom-cari");
const grupProdi = document.getElementById("grup-prodi");
const pilihAngkatan = document.getElementById("pilih-angkatan");
const pilihBidang = document.getElementById("pilih-bidang");
const pilihKota = document.getElementById("pilih-kota");
const pilihUrut = document.getElementById("pilih-urut");
const infoHasil = document.getElementById("info-hasil");
const pesanKosong = document.getElementById("pesan-kosong");
const tombolReset = document.getElementById("tombol-reset");
const tombolResetAtas = document.getElementById("tombol-reset-atas");
const lencanaTotal = document.getElementById("lencana-total");

// ===== Kondisi filter saat ini =====
const filter = {
    kata: "",
    prodi: "semua",
    angkatan: "semua",
    bidang: "semua",
    kota: "semua",
    urut: "nama"
};

// ===== Ikon kecil (SVG) =====
const IKON_KERJA = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>';
const IKON_LOKASI = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';

// ===== Inisial nama untuk foto profil (huruf depan nama depan dan nama belakang) =====
function ambilInisial(nama) {
    const kata = nama.split(" ");
    return (kata[0][0] + kata[kata.length - 1][0]).toUpperCase();
}

// ===== Fungsi bantu =====
function nilaiUnik(kunci) {
    const hasil = [];
    for (let i = 0; i < dataAlumni.length; i++) {
        if (!hasil.includes(dataAlumni[i][kunci])) {
            hasil.push(dataAlumni[i][kunci]);
        }
    }
    return hasil;
}

function htmlLogoBulat(kode) {
    const p = dataProdi[kode];
    return '<span class="logo-bulat"><img src="' + p.logo + '" alt="Logo ' + p.nama + '"></span>';
}

function hitungProdi(kode) {
    return dataAlumni.filter(function (a) { return a.prodi === kode; }).length;
}

// ===== Mengisi pilihan (select) dari data =====
function isiPilihan(elemen, semuaLabel, daftarNilai) {
    elemen.innerHTML = '<option value="semua">' + semuaLabel + "</option>";
    for (let i = 0; i < daftarNilai.length; i++) {
        elemen.innerHTML += '<option value="' + daftarNilai[i] + '">' +
                            daftarNilai[i] + "</option>";
    }
}

function siapkanFilter() {
    // Angkatan diurutkan dari yang terbaru
    const angkatan = nilaiUnik("angkatan").sort(function (a, b) { return b - a; });
    isiPilihan(pilihAngkatan, "Semua angkatan", angkatan);
    isiPilihan(pilihBidang, "Semua bidang", nilaiUnik("bidang").sort());
    isiPilihan(pilihKota, "Semua kota", nilaiUnik("kota").sort());

    // Chip program studi
    buatChip("semua", "Semua prodi", dataAlumni.length, false);
    for (const kode in dataProdi) {
        buatChip(kode, dataProdi[kode].nama, hitungProdi(kode), true);
    }

    lencanaTotal.textContent = dataAlumni.length + " alumni dari " +
                               Object.keys(dataProdi).length + " program studi";
}

function buatChip(kode, label, jumlah, adaLogo) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = adaLogo ? "chip" : "chip chip-teks";
    chip.dataset.prodi = kode;
    chip.setAttribute("aria-pressed", kode === "semua" ? "true" : "false");
    chip.innerHTML = (adaLogo ? htmlLogoBulat(kode) : "") + label +
                     ' <span class="jumlah">' + jumlah + "</span>";

    chip.addEventListener("click", function () {
        filter.prodi = kode;
        terapkanFilter();
    });

    grupProdi.appendChild(chip);
}

// ===== Membuat satu kartu alumni =====
function buatKartu(a) {
    const kartu = document.createElement("article");

    kartu.className = "kartu " + a.prodi;
    kartu.tabIndex = 0; // agar bisa disorot dengan keyboard

    kartu.innerHTML =
        '<div class="banner">' +
            '<span class="lencana-angkatan">Angkatan ' + a.angkatan + "</span>" +
            '<span class="logo-prodi"><img src="' + dataProdi[a.prodi].logo +
            '" alt="Logo ' + dataProdi[a.prodi].nama + '"></span>' +
        "</div>" +
        '<div class="avatar">' + ambilInisial(a.nama) + "</div>" +
        '<div class="isi">' +
            "<h2>" + a.nama + "</h2>" +
            '<p class="prodi">' + dataProdi[a.prodi].nama + "</p>" +
            '<ul class="info">' +
                "<li>" + IKON_KERJA + "<div><strong>" + a.pekerjaan + "</strong><span>" + a.tempat + "</span></div></li>" +
                "<li>" + IKON_LOKASI + "<div><span>" + a.kota + "</span></div></li>" +
            "</ul>" +
            '<p class="tag">' + a.bidang + "</p>" +
            '<p class="detail">"' + a.kutipan + '"</p>' +
        "</div>";

    // Efek hover: tambah kelas saat kursor/fokus masuk, hapus saat keluar
    kartu.addEventListener("mouseenter", function () { sorot(kartu); });
    kartu.addEventListener("mouseleave", function () { lepas(kartu); });
    kartu.addEventListener("focus", function () { sorot(kartu); });
    kartu.addEventListener("blur", function () { lepas(kartu); });

    return kartu;
}

function sorot(kartu) {
    kartu.classList.add("aktif");
    daftar.classList.add("ada-sorotan");
}

function lepas(kartu) {
    kartu.classList.remove("aktif");
    daftar.classList.remove("ada-sorotan");
}

// ===== Menampilkan semua kartu hasil filter =====
function tampilkan(data) {
    daftar.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        daftar.appendChild(buatKartu(data[i]));
    }
}

// ===== Memeriksa apakah ada filter yang aktif =====
function adaFilterAktif() {
    return filter.kata !== "" ||
           filter.prodi !== "semua" ||
           filter.angkatan !== "semua" ||
           filter.bidang !== "semua" ||
           filter.kota !== "semua";
}

// ===== Menerapkan semua filter + pengurutan =====
function terapkanFilter() {
    const kata = filter.kata.toLowerCase();

    let hasil = dataAlumni.filter(function (a) {
        const cocokKata =
            kata === "" ||
            a.nama.toLowerCase().includes(kata) ||
            dataProdi[a.prodi].nama.toLowerCase().includes(kata) ||
            a.pekerjaan.toLowerCase().includes(kata) ||
            a.tempat.toLowerCase().includes(kata);

        const cocokProdi = filter.prodi === "semua" || a.prodi === filter.prodi;
        const cocokAngkatan = filter.angkatan === "semua" || String(a.angkatan) === filter.angkatan;
        const cocokBidang = filter.bidang === "semua" || a.bidang === filter.bidang;
        const cocokKota = filter.kota === "semua" || a.kota === filter.kota;

        return cocokKata && cocokProdi && cocokAngkatan && cocokBidang && cocokKota;
    });

    // Pengurutan
    hasil.sort(function (a, b) {
        if (filter.urut === "baru" && a.angkatan !== b.angkatan) {
            return b.angkatan - a.angkatan;
        }
        if (filter.urut === "lama" && a.angkatan !== b.angkatan) {
            return a.angkatan - b.angkatan;
        }
        return a.nama.localeCompare(b.nama, "id");
    });

    tampilkan(hasil);
    perbaruiInfo(hasil.length);
    perbaruiChip();
}

function perbaruiInfo(jumlah) {
    const aktif = adaFilterAktif();

    if (jumlah === 0) {
        pesanKosong.hidden = false;
        infoHasil.textContent = "Tidak ada hasil.";
    } else {
        pesanKosong.hidden = true;
        if (aktif) {
            infoHasil.textContent = "Ditemukan " + jumlah + " dari " +
                                    dataAlumni.length + " alumni.";
        } else {
            infoHasil.textContent = "Menampilkan semua " + dataAlumni.length + " alumni.";
        }
    }

    tombolResetAtas.hidden = !aktif;
}

function perbaruiChip() {
    const semuaChip = grupProdi.querySelectorAll(".chip");
    for (let i = 0; i < semuaChip.length; i++) {
        const dipilih = semuaChip[i].dataset.prodi === filter.prodi;
        semuaChip[i].setAttribute("aria-pressed", dipilih ? "true" : "false");
    }
}

// ===== Mengatur ulang semua filter =====
function aturUlang() {
    filter.kata = "";
    filter.prodi = "semua";
    filter.angkatan = "semua";
    filter.bidang = "semua";
    filter.kota = "semua";
    filter.urut = "nama";

    kolomCari.value = "";
    pilihAngkatan.value = "semua";
    pilihBidang.value = "semua";
    pilihKota.value = "semua";
    pilihUrut.value = "nama";

    terapkanFilter();
}

// ===== Event listener =====
kolomCari.addEventListener("input", function () {
    filter.kata = kolomCari.value.trim();
    terapkanFilter();
});

pilihAngkatan.addEventListener("change", function () {
    filter.angkatan = pilihAngkatan.value;
    terapkanFilter();
});

pilihBidang.addEventListener("change", function () {
    filter.bidang = pilihBidang.value;
    terapkanFilter();
});

pilihKota.addEventListener("change", function () {
    filter.kota = pilihKota.value;
    terapkanFilter();
});

pilihUrut.addEventListener("change", function () {
    filter.urut = pilihUrut.value;
    terapkanFilter();
});

tombolReset.addEventListener("click", function () {
    aturUlang();
    kolomCari.focus();
});

tombolResetAtas.addEventListener("click", aturUlang);

// ===== Tampilan awal saat halaman dibuka =====
siapkanFilter();
terapkanFilter();
