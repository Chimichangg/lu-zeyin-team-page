(() => {
    let teamCard = document.querySelectorAll('.team-card'),
        detail = document.querySelector('.detail p'),
        detailPic = document.querySelectorAll('.detial img'),
        detailCard = document.querySelector('.detail');

    const memberData = [
        ['crazy girl'],
        ['jack dude'],
        ['quiet boy']
    ]

    function showData() {
        detail.textContent = memberData[0];
    }

    function showCard() {
        detailCard.classList.toggle('hidden');
    }








    teamCard.forEach(card => card,addEventListener('click',showData));
    teamCard.forEach(card => card,addEventListener('click',showCard));









})();