import { LightningElement } from 'lwc';

export default class ArrayParent extends LightningElement {
    userDetails = [
        {
            name: 'John Doe',
            title: 'CEO & Founder',
            company: 'Harvard University, example',
            buttontext: 'Contact',
            imageUrl: 'https://i2.cinestaan.com/image-bank/1500-1500/99001-100000/99788.jpg'
        },
        {
            name: 'Steve Smith',
            title: 'CEO & Founder',
            company: 'Standford University, example',
            buttontext: 'Contact',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjEzNDdlMDMtMWQ0Yy00MDg0LWEwMTctOGQ0OTA2YWRmYmQ2XkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_UY1200_CR53,0,630,1200_AL_.jpg'
        },
        {
            name: 'David Warner',
            title: 'CEO & Founder',
            company: 'Sydney University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.deccanherald.com/sites/dh/files/article_images/2020/05/28/Here%E2%80%99s%20why%20Jr%20NTR%20will%20not%20be%20visiting%20the%20NTR%20Ghat%20on%20Annagaru%E2%80%99s%20birth%20anniversary-1590652806.jpg'
        },
        {
            name: 'Peter Parker',
            title: 'CEO & Founder',
            company: 'Melbourne University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team4.jpg'
        }

    ]
}