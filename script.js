const GIZLI_KOD = "FLUX-666-PIZZA";
const BEKLEME_KODU = "SABIRLI-VARIS-99";
let mainTimer;

function openFolder() {
    document.getElementById('msg-content').innerText = "SİSTEM_TARANIYOR... [LÜTFEN BEKLEYİN]";
    document.getElementById('custom-msg').classList.remove('hidden');
    
    const b = document.getElementById('progress-bar');
    document.getElementById('loading-box').classList.remove('hidden');
    
    let w = 0;
    clearInterval(mainTimer);
    mainTimer = setInterval(() => {
        w++;
        b.style.width = w + "%";
        if(w >= 100) {
            clearInterval(mainTimer);
            document.getElementById('msg-content').innerText = "VERİ_ÇÖZÜLDÜ: " + BEKLEME_KODU;
            document.getElementById('loading-box').classList.add('hidden');
        }
    }, 450); // 45 Saniye
}

function closeMsg() { document.getElementById('custom-msg').classList.add('hidden'); }
function openTerminal() { document.getElementById('terminal-window').classList.remove('hidden'); }
function closeTerminal() { document.getElementById('terminal-window').classList.add('hidden'); }

// startFinal ve checkCode aynı kalsın...
