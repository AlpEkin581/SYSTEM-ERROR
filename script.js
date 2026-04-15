let bossHealth = 10;

function openFolder(name) {
    const msg = document.getElementById('chat-msg');
    const window = document.getElementById('window');
    window.classList.remove('hidden');
    
    msg.innerText = "Bunu açmamalıydın...";
}

function startFinal() {
    const response = prompt("Varisim olmak ister misin? (Evet/Hayır)");

    if (response?.toLowerCase() === "evet") {
        // 1. SON: VARİS
        document.body.innerHTML = "<h1>YENİ YÖNETİCİ SENSİN.</h1><p>Gizli dosyalar GitHub repona eklendi.</p>";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        // 2. ve 3. SON: BOSS FIGHT
        startBossFight();
    }
}

function startBossFight() {
    document.getElementById('boss-area').classList.remove('hidden');
    document.body.classList.add('glitch');
    
    // Hata pencereleri oluşturma
    setInterval(() => {
        if(bossHealth > 0) createError();
    }, 1000);
}

function createError() {
    const err = document.createElement('div');
    err.className = 'window';
    err.style.position = "absolute";
    err.style.left = Math.random() * 80 + "%";
    err.style.top = Math.random() * 80 + "%";
    err.innerHTML = "<div class='title-bar'>HATA!</div><button onclick='hitBoss(this)'>KAPAT</button>";
    document.body.appendChild(err);
}

function hitBoss(btn) {
    bossHealth--;
    document.getElementById('boss-health').innerText = "BOSS CANI: " + bossHealth;
    btn.parentElement.remove();
    
    if(bossHealth <= 0) {
        alert("SİSTEM TEMİZLENDİ. KURTULDUN.");
        location.reload();
    }
}
