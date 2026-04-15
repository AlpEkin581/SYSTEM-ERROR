const GIZLI_KOD = "FLUX-666-PIZZA";
const BEKLEME_KODU = "SABIRLI-VARIS-99";
let timer;

function showMsg(text) {
    document.getElementById('msg-content').innerText = text;
    document.getElementById('custom-msg').classList.remove('hidden');
}

function closeMsg() {
    document.getElementById('custom-msg').classList.add('hidden');
}

function openFolder() {
    showMsg("Sistem derinlikleri taranıyor... Terminali kullanmaya devam edebilirsin.");
    const loadBox = document.getElementById('loading-box');
    const bar = document.getElementById('progress-bar');
    loadBox.classList.remove('hidden');
    
    let w = 0;
    clearInterval(timer); // Varsa eskiyi temizle
    timer = setInterval(() => {
        w++;
        bar.style.width = w + "%";
        if (w >= 100) {
            clearInterval(timer);
            showMsg("TARAMA BİTTİ!\nİkinci Erişim Kodun: " + BEKLEME_KODU);
            loadBox.classList.add('hidden');
        }
    }, 300); // 30 Saniye bekleme
}

function openTerminal() {
    document.getElementById('terminal-window').classList.remove('hidden');
}

function closeTerminal() {
    document.getElementById('terminal-window').classList.add('hidden');
}

// ... startFinal ve checkCode fonksiyonlarını aynı tutabilirsin
