
const datajson = 'json/data.json';

async function getBusinessData() {
    const response = await fetch(datajson);
    const data = await response.json();
    displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.cards');

    businesses.forEach((business) => {
        let card = document.createElement('section');
        card.setAttribute('class', 'business-card');

        let h2 = document.createElement('h2');
        h2.setAttribute('id', 'business-name');

        let p = document.createElement('p');
        p.setAttribute('class', 'business-contact');

        let p2 = document.createElement('p');
        p2.setAttribute('class', 'business-established');

        let p3 = document.createElement('p');
        p3.setAttribute('class', 'business-address');

        let p4 = document.createElement('p');
        p4.setAttribute('class', 'business-phone');

        let p5 = document.createElement('p');
        p5.setAttribute('class', 'business-website');

        let portrait = document.createElement('img');
        portrait.setAttribute('id', 'business-image');

        h2.textContent = `${business.name}`;
        p.textContent = `Contact: ${business.contact}`;
        p2.textContent = `Established: ${business.established}`;
        p3.textContent = `Address: ${business.address}`;
        p4.textContent = `Phone: ${business.phone}`;
        p5.textContent = `Website: ${business.url}`;

        portrait.setAttribute('src', business.image);
        portrait.setAttribute('alt', `Portrait of ${business.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(p5);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

getBusinessData();
