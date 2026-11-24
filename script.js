document.addEventListener('DOMContentLoaded', () => {
    let sfxEnabled = true;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    let audioCtx = null;

    function playBeep(freq = 520, duration = 0.1, type = 'square') {
        if (!sfxEnabled) return;
        try {
            if (!audioCtx) {
                audioCtx = new AudioCtx();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            
            gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            console.error('Audio error:', e);
        }
    }

    const soundToggle = document.getElementById('soundToggle');
    soundToggle.addEventListener('click', () => {
        sfxEnabled = !sfxEnabled;
        soundToggle.textContent = sfxEnabled ? 'SFX: ON' : 'SFX: OFF';
        if (sfxEnabled) playBeep(660, 0.08);
    });

    document.querySelectorAll('.sfx-btn').forEach(btn => {
        btn.addEventListener('click', () => playBeep(580, 0.05));
    });

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
            title: 'NILAI 03: PROGRESIF',
            desc: 'Semangat untuk terus berkembang, beradaptasi, dan melakukan pembaruan melalui keberanian mengevaluasi program kerja, terbuka terhadap kritik dan saran, serta menghadirkan inovasi yang relevan dengan kebutuhan mahasiswa.'
        },
        keberlanjutan: {
            title: 'NILAI 04: KEBERLANJUTAN',
            desc: 'Menekankan kesinambungan dalam pengembangan SDM, sistem kerja, maupun pelaksanaan program melalui pengelolaan pengetahuan dan dokumentasi yang baik serta regenerasi terarah untuk generasi berikutnya.'
        }
    };

    const skillSlots = document.querySelectorAll('.skill-slot');
    const skillTitle = document.getElementById('skillTitle');
    const skillDesc = document.getElementById('skillDesc');

    skillSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            skillSlots.forEach(s => s.classList.remove('active'));
            slot.classList.add('active');
            const key = slot.dataset.skill;
            skillTitle.textContent = skillsData[key].title;
            skillDesc.textContent = skillsData[key].desc;
            playBeep(740, 0.07);
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
            budayaTitle.textContent = budayaData[key].title;
            budayaDesc.textContent = budayaData[key].desc;
            playBeep(740, 0.07);
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
            openModal(misiData[idx].title, `<p>${misiData[idx].body}</p>`);
        });
    });

    // output program
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
            tier: 'PROGRAM 3 / 3',
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
        progTier.textContent = p.tier;
        progName.textContent = p.name;
        progSummary.textContent = p.summary;
        progRewards.innerHTML = p.rewards.map(r => `<span>${r}</span>`).join('');
    }

    document.getElementById('prevProg').addEventListener('click', () => {
        progIndex = (progIndex - 1 + programStages.length) % programStages.length;
        updateConsole(progIndex);
    });

    document.getElementById('nextProg').addEventListener('click', () => {
        progIndex = (progIndex + 1) % programStages.length;
        updateConsole(progIndex);
    });

    // modal dialog system
    const modal = document.getElementById('retroModal');
    const modalHeading = document.getElementById('modalHeading');
    const modalContent = document.getElementById('modalContent');

    function openModal(title, html) {
        modalHeading.textContent = title;
        modalContent.innerHTML = html;
        modal.classList.add('active');
        playBeep(820, 0.08);
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    document.getElementById('closeModal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.getElementById('openCitaBtn').addEventListener('click', () => {
        openModal(
            'CITA & ASA',
            `<p>Himasta merupakan ruang bagi mahasiswa Statistika untuk bertumbuh, berproses, dan menciptakan kebermanfaatan bersama.</p>
             <p><strong>Arunika Cakrawala</strong> hadir sebagai representasi semangat awal yang membawa harapan untuk melangkah lebih jauh. Arunika melambangkan cahaya fajar sebagai simbol permulaan dan optimisme, sementara Cakrawala menggambarkan luasnya kesempatan untuk berkembang dan menatap masa depan.</p>
             <p>Asa kami adalah membangun organisasi yang solid, membuka ruang bagi setiap gagasan, memperkuat sinergi, dan menghadirkan perubahan nyata yang dapat dirasakan hingga generasi berikutnya.</p>
             <p><strong>“Arunika Cakrawala: Bertumbuh Bersama, Menyinari Sesama.”</strong></p>`
        );
    });

    document.getElementById('openProgDetail').addEventListener('click', () => {
        const cur = programStages[progIndex];
        openModal(cur.name, `<p>${cur.detail}</p>`);
    });

    document.getElementById('openSwotModal').addEventListener('click', () => {
        openModal(
            'ANALISIS SWOT (IFAS & EFAS)',
            `<p>Evaluasi strategis meliputi <strong>Strengths, Weaknesses, Opportunities, dan Threats</strong> pada Himasta Undip.</p>
             <p><strong>Bobot Kepentingan (1–5):</strong><br>
             [1] Tidak Penting • [2] Kurang Penting • [3] Cukup Penting • [4] Penting • [5] Sangat Penting</p>
             <p><strong>Tingkat Pengaruh Faktor (1–4):</strong><br>
             [1] Berpengaruh Internal • [2] Sangat Berpengaruh Internal • [3] Internal & Eksternal • [4] Sangat Berpengaruh Internal & Eksternal</p>`
        );
    });

    document.getElementById('openAspirasiModal').addEventListener('click', () => {
        openModal(
            'ASPIRASI HIMASTA 2027',
            `<form id="rpgAspirasiForm">
                <label>NAMA / ANGKATAN (OPSIONAL):</label>
                <input type="text" class="retro-input" placeholder="Misal: Ahza 25">
                <label>PESAN / IDE / ASPIRASI:</label>
                <textarea class="retro-textarea" rows="4" required placeholder="Ketik aspirasimu untuk Himasta 2027"></textarea>
                <button type="submit" class="pixel-btn btn-gold btn-full">SAVE &amp; KIRIM ASPIRASI</button>
            </form>`
        );

        document.getElementById('rpgAspirasiForm').addEventListener('submit', (e) => {
            e.preventDefault();
            playBeep(980, 0.12);
            modalContent.innerHTML = `<p><strong>UPDATED!</strong><br>Aspirasimu berhasil disimpan ke dalam catatan Arunika Cakrawala. Terima kasih telah ikut menyinari sesama!</p>`;
        });
    });
});