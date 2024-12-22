document.addEventListener("DOMContentLoaded", function() {
    const birthdays = [
        { name: "Nabil Ariq", date: "04-12" },
        { name: "Bagus Shaputra", date: "01-02" },
        { name: "gtw", date: "3-3" },
        { name: "gtw", date: "4-4" },
        { name: "gtw", date: "5-5" },
        { name: "gtw", date: "6-6" }
    ];

    const today = new Date();
    const currentDate = `${today.getDate()}-${today.getMonth() + 1}`;

    birthdays.forEach(birthday => {
        if (birthday.date === currentDate) {
            const giftPopup = document.createElement('div');
            giftPopup.className = 'gift-popup';
            giftPopup.innerHTML = `
                <img src="img/gift.jpg" alt="Kado">
                <p>Klik untuk melihat ucapan selamat ulang tahun!</p>
                <button onclick="showBirthdayMessage('${birthday.name}')">Klik Saya!</button>
            `;
            document.body.appendChild(giftPopup);
            giftPopup.style.display = 'block';
        }
    });
});

function showBirthdayMessage(name) {
    const messagePopup = document.createElement('div');
    messagePopup.className = 'birthday-message';
    messagePopup.innerHTML = `
        <h2>Selamat Ulang Tahun, ${name}!</h2>
        <p>Di hari istimewa ini, aku ingin kau tahu betapa berartinya dirimu bagiku. Semoga setiap impianmu terwujud dan kebahagiaan selalu menyertaimu. Teruslah bersinar, karena dunia ini butuh cahaya sepertimu.</p>
        <button onclick="this.parentElement.style.display='none'; this.parentElement.previousElementSibling.style.display='none';">Tutup</button>
    `;
    document.body.appendChild(messagePopup);
    messagePopup.style.display = 'block';
}