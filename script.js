function openFolder() {
    // Önceki zamanlayıcı varsa temizle (üst üste binmesin)
    if (notlarTimer) clearInterval(notlarTimer);
    
    showInfo("Sistem taranıyor... İşlem devam ederken Terminal'e girebilirsin.");
    
    const loadBox = document.getElementById('loading-box');
    const bar = document.getElementById('progress-bar');
    loadBox.classList.remove('hidden');
    
    let w = 0;
    bar.style.width = "0%"; // Sıfırla
    
    notlarTimer = setInterval(() => {
        w++;
        bar.style.width = w + "%";
        if (w >= 100) {
            clearInterval(notlarTimer);
            showInfo("TARAMA TAMAMLANDI!\nİkinci Kod: SABIRLI-VARIS-99");
            loadBox.classList.add('hidden');
        }
    }, 450); 
}
