export default class CalculadoraEleicoes {
    private totalEleitores: number;
    private validos: number;
    private votosBrancos: number;
    private nulos: number;

    constructor(totalEleitores: number, validos: number, votosBrancos: number, nulos: number) {
        this.totalEleitores = totalEleitores;
        this.validos = validos;
        this.votosBrancos = votosBrancos;
        this.nulos = nulos;
    }

    calcularPercentual(votos: number) {
        return (votos / this.totalEleitores) * 100;
    }

    calcularPercentualValidos() {
        return this.calcularPercentual(this.validos);
    }

    calcularPercentualBrancos() {
        return this.calcularPercentual(this.votosBrancos);
    }

    calcularPercentualNulos() {
        return this.calcularPercentual(this.nulos);
    }
}
