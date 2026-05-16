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
        next: "ep2_flashback"
    },
    ep2_flashback: {
        bg: "",
        char: "",
        speaker: "Annesi (Flashback)",
        text: "'Bir işi de beceremiyor musun? Her yeri mahvettin yine sakar!' (Zihnimde annemin o keskin sesi yankılandı...)",
        next: "ep3_1"
    },

    // ==========================================
    // BÖLÜM 3: Ares'in Gelişi
    // ==========================================
    ep3_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Sistem",
        text: "(Bölüm 3) Bahçeye kaçtın. Gözyaşlarını silerken yanına iriyarı, sert bakışlı biri oturur.",
        next: "ep3_2"
    },
    ep3_2: {
        char: "/assets/ARES.png", 
        speaker: "Ares",
        text: "Kaan hep öyledir, kafana takma. Ben Ares. Sen şu yeni gelen kız olmalısın, Lara değil mi?",
        next: "ep3_3"
    },
    ep3_3: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "Evet... Memnun oldum Ares. Ama yalnız kalmak istiyorum.",
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
        text: "Merhaba tatlım. Ben Eylül. Kaan'ın en yakın arkadaşıyım. Kaan'dan uzak durursan okul hayatın çok daha kolay olur.",
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
    // BÖLÜM 6: Ares'in Takıntısı
    // ==========================================
    ep6_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Sistem",
        text: "(Bölüm 6) Ertesi gün bahçede Ares'i oldukça dalgın görürsün. Yanına gidersin.",
        next: "ep6_2"
    },
    ep6_2: {
        char: "/assets/ARES.png",
        speaker: "Ares",
        text: "Lara... Eylül'le aynı sınıftayız ama benimle tek kelime etmiyor. Oysa ben onu ilk gördüğüm günden beri seviyorum.",
        choices: [
            { text: "Ona üzüldüğünü söyle ve destek ol", target: "ep6_3", anxietyChange: -5 },
            { text: "Eylül'ün Kaan'ı sevdiğini hatırlat", target: "ep6_3", anxietyChange: +15 }
        ]
    },
    ep6_3: {
        char: "/assets/ARES.png",
        speaker: "Ares",
        text: "Biliyorum! Hep o lanet olası Kaan! Kaan'da ne buluyor anlamıyorum. Sadece zengin bir züppe o kadar.",
        next: "ep7_1"
    },

    // ==========================================
    // BÖLÜM 7: Eylül'ün Reddedişi
    // ==========================================
    ep7_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "(Bölüm 7) Ares tüm cesaretini toplayıp boş bir sınıfta Eylül'e hislerini açar. Ancak Eylül acımasızdır.",
        next: "ep7_2"
    },
    ep7_2: {
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "Sen mi? Bana mı aşıksın? Ares, güldürme beni. Benim gözüm Kaan'dan başkasını görmez. Sen onun tırnağı bile olamazsın.",
        next: "ep7_3"
    },
    ep7_3: {
        char: "/assets/ARES.png",
        speaker: "Ares",
        text: "(Gözleri dolar ve öfkeyle yumruklarını sıkar) Bunu bana yapmayacaktın Eylül... O Kaan'ın yüzünü dağıtacağım!",
        next: "ep8_1"
    },

    // ==========================================
    // BÖLÜM 8: Anksiyete Tetikleniyor
    // ==========================================
    ep8_1: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Bölüm 8) Ares'in o öfke dolu gözleri beni çok korkuttu. Eski okulumdaki o kavgacı çocukları hatırlattı. Mideme kramplar giriyor...",
        choices: [
            { text: "Kaan'ı uyarmak için ara", target: "ep9_1", anxietyChange: +10 },
            { text: "Korkudan bir yere saklan", target: "ep9_1", anxietyChange: +25 }
        ]
    },

    // ==========================================
    // BÖLÜM 9: Kavga Öncesi Sessizlik
    // ==========================================
    ep9_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Sistem",
        text: "(Bölüm 9) Okul çıkışında bahçe inanılmaz sessizdi. Herkesin bir köşeye toplandığını gördün.",
        next: "ep10_1"
    },

    // ==========================================
    // BÖLÜM 10: Büyük Kavga!
    // ==========================================
    ep10_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "(Bölüm 10) Ares okulun arkasında Kaan'ın önünü keser.",
        next: "ep10_2"
    },
    ep10_2: {
        char: "/assets/ARES.png",
        speaker: "Ares",
        text: "Eylül seni sevdiğini söylüyor! Ne var sende ha?! Ne buluyor sende!",
        next: "ep10_3"
    },
    ep10_3: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Ares, saçmalamayı kes. Benim Eylül'le bir ilgim yok, biliyorsun. Geri çekil.",
        next: "ep10_4"
    },
    ep10_4: {
        speaker: "Sistem",
        text: "Ares dinlemez ve gözü dönmüş bir şekilde Kaan'ın üzerine atlar. Kaan savunmasız yakalanır ve fena halde dayak yer. Ares, hıncını alıp oradan uzaklaşır.",
        choices: [
            { text: "Çığlık atarak Kaan'ın yanına koş", target: "ep11_1", anxietyChange: +30 },
            { text: "Derin nefes al, sakinleşip yanına git", target: "ep11_1", anxietyChange: -5 }
        ]
    },

    // ==========================================
    // BÖLÜM 11: Pansuman
    // ==========================================
    ep11_1: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "(Bölüm 11) (Kaşı yarılmış, dudağı patlamış halde nefes nefese oturur) Neden geldin Lara? Beni bu halde görmeni istemezdim.",
        next: "ep11_2"
    },
    ep11_2: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "Sessiz ol Kaan. İzin ver temizleyeyim... (Lara elleri titreyerek pamuğu Kaan'ın yarasına bastırır).",
        next: "ep11_3"
    },
    ep11_3: {
        speaker: "Sistem",
        text: "Kaan hafifçe inler ama gözlerini Lara'nın o telaşlı, yeşil gözlerinden ayıramaz. O an aralarında büyük bir çekim oluşur.",
        choices: [
            { text: "Gözlerini kaçır ve hızla sar", target: "ep12_1", anxietyChange: +10 },
            { text: "Kaan'ın gözlerine bakarak hafifçe gülümse", target: "ep12_1", anxietyChange: -10 }
        ]
    },

    // ==========================================
    // BÖLÜM 12: Eylül'ün Pişmanlığı
    // ==========================================
    ep12_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "(Bölüm 12) (Ertesi gün bahçede) Kaan... Ben çok üzgünüm. Ares'in böyle bir psikopatlık yapacağını tahmin etmedim.",
        next: "ep12_2"
    },
    ep12_2: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Senin suçun yok Eylül. Ama senin takıntıların etrafındakilere zarar veriyor, bunu gör artık.",
        next: "ep13_1"
    },

    // ==========================================
    // BÖLÜM 13: Lara'nın İç Savaşı
    // ==========================================
    ep13_1: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Bölüm 13) Kaan'ın pansuman yaparken bana attığı o bakış... Aklımdan çıkmıyor. Ama ya Eylül bunu öğrenirse? Ya Ares bana da zarar verirse?",
        choices: [
            { text: "Düşüncelere boğul ve panikle", target: "ep14_1", anxietyChange: +25 },
            { text: "Kaan'ı sevdiğini kendine itiraf et", target: "ep14_1", anxietyChange: -10 }
        ]
    },

    // ==========================================
    // BÖLÜM 14: Ares'in Uzaklaştırılması
    // ==========================================
    ep14_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "(Bölüm 14) Okul yönetimi, Kaan'a saldırdığı için Ares'i okuldan uzaklaştırır. Kaan, Lara'nın sırasına doğru yaklaşır.",
        next: "ep14_2"
    },
    ep14_2: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Dün benim yaralarımı sardığın için sağ ol. Senin ellerin de en az kalbin kadar şifalıymış.",
        next: "ep15_1"
    },

    // ==========================================
    // BÖLÜM 15: FİNAL (Huzur)
    // ==========================================
    ep15_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Bölüm 15 - FİNAL) Tüm o travmalar, anksiyete, Eylül'ün oyunları, Ares'in öfkesi... Hepsi Kaan'ın bana 'Buradayım, güvendesin' deyişiyle silinip gitti.",
        next: "ep_end"
    },
    ep_end: {
        speaker: "Sistem",
        text: "MUTLU SON: Eğer anksiyeten 70'i geçmediyse, tebrikler! Geçmişinin hayaletlerini yendin, Kaan'ın yaralarını iyileştirdin ve o da senin kalbini iyileştirdi.",
        choices: [{ text: "Tekrar Oyna", target: "start", anxietyChange: -1000 }]
    },

    // ==========================================
    // PANİK ATAK (KÖTÜ SON)
    // ==========================================
    panic_attack: {
        bg: "", 
        char: "",
        speaker: "Sistem",
        text: "!!! PANİK ATAK !!!\nAnksiyete seviyen 70'i aştı! Ares'in kavgası, Eylül'ün bakışları, geçmişte yaşadığın tüm zorbalıklar... Kalbin göğsünü delip çıkacakmış gibi atıyor.",
        next: "panic_attack_flashback"
    },
    panic_attack_flashback: {
        bg: "",
        char: "",
        speaker: "Annesi (Flashback)",
        text: "'Sen zayıfsın Lara! Hep böyle zavallı kalacaksın!'",
        next: "panic_attack_2"
    },
    panic_attack_2: {
        bg: "",
        speaker: "Lara",
        text: "Nefes... alamıyorum... Bana bakıyorlar... Annem haklıydı... Lütfen... durun...",
        next: "panic_attack_3"
    },
    panic_attack_3: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "",
        speaker: "Vedat (Babası)",
        text: "Lara! Kızım, buradayım! Derin nefes al... Sadece benim sesime odaklan. Geçecek, baban yanında...",
        next: "panic_attack_end"
    },
    panic_attack_end: {
        speaker: "Sistem",
        text: "DRAMATİK SON (Babanın Şefkati): Annenin karanlık hatıraları seni yuttu. Ancak tam o çaresiz anda baban Vedat seni buldu. Kaan'ı o gün kaybetsen de, babanın sana sarılmasıyla hayata yeniden tutunmak için büyük bir adım attın.",
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
                    effectText = ` (Anksiyete +${choice.anxietyChange})`;
                } else if(choice.anxietyChange < 0 && choice.anxietyChange !== -1000) {
                    effectText = ` (Sakinleştirir ${choice.anxietyChange})`;
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
