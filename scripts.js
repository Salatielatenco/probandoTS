var Jugador = /** @class */ (function () {
    function Jugador(nombre) {
        this.vida = 100;
        this.habilidad = 100;
        this.nombre = "";
        this.ataque_especial = 50;
        this.patada = 25;
        this.golpe = 10;
        this.nombre = nombre;
    }
    Jugador.prototype.medicar = function (jugadorObjetivo) {
        jugadorObjetivo.vida -= this.golpe;
        this.jugador(jugadorObjetivo);
    };
    Jugador.prototype.atacar = function (jugadorObjetivo) {
        if (this.vida >= 100) {
            console.log('No se puede usar esta habilidad');
        }
        else {
            jugadorObjetivo.vida += 20;
            this.habilidad -= 20;
        }
        this.jugador(jugadorObjetivo);
    };
    Jugador.prototype.recuperar = function (jugadorObjetivo) {
        if (this.habilidad >= 30) {
            jugadorObjetivo.vida -= 45;
            this.habilidad -= this.ataque_especial;
        }
        else {
            console.log('No se puede utilizar esta habilidad');
        }
        this.jugador(jugadorObjetivo);
    };
    Jugador.prototype.salto = function (jugadorObjetivo) {
        if (this.habilidad >= 25) {
            jugadorObjetivo.vida -= 40;
            this.habilidad -= this.patada;
        }
        else {
            console.log('No hay suficiente energia');
        }
        this.jugador(jugadorObjetivo);
    };
    Jugador.prototype.revivir = function (jugadorObjetivo) {
        if (this.vida <= 0) {
            jugadorObjetivo.vida += 30;
        }
        else {
            console.log('No se puede usar esta habilidad :(');
        }
        this.jugador(jugadorObjetivo);
    };
    Jugador.prototype.obtenerPoder = function (jugadorObjetivo) {
        if (this.habilidad >= 100) {
            console.log('No se puede usar esta habilidad');
        }
        else {
            jugadorObjetivo.chakra += 20;
        }
        this.jugador(jugadorObjetivo);
    };
    Jugador.prototype.jugador = function (jugadorObjetivo) {
        console.log(jugadorObjetivo);
        console.log(this);
    };
    return Jugador;
}());
var goku = new Jugador('goku');
var vegeta = new Jugador('vegeta');
console.log(goku);
console.log(vegeta);
