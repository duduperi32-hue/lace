const story = {
    start: {
        bg: "assets/library_bg_1778962737349.png",
        char: "assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Matematik evrenin dilidir derler ama senin gözlerin hiçbir dilde konuşmuyor.",
        next: "node1"
    },
    node1: {
        speaker: "Lace",
        text: "(Bu çocuk kim? Neden okulun en popüler çocuğu benim masama geldi?)",
        choices: [
            { text: "Ona güvenmeye karar ver (Gülümse)", target: "garden_scene" },
            { text: "Mesafeli davran (Kitaba dön)", target: "cold_path_1" }
        ]
    },
    // --- YOL 1: GÖLGELERDEN ZİRVEYE (İYİ KAAN, KÖTÜ EYLÜL) ---
    garden_scene: {
        bg: "assets/garden_bg_1778962904703.png",
        char: "assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Lace, neden her zaman bir adım geridesin? Benden hala korkuyor musun?",
        next: "garden_scene_2"
    },
    garden_scene_2: {
        speaker: "Lace",
        text: "Ben kimseden korkmam Kaan. Sadece... güvenmek benim için bir lüks.",
        next: "garden_scene_3"
    },
    garden_scene_3: {
        speaker: "Kaan",
        text: "Bana güvenebilirsin. Bak, buradayım. Gitmiyorum.",
        next: "enter_eylul"
    },
    enter_eylul: {
        bg: "assets/vn_classroom_bg_1778961836745.png",
        char: "assets/eylul_sprite_1778962140020.png",
        speaker: "Eylül",
        text: "Aaa, Lace! Kaan'la ne kadar yakınsınız böyle. Ben de aranıza katılabilir miyim?",
        next: "eylul_manipulation"
    },
    eylul_manipulation: {
        speaker: "Eylül",
        text: "Biliyor musun Lace, insanlar senin soğuk olduğunu düşünüp korkuyorlar.",
        choices: [
            { text: "Sessiz kal ve içine kapan", target: "eylul_wins" },
            { text: "Kendini savun (Reis Modu)", target: "lace_defends" }
        ]
    },
    eylul_wins: {
        char: "assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Eylül haklı galiba Lace... Belki de biraz değişmelisin.",
        next: "bad_ending_1"
    },
    bad_ending_1: {
        speaker: "",
        text: "Kötü Son: Kaan'ı Eylül'e kaptırdın ve tekrar gölgelere çekildin.",
        end: true
    },
    lace_defends: {
        char: "assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Ben öyle düşünmüyorum Eylül. Lace soğuk değil, seçici. Onu geçmişiyle vurma.",
        next: "happy_ending"
    },
    happy_ending: {
        bg: "assets/garden_bg_1778962904703.png",
        speaker: "Lace",
        text: "Yıllar sonra Lace ve Kaan kendi şirketlerini kurdular. Gölgelerden zirveye uzanan bir aşk...",
        end: true
    },

    // --- YOL 2 & 3: KARANLIK VE UYANIŞ (KÖTÜ KAAN) ---
    cold_path_1: {
        bg: "assets/library_bg_1778962737349.png",
        char: "assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Zor kızı oynamayı seviyorsun demek. Bu akşam bana gel, yeni bir proje üzerine çalışalım.",
        next: "kaan_house"
    },
    kaan_house: {
        bg: "assets/vn_classroom_bg_1778961836745.png", // using classroom as dark room placeholder
        char: "assets/kaan_sprite_1778962129326.png",
        speaker: "Kaan",
        text: "Lace, bir aydır seni bekliyorum. Bu kadar naz yeter. Sevgiliyiz biz, unuttun mu?",
        next: "kaan_house_2"
    },
    kaan_house_2: {
        speaker: "Lace",
        text: "Hayır, gerçekten yapamam... Kaan, bırak beni!",
        choices: [
            { text: "Pes et ve travmaya yenik düş", target: "suicide_ending" },
            { text: "Savaş ve adaleti ara", target: "empowerment_ending" }
        ]
    },
    suicide_ending: {
        bg: "",
        char: "",
        speaker: "Lace",
        text: "'Güven + İnsan = 0'. Suyun buharı banyoyu kaplarken, Lace gözlerini kapattı. En Soğuk Fonksiyon.",
        end: true
    },
    empowerment_ending: {
        bg: "assets/garden_bg_1778962904703.png",
        char: "",
        speaker: "Lace",
        text: "Hayır. Annemin sessizliğinin bedelini ben ödemeyeceğim. Adalet yerini buldu. Gökyüzü artık mavi.",
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
