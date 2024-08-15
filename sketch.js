let palavra;
let musica;
let imagem;

function setup() {
  createCanvas(600, 500);
 
  palavra = CR7();
  musica.loop();
}

function preload(){
  imagem = loadImage("neymar.jpg");
  musica = loadSound("musica.mp3");
}
function draw() {
  image(imagem,0,0,600,600);
  Neymar();
  CR7();
  
  let maximo = width;
  let minimo = 0;
  
  let aparecer = map(mouseX,0,width, 1, palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio,300, 250)
  
}


function Neymar(){

  fill("darkblue");
  textSize(64);
  textAlign(CENTER,CENTER); 
}

function CR7(){
  let palavras = ["neymar","lindo","perfeito","joga muito"];
  return random(palavras);
}