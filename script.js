let anxietyLevel = 20;

const story = {
    start: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "",
        speaker: "",
        text: "GÖLGELERDEN ZİRVEYE: 15 BÖLÜMLÜK TAM SÜRÜM\nAnksiyete Barına dikkat et! 70'i geçerse Lara panik atak geçirir.",
        choices: [
            { text: "Oyuna Başla", target: "ep1_1", anxietyChange: 0 }
        ]
    },

    // ==========================================
    // BÖLÜM 1: Yeni Başlangıçların Ağırlığı
    // ==========================================
    ep1_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Bölüm 1) Yeni bir okul. Kalbim göğüs kafesimi delecek gibi atıyor. Eski okulumdaki o travmatik zorbalıklardan kaçıp buraya geldim ama... ya burada da aynısı olursa?",
        next: "ep1_2"
    },
    ep1_2: {
        speaker: "Sistem",
        text: "Kantine girerken ellerin titriyor. Birinin sana baktığını hissediyorsun.",
        choices: [
            { text: "Derin nefes al ve yürümeye devam et", target: "ep1_3a", anxietyChange: -10 },
            { text: "Panikleyip adımlarını hızlandır", target: "ep1_3b", anxietyChange: +20 }
        ]
    },
    ep1_3a: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "Sakin ol Lara. Kimse sana bakmıyor. Sadece kahveni alacaksın...",
        next: "ep2_1"
    },
    ep1_3b: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "Bana bakıyorlar, gülümsüyorlar! Hızlanmalıyım!",
        next: "ep2_1"
    },

    // ==========================================
    // BÖLÜM 2: Beklenmedik Çarpışma
    // ==========================================
    ep2_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "(Bölüm 2) Hızla köşeyi dönerken sert birine çarparsın. Elindeki kahve çocuğun üzerine dökülür.",
        next: "ep2_2"
    },
    ep2_2: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Ne yaptığını sanıyorsun sen! Görmüyor musun önünü?",
        choices: [
            { text: "Özür dileyip geri çekil", target: "ep2_3a", anxietyChange: +15 },
            { text: "Donup kal", target: "ep2_3b", anxietyChange: +30 }
        ]
    },
    ep2_3a: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "Ç-Çok özür dilerim...",
        next: "ep3_1"
    },
    ep2_3b: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Konuşamıyorum... Boğazım düğümlendi. Sadece gözlerine bakıyorum.)",
        next: "ep3_1"
    },

    // ==========================================
    // BÖLÜM 3: Ares'in Gelişi
    // ==========================================
    ep3_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Sistem",
        text: "(Bölüm 3) Bahçeye kaçtın. Gözyaşlarını silerken yanına biri oturur.",
        next: "ep3_2"
    },
    ep3_2: {
        char: "", // Ares'in resmi olmadığı için boş veya başka bir sprite kullanılabilir
        speaker: "Ares",
        text: "Kaan hep öyledir, kafana takma. Ben Ares bu arada. Sen şu yeni gelen kız olmalısın, Lara değil mi?",
        next: "ep3_3"
    },
    ep3_3: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "Evet... Tanıştığıma memnun oldum Ares. Ama yalnız kalmak istiyorum.",
        next: "ep4_1"
    },

    // ==========================================
    // BÖLÜM 4: Eylül'ün Gölgesi
    // ==========================================
    ep4_1: {
        bg: "/assets/library_bg_1778962737349.png",
        speaker: "Sistem",
        text: "(Bölüm 4) Kütüphanede ders çalışırken karşındaki sandalyeye güzel bir kız oturur.",
        next: "ep4_2"
    },
    ep4_2: {
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "Merhaba tatlım. Ben Eylül. Kaan'ın en yakın arkadaşı. Sabahki olay için geldim. Kaan'dan uzak durursan okul hayatın çok daha kolay olur.",
        choices: [
            { text: "Sesini çıkarma, kabul et", target: "ep4_3a", anxietyChange: +20 },
            { text: "Bana emir veremezsin de", target: "ep4_3b", anxietyChange: -5 }
        ]
    },
    ep4_3a: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "Peki... Anladım.",
        next: "ep5_1"
    },
    ep4_3b: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "Ben kimseden uzak durmam. O bana çarptı.",
        next: "ep5_1"
    },

    // ==========================================
    // BÖLÜM 5: Gece Mesajı
    // ==========================================
    ep5_1: {
        bg: "/assets/library_bg_1778962737349.png",
        speaker: "Sistem",
        text: "(Bölüm 5) O gece telefonuna bir mesaj gelir. Kaan numaranı bulmuş ve senden o sabahki çıkışı için özür dilemiştir.",
        next: "ep5_2"
    },
    ep5_2: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan (Mesaj)",
        text: "'Uyuyor musun? Sabah için üzgünüm. Biraz stresliydim.'",
        choices: [
            { text: "Affet ve sohbete başla", target: "ep6_1", anxietyChange: -10 },
            { text: "Görüldü at ve telefonu kapat", target: "ep6_1", anxietyChange: +10 }
        ]
    },

    // ==========================================
    // BÖLÜM 6: Ares'in İtirafı
    // ==========================================
    ep6_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Sistem",
        text: "(Bölüm 6) Ertesi gün bahçede Ares yanına gelir.",
        next: "ep6_2"
    },
    ep6_2: {
        char: "",
        speaker: "Ares",
        text: "Lara, seni ilk gördüğümden beri aklımdan çıkaramıyorum. Biliyorum çok erken ama... Senden çok hoşlanıyorum.",
        choices: [
            { text: "Nazikçe reddet (Ben başkasından hoşlanıyorum)", target: "ep6_3", anxietyChange: +10 },
            { text: "Kibarca zaman iste", target: "ep6_3", anxietyChange: +5 }
        ]
    },
    ep6_3: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Ares çok iyi biri. Ama kalbim ona ait değil. Kaan'ın o karanlık gözleri varken...)",
        next: "ep7_1"
    },

    // ==========================================
    // BÖLÜM 7: Kaan ile Çatıda
    // ==========================================
    ep7_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "(Bölüm 7) Ares'i reddettikten sonra bunalmış bir şekilde çatıya çıkarsın. Kaan oradadır.",
        next: "ep7_2"
    },
    ep7_2: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Ares'le konuşmanı gördüm. Neden onu reddettin? Çok iyi çocuktur.",
        choices: [
            { text: "Çünkü aklımda sen varsın de", target: "ep7_3a", anxietyChange: +25 },
            { text: "Aşka inancım yok de", target: "ep7_3b", anxietyChange: -5 }
        ]
    },
    ep7_3a: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "...Sen tehlikeli sularda yüzüyorsun küçük kız.",
        next: "ep8_1"
    },
    ep7_3b: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Haklısın. Aşk sadece zayıflıktır.",
        next: "ep8_1"
    },

    // ==========================================
    // BÖLÜM 8: Dörtgen Daralıyor
    // ==========================================
    ep8_1: {
        bg: "/assets/library_bg_1778962737349.png",
        speaker: "Sistem",
        text: "(Bölüm 8) Ares pes etmez ve sana çiçek alır. Kaan bunu görünce sinirlenir, Eylül ise Kaan'ın kıskanmasından delirir.",
        next: "ep8_2"
    },
    ep8_2: {
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "Lara, oyun mu oynuyorsun? Hem Ares'i peşinden koşturuyor hem de Kaan'a bakıyorsun!",
        choices: [
            { text: "Sus ve oradan kaç", target: "ep9_1", anxietyChange: +30 },
            { text: "Kendini savun", target: "ep9_1", anxietyChange: +15 }
        ]
    },

    // ==========================================
    // BÖLÜM 9: Panik Sınırı
    // ==========================================
    ep9_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Bölüm 9) Nefes alamıyorum... Eski okuldaki herkesin üzerime geldiği o gün gibi... Her şey tekrar ediyor!",
        next: "ep10_1"
    },

    // ==========================================
    // BÖLÜM 10: Ares'in İhaneti
    // ==========================================
    ep10_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Sistem",
        text: "(Bölüm 10) Ares, onu reddettiğin için öfkelenip Eylül ile işbirliği yapar. Okula senin sırlarını yayarlar.",
        choices: [
            { text: "Yıkıl ve ağla", target: "ep11_1", anxietyChange: +35 },
            { text: "Güçlü durmaya çalış", target: "ep11_1", anxietyChange: +20 }
        ]
    },

    // ==========================================
    // BÖLÜM 11, 12, 13, 14, 15... Hızlı Akış
    // ==========================================
    ep11_1: {
        bg: "/assets/library_bg_1778962737349.png",
        speaker: "Sistem",
        text: "(Bölüm 11) Kaan sırların yayıldığını duyar. Senin yanına gelir. 'Bunlar doğru mu?' diye sorar.",
        choices: [
            { text: "Ağlayarak anlat", target: "ep12_1", anxietyChange: +10 },
            { text: "Korkuyla yalan söyle", target: "ep12_1", anxietyChange: +25 }
        ]
    },
    ep12_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Sistem",
        text: "(Bölüm 12) Kaan, Ares'in ve Eylül'ün yalan söylediğini anlar. Gidip onlarla yüzleşir.",
        next: "ep13_1"
    },
    ep13_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "(Bölüm 13) Kaan ve Ares arasında büyük bir kavga çıkar. Lara araya girmeye çalışır.",
        choices: [
            { text: "Kaan'ı korumak için önüne geç", target: "ep14_1", anxietyChange: +20 },
            { text: "Köşede titreyerek izle", target: "ep14_1", anxietyChange: +30 }
        ]
    },
    ep14_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "(Bölüm 14) Kavga biter. Ares uzaklaştırılır. Eylül pişman olur. Kaan yanına gelir ve ellerini tutar.",
        next: "ep15_1"
    },
    ep15_1: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Bölüm 15 - FİNAL) Tüm o travmalar, anksiyete, karanlık geçmiş... Hepsi Kaan'ın bana 'Buradayım, güvendesin' deyişiyle silinip gitti.",
        next: "ep_end"
    },
    ep_end: {
        speaker: "Sistem",
        text: "MUTLU SON: Eğer anksiyeten 70'i geçmediyse, tebrikler! Geçmişinin hayaletlerini yendin ve Kaan'la huzurlu bir hayata adım attın.",
        choices: [{ text: "Tekrar Oyna", target: "start", anxietyChange: -1000 }]
    },

    // ==========================================
    // PANİK ATAK (KÖTÜ SON)
    // ==========================================
    panic_attack: {
        bg: "", 
        char: "",
        speaker: "Sistem",
        text: "!!! PANİK ATAK !!!\nAnksiyete seviyen 70'i aştı! Kalbin göğsünü delip çıkacakmış gibi atıyor. Etrafındaki sesler boğuklaşıyor, nefes alamıyorsun...",
        next: "panic_attack_2"
    },
    panic_attack_2: {
        speaker: "Lara",
        text: "Nefes... alamıyorum... Bana bakıyorlar... Lütfen... durun...",
        next: "panic_attack_end"
    },
    panic_attack_end: {
        speaker: "Sistem",
        text: "KÖTÜ SON: Travmaların seni yuttu. Kaan sana yardım etmeye çalıştı ama sen herkesi itip o okuldan sonsuza dek kaçtın. Anksiyetene yenik düştün.",
        choices: [{ text: "Baştan Başla", target: "start", anxietyChange: -1000 }]
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
    const anxietyValueEl = document.getElementById('anxiety-value');
    const anxietyBarFill = document.getElementById('anxiety-bar-fill');
    const anxietyHud = document.getElementById('anxiety-hud');

    startBtn.addEventListener('click', startGame);
    dialogueBox.addEventListener('click', advanceStory);

    function updateAnxiety(change) {
        if(change === -1000) {
            anxietyLevel = 20; // reset
        } else {
            anxietyLevel += change;
        }
        
        if(anxietyLevel < 0) anxietyLevel = 0;
        if(anxietyLevel > 100) anxietyLevel = 100;
        
        anxietyValueEl.textContent = anxietyLevel;
        anxietyBarFill.style.width = anxietyLevel + "%";

        // Renk değiştirme ve efekt
        if(anxietyLevel >= 70) {
            anxietyBarFill.style.background = "red";
            anxietyHud.classList.add("panic-mode");
        } else if(anxietyLevel >= 50) {
            anxietyBarFill.style.background = "orange";
            anxietyHud.classList.remove("panic-mode");
        } else {
            anxietyBarFill.style.background = "var(--primary-gradient)";
            anxietyHud.classList.remove("panic-mode");
        }
    }

    function startGame() {
        startScreen.style.display = 'none';
        currentNode = "start";
        anxietyLevel = 20;
        updateAnxiety(0);
        renderNode();
    }

    function renderNode() {
        // Eğer panik atağı tetiklendiyse (ve şu an panic node'unda değilsek)
        if(anxietyLevel > 70 && !currentNode.startsWith("panic_attack")) {
            currentNode = "panic_attack";
        }

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
        if (node.speaker && node.speaker !== "") {
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
                // Seçeneğin yanına anksiyete etkisini göster (opsiyonel)
                let effectText = "";
                if(choice.anxietyChange > 0 && choice.anxietyChange !== -1000) {
                    effectText = ` (Anksiyete Artar)`;
                } else if(choice.anxietyChange < 0 && choice.anxietyChange !== -1000) {
                    effectText = ` (Sakinleştirir)`;
                }

                btn.textContent = choice.text + effectText;
                btn.onclick = (e) => {
                    e.stopPropagation();
                    if(choice.anxietyChange !== undefined) {
                        updateAnxiety(choice.anxietyChange);
                    }
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
        if (node.choices || node.end) return; 
        
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
