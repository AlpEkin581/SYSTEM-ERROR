const GIZLI_KOD = "FLUX-666-PIZZA";

function openFolder() {
    alert("NOT: Sistemi kapatma, o seni izliyor...");
}

function openTerminal() {
    document.getElementById('terminal-window').classList.remove('hidden');
}

function closeTerminal() {
    document.getElementById('terminal-window').classList.add('hidden');
}

function startFinal() {
    let secim = prompt("Varisim olmak ister misin? (Evet/Hayır)");

    if (secim?.toLowerCase() === "evet") {
        document.body.innerHTML = `
            <div style="background:white; color:black; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; font-family:serif;">
                <h1 style="font-size:50px;">YENİ YÖNETİCİ SENSİN.</h1>
                <p>Gizli dosyalar için erişim anahtarın:</p>
                <div style="border:4px double black; padding:20px; font-size:30px; margin:20px;">
                    ${GIZLI_KOD}
                </div>
                <p>Bu kodu Terminal'e girerek arşivi açabilirsin.</p>
                <button onclick="location.reload()" style="background:black; color:white; padding:10px 20px;">SİSTEME DÖN</button>
            </div>
        `;
    } else {
        alert("HATA: SİSTEMDEN KAÇAMAZSIN! (Boss Fight yakında eklenecek...)");
    }
}

function checkCode() {
    const code = document.getElementById('access-code').value;
    const output = document.getElementById('terminal-output');

    if (code === GIZLI_KOD) {
        output.innerHTML = `
            <p style="color:yellow;">[ERİŞİM ONAYLANDI]</p>
            <p onclick="alert('Önceki Varis: Soğuk pizza yemek hapsolmaktan daha zordu..')">📄 Kurban_01.txt</p>
            <p onclick="alert('Sistem Notu: Yeni yönetici şu an ekranı izliyor.')">📄 Gozlem_Raporu.log</p>
            <p onclick="alert('Şifreli Mesaj: ..-. .-.. ..- -..-')">📄 Mors_Sifresi.bin</p>
            <p style="color:red; cursor:not-allowed;">🔥 SİSTEMİ_SİL.exe (YETKİ YOK)</p>
        `;
    } else {
        output.innerHTML = `<p style="color:red;">[HATALI KOD! ERİŞİM ENGELLENDİ]</p>`;
    }
}
