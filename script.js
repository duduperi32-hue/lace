let anxietyLevel = 20;

const story = {
    start: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "",
        speaker: "",
        text: "Lara: Gölgelerden Zirveye\n20 Bölüm ve 9 Farklı Son Sizi Bekliyor.\nAnksiyete barına dikkat edin!",
        choices: [
            { text: "Hikayeye Başla", target: "ch1_1", anxietyChange: 0 }
        ]
    },

    // ==========================================
    // BÖLÜM 1: GÖLGELERİN ARASINDA
    // ==========================================
    ch1_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Bölüm 1) Yeni bir başlangıç... Herkes bana öyle diyor. Ama geçmişim ayaklarıma dolanmış bir zincir gibi beni takip ediyor. Bu okul, bu insanlar... Hepsi çok gürültülü.",
        next: "ch1_2"
    },
    ch1_2: {
        speaker: "Sistem",
        text: "Sınıfa girerken herkesin sustuğunu ve sana baktığını hissediyorsun. Kalbin hızlanıyor.",
        choices: [
            { text: "En arka sıraya saklan", target: "ch1_3a", anxietyChange: +10 },
            { text: "Başın dik bir şekilde bir sıraya otur", target: "ch1_3b", anxietyChange: -5 }
        ]
    },
    ch1_3a: {
        speaker: "Lara",
        text: "Görünmez olmak istiyorum. Lütfen kimse benimle konuşmasın...",
        next: "ch2_1"
    },
    ch1_3b: {
        speaker: "Lara",
        text: "Korkmadığımı göstermeliyim. Ben artık o eski, güçsüz kız değilim.",
        next: "ch2_1"
    },

    // ==========================================
    // BÖLÜM 2: ÇARPIŞMA VE KIVILCIM
    // ==========================================
    ch2_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "(Bölüm 2) Kantine giderken dalgınsın. Zihninde annenin sesi yankılanıyor: 'Sakın hata yapma!'",
        next: "ch2_2"
    },
    ch2_2: {
        speaker: "Sistem",
        text: "*ÇAT!* Birine çarptın. Sıcak kahve hem senin hem de çarptığın kişinin üzerine döküldü.",
        next: "ch2_3"
    },
    ch2_3: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Hey! Önüne baksana! Bu gömlek yeniydi!",
        choices: [
            { text: "Ağlamaya başla", target: "ch2_4a", anxietyChange: +20 },
            { text: "Gözlerinin içine bak ve özür dile", target: "ch2_4b", anxietyChange: +5 }
        ]
    },
    ch2_4a: {
        speaker: "Lara",
        text: "Özür dilerim... Ben... ben çok sakarım...",
        next: "ch3_1"
    },
    ch2_4b: {
        speaker: "Lara",
        text: "Üzgünüm, kasıtlı değildi. Temizlemene yardım edebilirim.",
        next: "ch3_1"
    },

    // ==========================================
    // BÖLÜM 3: GÖLGE ADAM: ARES
    // ==========================================
    ch3_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Sistem",
        text: "(Bölüm 3) Bahçede bir ağacın altında oturuyorsun. Biri sana doğru yaklaşıyor.",
        next: "ch3_2"
    },
    ch3_2: {
        char: "/assets/ARES.png",
        speaker: "Ares",
        text: "Kaan biraz kabadır, kafana takma. Ben Ares. Eylül'den uzak durursan burada hayatta kalabilirsin.",
        choices: [
            { text: "Eylül kim? diye sor", target: "ch3_3a", anxietyChange: +5 },
            { text: "Teşekkür edip uzaklaş", target: "ch3_3b", anxietyChange: 0 }
        ]
    },
    ch3_3a: {
        speaker: "Ares",
        text: "Bu okulun kraliçesi olduğunu sanan biri. Ve Kaan'ın en büyük hayranı.",
        next: "ch4_1"
    },
    ch3_3b: {
        speaker: "Ares",
        text: "Dikkatli ol Lara. Burada sırlar çabuk yayılır.",
        next: "ch4_1"
    },

    // ==========================================
    // BÖLÜM 4: ANNENİN SESİ
    // ==========================================
    ch4_1: {
        bg: "",
        char: "",
        speaker: "Annesi (Flashback)",
        text: "(Bölüm 4) 'Yine mi başarısız oldun? Senden bir şey olmayacağını söylemiştim Lara. Sen sadece bir yüksün.'",
        next: "ch4_2"
    },
    ch4_2: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "Hayır... Hayır, o sesler sussun artık! Ben yük değilim!",
        choices: [
            { text: "Kütüphaneye sığın", target: "ch5_1", anxietyChange: +10 },
            { text: "Banyoya gidip yüzünü yıka", target: "ch5_1", anxietyChange: -5 }
        ]
    },

    // ==========================================
    // BÖLÜM 5: SAHTE DOSTLUK TEKLİFİ
    // ==========================================
    ch5_1: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "(Bölüm 5) Selam canım. Ben Eylül. Kaan için üzüldüm, o bazen çok sert olabiliyor. Gel, seninle arkadaş olalım.",
        choices: [
            { text: "Teklifini kabul et", target: "ch5_2a", anxietyChange: -10 },
            { text: "Niyetini sorgula", target: "ch5_2b", anxietyChange: +15 }
        ]
    },
    ch5_2a: {
        speaker: "Eylül",
        text: "Harika! Çok eğleneceğiz, göreceksin.",
        next: "ch6_1"
    },
    ch5_2b: {
        speaker: "Eylül",
        text: "Sadece yardım etmek istemiştim. Neden bu kadar şüphelisin?",
        next: "ch6_1"
    },

    // ==========================================
    // BÖLÜM 6: GECE GELEN MESAJ
    // ==========================================
    ch6_1: {
        speaker: "Sistem",
        text: "(Bölüm 6) Gece yarısı telefonun titrer. Bilinmeyen bir numara.",
        next: "ch6_2"
    },
    ch6_2: {
        speaker: "Mesaj",
        text: "'Uyuyor musun? Bugün için... biraz fazla tepki verdim. Kusura bakma.'",
        choices: [
            { text: "Kimsin? yaz", target: "ch6_3a", anxietyChange: +5 },
            { text: "Önemli değil yaz", target: "ch6_3b", anxietyChange: -5 }
        ]
    },
    ch6_3a: {
        speaker: "Mesaj",
        text: "'Ben Kaan. Numaranı Eylül'den aldım.'",
        next: "ch7_1"
    },
    ch6_3b: {
        speaker: "Mesaj",
        text: "'Ben Kaan. İyi olduğuna sevindim.'",
        next: "ch7_1"
    },

    // ==========================================
    // BÖLÜM 7: ÇATIDAKİ SIRLAR
    // ==========================================
    ch7_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "(Bölüm 7) Ertesi gün okulun çatısında Kaan'ı yalnız başına bulursun.",
        next: "ch7_2"
    },
    ch7_2: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Lara... Buraya gel. Şehri buradan izlemeyi seviyorum. Her şey ne kadar küçük görünüyor değil mi?",
        choices: [
            { text: "Yanına otur", target: "ch7_3a", anxietyChange: +10 },
            { text: "Mesafeni koru", target: "ch7_3b", anxietyChange: 0 }
        ]
    },
    ch7_3a: {
        speaker: "Lara",
        text: "Evet... Sanki tüm dertler de o binalarla birlikte küçülüyor.",
        next: "ch8_1"
    },
    ch7_3b: {
        speaker: "Kaan",
        text: "Benden hâlâ korkuyor musun?",
        next: "ch8_1"
    },

    // ==========================================
    // BÖLÜM 8: ARES'İN HEDİYESİ
    // ==========================================
    ch8_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        char: "/assets/ARES.png",
        speaker: "Ares",
        text: "(Bölüm 8) Lara, bunu senin için aldım. Belki biraz moralini düzeltir. (Küçük bir kolye uzatır)",
        choices: [
            { text: "Kabul et", target: "ch8_2a", anxietyChange: +5 },
            { text: "Reddet", target: "ch8_2b", anxietyChange: +10 }
        ]
    },
    ch8_2a: {
        speaker: "Lara",
        text: "Çok güzel... Teşekkür ederim Ares.",
        next: "ch9_1"
    },
    ch8_2b: {
        speaker: "Lara",
        text: "Üzgünüm Ares, bunu kabul edemem.",
        next: "ch9_1"
    },

    // ==========================================
    // BÖLÜM 9: FISILTILAR BAŞLIYOR
    // ==========================================
    ch9_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "(Bölüm 9) Koridorda yürürken herkesin fısıldaştığını duyuyorsun. 'O kız mı Kaan'la çatıda görülmüş?'",
        next: "ch9_2"
    },
    ch9_2: {
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "Lara, tatlım... Kaan ile aranızda bir şey mi var? Sadece merak ettim.",
        choices: [
            { text: "Sadece arkadaştık de", target: "ch10_1", anxietyChange: +5 },
            { text: "Seni ilgilendirmez de", target: "ch10_1", anxietyChange: +20 }
        ]
    },

    // ==========================================
    // BÖLÜM 10: KAVGA VE SİNEMATİK
    // ==========================================
    ch10_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Sistem",
        text: "(Bölüm 10) Okul çıkışı Ares, Kaan'ın yolunu keser. Gözlerinden ateş fışkırıyor.",
        next: "ch10_2"
    },
    ch10_2: {
        char: "/assets/ARES.png",
        speaker: "Ares",
        text: "Lara'dan uzak duracaksın Kaan! Onu senin gibi birine yedirmem!",
        next: "ch10_3"
    },
    ch10_3: {
        speaker: "Sistem",
        text: "*KÜT!* Ares ilk yumruğu savurur. Kavga büyürken Lara donup kalır.",
        next: "ch11_1"
    },

    // ==========================================
    // BÖLÜM 11: YARALARI SARMAK
    // ==========================================
    ch11_1: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "(Bölüm 11) Lanet olsun... Ares gerçekten delirdi. (Kaşı kanıyor)",
        choices: [
            { text: "Pansuman yap", target: "ch11_2", anxietyChange: -5 },
            { text: "Onu orada bırak", target: "ch12_1", anxietyChange: +20 }
        ]
    },
    ch11_2: {
        speaker: "Lara",
        text: "Canın yanıyor mu? Biraz dur, temizleyeyim.",
        next: "ch12_1"
    },

    // ==========================================
    // BÖLÜM 12: İTİRAF
    // ==========================================
    ch12_1: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "(Bölüm 12) Lara, bana güvenebilirsin. Anlat bana, seni bu kadar korkutan ne?",
        next: "ch12_2"
    },
    ch12_2: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "Annem... Beni karanlık odaya kilitlerdi Eylül. Kimse beni sevmedi.",
        next: "ch13_1"
    },

    // ==========================================
    // BÖLÜM 13: TUZAK KURULUYOR
    // ==========================================
    ch13_1: {
        speaker: "Sistem",
        text: "(Bölüm 13) Eylül, Lara'nın sırlarını öğrendikten sonra sinsi bir plan yapar. Telefonuyla birilerine mesaj atar.",
        next: "ch14_1"
    },

    // ==========================================
    // BÖLÜM 14: İHANETİN BEDELİ
    // ==========================================
    ch14_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "(Bölüm 14) Okula geldiğinde her yerde senin çocukluk fotoğrafların ve 'Deli Kız' yazıları var.",
        next: "ch14_2"
    },
    ch14_2: {
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "Üzgünüm Lara, ama herkes senin ne kadar tehlikeli olduğunu bilmeliydi.",
        choices: [
            { text: "Kaç ve eve git", target: "ch15_1", anxietyChange: +40 },
            { text: "Kaan'ı ara", target: "ch15_1", anxietyChange: +20 }
        ]
    },

    // ==========================================
    // BÖLÜM 15: ÇÖKÜŞ VE BABA
    // ==========================================
    ch15_1: {
        bg: "",
        speaker: "Sistem",
        text: "(Bölüm 15) Nefes alamıyorsun. Her şey kararıyor. Tam düşecekken baban Vedat seni tutuyor.",
        next: "ch15_2"
    },
    ch15_2: {
        speaker: "Vedat",
        text: "Lara! Buradayım kızım. Korkma. Baban burada.",
        next: "ch16_1"
    },

    // ==========================================
    // BÖLÜM 16: İYİLEŞME SÜRECİ
    // ==========================================
    ch16_1: {
        bg: "/assets/library_bg_1778962737349.png",
        speaker: "Sistem",
        text: "(Bölüm 16) Günlerce evden çıkmıyorsun. Babanla uzun uzun konuşuyorsunuz.",
        next: "ch16_2"
    },
    ch16_2: {
        speaker: "Vedat",
        text: "Geçmişin seni tanımlamaz Lara. Sen kendi hikayeni yazabilirsin.",
        choices: [
            { text: "Güçlü kalmaya söz ver", target: "ch17_1", anxietyChange: -20 },
            { text: "Her şeyden vazgeç", target: "end_5", anxietyChange: +100 }
        ]
    },

    // ==========================================
    // BÖLÜM 17: YÜZLEŞME KARARI
    // ==========================================
    ch17_1: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "(Bölüm 17) Okula geri döndün. Herkes sana bakıyor ama bu sefer korkmuyorsun.",
        next: "ch18_1"
    },

    // ==========================================
    // BÖLÜM 18: SON HESAPLAŞMA
    // ==========================================
    ch18_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "(Bölüm 18) Hâlâ buradasın ha? Pes etmedin mi?",
        choices: [
            { text: "Ona meydan oku", target: "ch19_1", anxietyChange: +10 },
            { text: "Onu görmezden gel", target: "ch19_1", anxietyChange: 0 }
        ]
    },

    // ==========================================
    // BÖLÜM 19: KAAN'IN SEÇİMİ
    // ==========================================
    ch19_1: {
        bg: "/assets/garden_bg_1778962904703.png",
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "(Bölüm 19) Lara... Ben her şeyi öğrendim. Eylül'ün ne yaptığını biliyorum. Özür dilerim.",
        choices: [
            { text: "Onu affet", target: "ch20_1", anxietyChange: -10 },
            { text: "Onu hayatından çıkar", target: "ch20_1", anxietyChange: +5 }
        ]
    },

    // ==========================================
    // BÖLÜM 20: FİNAL YOLU
    // ==========================================
    ch20_1: {
        speaker: "Sistem",
        text: "(Bölüm 20) Ve işte yolun sonu. Seçimlerin seni buraya getirdi.",
        next: "decide_end"
    },

    decide_end: {
        speaker: "Sistem",
        text: "Kaderin belirleniyor...",
        next: "check_ending"
    },

    check_ending: {
        speaker: "Sistem",
        text: "Sonuçlar analiz ediliyor...",
        render: () => {
            if (anxietyLevel > 80) return "end_4"; // Heartbreak/Collapse
            if (anxietyLevel < 30) return "end_1"; // True Love
            if (anxietyLevel >= 30 && anxietyLevel <= 50) return "end_2"; // Independent Success
            return "end_3"; // The Darkness Within
        }
    },

    // ==========================================
    // 9 FARKLI SON (Özetlenmiş)
    // ==========================================
    end_1: {
        text: "SON 1: GERÇEK AŞK. Lara ve Kaan tüm zorluklara rağmen birlikte kaldılar. Lara travmalarını yendi.",
        choices: [{ text: "Tekrar Oyna", target: "start", anxietyChange: -1000 }]
    },
    end_2: {
        text: "SON 2: BAĞIMSIZ BAŞARI. Lara kimseye güvenmedi ama kendi gücünü buldu. Çok başarılı bir iş kadını oldu.",
        choices: [{ text: "Tekrar Oyna", target: "start", anxietyChange: -1000 }]
    },
    end_3: {
        text: "SON 3: İÇERİDEKİ KARANLIK. Lara başarılı oldu ama Eylül gibi soğuk ve yalnız birine dönüştü.",
        choices: [{ text: "Tekrar Oyna", target: "start", anxietyChange: -1000 }]
    },
    end_4: {
        text: "SON 4: HAYAL KIRIKLIĞI. Kaan onu yarı yolda bıraktı ve Lara tekrar kabuslarına döndü.",
        choices: [{ text: "Tekrar Oyna", target: "start", anxietyChange: -1000 }]
    },
    end_5: {
        text: "SON 5: AİLE BAĞI. Lara her şeyi bıraktı ve babasıyla huzurlu, sessiz bir hayata başladı.",
        choices: [{ text: "Tekrar Oyna", target: "start", anxietyChange: -1000 }]
    },
    end_6: {
        text: "SON 6: YARIM KALAN AŞK. Kaan ve Lara birbirlerini sevdiler ama hayat onları ayırdı.",
        choices: [{ text: "Tekrar Oyna", target: "start", anxietyChange: -1000 }]
    },
    end_7: {
        text: "SON 7: TOKSİK DÖNGÜ. Kaan'la birlikteler ama sürekli kavga ediyorlar ve Eylül hâlâ peşlerinde.",
        choices: [{ text: "Tekrar Oyna", target: "start", anxietyChange: -1000 }]
    },
    end_8: {
        text: "SON 8: İNTİKAM. Lara, Eylül ve Ares'i bitirdi ama bu süreçte merhametini kaybetti.",
        choices: [{ text: "Tekrar Oyna", target: "start", anxietyChange: -1000 }]
    },
    end_9: {
        text: "SON 9: YENİ UFUKLAR. Lara şehri terk etti ve kimsenin onu tanımadığı bir yerde huzuru buldu.",
        choices: [{ text: "Tekrar Oyna", target: "start", anxietyChange: -1000 }]
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
            anxietyLevel = 20;
        } else {
            anxietyLevel += change;
        }
        
        if(anxietyLevel < 0) anxietyLevel = 0;
        if(anxietyLevel > 100) anxietyLevel = 100;
        
        anxietyValueEl.textContent = anxietyLevel;
        anxietyBarFill.style.width = anxietyLevel + "%";

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
        let node = story[currentNode];

        // Dinamik son belirleme mantığı
        if (node.render) {
            currentNode = node.render();
            node = story[currentNode];
        }

        if (anxietyLevel >= 100 && currentNode !== "end_4" && currentNode !== "end_5") {
            currentNode = "end_4";
            node = story[currentNode];
        }

        if (node.bg !== undefined) {
            if (node.bg === "") {
                bgLayer.style.backgroundImage = "none";
                bgLayer.style.backgroundColor = "black";
            } else {
                bgLayer.style.backgroundImage = `url('${node.bg}')`;
            }
        }
        
        if (node.char !== undefined) {
            if (node.char === "") {
                charSprite.style.display = "none";
            } else {
                charSprite.src = node.char;
                charSprite.style.display = "block";
            }
        }
        
        if (node.speaker && node.speaker !== "") {
            speakerName.textContent = node.speaker;
            speakerName.style.display = "block";
        } else {
            speakerName.style.display = "none";
        }
        
        typeWriter(node.text || "", 0);
        
        if (node.choices) {
            choicesContainer.innerHTML = "";
            node.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = "choice-btn";
                btn.textContent = choice.text;
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
            document.getElementById('next-indicator').style.display = node.next ? 'block' : 'none';
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
        if (node.choices) return; 
        
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
