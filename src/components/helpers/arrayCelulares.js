import SamsungGalaxyS20 from '../../images/Samsung Galaxy S20.jpg'
import SamsungGalaxyS10 from '../../images/Samsung Galaxy S10.jpg'
import HuaweiP30Pro from '../../images/Huawei P30 Pro.jpg'
import HuaweiP40Pro from '../../images/Huawei P40 Pro.jpg'
import MotoG9Plus from '../../images/Moto G9 Plus.png'
import IphoneX from '../../images/IphoneX.jpg'
import Iphone12Pro from '../../images/Iphone 12 Pro.png'
import MotoG7 from '../../images/Moto G7.jpg'

export const celulares = [
    {
        id: 1,
        mark: 'huawei',
        title: 'Huawei P30 Pro',
        titleLink: 'huaweip30pro',
        price:179999,
        pictureURL:HuaweiP30Pro,
        internalMemory:256,
        ramMemory:6,
        cameras: {
            back: '40 Megapíxeles gran angular f/1.6, 20 Megapíxeles ultra gran angular f/2.2, 8 Megapíxeles teleobjetivo 5x f/3.4, Cámara TOF (Time Of Flight) 3D',
            front:'Sensor de 32 Mpíxeles f/2.0'
        },
        availableColors:'Pearl white (blanco), Breathing Crystal (azul), Black (negro), Amber Sunrise (naranja-rojo), Aurora (azul-verde)',
        stock: 3
    },
    {
        id: 2,
        mark: 'huawei',
        title: 'Huawei P40 Pro',
        titleLink: 'huaweip40pro',
        price:229999,
        pictureURL:HuaweiP40Pro,
        internalMemory:256,
        ramMemory:8,
        cameras: {
            back: 'Sensor RYYB 50 MP, f/1.9, (1/1,28"), OIS, Ultra gran angular 40 MP, f/1.8, Telefoto 12 MP (RYYB) zoom óptico 5x, OIS, Sensor ToF 3D',
            front:'32 megapíxeles, f/2.2, Sensor IR, Vídeo 4K 60 fps'
        },
        availableColors:'Deep Sea Blue (azul), Silver Frost (gris)',
        stock: 5
    },
    {
        id: 3,
        mark: 'iphone',
        title: 'Iphone 12 Pro',
        titleLink: 'iphone12pro',
        price:299999,
        pictureURL:Iphone12Pro,
        internalMemory:128,
        ramMemory:6,
        cameras: {
            back: '12 MP f/1.6 26mm OIS, 12 MP (tele) f/2.2 52mm OIS, 12 MP f/1.6 13mm ultra gran angular 120º, Cámara LiDAR, Vídeo 4K@60fps, Grabación en Dolby Vision',
            front:'12 megapíxeles f/2.2, HDR,  Cámara lenta frontal'
        },
        availableColors:'Blanco, Rojo, Verde, Azul, Violeta',
        stock: 9
    },
    {
        id: 4,
        mark: 'iphone',
        title: 'Iphone X',
        titleLink: 'iphonex',
        price:249999,
        pictureURL: IphoneX,
        internalMemory:128,
        ramMemory:3,
        cameras: {
            back: '12 + 12 megapíxeles gran angular y teleobjetivo (f/1.8 y f/2.4), doble OIS, zoom óptico, grabación 4K@24/30/60fps, flash 4 LED',
            front:'7 megapíxeles, f/2.2, grabación 1080p, Retina flash, vídeo 1080p'
        },
        availableColors:'Negro, Blanco, Rojo, Verde, Azul, Violeta',
        stock: 8
    },
    {
        id: 5,
        mark: 'motorola',
        title: 'Moto G7',
        titleLink: 'motog7',
        price:44999,
        pictureURL: MotoG7,
        internalMemory:64,
        ramMemory:4,
        cameras: {
            back: 'Dual de 12 MP + 5 MP',
            front:'8 MP con flash'
        },
        availableColors:'Blanco, Negro',
        stock: 1
    },
    {
        id: 6,
        mark: 'motorola',
        title: 'Moto G9 Plus',
        titleLink: 'motog9plus',
        price:49999,
        pictureURL: MotoG9Plus,
        internalMemory:128,
        ramMemory:4,
        cameras: {
            back: 'Sistema de cuatro cámaras con sensor principal de 64 MP',
            front:'16 Mpx'
        },
        availableColors:'Azul Dive, Rosa Champagne',
        stock: 8
    },
    {
        id: 7,
        mark: 'samsung',
        title: 'Samsung Galaxy S10',
        titleLink: 'samsunggalaxys10',
        price:79999,
        pictureURL: SamsungGalaxyS10,
        internalMemory:128,
        ramMemory:8,
        cameras: {
            back: 'Lector de profundidad 3D, 16 MP ultra gran angular f/2.2, 12 MP Dual Pixel OIS f/1.5/2.4 OIS, 12 MP Tele f/2.4 OIS',
            front:'10 MP Dual Pixel f/1.9, Lector de profundidad 3D'
        },
        availableColors: 'Prisma blanco, Prisma Negro y Prisma azul',
        stock: 9
    },
    {
        id: 8,
        mark: 'samsung',
        title: 'Samsung Galaxy S20',
        titleLink: 'samsunggalaxys20',
        price:86999,
        pictureURL: SamsungGalaxyS20,
        internalMemory:128,
        ramMemory:8,
        cameras: {
            back: '40 Megapíxeles gran angular f/1.6, 20 Megapíxeles ultra gran angular f/2.2, 8 Megapíxeles teleobjetivo 5x f/3.4, Cámara TOF (Time Of Flight) 3D',
            front:'Sensor de 32 Mpíxeles f/2.0'
        },
        availableColors:'Cosmic gray (gris), Cloud blue (celeste), Cloud pink (rosa), Cloud white (blanco), Aura red (rojo)',
        stock: 10
    },
]