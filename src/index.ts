
/*
    ===== Código de TypeScript =====
*/


/*
    ===== Código de TypeScript =====
*/
let heroe: string = 'HEERON';
let player: string = 'jonathan';
let  hp: number = 95;
let  lvl: number = 15;
let state: boolean = true;
console.log(player, hp);

let habilidad1: string = 'Daño explosivo';
let habilidad2: string = 'Control';
let habilidad4: string = 'Movilidad';

let habilidades: (boolean | string | number)[] = ['Protección', 'Curación', 'Daño explosivo',15,82, true,'bot','NOREEH'];
habilidades.push(0.5);
console.log(habilidades);


let habilidades2: any = ['Daño continuo', 'Rompe escudos', 'Aguante',lvl,hp, state,player, heroe];
habilidades2.push(0.7);
console.log(habilidades2);

interface Heroe {
    heroe: string;
    player: string;
    hp: number;
    lvl: number;
    state: boolean;
    habilidades: (boolean | string | number)[];
    habilidad1: string;
    habilidad2: string;
    habilidad4: string;

}

const personaje: Heroe = {
    heroe: heroe,
    player: player,
    hp: hp,
    lvl: lvl,
    state: state,
    habilidad1: habilidad1,
    habilidad2: habilidad2,
    habilidad4: habilidad4,
    habilidades: [habilidad1, habilidad2, habilidad4, lvl, state,player, heroe]
}

console.table(personaje);



function concatenar (a,b){
    return a + b;
}

const resultado = concatenar('Jona','-than');
console.log(resultado);

function aumentarVida (c: number,d: number) : number {
    return c + d;
}
const aumentoVida = aumentarVida(0.02,0.01);

const aumentoVidaFlecah = (c: number,d: number) : number =>{
    return c + d;
} 

console.log(aumentoVida);
console.log(aumentoVidaFlecah(0.01,0.0125));



let h:number = 0.4;
function multiplicarCuracion (f: number, g: number, h?: number) : number{
    let resultado: number = 0;
    let notification: string = '';
    if(h){
        resultado = f * g * h;
        notification = 'El hp curado con el requerimiento ( f - g - h? ) es de:  (' + resultado + ') y los numeros enviados fueron:  f: requerido (' + f + ') , g: requerido (' + g + ') y h como opcional (' + h + ')';
        console.log(notification);
        return resultado;
    }else{
        resultado = f * g;
        notification = 'El hp curado con el requerimiento ( f - g ) es de:  (' + resultado +') y los numeros enviados fueron: f: requerido (' + f + '), g: requerido (' + g + ') y h no se envia (' + h + ')' ;
       console.log(notification);
        return resultado;
    }
}
console.log(multiplicarCuracion(0.2,0.3));
console.log(multiplicarCuracion(0.2,0.3,h));

function curar(personaje:Heroe,curarX:number): void {

    personaje.hp += curarX;
    console.log(personaje.hp + ' nuevo hp del heroe');
}

curar(personaje,0.2);
console.table(personaje);