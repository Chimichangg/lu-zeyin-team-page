(() => {
    let teamCard = document.querySelectorAll('.team-card'),
        detailP = document.querySelector('.detail p'),
        detailHd = document.querySelector('.detail span'),
        detailPic = document.querySelector('.detail img'),
        detailCard = document.querySelector('.detail');

    const memberData = [
        [`Aimée Purnima`,`Aimée brings more than 10 years experience in web technologies and digital solutions. She has refined her skills working with different advertising agencies and organizations. His expertise focuses on making creative ideas become attainable solutions, providing strategic ways of bridging ideas to execution.`],


        [`Dulf Pontos`,`Dulf attributes his success in multiple performance-based industries on the belief that he was committed to providing significantly more value to his employers and customers than anyone else in the field`],


        [`Zeyin Lu`,`Zeyin is the new intern to the company and mostly responsible for all the tasks that are given by people in the company. He is proficient in getting coffee, getting lunch, and cleaning the break room. He will occasionally receive some design or coding tasks from his superior, but he is still learning how to manage them.`]
    ]

    function showData(el) {
        detailHd.textContent = memberData[el.dataset.offset][0];
        detailP.textContent = memberData[el.dataset.offset][1];
        detailPic.src = `images/member${el.dataset.offset}.jpg`;
    }

    function showHideCard(event) {
        if (event.target.parentNode.classList.contains('team-card')) { 
            detailCard.classList.remove('hidden');
 
            showData(event.target.parentNode)
         } else {
             detailCard.classList.add('hidden');
         }
 
        
     }





     document.body.addEventListener('click', showHideCard);



})();