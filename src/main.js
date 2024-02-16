import sunFlowerImg from "./media/sf.jpg"
import anime from "animejs";


const img = document.createElement('img');
document.body.append(img)
img.src = sunFlowerImg;


anime({
    targets: img,
    rotate: 360
})