import IslaSandal from '../assets/sneakers/IslaSandal.jpg'; //sandale
import forceZoom from '../assets/sneakers/forceZoom.jpg'; // force zoom
import airJordan from '../assets/sneakers/airJordan.jpg';
import allStar from '../assets/sneakers/allstar.jpg'; // converse
import chuckTaylor from '../assets/sneakers/chuckTaylor.jpg';
import runStar from '../assets/sneakers/runstar.jpg';
import sneakersRouge from '../assets/sneakers/sneakersRouge.jpg'; // Givenchy
import basketsPatch from '../assets/sneakers/basketsPatch.jpg';
import urbanStreet from '../assets/sneakers/ubranStreet.jpg';
import airForce from '../assets/sneakers/airForce.jpg'; // jordan


export const sneakersList = [
  {
    id: '1',
    nom: 'Air Max Isla Sandal',
    marque: 'Nike',
    prix: 69.95,
    style: 'Casual',
    esthetique: 4,
    confort: 5,
    image: IslaSandal,
  },
  {
    id: "2",
    nom: "Force Zoom Trout 7 Pro",
    marque: "Nike",
    prix: 84.95,
    style: "Training",
    esthetique: 3,
    confort: 4,
    image: forceZoom,
  },
  {
    id: "3",
    nom: "Air Jordan 4 RM",
    marque: "Nike",
    prix: 115,
    style: "Streetwear",
    esthetique: 5,
    confort: 3,
    image: airJordan,
    bestSeller: true
  },
  {
    id: "4",
    nom: "All Star",
    marque: "Converse",
    prix: 69.99,
    style: "Casual",
    esthetique: 4,
    confort: 4,
    image: allStar,
    bestSeller: true
  },
  {
    id: "5",
    nom: "Chuck Taylor All Star Lift",
    marque: "Converse",
    prix: 85,
    style: "Streetwear",
    esthetique: 4,
    confort: 1,
    image: chuckTaylor,
  },
  {
    id: "6",
    nom: "Run Star Hike Platform",
    marque: "Converse",
    prix: 110,
    style: "Streetwear",
    esthetique: 3,
    confort: 1,
    image: runStar,
  },
  {
    id: "7",
    nom: "Sneakers Rouge et Blanche",
    marque: "Givenchy",
    prix: 438,
    style: "Mode",
    esthetique: 5,
    confort: 4,
    image: sneakersRouge,
  },
  {
    id: "8",
    nom: "Baskets à Patch Logo",
    marque: "Givenchy",
    prix: 374,
    style: "Urbain",
    esthetique: 4,
    confort: 4,
    image: basketsPatch,
  },
  {
    id: "9",
    nom: "Urban Street Sneaker",
    marque: "Givenchy",
    prix: 450,
    style: "Mode",
    esthetique: 5,
    confort: 2,
    image: urbanStreet,
  },
  {
    id: "10",
    nom: "Air Force 1",
    marque: "Nike",
    prix: 119.99,
    style: "Streetwear",
    esthetique: 3,
    confort: 5,
    image: airForce,
    bestSeller: true
  }
];
