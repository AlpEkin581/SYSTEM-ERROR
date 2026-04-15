const GIZLI_KOD = "FLUX-666-PIZZA";
const BEKLEME_KODU = "SABIRLI-VARIS-99"; // 1 dakika bekleyince verilecek kod
let notlarTimer;

function openFolder() {
    alert("NOT: Sistemi kapatma, o seni izliyor... (Pencereyi kapatma, dosyalar yükleniyor...)");
    
    // 60 saniye (1 dakika) sonra gizli kodu fısılda
    notlarTimer = setTimeout(() => {
        alert("Sistem derinliklerinden bir ses: 'Sabrın ödüllendirildi... İkinci kodun: " + BEKLEME_KODU + "'");
    }, 60000); // 60.000 milisaniye = 1 dakika
}

// Terminal kontrolüne ikinci kodu da ekleyelim
function checkCode() {
    const code = document.getElementById('access-code').value;
    const output = document.getElementById('terminal-output');

    if (code === GIZLI_KOD) {
        output.innerHTML = `
            <p style="color:yellow;">[ERİŞİM ONAYLANDI - SEVİYE 1]</p>
            <p onclick="alert('Önceki Varis: Soğuk pizza yemek hapsolmaktan daha zordu..')">📄 Kurban_01.txt</p>
            <p onclick="alert('Sistem Notu: Yeni yönetici şu an ekranı izliyor.')">📄 Gozlem_Raporu.log</p>
        `;
    } else if (code === BEKLEME_KODU) {
        output.innerHTML = `
            <p style="color:cyan;">[ÖZEL ERİŞİM - SABIRLI VARİS MODU]</p>
            <p onclick="alert('Pizzacıdan mesaj: Abi senin siparişi 100 yıl önce bıraktık, kapıda kalmış.')">🍕 Pizza_Faturasi.pdf</p>
            <p onclick="alert('Gizli Veri: Sistemin asıl sahibi aslında bir yapay zeka hatasıymış.')">💾 Gercek_Hikaye.dat</p>
            <p onclick="alert('Mors Çevirisi: BURADAN CIKIS YOK')">📻 Sinyal_Kaydi.wav</p>
        `;
    } else {
        output.innerHTML = `<p style="color:red;">[HATALI KOD! ERİŞİM ENGELLENDİ]</p>`;
    }
}
