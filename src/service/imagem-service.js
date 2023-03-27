

import imagem0 from '../assets/images/landscape0.jpg';
import imagem1 from '../assets/images/landscape1.jpg';
import imagem2 from '../assets/images/landscape2.jpg';
import imagem3 from '../assets/images/landscape3.jpg';
import imagem4 from '../assets/images/landscape4.jpg';
import imagem5 from '../assets/images/landscape5.jpg';
import imagem6 from '../assets/images/landscape6.jpg';
import imagem7 from '../assets/images/landscape7.jpg';
import imagem8 from '../assets/images/landscape8.jpg';
import imagem9 from '../assets/images/landscape9.jpg';

export default function GetImagem(indice) {

    const imagens = [imagem0, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9];

    return imagens[indice];

};