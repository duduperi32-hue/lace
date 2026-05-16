function selectGame(gameName) {
    console.log(`Seçilen Oyun: ${gameName}`);
    
    // Basit bir geçiş animasyonu efekti
    const container = document.querySelector('.container');
    container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    container.style.opacity = '0';
    container.style.transform = 'scale(0.9)';

    setTimeout(() => {
        alert(`${gameName} modu çok yakında hazır olacak! \nŞu an arayüz geliştirme aşamasındayız.`);
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';
    }, 500);
}

// Fare hareketine göre arka plandaki blob efektini hareket ettirme (Opsiyonel/Premium hissi için)
document.addEventListener('mousemove', (e) => {
    const blob = document.querySelector('.blob');
    if (blob) {
        const x = e.clientX;
        const y = e.clientY;
        blob.style.left = `${x - 200}px`;
        blob.style.top = `${y - 200}px`;
    }
});
