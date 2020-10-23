//-------------------------AJAX request using 'fetch'-------------------------

fetch('http://localhost:1337/competences-metiers')
.then(resp => resp.json())
.then(data => {

    let sectionMetier = document.getElementById('metier');

    data.forEach(element => {

        let h4 = document.createElement('h4');
        h4.textContent = element.intitule;
        sectionMetier.appendChild(h4);

        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        sectionMetier.appendChild(divContainer);

        afficherCritere(divContainer, "COMPRENDRE", element.comprendre);
        afficherCritere(divContainer, "DUPLIQUER", element.dupliquer);
        afficherCritere(divContainer, "ANALYSER", element.analyser);
        afficherCritere(divContainer, "EVALUER", element.evaluer);
        afficherCritere(divContainer, "CONCEVOIR", element.concevoir);
        afficherCritere(divContainer, "INVENTER", element.inventer);
       
    });

    let titreSectionMetier = document.createElement('h2');
    let compMetier = document.querySelectorAll('h4');
    let h3CompFront = document.createElement('h3');
    let h3CompBack = document.createElement('h3');

    titreSectionMetier.textContent = 'COMPETENCES METIER';
    sectionMetier.prepend(titreSectionMetier);

    h3CompFront.textContent = '1. DEVELOPPER LA PARTIE FRONT-END D\'UNE APPLICATION WEB OU WEB MOBILE EN INTEGRANT LES RECOMMANDATIONS DE SECURITE :';
    sectionMetier.insertBefore(h3CompFront, compMetier[0]);
    
    h3CompBack.textContent = '2. DEVELOPPER LA PARTIE BACK-END D\'UNE APPLICATION WEB OU WEB MOBILE EN INTEGRANT LES RECOMMANDATIONS DE SECURITE :';
    sectionMetier.insertBefore(h3CompBack, compMetier[4]);

});

fetch('http://localhost:1337/competences-technologiques')
.then(resp => resp.json())
.then(data => {

    let sectionTechno = document.getElementById('techno');

    data.forEach(element => {
        let logoTechno = document.createElement('img');
        logoTechno.id = "idlogo";
        logoTechno.src = element.logo;
        sectionTechno.appendChild(logoTechno);
        console.log(logoTechno);
        

        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        sectionTechno.appendChild(divContainer);

        afficherCritere(divContainer, "COMPRENDRE", element.comprendre);
        afficherCritere(divContainer, "DUPLIQUER", element.dupliquer);
        afficherCritere(divContainer, "ANALYSER", element.analyser);
        afficherCritere(divContainer, "EVALUER", element.evaluer);
        afficherCritere(divContainer, "CONCEVOIR", element.concevoir);
        afficherCritere(divContainer, "INVENTER", element.inventer);
    
    });

    let titreSectionTechno = document.createElement('h2');

    titreSectionTechno.textContent = 'COMPETENCES TECHNOLOGIQUES';
    sectionTechno.prepend(titreSectionTechno);
    progres();
    
});

fetch('http://localhost:1337/competences-humaines')
.then(resp => resp.json())
.then(data => {

    // let sectionHumaines = document.getElementById('humaines');

    // data.forEach(element => {
    //     // console.log(element.intitule);
    //     let h4 = document.createElement('h4');
    //     h4.textContent = element.intitule;
    //     sectionHumaines.appendChild(h4);

    //     let divContainer = document.createElement('div');
    //     divContainer.classList.add('container');
    //     sectionHumaines.appendChild(divContainer);

    //     afficherniveau1(divContainer, "Niveau 1", element.niveau_1);
    //     afficherNiveau2(divContainer, "Niveau 2", element.niveau_2);
    //     afficherNiveau3(divContainer, "Niveau 3", element.niveau_3);
    //     afficherNiveau4(divContainer, "Niveau 4", element.niveau_4);
    //     afficherNiveau5(divContainer, "Niveau 5", element.niveau_5);
    //     afficherNiveau6(divContainer, "Niveau 6", element.niveau_6);
    // });

    // let titreSectionHumaines = document.createElement('h2');
    // titreSectionHumaines.textContent = 'COMPETENCES HUMAINES';
    // sectionHumaines.prepend(titreSectionHumaines);
    
    let sectionHumaines = document.getElementById('humaines');

    
    data.forEach(element => {
        let h3 = document.createElement('h3');
        h3.textContent = element.Intitule;
        sectionHumaines.appendChild(h3);
        console.log(h3);
        

        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        sectionHumaines.appendChild(divContainer);

        afficherCritere(divContainer, "COOPERATION", element.cooperation);
        afficherCritere(divContainer, "CREATIVITE", element.creativite);
        afficherCritere(divContainer, "DISPONIBILITE", element.disponibilite);
        afficherCritere(divContainer, "FIABILITE", element.fiabilite);
        afficherCritere(divContainer, "ORGANISATION", element.organisation);
        afficherCritere(divContainer, "CURIOSITE", element.curiosite);
        afficherCritere(divContainer, "ENERGIE", element.energie);
        afficherCritere(divContainer, "FLUIDITE", element.fluidite);
        afficherCritere(divContainer, "INDEPENDANCE", element.independance);
        afficherCritere(divContainer, "LEADERSHIP", element.leadership);
    });

    let titreSectionHumaines = document.createElement('h2');
    titreSectionHumaines.textContent = 'COMPETENCES HUMAINES';
    sectionHumaines.prepend(titreSectionHumaines);
   


});

fetch('http://localhost:1337/competences-transverses')
.then(resp => resp.json())
.then(data => {

    let sectionTransverses = document.getElementById('transverses');

    
    data.forEach(element => {
        let h3 = document.createElement('h3');
        h3.textContent = element.Intitule;
        sectionTransverses.appendChild(h3);
        console.log(h3);
        

        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        sectionTransverses.appendChild(divContainer);

        afficherCritere(divContainer, "SECURITE", element.Securite);
        afficherCritere(divContainer, "ANGLAIS", element.Anglais);
    });

    let titreSectionTransverses = document.createElement('h2');
    titreSectionTransverses.textContent = 'COMPETENCES TRANSVERSES';
    sectionTransverses.prepend(titreSectionTransverses);
   

  

});