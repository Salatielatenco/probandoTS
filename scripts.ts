class Jugador {
    vida : number = 100;
    habilidad : number = 100;
    nombre : string = "";
    ataque_especial : number = 50;
    patada: number = 25;
    golpe : number = 10;
    
    constructor(nombre : string){
        this.nombre = nombre;
    }
    



    medicar(jugadorObjetivo : any){
        jugadorObjetivo.vida -= this.golpe;
        this.jugador(jugadorObjetivo);
    }

    atacar(jugadorObjetivo :  any){
        if (this.vida >= 100) {
            console.log('No se puede usar esta habilidad');
        } else {
            jugadorObjetivo.vida += 20;
            this.habilidad -= 20;
        }
        this.jugador(jugadorObjetivo);
    }

    recuperar(jugadorObjetivo : any){
        if (this.habilidad >= 30) {
            jugadorObjetivo.vida -= 45;
            this.habilidad -= this.ataque_especial;
        }else{
            console.log('No se puede utilizar esta habilidad')
        }
        this.jugador(jugadorObjetivo);
    }

    salto(jugadorObjetivo : any ){
        if (this.habilidad >= 25) {
            jugadorObjetivo.vida -= 40;
            this.habilidad -= this.patada;
        } else {
            console.log('No hay suficiente energia')
        }
        this.jugador(jugadorObjetivo);
    }

    revivir(jugadorObjetivo : any){
        if (this.vida <= 0) {
            jugadorObjetivo.vida += 30;
        }else{
            console.log('No se puede usar esta habilidad :(');
        }
        this.jugador(jugadorObjetivo);
    }

    obtenerPoder(jugadorObjetivo : any){
        if (this.habilidad >= 100) {
            console.log('No se puede usar esta habilidad');
        } else {
            jugadorObjetivo.chakra += 20;
        }
        this.jugador(jugadorObjetivo);
    }
    jugador(jugadorObjetivo : number){
        console.log(jugadorObjetivo);
        console.log(this);
    }

}

const goku = new Jugador('goku');
const vegeta = new Jugador('vegeta');

console.log(goku);
console.log(vegeta);
