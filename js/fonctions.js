//------------- Add a click event to increase the step progress bar-----------
function progres() {
    let step = document.querySelectorAll(".step");
    let coloreBarre = document.querySelectorAll('.bar');

    step.forEach(rond => {
        rond.addEventListener("click", function () {
            rond.classList.toggle("active");
            let coloreBarre = rond.nextElementSibling;
            if (coloreBarre != null) {
                coloreBarre.classList.toggle('active');
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function (ev) {
        document.getElementById("cRetour").className = (window.pageYOffset > 500) ? "cVisible" : "cInvisible";
    };
});

/*display technical skills function--------------------------------------------------------*/

function afficherCritere(divContainer, critere, niveau) {

    let divTitre = document.createElement('div');
    let para = document.createElement('p');
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');
    let li5 = document.createElement('li');

    divTitre.classList.add('titre');
    divContainer.appendChild(divTitre);
    console.log(divTitre);


    para.textContent = critere;
    divTitre.appendChild(para);

    ul.classList.add('stepbar');
    divTitre.appendChild(ul);

    li1.textContent = 1;
    li1.classList.add('step');
    if (niveau >= 1) {
        li1.classList.add('active');
    }
    ul.appendChild(li1);

    li2.classList.add('bar');
    if (niveau >= 1) {
        li2.classList.add('active')
    };
    ul.appendChild(li2);

    li3.textContent = 2;
    li3.classList.add('step');
    if (niveau >= 2) {
        li3.classList.add('active')
    };
    ul.appendChild(li3);

    li4.classList.add('bar');
    if (niveau >= 2) {
        li4.classList.add('active')
    };
    ul.appendChild(li4);

    li5.textContent = 3;
    li5.classList.add('step');
    if (niveau == 3) {
        li5.classList.add('active')
    };
    ul.appendChild(li5);

}

/*display soft skills function-------------------------------------------------------*/


function afficherCritere(divContainer, critere, niveau){

    let divTitre = document.createElement('div');
    let para = document.createElement('p');
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');
    let li5 = document.createElement('li');

    divTitre.classList.add('titre');
    divContainer.appendChild(divTitre);

    para.textContent = critere;
    divTitre.appendChild(para);

    ul.classList.add('stepbar');
    divTitre.appendChild(ul);

    li1.textContent = 1;
    li1.classList.add('step');
    if (niveau >=1){
        li1.classList.add('active');
    }
    ul.appendChild(li1);

    li2.classList.add('bar');
    if (niveau >= 1){
        li2.classList.add('active')
    };
    ul.appendChild(li2);

    li3.textContent = 2;
    li3.classList.add('step');
    if (niveau >= 2){
        li3.classList.add('active')
    };
    ul.appendChild(li3);

    li4.classList.add('bar');
    if (niveau >= 2) {
        li4.classList.add('active')
    };
    ul.appendChild(li4);

    li5.textContent = 3;
    li5.classList.add('step');
    if (niveau == 3) {
        li5.classList.add('active')
    };
    ul.appendChild(li5);
}













// function afficherniveau1(divContainer, critere, niveau) {

//     let divTitre = document.createElement('div');
//     let para = document.createElement('p');
//     let ul = document.createElement('ul');
//     let niveau1li1 = document.createElement('li');

//     divTitre.classList.add('titre');
//     divContainer.appendChild(divTitre);
//     console.log(divTitre);


//     para.textContent = critere;
//     divTitre.appendChild(para);

//     ul.classList.add('stepbar');
//     ul.classList.add('foot_stepbar1');
//     divTitre.appendChild(ul);

//     niveau1li1.textContent = 1;

//     niveau1li1.classList.add('step');
//     if (niveau >= 1) {
//         niveau1li1.classList.add('active');
//     }
//     ul.appendChild(niveau1li1);
// }

// function afficherNiveau2(divContainer, critere, niveau) {

//     let divTitre = document.createElement('div');
//     let para = document.createElement('p');
//     let ul = document.createElement('ul');
//     let niveau2li1 = document.createElement('li');
//     let niveau2li2 = document.createElement('li');
//     let niveau2li3 = document.createElement('li');

//     divTitre.classList.add('titre');
//     divContainer.appendChild(divTitre);

//     para.textContent = critere;
//     divTitre.appendChild(para);

//     ul.classList.add('stepbar');
//     ul.classList.add('foot_stepbar2');
//     divTitre.appendChild(ul);

//     niveau2li1.textContent = 1;
//     niveau2li3.textContent = 2;

//     niveau2li1.classList.add('step');
//     if (niveau >= 1) {
//         niveau2li1.classList.add('active');
//     };

//     niveau2li2.classList.add('bar');
//     if (niveau >= 1) {
//         niveau2li2.classList.add('active');
//     };

//     niveau2li3.classList.add('step');
//     if (niveau >= 2) {
//         niveau2li3.classList.add('active');
//     };

//     ul.appendChild(niveau2li1);
//     ul.appendChild(niveau2li2);
//     ul.appendChild(niveau2li3);

// }

// function afficherNiveau3(divContainer, critere, niveau) {

//     let divTitre = document.createElement('div');
//     let para = document.createElement('p');
//     let ul = document.createElement('ul');
//     let niveau3li1 = document.createElement('li');
//     let niveau3li2 = document.createElement('li');
//     let niveau3li3 = document.createElement('li');
//     let niveau3li4 = document.createElement('li');
//     let niveau3li5 = document.createElement('li');

//     divTitre.classList.add('titre');
//     divContainer.appendChild(divTitre);

//     para.textContent = critere;
//     divTitre.appendChild(para);

//     ul.classList.add('stepbar');
//     ul.classList.add('foot_stepbar3');
//     divTitre.appendChild(ul);

//     niveau3li1.textContent = 1;
//     niveau3li3.textContent = 2;
//     niveau3li5.textContent = 3;

//     niveau3li1.classList.add('step');
//     if (niveau >= 1) {
//         niveau3li1.classList.add('active');
//     };

//     niveau3li2.classList.add('bar');
//     if (niveau >= 1) {
//         niveau3li2.classList.add('active');
//     };

//     niveau3li3.classList.add('step');
//     if (niveau >= 2) {
//         niveau3li3.classList.add('active');
//     };

//     niveau3li4.classList.add('bar');
//     if (niveau >= 2) {
//         niveau3li4.classList.add('active');
//     };

//     niveau3li5.classList.add('step');
//     if (niveau >= 3) {
//         niveau3li5.classList.add('active');
//     };

//     ul.appendChild(niveau3li1);
//     ul.appendChild(niveau3li2);
//     ul.appendChild(niveau3li3);
//     ul.appendChild(niveau3li4);
//     ul.appendChild(niveau3li5);
// }

// function afficherNiveau4(divContainer, critere, niveau) {

//     let divTitre = document.createElement('div');
//     let para = document.createElement('p');
//     let ul = document.createElement('ul');
//     let niveau4li1 = document.createElement('li');
//     let niveau4li2 = document.createElement('li');
//     let niveau4li3 = document.createElement('li');
//     let niveau4li4 = document.createElement('li');
//     let niveau4li5 = document.createElement('li');
//     let niveau4li6 = document.createElement('li');
//     let niveau4li7 = document.createElement('li');

//     divTitre.classList.add('titre');
//     divContainer.appendChild(divTitre);

//     para.textContent = critere;
//     divTitre.appendChild(para);

//     ul.classList.add('stepbar');
//     ul.classList.add('foot_stepbar4');
//     divTitre.appendChild(ul);

//     niveau4li1.textContent = 1;
//     niveau4li3.textContent = 2;
//     niveau4li5.textContent = 3;
//     niveau4li7.textContent = 4;

//     niveau4li1.classList.add('step');
//     if (niveau >= 1) {
//         niveau4li1.classList.add('active');
//     };

//     niveau4li2.classList.add('bar');
//     if (niveau >= 1) {
//         niveau4li2.classList.add('active');
//     };

//     niveau4li3.classList.add('step');
//     if (niveau >= 2) {
//         niveau4li3.classList.add('active');
//     };

//     niveau4li4.classList.add('bar');
//     if (niveau >= 2) {
//         niveau4li4.classList.add('active');
//     };

//     niveau4li5.classList.add('step');
//     if (niveau >= 3) {
//         niveau4li5.classList.add('active');
//     };

//     niveau4li6.classList.add('bar');
//     if (niveau >= 3) {
//         niveau4li6.classList.add('active');
//     };

//     niveau4li7.classList.add('step');
//     if (niveau >= 4) {
//         niveau4li7.classList.add('active');
//     };

//     ul.appendChild(niveau4li1);
//     ul.appendChild(niveau4li2);
//     ul.appendChild(niveau4li3);
//     ul.appendChild(niveau4li4);
//     ul.appendChild(niveau4li5);
//     ul.appendChild(niveau4li6);
//     ul.appendChild(niveau4li7);
// }

// function afficherNiveau5(divContainer, critere, niveau) {

//     let divTitre = document.createElement('div');
//     let para = document.createElement('p');
//     let ul = document.createElement('ul');
//     let niveau5li1 = document.createElement('li');
//     let niveau5li2 = document.createElement('li');
//     let niveau5li3 = document.createElement('li');
//     let niveau5li4 = document.createElement('li');
//     let niveau5li5 = document.createElement('li');
//     let niveau5li6 = document.createElement('li');
//     let niveau5li7 = document.createElement('li');
//     let niveau5li8 = document.createElement('li');
//     let niveau5li9 = document.createElement('li');

//     divTitre.classList.add('titre');
//     divContainer.appendChild(divTitre);

//     para.textContent = critere;
//     divTitre.appendChild(para);

//     ul.classList.add('stepbar');
//     ul.classList.add('foot_stepbar5');
//     divTitre.appendChild(ul);

//     niveau5li1.textContent = 1;
//     niveau5li3.textContent = 2;
//     niveau5li5.textContent = 3;
//     niveau5li7.textContent = 4;
//     niveau5li9.textContent = 5;

//     niveau5li1.classList.add('step');
//     if (niveau >= 1) {
//         niveau5li1.classList.add('active');
//     };

//     niveau5li2.classList.add('bar');
//     if (niveau >= 1) {
//         niveau5li2.classList.add('active');
//     };

//     niveau5li3.classList.add('step');
//     if (niveau >= 2) {
//         niveau5li3.classList.add('active');
//     };

//     niveau5li4.classList.add('bar');
//     if (niveau >= 2) {
//         niveau5li4.classList.add('active');
//     };

//     niveau5li5.classList.add('step');
//     if (niveau >= 3) {
//         niveau5li5.classList.add('active');
//     };

//     niveau5li6.classList.add('bar');
//     if (niveau >= 3) {
//         niveau5li6.classList.add('active');
//     };

//     niveau5li7.classList.add('step');
//     if (niveau >= 4) {
//         niveau5li7.classList.add('active');
//     };

//     niveau5li8.classList.add('bar');
//     if (niveau >= 4) {
//         niveau5li8.classList.add('active');
//     };

//     niveau5li9.classList.add('step');
//     if (niveau >= 5) {
//         niveau5li9.classList.add('active');
//     };

//     ul.appendChild(niveau5li1);
//     ul.appendChild(niveau5li2);
//     ul.appendChild(niveau5li3);
//     ul.appendChild(niveau5li4);
//     ul.appendChild(niveau5li5);
//     ul.appendChild(niveau5li6);
//     ul.appendChild(niveau5li7);
//     ul.appendChild(niveau5li8);
//     ul.appendChild(niveau5li9);
// }

// function afficherNiveau6(divContainer, critere, niveau) {

//     let divTitre = document.createElement('div');
//     let para = document.createElement('p');
//     let ul = document.createElement('ul');
//     let niveau6li1 = document.createElement('li');
//     let niveau6li2 = document.createElement('li');
//     let niveau6li3 = document.createElement('li');
//     let niveau6li4 = document.createElement('li');
//     let niveau6li5 = document.createElement('li');
//     let niveau6li6 = document.createElement('li');
//     let niveau6li7 = document.createElement('li');
//     let niveau6li8 = document.createElement('li');
//     let niveau6li9 = document.createElement('li');
//     let niveau6li10 = document.createElement('li');
//     let niveau6li11 = document.createElement('li');

//     divTitre.classList.add('titre');
//     divContainer.appendChild(divTitre);

//     para.textContent = critere;
//     divTitre.appendChild(para);

//     ul.classList.add('stepbar');
//     ul.classList.add('foot_stepbar6');
//     divTitre.appendChild(ul);

//     niveau6li1.textContent = 1;
//     niveau6li3.textContent = 2;
//     niveau6li5.textContent = 3;
//     niveau6li7.textContent = 4;
//     niveau6li9.textContent = 5;
//     niveau6li11.textContent = 6;

//     niveau6li1.classList.add('step');
//     if (niveau >= 1) {
//         niveau6li1.classList.add('active');
//     };

//     niveau6li2.classList.add('bar');
//     if (niveau >= 1) {
//         niveau6li2.classList.add('active');
//     };

//     niveau6li3.classList.add('step');
//     if (niveau >= 2) {
//         niveau6li3.classList.add('active');
//     };

//     niveau6li4.classList.add('bar');
//     if (niveau >= 2) {
//         niveau6li4.classList.add('active');
//     };

//     niveau6li5.classList.add('step');
//     if (niveau >= 3) {
//         niveau6li5.classList.add('active');
//     };

//     niveau6li6.classList.add('bar');
//     if (niveau >= 3) {
//         niveau6li6.classList.add('active');
//     };

//     niveau6li7.classList.add('step');
//     if (niveau >= 4) {
//         niveau6li7.classList.add('active');
//     };

//     niveau6li8.classList.add('bar');
//     if (niveau >= 4) {
//         niveau6li8.classList.add('active');
//     };

//     niveau6li9.classList.add('step');
//     if (niveau >= 5) {
//         niveau6li9.classList.add('active');
//     };

//     niveau6li10.classList.add('bar');
//     if (niveau >= 5) {
//         niveau6li10.classList.add('active');
//     };

//     niveau6li11.classList.add('step');
//     if (niveau >= 6) {
//         niveau6li11.classList.add('active');
//     };

//     ul.appendChild(niveau6li1);
//     ul.appendChild(niveau6li2);
//     ul.appendChild(niveau6li3);
//     ul.appendChild(niveau6li4);
//     ul.appendChild(niveau6li5);
//     ul.appendChild(niveau6li6);
//     ul.appendChild(niveau6li7);
//     ul.appendChild(niveau6li8);
//     ul.appendChild(niveau6li9);
//     ul.appendChild(niveau6li10);
//     ul.appendChild(niveau6li11);
// }

/*display transverse functions--------------------------------------------------------*/

     function afficherCritere(divContainer, critere, niveau){

        let divTitre = document.createElement('div');
        let para = document.createElement('p');
        let ul = document.createElement('ul');
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        let li3 = document.createElement('li');
        let li4 = document.createElement('li');
        let li5 = document.createElement('li');

        divTitre.classList.add('titre');
        divContainer.appendChild(divTitre);

        para.textContent = critere;
        divTitre.appendChild(para);

        ul.classList.add('stepbar');
        divTitre.appendChild(ul);

        li1.textContent = 1;
        li1.classList.add('step');
        if (niveau >=1){
            li1.classList.add('active');
        }
        ul.appendChild(li1);

        li2.classList.add('bar');
        if (niveau >= 1){
            li2.classList.add('active')
        };
        ul.appendChild(li2);

        li3.textContent = 2;
        li3.classList.add('step');
        if (niveau >= 2){
            li3.classList.add('active')
        };
        ul.appendChild(li3);

        li4.classList.add('bar');
        if (niveau >= 2) {
            li4.classList.add('active')
        };
        ul.appendChild(li4);

        li5.textContent = 3;
        li5.classList.add('step');
        if (niveau == 3) {
            li5.classList.add('active')
        };
        ul.appendChild(li5);
    }
