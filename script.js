const story = {
    start: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Matematik evrenin dilidir derler... Ama senin o yeşil gözlerin hiçbir dilde konuşmuyor, Lara.",
        next: "node1"
    },
    node1: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Okulun en popüler çocuğu Kaan, kütüphanenin bu ıssız köşesinde beni nasıl buldu?)",
        choices: [
            { text: "Onu görmezden gel ve kütüphaneden çık", target: "ending_alone_happy" },
            { text: "Ona gülümse ve yanına oturmasına izin ver", target: "date_1" }
        ]
    },

    // ----------------------------------------------------
    // SON 2: HİÇ TANIŞMADILAR (BAĞIMSIZ VE MUTLU)
    // ----------------------------------------------------
    ending_alone_happy: {
        bg: "/assets/library_bg_1778962737349.png",
        speaker: "Lara",
        text: "Kaan'ı duymazdan geldin. Kitaplarını toplayıp oradan ayrıldın. Kaan senin hayatına hiç girmedi.",
        next: "ending_alone_happy_2"
    },
    ending_alone_happy_2: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Lara",
        text: "MUTLU SON (Bağımsızlık): Yıllar geçti. Lara, kimseye boyun eğmeden, sadece kendi zekasıyla dünyanın en büyük yazılım şirketlerinden birini kurdu. Zirvede tek başına ama çok mutluydu.",
        end: true
    },

    // ----------------------------------------------------
    // DATE SERİSİ (EN AZ 10 DATE)
    // ----------------------------------------------------
    date_1: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "1. BULUŞMA: Bana bir şans verdiğin için teşekkürler Lara. Seninle sadece ders çalışmak bile güzel.",
        next: "date_2"
    },
    date_2: {
        bg: "/assets/garden_bg_1778962904703.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "2. BULUŞMA: (Okul Bahçesi) Bugün hava harika. Seninle çimlerde oturup bulutları izlemek beni rahatlatıyor.",
        next: "date_3"
    },
    date_3: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "3. BULUŞMA: (Boş Sınıf) Herkes gittikten sonra burada baş başa kalıp müzik dinlemek... Sanırım favori aktivitem oldu.",
        next: "date_4"
    },
    date_4: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "4. BULUŞMA: (Hafta Sonu Kütüphanesi) Lara, sen okurken gözlerinin daldığı o anları izlemeye bayılıyorum.",
        next: "date_5"
    },
    date_5: {
        bg: "/assets/garden_bg_1778962904703.png",
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "5. BULUŞMA: (Piknik) Aaa! Kaan ve Lara? Siz ne zamandır böylesiniz? Lara, sen Kaan'ı sadece statüsü için kullanmıyor musun canım?",
        next: "date_5_choice"
    },
    date_5_choice: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Eylül yine zehrini saçıyor. Ne yapmalıyım?)",
        choices: [
            { text: "Kaan'ı savun ve Eylül'ü kov", target: "date_6" },
            { text: "Eylül'e hak ver ve içindeki karanlığı seç", target: "ending_ambition" }
        ]
    },

    // ----------------------------------------------------
    // SON 4: KARANLIK HIRS (EYLÜL GİBİ OLMAK)
    // ----------------------------------------------------
    ending_ambition: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "'Aslında haklısın Eylül, güç her şeydir.' dedin. Kaan bunu duyduğunda yıkıldı.",
        next: "ending_ambition_2"
    },
    ending_ambition_2: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Lara",
        text: "TRAJİK SON (Karanlık Hırs): Lara, masumiyetini kaybetti. Manipülatif biri oldu. Zengin ve başarılıydı ama etrafında ona gerçekten değer veren tek bir kişi bile kalmamıştı. Tamamen yalnızdı.",
        end: true
    },

    // ----------------------------------------------------
    // DATE SERİSİ DEVAM (6 - 10)
    // ----------------------------------------------------
    date_6: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "6. BULUŞMA: Beni Eylül'e karşı savunduğun için teşekkürler Lara. Sana olan güvenim sonsuz.",
        next: "date_7"
    },
    date_7: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "7. BULUŞMA: (Yağmurlu Bir Gün) Dışarıda yağmur yağıyor ama senin yanındayken içim hep ısınıyor.",
        next: "date_8"
    },
    date_8: {
        bg: "/assets/garden_bg_1778962904703.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "8. BULUŞMA: (Gün Batımı) Lara, bugün seninle ilk tanıştığımız günü düşündüm de... İyi ki o masaya oturmuşum.",
        next: "date_9"
    },
    date_9: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "9. BULUŞMA: Mezuniyet yaklaşıyor. Gelecek hakkında çok planım var. Hepsinin merkezinde sen varsın.",
        next: "date_10"
    },
    date_10: {
        bg: "/assets/garden_bg_1778962904703.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "10. BULUŞMA: (Büyük İtiraf) Lara... Seni çok seviyorum. Ama sana söylemem gereken çok karanlık bir sırrım var.",
        next: "date_10_choice"
    },
    date_10_choice: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Kaan'ın gözlerinde korkutucu bir gölge var. Bu sırra hazır mıyım?)",
        choices: [
            { text: "Ona güven, elini sıkıca tut", target: "ending_happy_love" },
            { text: "Korkuya kapıl ve onu sorgula", target: "ending_betrayal" }
        ]
    },

    // ----------------------------------------------------
    // SON 1: MUTLU SON (AŞK VE GÜVEN)
    // ----------------------------------------------------
    ending_happy_love: {
        bg: "/assets/garden_bg_1778962904703.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Beni hatalarımla kabul ettiğin için teşekkürler Lara. Hayatım boyunca seni koruyacağım.",
        next: "ending_happy_love_2"
    },
    ending_happy_love_2: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Lara",
        text: "MUTLU SON (Sonsuz Aşk): Lara ve Kaan tüm karanlık sırları aşarak evlendiler. Beraber bir teknoloji imparatorluğu kurup hayatlarının sonuna kadar mutlu yaşadılar.",
        end: true
    },

    // ----------------------------------------------------
    // SON 3: TRAJİK İHANET (KALP KIRIKLIĞI)
    // ----------------------------------------------------
    ending_betrayal: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Bana güvenmiyorsun demek... Tıpkı diğerleri gibi. Aslında sana oynadığım bir oyundu bu Lara. Eylül haklıydı.",
        next: "ending_betrayal_2"
    },
    ending_betrayal_2: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Lara",
        text: "TRAJİK SON (İhanet): Kaan'ın acımasız ihaneti Lara'nın ruhunda kapanmaz yaralar açtı. Lara o günden sonra bir daha kimseye güvenemedi ve gölgelere geri döndü.",
        end: true
    }
};

let currentNode = "start";
let typewriterTimeout = null;
let isTyping = false;

document.addEventListener("DOMContentLoaded", () => {
    const bgLayer = document.getElementById('bg-layer');
    const charSprite = document.getElementById('char-sprite');
    const speakerName = document.getElementById('speaker-name');
    const dialogueText = document.getElementById('dialogue-text');
    const dialogueBox = document.getElementById('dialogue-box');
    const choicesContainer = document.getElementById('choices-container');
    const startScreen = document.getElementById('start-screen');
    const startBtn = document.getElementById('start-btn');

    startBtn.addEventListener('click', startGame);
    dialogueBox.addEventListener('click', advanceStory);

    function startGame() {
        startScreen.style.display = 'none';
        currentNode = "start";
        renderNode();
    }

    function renderNode() {
        const node = story[currentNode];
        
        // Arka plan güncelleme
        if (node.bg !== undefined) {
            if (node.bg === "") {
                bgLayer.style.backgroundImage = "none";
                bgLayer.style.backgroundColor = "black";
            } else {
                bgLayer.style.backgroundImage = `url('${node.bg}')`;
            }
        }
        
        // Karakter güncelleme
        if (node.char !== undefined) {
            if (node.char === "") {
                charSprite.style.display = "none";
            } else {
                charSprite.src = node.char;
                charSprite.style.display = "block";
            }
        }
        
        // İsim kutusu
        if (node.speaker) {
            speakerName.textContent = node.speaker;
            speakerName.style.display = "block";
        } else {
            speakerName.style.display = "none";
        }
        
        // Metin daktilo efekti
        typeWriter(node.text, 0);
        
        // Seçenekler veya ilerleme
        if (node.choices) {
            choicesContainer.innerHTML = "";
            node.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = "choice-btn";
                btn.textContent = choice.text;
                btn.onclick = (e) => {
                    e.stopPropagation();
                    makeChoice(choice.target);
                };
                choicesContainer.appendChild(btn);
            });
            choicesContainer.style.display = "flex";
            document.getElementById('next-indicator').style.display = 'none';
        } else {
            choicesContainer.style.display = "none";
            if (node.end) {
                document.getElementById('next-indicator').style.display = 'none';
            } else {
                document.getElementById('next-indicator').style.display = 'block';
            }
        }
    }

    function typeWriter(text, index) {
        if (index === 0) {
            isTyping = true;
            if (typewriterTimeout) clearTimeout(typewriterTimeout);
            dialogueText.innerHTML = "";
        }
        if (index < text.length) {
            dialogueText.innerHTML += text.charAt(index);
            typewriterTimeout = setTimeout(() => typeWriter(text, index + 1), 20);
        } else {
            isTyping = false;
        }
    }

    function advanceStory() {
        const node = story[currentNode];
        if (isTyping) {
            // Eğer yazı yazılıyorsa hemen tamamla
            if (typewriterTimeout) clearTimeout(typewriterTimeout);
            dialogueText.innerHTML = node.text;
            isTyping = false;
            return;
        }
        if (node.choices || node.end) return; // Seçenek varsa veya son ise tıklama ile ilerleme
        
        if (node.next) {
            currentNode = node.next;
            renderNode();
        }
    }

    function makeChoice(targetNode) {
        currentNode = targetNode;
        renderNode();
    }
});
