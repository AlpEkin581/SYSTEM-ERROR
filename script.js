const GIZLI_KOD = "FLUX-666-PIZZA";
const BEKLEME_KODU = "SABIRLI-VARIS-99";

function openFolder() {
    // Diğer pencereleri kapat ki çakışmasın
    closeTerminal(); 
    
    const loadBox = document.getElementById('loading-box');
    const bar = document.getElementById('progress-bar');
    loadBox.classList.remove('hidden');
    
    let w = 0;
    let timer = setInterval(() => {
        w++;
        bar.style.width = w + "%";
        if (w >= 100) {
            clearInterval(timer);
            // Alert yerine kutu içine yazdırabiliriz ama şimdilik kod gelsin:
            alert("SİSTEM DERİNLİKLERİNDEN MESAJ:\nİkinci Kod: " + BEKLEME_KODU);
            loadBox.classList.add('hidden');
        }
    }, 450); // 45 Saniye
}

function openTerminal() {
    document.getElementById('terminal-window').classList.remove('hidden');
}

function closeTerminal() {
    document.getElementById('terminal-window').classList.add('hidden');
}

function startFinal() {
    let s = prompt("Vârisim olmak ister misin? (Evet/Hayır)");
    if(s?.toLowerCase() === "evet") {
        document.body.innerHTML = `<div style="color:#0f0; text-align:center; padding-top:100px;"><h1>YENİ YÖNETİCİ SENSİN</h1><p>KODUN: ${GIZLI_KOD}</p><button onclick="location.reload()">GERİ DÖ</button></div>`;
    }
}

function checkCode() {
    const inp = document.getElementById('access-code').value;
    const out = document.getElementById('terminal-output');
    if(inp === GIZLI_KOD) {
        out.innerHTML = "<p>LVL 1: Pizza soğudu...</p>";
    } else if(inp === BEKLEME_KODU) {
        out.innerHTML = "<p style='color:cyan;'>LVL 2: Sabırlı Varis! 🍕 Pizza Faturası: 0.00$</p>";
    } else {
        out.innerHTML = "<p style='color:red;'>HATALI!</p>";
    }
}
