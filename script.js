const KOD_1 = "FLUX-666-PIZZA";
const KOD_2 = "SABIRLI-VARIS-99";
let timer;

function openBox(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeBox(id) {
    document.getElementById(id).classList.add('hidden');
}

function openFolder() {
    openBox('msg-box');
    document.getElementById('msg-text').innerText = "SISTEM TARANIYOR... [LUTFEN BEKLEYIN]";
    
    const bar = document.getElementById('bar');
    openBox('loading-box');
    
    let w = 0;
    clearInterval(timer);
    timer = setInterval(() => {
        w++;
        bar.style.width = w + "%";
        if(w >= 100) {
            clearInterval(timer);
            document.getElementById('msg-text').innerText = "VERI COZULDU: " + KOD_2;
            closeBox('loading-box');
        }
    }, 450); // 45 Saniye
}

function openTerminal() { openBox('terminal-window'); }

function startFinal() {
    let s = prompt("VARISIM OLACAK MISIN? (EVET/HAYIR)");
    if(s?.toUpperCase() === "EVET") {
        document.body.innerHTML = `
            <div style="background:#000; color:#0f0; height:100vh; text-align:center; padding-top:100px; font-family:monospace;">
                <h1 style="font-size:50px;">[YETKI_DEVREDILDI]</h1>
                <p style="font-size:24px;">ERISIM_KODUN: ${KOD_1}</p>
                <button onclick="location.reload()" style="background:#0f0; border:none; padding:15px; cursor:pointer; font-weight:bold;">SISTEME_DON</button>
            </div>`;
    }
}

function checkCode() {
    const inp = document.getElementById('code-input').value;
    const out = document.getElementById('output');
    if(inp === KOD_1) out.innerHTML = "<p style='color:yellow;'>[LOGS]: Pizza faturası bulundu. Soguk yenmis...</p>";
    else if(inp === KOD_2) out.innerHTML = "<p style='color:cyan;'>[LOGS]: Sabırlı varis onaylandı!</p>";
    else out.innerHTML = "<p style='color:red;'>[ERROR]: HATALI_KOD</p>";
}
