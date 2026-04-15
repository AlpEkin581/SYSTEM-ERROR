const GIZLI_KOD = "FLUX-666-PIZZA";
const BEKLEME_KODU = "SABIRLI-VARIS-99";
let mainTimer;

function showMsg(t) {
    document.getElementById('msg-content').innerText = t;
    document.getElementById('custom-msg').classList.remove('hidden');
}

function closeMsg() { document.getElementById('custom-msg').classList.add('hidden'); }

function openFolder() {
    showMsg("SİSTEM_TARANIYOR... [60s]");
    const b = document.getElementById('progress-bar');
    document.getElementById('loading-box').classList.remove('hidden');
    
    let w = 0;
    clearInterval(mainTimer);
    mainTimer = setInterval(() => {
        w++;
        b.style.width = w + "%";
        if(w >= 100) {
            clearInterval(mainTimer);
            showMsg("ŞİFRE_ÇÖZÜLDÜ: " + BEKLEME_KODU);
            document.getElementById('loading-box').classList.add('hidden');
        }
    }, 600); // 60 Saniye
}

function openTerminal() { document.getElementById('terminal-window').classList.remove('hidden'); }
function closeTerminal() { document.getElementById('terminal-window').classList.add('hidden'); }

function startFinal() {
    let s = prompt("Vârisim olacak mısın? (EVET/HAYIR)");
    if(s?.toUpperCase() === "EVET") {
        document.body.innerHTML = `<div style="background:#000; color:#0f0; height:100vh; text-align:center; padding-top:100px;">
            <h1>[YETKİ_DEVREDİLDİ]</h1>
            <p>ERİŞİM_KODUN: ${GIZLI_KOD}</p>
            <button onclick="location.reload()" style="background:#0f0; border:none; padding:10px; cursor:pointer;">SİSTEME_DÖN</button>
        </div>`;
    }
}

function checkCode() {
    const i = document.getElementById('access-code').value;
    const o = document.getElementById('terminal-output');
    if(i === GIZLI_KOD) o.innerHTML = "<p style='color:yellow;'>[LOGS]: Pizza faturası bulundu...</p>";
    else if(i === BEKLEME_KODU) o.innerHTML = "<p style='color:cyan;'>[LOGS]: Sabırlı varis onaylandı!</p>";
    else o.innerHTML = "<p style='color:red;'>[ERROR]: HATALI_KOD</p>";
}
