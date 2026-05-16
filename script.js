const story = {
    start: {
        bg: "/public/assets/library_bg_1778962737349.png",
        char: "/public/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Matematik evrenin dilidir derler... Ama senin o yeşil gözlerin hiçbir dilde konuşmuyor, Lace.",
        next: "node1"
    },
    node1: {
        char: "/public/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lace",
        text: "(Okulun en popüler çocuğu Kaan, kütüphanenin bu ıssız köşesinde beni nasıl buldu?)",
        choices: [
            { text: "Ona güven ve sıcak davran", target: "trust_route_garden" },
            { text: "Mesafeni koru ve sorgula", target: "distrust_route_classroom" }
        ]
    },

    // ----------------------------------------------------
    // YOL 1: GÜVEN YOLU (GÖLGELERDEN ZİRVEYE)
    // ----------------------------------------------------
    trust_route_garden: {
        bg: "/public/assets/garden_bg_1778962904703.png",
        char: "/public/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Seni hep uzaktan izliyordum Lace. O soğuk maskenin altında sıcacık bir kalbin olduğunu biliyordum.",
        next: "trust_route_eylul_enters"
    },
    trust_route_eylul_enters: {
        bg: "/public/assets/garden_bg_1778962904703.png",
        char: "/public/assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "Aaa Kaan! Demek buradaydın. Ve yanında... Lace? İnanamıyorum. Lace senin sadece zenginliğinle ilgileniyor Kaan, herkes bunu konuşuyor!",
        next: "trust_route_choice"
    },
    trust_route_choice: {
        char: "/public/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lace",
        text: "(Eylül yıllardır bana eziyet ediyor. Şimdi de Kaan'ı benden koparmak istiyor.)",
        choices: [
            { text: "Sessizce geri çekil ve kaç", target: "bad_ending_eylul_wins" },
            { text: "Eylül'ün yalanlarını yüzüne vur", target: "true_ending_love_wins" }
        ]
    },
    bad_ending_eylul_wins: {
        bg: "/public/assets/library_bg_1778962737349.png",
        speaker: "Lace",
        text: "KÖTÜ SON: Sessizliğin, Eylül'ün yalanlarını doğru kıldı. Kaan senden uzaklaştı ve tekrar o yalnız kütüphane köşesine mahkum oldun.",
        end: true
    },
    true_ending_love_wins: {
        bg: "/public/assets/garden_bg_1778962904703.png",
        char: "/public/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Eylül, yeter! Lace'in gözlerindeki dürüstlüğü senin yalanlarına değişmem. Bizim aramızdan çekil.",
        next: "true_ending_epilogue"
    },
    true_ending_epilogue: {
        bg: "/public/assets/garden_bg_1778962904703.png",
        speaker: "Lace",
        text: "MUTLU SON: Kaan'la el ele verdiniz. Yıllar sonra kendi teknoloji şirketinizi kurduğunuzda, Eylül çoktan unutulmuştu. Artık gökyüzü sizin...",
        end: true
    },

    // ----------------------------------------------------
    // YOL 2: MESAFE YOLU (KARANLIK VE UYANIŞ)
    // ----------------------------------------------------
    distrust_route_classroom: {
        bg: "/public/assets/vn_classroom_bg_1778961836745.png",
        char: "/public/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Zor kızı oynaman hoşuma gidiyor. Okuldan sonra boş sınıfa gel, seninle özel bir 'proje' çalışalım.",
        next: "classroom_tension"
    },
    classroom_tension: {
        bg: "/public/assets/vn_classroom_bg_1778961836745.png",
        char: "/public/assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Neden titriyorsun Lace? Senin gibi zeki bir kız, bu kadar naz yapmamalı. Benim kurallarıma uyacaksın.",
        next: "distrust_route_choice"
    },
    distrust_route_choice: {
        char: "/public/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lace",
        text: "(Kaan'ın gözlerindeki karanlığı görebiliyorum. Bu o güler yüzlü çocuk değil, bir canavar!)",
        choices: [
            { text: "Korkuya yenik düş ve itaat et", target: "bad_ending_trauma" },
            { text: "Ona meydan oku ve kapıya koş", target: "good_ending_empowerment" }
        ]
    },
    bad_ending_trauma: {
        bg: "/public/assets/vn_classroom_bg_1778961836745.png",
        speaker: "Lace",
        text: "KÖTÜ SON (Gecenin En Soğuk Fonksiyonu): Kaan'ın karanlığı seni yuttu. Kendi zihninin zindanında, çözemediğin o denklemlerle baş başa kaldın.",
        end: true
    },
    good_ending_empowerment: {
        bg: "/public/assets/library_bg_1778962737349.png",
        char: "/public/assets/vn_character_sprite_1778962030093.png",
        speaker: "Lace",
        text: "'Ben kimsenin kurbanı değilim!' dedin ve oradan uzaklaştın. Hayatından zehirli insanları çıkardın.",
        next: "empowerment_epilogue"
    },
    empowerment_epilogue: {
        bg: "/public/assets/library_bg_1778962737349.png",
        speaker: "Lace",
        text: "GÜÇLÜ SON (Gökyüzünün Rengi): Tek başına ayakların üzerinde durdun. Adaleti sağladın ve dünyanın en başarılı mühendislerinden biri oldun. Kendi kurtarıcın sendin.",
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
    dialogueText.innerHTML = "";
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
