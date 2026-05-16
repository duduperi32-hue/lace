const story = {
    start: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "",
        speaker: "",
        text: "GÖLGELERDEN ZİRVEYE: LARA'NIN HİKAYESİ\nLütfen oynamak istediğiniz bölümü seçin:",
        choices: [
            { text: "🎬 Bölüm 1: Kantin Çarpışması", target: "s1_start" },
            { text: "🎬 Bölüm 2: Gece Gelen Gizemli Mesaj", target: "s2_start" },
            { text: "🎬 Bölüm 3: Çatıdaki Gözyaşları", target: "s3_start" },
            { text: "🎬 Bölüm 4: Zehirli Kıskançlık", target: "s4_start" },
            { text: "🎬 Bölüm 5: Yağmur Altında", target: "s5_start" }
        ]
    },

    // ==========================================
    // 🎬 BÖLÜM 1: KANTİN ÇARPIŞMASI
    // ==========================================
    s1_start: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Yeni okulun ilk günü... Kalabalık, gürültülü ve boğucu. Eski okulumdaki o dışlanmışlığı burada da yaşamak istemiyorum. Sadece kahvemi alıp bir köşeye geçmeliyim.)",
        next: "s1_walk"
    },
    s1_walk: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Lara",
        text: "(Elimdeki sıcak karton bardakla kalabalığın arasından sıyrılmaya çalışıyordum. Tam köşeyi dönerken... Sert bir göğse çarptım. Kahve havada adeta ağır çekimde süzüldü ve beyaz, pahalı gömleğe yayıldı.)",
        next: "s1_kaan"
    },
    s1_kaan: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Ne yapıyorsun sen?! Cidden ilk günden, koca okulda bula bula beni mi buldun?",
        next: "s1_lara"
    },
    s1_lara: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "Ö-Özür dilerim! Bilerek olmadı, kalabalık beni itti... Temizleyebilirim.",
        next: "s1_kaan2"
    },
    s1_kaan2: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Temizlemek mi? Bu gömleğin fiyatını biliyor musun sen? (Kaan öfkeyle bağırırken aniden duraksadı. Lara'nın korku dolu ama bir o kadar da inatçı, yeşil gözlerine takılıp kaldı. Sesi birden yumuşadı.) Sen... yenisin galiba?",
        next: "s1_eylul"
    },
    s1_eylul: {
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "Kaan canım! Ne oldu? Aaa... Gömleğin mahvolmuş. Kaan abartma biraz, kız zaten korkmuş baksana şuna. Zavallıcık, titriyor.",
        next: "s1_lara2"
    },
    s1_lara2: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Eylül'ün sesindeki o sahte şefkat midemi bulandırmıştı. Titremiyordum, sadece öfkemi bastırmaya çalışıyordum.)",
        choices: [
            { text: "Eylül'e sert çık ve oradan uzaklaş", target: "s1_end_drama" },
            { text: "Yutkun, sessizce özür dileyip kantinden çık", target: "s1_end_happy" }
        ]
    },
    s1_end_happy: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Sistem",
        text: "SON 1 (Mutlu ve Sakin): Lara sessizce uzaklaştı. Kaan, Lara'nın o naif ama güçlü duruşundan çok etkilendi. Günler sonra ondan özür diledi. Zamanla yakınlaştılar. Eylül de dışlanmamak için onların en yakın dostu rolünü oynamaya devam etti ve garip ama mutlu bir üçlü oldular.",
        choices: [{ text: "Menüye Dön", target: "start" }]
    },
    s1_end_drama: {
        bg: "/assets/library_bg_1778962737349.png",
        speaker: "Sistem",
        text: "SON 2 (Dram): Lara, Eylül'e sert çıkınca işler karıştı. Eylül, Lara'yı düşman ilan etti ve Kaan'ı manipüle ederek Lara'dan uzaklaştırdı. Lara, lise yıllarını tamamen yalnız ve gergin bir savaşın içinde geçirdi.",
        choices: [{ text: "Menüye Dön", target: "start" }]
    },

    // ==========================================
    // 🎬 BÖLÜM 2: GECE MESAJI
    // ==========================================
    s2_start: {
        bg: "/assets/library_bg_1778962737349.png", 
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Saat gece yarısını geçmişti. Kulaklıklarımda hüzünlü bir şarkı çalarken tavanı izliyordum. Aniden telefonumun ekranı aydınlandı. Bilinmeyen bir numara...)",
        next: "s2_kaan"
    },
    s2_kaan: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Bilinmeyen Numara",
        text: "'Uyuyor musun? Ben uyuyamıyorum. Tavan üstüme üstüme geliyor sanki.'",
        next: "s2_lara"
    },
    s2_lara: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "'Kimsin sen? Numaramı nereden buldun?'",
        next: "s2_kaan2"
    },
    s2_kaan2: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Bilinmeyen Numara",
        text: "'Ah, özür dilerim. Eski bir arkadaşım sanmıştım, yanlış numara... Ama eğer sen de uyuyamıyorsan, bana yıldızlardan bahsedebilirsin. Bir yabancıyla konuşmak bazen daha kolaydır.'",
        next: "s2_narrator"
    },
    s2_narrator: {
        bg: "/assets/garden_bg_1778962904703.png",
        char: "",
        speaker: "Sistem",
        text: "O gece saatlerce mesajlaştılar. Birbirlerinin isimlerini bilmeden, en derin korkularını, yalnızlıklarını paylaştılar. Ta ki birkaç gün sonra Kaan, Lara'nın telefonunda o mesajları görene kadar...",
        next: "s2_eylul"
    },
    s2_eylul: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "(Kısık sesle) Lara sürekli o telefona bakıp gülümsüyor. Bu aralar çok değişti. Onu Kaan'dan tamamen uzaklaştırmalıyım. Kaan sadece benim olmalı.",
        next: "s2_choice"
    },
    s2_choice: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Kaan bana o 'yabancı'nın kendisi olduğunu itiraf etti. Ama Eylül de bize çok kötü bakıyor. Bu durumu nasıl yönetmeliyim?)",
        choices: [
            { text: "Kaan'ın elini tut ve herkese aşkınızı ilan et", target: "s2_end_romantic" },
            { text: "Eylül'ün tepkisinden korkup mesajlaşmayı bitir", target: "s2_end_bad" }
        ]
    },
    s2_end_romantic: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Sistem",
        text: "SON 1 (Romantik Rüyalar): Kaan ve Lara, Eylül'ün tüm oyunlarına rağmen aşklarına sahip çıktılar. O 'yanlış numara', hayatlarının en doğru tesadüfü oldu.",
        choices: [{ text: "Menüye Dön", target: "start" }]
    },
    s2_end_bad: {
        bg: "/assets/library_bg_1778962737349.png",
        speaker: "Sistem",
        text: "SON 2 (Soğuk Ayrılık): Lara, Eylül'ün yarattığı baskıya dayanamadı ve hattını değiştirdi. Kaan, Lara'nın onu neden terk ettiğini asla anlayamadı. Eylül, her ikisini de yalnızlığa mahkum etti.",
        choices: [{ text: "Menüye Dön", target: "start" }]
    },

    // ==========================================
    // 🎬 BÖLÜM 3: ÇATIDAKİ SIR
    // ==========================================
    s3_start: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Okulun paslı merdivenlerini tırmanıp çatıya çıktım. Rüzgar yüzüme çarpıyordu. Dizlerimin üzerine çöküp hüngür hüngür ağlamaya başladım. Artık dayanamıyordum.)",
        next: "s3_door"
    },
    s3_door: {
        speaker: "Sistem",
        text: "*Demir kapı gıcırtıyla açıldı.*",
        next: "s3_kaan"
    },
    s3_kaan: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Lara? Senin burada ne işin var? Tanrım... Ağlıyor musun sen? İyi misin?",
        next: "s3_lara"
    },
    s3_lara: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "Kimse anlamıyor beni Kaan! Ailemin baskısı, bu okuldaki insanların sahteliği... Gider misin lütfen? Beni böyle görmeni istemiyorum.",
        next: "s3_kaan2"
    },
    s3_kaan2: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "(Yanına oturur ve montunu Lara'nın omuzlarına atar.) Hiçbir yere gitmiyorum. Ağla. İstediğin kadar ağla. Ama bil ki artık yalnız değilsin.",
        next: "s3_narrator"
    },
    s3_narrator: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Sistem",
        text: "O günden sonra aralarında kopmaz bir bağ oluştu. Kaan, Lara'nın en büyük koruyucusu oldu. Eylül ise Lara'nın o ezik halinden çıkıp nasıl bu kadar güçlendiğini anlamlandıramıyordu.",
        next: "s3_choice"
    },
    s3_choice: {
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "Siz ikiniz... Gerçekten bir takım oldunuz ha? Ben de bu takıma girebilir miyim?",
        choices: [
            { text: "Eylül'ü gruba samimiyetle kabul et", target: "s3_end_good" },
            { text: "Eylül'ü dışla, Kaan'a daha çok bağlan", target: "s3_end_sad" }
        ]
    },
    s3_end_good: {
        bg: "/assets/library_bg_1778962737349.png",
        speaker: "Sistem",
        text: "SON 1 (İyi Dostlar): Lara kin tutmadı ve Eylül'e şans verdi. Üçü birbirlerinin sırdaşı oldular. Lise hayatları bir gençlik filmi kadar güzel geçti.",
        choices: [{ text: "Menüye Dön", target: "start" }]
    },
    s3_end_sad: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "SON 2 (Yarım Kalan Sır): Eylül'ü dışladıkları için işler sarpa sardı. Ailevi sorunlar yaşayan Kaan aniden başka şehre taşındı. Lara o gün çatıda ona hislerini söylemediği için hayatı boyunca pişmanlık duydu.",
        choices: [{ text: "Menüye Dön", target: "start" }]
    },

    // ==========================================
    // 🎬 BÖLÜM 4: KISKANÇLIK ATEŞİ
    // ==========================================
    s4_start: {
        bg: "/assets/library_bg_1778962737349.png",
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "(Kütüphane raflarının arkasından fısıldayarak Lara'yı kolundan tuttu.) Lara, sana son kez söylüyorum. Ondan uzak duracaksın.",
        next: "s4_lara"
    },
    s4_lara: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "Kimin hakkında konuştuğunu bile bilmiyorum Eylül! Kolumu bırak. Neden bahsediyorsun?",
        next: "s4_eylul"
    },
    s4_eylul: {
        char: "/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "Bana yalan söyleme! Kaan'a nasıl baktığını görüyorum. O benim çocukluk arkadaşım, anladın mı? Senin gibi bir ezik, onun yanına yaklaşamaz.",
        next: "s4_lara2"
    },
    s4_lara2: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Eylül'ün gözleri nefretle doluydu. Oysa ben ve Kaan sadece arkadaştık... Ama belli ki Eylül, ona ölümüne aşıktı.)",
        choices: [
            { text: "Eylül'e tokat at ve ona savaş aç", target: "s4_end_fight" },
            { text: "Derin bir nefes al ve yapıcı konuş", target: "s4_end_peace" }
        ]
    },
    s4_end_fight: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "SON 1 (Büyük Savaş): Lara, Eylül'e boyun eğmedi. İki kız arasındaki savaş tüm okula yayıldı. Kaan arada kaldı ve ikisinden de nefret ederek okulu terk etti. Hepsi kaybetti.",
        choices: [{ text: "Menüye Dön", target: "start" }]
    },
    s4_end_peace: {
        bg: "/assets/garden_bg_1778962904703.png",
        speaker: "Sistem",
        text: "SON 2 (Zoraki Barış): Lara alttan aldı. Üçü bir araya gelip dürüstçe yüzleştiler. Aşk yerine dostluğu seçtiler ve kıskançlık krizini aşıp güçlü bir bağ kurdular.",
        choices: [{ text: "Menüye Dön", target: "start" }]
    },

    // ==========================================
    // 🎬 BÖLÜM 5: YAĞMUR ALTINDA
    // ==========================================
    s5_start: {
        bg: "/assets/garden_bg_1778962904703.png",
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(Gök gürültüsü yeri sarsıyordu. Durağın altındaydım ama rüzgar yüzünden sırılsıklam olmuştum. Soğuktan dişlerim birbirine çarpıyordu.)",
        next: "s5_kaan"
    },
    s5_kaan: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Lara! Bu havada burada ne yapıyorsun? (Siyah, büyük şemsiyesini hızla Lara'nın üzerine tuttu ve kendi montunu çıkarıp Lara'ya sardı.)",
        next: "s5_lara"
    },
    s5_lara: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "K-Kaan? Sen... Sen de sırılsıklam oldun. Neden geldin?",
        next: "s5_kaan2"
    },
    s5_kaan2: {
        char: "/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Çünkü hastalanmandan korktum... Çünkü seni düşündüm. (Kaan'ın gözlerindeki yoğunluk, yağmurun soğuğunu bile unutturacak kadar sıcaktı.)",
        next: "s5_choice"
    },
    s5_choice: {
        char: "/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lara",
        text: "(İlk kez biri tarafından gerçekten düşünüldüğümü hissettim. Kalbim deli gibi atıyordu. Ne yapacağım?)",
        choices: [
            { text: "Kaan'ın gözlerine bak ve ona sarıl", target: "s5_end_romantic" },
            { text: "Korkuya kapılıp şemsiyeyi iterek koş", target: "s5_end_breakup" }
        ]
    },
    s5_end_romantic: {
        bg: "/assets/library_bg_1778962737349.png",
        speaker: "Sistem",
        text: "SON 1 (Aşk Yağmuru): Kaan, o şemsiyenin altında Lara'ya hislerini açtı. İkisi, fırtınalara birlikte göğüs gerecekleri uzun ve romantik bir yola çıktılar.",
        choices: [{ text: "Menüye Dön", target: "start" }]
    },
    s5_end_breakup: {
        bg: "/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Sistem",
        text: "SON 2 (Korkak Kalp): Lara, sevilmekten ve kırılmaktan o kadar çok korktu ki, montu ona fırlatıp yağmurun içine karıştı. O günden sonra kalbini sonsuza dek kapattı.",
        choices: [{ text: "Menüye Dön", target: "start" }]
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
