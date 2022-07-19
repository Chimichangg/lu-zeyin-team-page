(() => {
    let teamCard = document.querySelectorAll('.team-card'),
        detailP = document.querySelector('.detail p'),
        detailHd = document.querySelector('.detail span'),
        detailPic = document.querySelector('.detail img'),
        detailCard = document.querySelector('.detail');

    const memberData = [
        [`Aimée Purnima`,`Aimée brings more than 10 years experience in web technologies and digital solutions. She has refined her skills working with different advertising agencies and organizations. His expertise focuses on making creative ideas become attainable solutions, providing strategic ways of bridging ideas to execution.`],


        [`Dulf Pontos`,`Dulf attributes his success in multiple performance-based industries on the belief that he was committed to providing significantly more value to his employers and customers than anyone else in the field`],


        [`Gabi Chimwala`,`Gabi has more than 7 years of experience in digital marketing particularly SEO and PPC. He had worked with different agencies and businesses in Australia, Europe and US. He is the person behind Client Care, our customer support system, making sure that every problems faced by the clients are being addressed and troubleshooted. His experience also equipped his in supporting the team whenever needed.`]
    ]

    function showData() {
        detailHd.textContent = memberData[this.dataset.offset][0];
        detailP.textContent = memberData[this.dataset.offset][1];
        detailPic.src = `images/member${this.dataset.offset}.jpg`;
    }

    function showCard() {
        detailCard.classList.toggle('hidden');
    }








    teamCard.forEach(card => card.addEventListener('click',showData));
    teamCard.forEach(card => card.addEventListener('click',showCard));









})();