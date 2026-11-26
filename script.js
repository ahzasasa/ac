document.addEventListener('DOMContentLoaded', () => {
    // nilai organisasi
    const skillsData = {
        inklusif: {
            title: 'INKLUSIF',
            desc: 'Menekankan pentingnya keterbukaan dan kesetaraan dalam memberikan ruang bagi seluruh elemen Himasta untuk berpartisipasi, berkontribusi, serta mengembangkan potensinya tanpa membatasi kesempatan terlibat dalam organisasi sehingga menjadi rumah bersama lintas angkatan.'
        },
        kolaboratif: {
            title: 'KOLABORATIF',
            desc: 'Menekankan kerja sama dan sinergi antaranggota maupun antarbidang melalui keterbukaan bertukar gagasan, pembagian peran proporsional, koordinasi efektif, serta menjalin kerja sama eksternal untuk dampak yang lebih luas.'
        },
        progresif: {
            title: 'PROGRESIF',
            desc: 'Semangat untuk terus berkembang, beradaptasi, dan melakukan pembaruan melalui keberanian mengevaluasi program kerja, terbuka terhadap kritik dan saran, serta menghadirkan inovasi yang relevan dengan kebutuhan mahasiswa.'
        },
        keberlanjutan: {
            title: 'KEBERLANJUTAN',
            desc: 'Menekankan kesinambungan dalam pengembangan SDM, sistem kerja, maupun pelaksanaan program melalui pengelolaan pengetahuan dan dokumentasi yang baik serta regenerasi terarah untuk generasi berikutnya.'
        }
    };

    const skillSlots = document.querySelectorAll('.skill-grid:not(#budayaGrid) .skill-slot');
    const skillTitle = document.getElementById('skillTitle');
    const skillDesc = document.getElementById('skillDesc');

    skillSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            skillSlots.forEach(s => s.classList.remove('active'));
            slot.classList.add('active');
            const key = slot.dataset.skill;
            if (skillsData[key] && skillTitle && skillDesc) {
                skillTitle.textContent = skillsData[key].title;
                skillDesc.textContent = skillsData[key].desc;
            }
        });
    });

    // budaya organisasi
    const budayaData = {
        keterbukaan: {
            title: 'KETERBUKAAN DAN KOMUNIKASI',
            desc: 'Budaya keterbukaan dan komunikasi menekankan pentingnya membangun hubungan organisasi yang dilandasi oleh kejujuran, kepercayaan, dan komunikasi dua arah. Budaya ini diwujudkan melalui keterbukaan dalam menyampaikan informasi, memberikan pendapat, menyampaikan kendala, serta menerima kritik dan saran dari seluruh elemen organisasi tanpa rasa takut dihakimi.'
        },
        kekeluargaan: {
            title: 'KEKELUARGAAN DAN SALING MERANGKUL',
            desc: 'Budaya kekeluargaan dan saling merangkul menekankan pentingnya menciptakan hubungan antaranggota yang harmonis, saling peduli, dan dilandasi rasa memiliki terhadap organisasi. Budaya ini diwujudkan melalui sikap saling mengenal, menghargai, mendukung, serta memberikan perhatian terhadap kondisi dan kebutuhan sesama anggota, baik dalam lingkup bidang maupun lintas bidang.'
        },
        profesionalitas: {
            title: 'PROFESIONALITAS DAN TANGGUNG JAWAB',
            desc: 'Budaya profesionalitas dan tanggung jawab menekankan pentingnya kesungguhan setiap anggota dalam menjalankan amanah dan peran yang diberikan. Budaya ini diwujudkan melalui kedisiplinan dalam memenuhi tanggung jawab, ketepatan waktu, komitmen terhadap kesepakatan, serta kemampuan untuk menyelesaikan tugas sesuai dengan standar yang telah ditetapkan.'
        },
        evaluatif: {
            title: 'EVALUATIF DAN ADAPTIF',
            desc: 'Budaya evaluatif dan adaptif menekankan pentingnya menjadikan setiap proses dan pengalaman organisasi sebagai bahan pembelajaran untuk melakukan perbaikan. Budaya ini diwujudkan melalui pelaksanaan evaluasi secara berkala, keterbukaan dalam menerima masukan, serta kemampuan untuk menyesuaikan strategi dan cara kerja terhadap perubahan situasi maupun kebutuhan organisasi.'
        }
    };

    const budayaSlots = document.querySelectorAll('#budayaGrid .skill-slot');
    const budayaTitle = document.getElementById('budayaTitle');
    const budayaDesc = document.getElementById('budayaDesc');

    budayaSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            budayaSlots.forEach(s => s.classList.remove('active'));
            slot.classList.add('active');
            const key = slot.dataset.budaya;
            if (budayaData[key] && budayaTitle && budayaDesc) {
                budayaTitle.textContent = budayaData[key].title;
                budayaDesc.textContent = budayaData[key].desc;
            }
        });
    });

    // misi
    const misiData = [
        {
            title: 'PENJABARAN MISI INTERNAL',
            body: 'Membangun internal organisasi yang solid melalui komunikasi dua arah yang terbuka dan efektif antaranggota maupun antarbidang, memperkuat koordinasi melalui mekanisme kerja yang terstruktur dan evaluasi secara berkala, serta menumbuhkan rasa kekeluargaan melalui lingkungan organisasi yang suportif dan saling menghargai. Selain itu, mendorong peningkatan profesionalitas dan integritas anggota dengan memperjelas tanggung jawab dan kedisiplinan.'
        },
        {
            title: 'PENJABARAN MISI INKLUSIF & ASPIRATIF',
            body: 'Menciptakan lingkungan organisasi yang terbuka dan inklusif dengan memberikan kesempatan setara bagi seluruh mahasiswa Statistika untuk berpartisipasi, mengoptimalkan sarana penyampaian aspirasi yang mudah diakses dan responsif, membangun ruang dialog lintas angkatan, serta mengupayakan tindak lanjut aspirasi secara transparan dan bertanggung jawab.'
        },
        {
            title: 'PENJABARAN MISI PROGRAM INOVATIF',
            body: 'Mendorong pengembangan program kerja relevan di bidang akademik, keilmuan, minat bakat, dan kompetensi diri, mengoptimalkan kolaborasi antarbidang, membangun kemitraan internal maupun eksternal, serta melakukan evaluasi berkala dan memperkuat dokumentasi transfer pengetahuan antarkepengurusan.'
        }
    ];

    document.querySelectorAll('.btn-misi-detail').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.target.dataset.misi, 10);
            if (misiData[idx]) {
                openModal(misiData[idx].title, `<p>${misiData[idx].body}</p>`);
            }
        });
    });

    // output program: 100 Hari Kerja, Unggulan, Inovasi
    const programStages = [
        {
            tier: 'PROGRAM 1 / 3',
            name: 'PROGRAM 100 HARI KERJA',
            summary: 'Langkah awal konsolidasi internal pengurus, peluncuran kanal aspirasi terbuka, dan sinkronisasi arahan kerja bidang di 100 hari pertama.',
            detail: 'Merupakan komponen wajib dalam GDO Arunika Cakrawala yang berfokus pada penyelarasan ritme kerja internal pengurus, pembukaan kanal dialog mahasiswa lintas angkatan, dan pemetaan isu prioritas awal periode.'
        },
        {
            tier: 'PROGRAM 2 / 3',
            name: 'PROGRAM UNGGULAN KABINET',
            summary: 'Program besar lintas bidang untuk mengakselerasi potensi akademik, keilmuan, minat bakat, dan kesiapan karier mahasiswa Statistika.',
            detail: 'Dirancang dengan mengoptimalkan kolaborasi antarbidang dan kemitraan eksternal agar memberikan dampak luas bagi pengembangan kapasitas mahasiswa Statistika UNDIP.'
        },
        {
            tier: 'PRROGRAM 3 / 3',
            name: 'PROGRAM KERJA INOVASI',
            summary: 'Terobosan baru berbasis evaluasi periode sebelumnya untuk memperkuat sistem dokumentasi, transfer pengetahuan, dan layanan advokasi.',
            detail: 'Lahir dari hasil analisis SWOT (IFAS/EFAS) guna menjawab celah komunikasi dan pemerataan kesempatan yang belum optimal pada kepengurusan sebelumnya.'
        }
    ];

    let progIndex = 0;
    const progTier = document.getElementById('progTier');
    const progName = document.getElementById('progName');
    const progSummary = document.getElementById('progSummary');
    const progRewards = document.getElementById('progRewards');

    function updateConsole(idx) {
        const p = programStages[idx];
        if (!p || !progTier) return;
        progTier.textContent = p.tier;
        progName.textContent = p.name;
        progSummary.textContent = p.summary;
        progRewards.innerHTML = p.rewards.map(r => `<span>${r}</span>`).join('');
    }

    const prevProgBtn = document.getElementById('prevProg');
    const nextProgBtn = document.getElementById('nextProg');

    if (prevProgBtn) {
        prevProgBtn.addEventListener('click', () => {
            progIndex = (progIndex - 1 + programStages.length) % programStages.length;
            updateConsole(progIndex);
        });
    }

    if (nextProgBtn) {
        nextProgBtn.addEventListener('click', () => {
            progIndex = (progIndex + 1) % programStages.length;
            updateConsole(progIndex);
        });
    }

    // modal dialog
    const modal = document.getElementById('retroModal');
    const modalHeading = document.getElementById('modalHeading');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.getElementById('closeModal');

    function openModal(title, html) {
        if (!modal) return;
        modalHeading.textContent = title;
        modalContent.innerHTML = html;
        modal.classList.add('active');
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // cita dan asa
    const openCitaBtn = document.getElementById('openCitaBtn');
    if (openCitaBtn) {
        openCitaBtn.addEventListener('click', () => {
            openModal(
                'CITA & ASA',
                `<p>Himasta merupakan ruang bagi mahasiswa Statistika untuk bertumbuh, berproses, dan menciptakan kebermanfaatan bersama. Berbagai pencapaian dan nilai kekeluargaan yang telah dibangun menjadi fondasi berharga bagi perjalanan organisasi ini. Namun, masih terdapat ruang untuk berkembang, baik dalam penguatan komunikasi, kolaborasi, pemerataan kesempatan, maupun inovasi yang mampu menjawab kebutuhan mahasiswa Statistika.</p>
                 <p>Kami percaya bahwa setiap tantangan merupakan kesempatan untuk berbenah dan bertumbuh. <strong>Arunika Cakrawala</strong> hadir sebagai representasi semangat awal yang membawa harapan untuk melangkah lebih jauh. Arunika melambangkan cahaya fajar sebagai simbol permulaan dan optimisme, sementara Cakrawala menggambarkan luasnya kesempatan untuk berkembang dan menatap masa depan.</p>
                 <p>Cita kami adalah mewujudkan Himasta sebagai organisasi yang inklusif, kolaboratif, dan progresif dalam mengembangkan potensi mahasiswa Statistika serta menciptakan kebermanfaatan yang berkelanjutan. Asa kami adalah membangun organisasi yang solid, membuka ruang bagi setiap gagasan, memperkuat sinergi, dan menghadirkan perubahan nyata yang dapat dirasakan hingga generasi berikutnya.</p>
                 <p>Kami percaya bahwa Himasta bukan tentang siapa yang menjadi cahaya paling terang, melainkan bagaimana setiap individu dapat saling menguatkan dan menerangi ruang yang lebih luas. Sebab, perubahan yang bermakna tidak dibangun oleh satu orang, tetapi oleh kita yang memilih untuk bergerak dan bertumbuh bersama.</p>
                 <p><strong>Arunika Cakrawala: Bertumbuh Bersama, Menyinari Sesama.</strong></p>`
            );
        });
    }

    // detail output program
    const openProgDetailBtn = document.getElementById('openProgDetail');
    if (openProgDetailBtn) {
        openProgDetailBtn.addEventListener('click', () => {
            const cur = programStages[progIndex];
            openModal(cur.name, `<p>${cur.detail}</p>`);
        });
    }

    // modal analisis SWOT
    const openSwotModalBtn = document.getElementById('openSwotModal');
    if (openSwotModalBtn) {
        openSwotModalBtn.addEventListener('click', () => {
            openModal(
                'ANALISIS SWOT (IFAS & EFAS)',
                `<p>Evaluasi strategis meliputi <strong>Strengths, Weaknesses, Opportunities, dan Threats</strong> pada Himasta Undip.</p>
                 <p><strong>Bobot Kepentingan (1–5):</strong><br>
                 [1] Tidak Penting • [2] Kurang Penting • [3] Cukup Penting • [4] Penting • [5] Sangat Penting</p>
                 <p><strong>Tingkat Pengaruh Faktor (1–4):</strong><br>
                 [1] Berpengaruh Internal • [2] Sangat Berpengaruh Internal • [3] Internal & Eksternal • [4] Sangat Berpengaruh Internal & Eksternal</p>`
            );
        });
    }

    // modal aspirasi
    const openAspirasiModalBtn = document.getElementById('openAspirasiModal');
    if (openAspirasiModalBtn) {
        openAspirasiModalBtn.addEventListener('click', () => {
            openModal(
                'ASPIRASI UNTUK HIMASTA 2027',
                `<form id="rpgAspirasiForm">
                    <label>NAMA / ANGKATAN (OPSIONAL):</label>
                    <input type="text" class="retro-input" placeholder="Misal: Faris 2025">
                    <label>PESAN / IDE / ASPIRASI:</label>
                    <textarea class="retro-textarea" rows="4" required placeholder="Ketik aspirasimu untuk Himasta 2027"></textarea>
                    <button type="submit" class="pixel-btn btn-gold btn-full">KIRIM ASPIRASI</button>
                </form>`
            );

            const form = document.getElementById('rpgAspirasiForm');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    modalContent.innerHTML = `<p><strong>TERIMA KASIH, YA!</strong><br>Aspirasimu berhasil disimpan ke dalam catatan Arunika Cakrawala. Terima kasih telah ikut menyinari sesama!</p>`;
                });
            }
        });
    }

    // filter kategori halaman PROKER
    const prokerFilterBtns = document.querySelectorAll('#prokerFilter .pixel-btn');
    const prokerCards = document.querySelectorAll('#prokerGrid .proker-card');

    prokerFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            prokerFilterBtns.forEach(b => {
                b.classList.remove('active', 'btn-gold');
                b.classList.add('btn-cream');
            });
            btn.classList.add('active', 'btn-gold');
            btn.classList.remove('btn-cream');

            const cat = btn.dataset.cat;
            prokerCards.forEach(card => {
                if (cat === 'all' || card.dataset.cat === cat) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});