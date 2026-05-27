"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Interface Veiculo com métodos acelerar() e frear(), implementada na classe Carro.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio13 = executarExercicio13;
// Classe Carro implementa a interface Veiculo
class Carro {
    constructor(marca, modelo, velMax = 220) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeAtual = 0;
        this.velocidadeMaxima = velMax;
    }
    acelerar(incremento) {
        const novaVel = this.velocidadeAtual + incremento;
        this.velocidadeAtual = Math.min(novaVel, this.velocidadeMaxima);
        console.log(`\n🚀 Acelerando +${incremento} km/h → Velocidade atual: ${this.velocidadeAtual} km/h`);
        if (this.velocidadeAtual === this.velocidadeMaxima) {
            console.log("   ⚠️  Velocidade máxima atingida!");
        }
    }
    frear(decremento) {
        const novaVel = this.velocidadeAtual - decremento;
        this.velocidadeAtual = Math.max(novaVel, 0);
        console.log(`\n🛑 Freando -${decremento} km/h → Velocidade atual: ${this.velocidadeAtual} km/h`);
        if (this.velocidadeAtual === 0) {
            console.log("   🏁 Carro parado.");
        }
    }
    exibirStatus() {
        console.log(`\n🚗 ${this.marca} ${this.modelo}`);
        console.log(`   Velocidade atual:  ${this.velocidadeAtual} km/h`);
        console.log(`   Velocidade máxima: ${this.velocidadeMaxima} km/h`);
        // Barra de velocidade visual
        const barraTotal = 20;
        const preenchido = Math.round((this.velocidadeAtual / this.velocidadeMaxima) * barraTotal);
        const barra = "█".repeat(preenchido) + "░".repeat(barraTotal - preenchido);
        console.log(`   [${barra}] ${Math.round((this.velocidadeAtual / this.velocidadeMaxima) * 100)}%`);
    }
}
function menuCarro(rl, carro, resolve) {
    carro.exibirStatus();
    console.log("\n  [1] Acelerar");
    console.log("  [2] Frear");
    console.log("  [0] Sair para o menu principal");
    rl.question("\nEscolha uma ação: ", (opcao) => {
        if (opcao === "1") {
            rl.question("Quanto acelerar (km/h)? ", (val) => {
                const v = parseFloat(val);
                if (!isNaN(v) && v > 0)
                    carro.acelerar(v);
                else
                    console.log("⚠️  Valor inválido.");
                menuCarro(rl, carro, resolve);
            });
        }
        else if (opcao === "2") {
            rl.question("Quanto frear (km/h)? ", (val) => {
                const v = parseFloat(val);
                if (!isNaN(v) && v > 0)
                    carro.frear(v);
                else
                    console.log("⚠️  Valor inválido.");
                menuCarro(rl, carro, resolve);
            });
        }
        else {
            resolve();
        }
    });
}
function executarExercicio13(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 13 — Interface Veiculo / Classe Carro ===\n");
        rl.question("Marca do carro: ", (marca) => {
            rl.question("Modelo do carro: ", (modelo) => {
                rl.question("Velocidade máxima (km/h) [padrão: 220]: ", (velStr) => {
                    const velMax = parseFloat(velStr) || 220;
                    const carro = new Carro(marca.trim() || "Genérica", modelo.trim() || "Modelo X", velMax);
                    console.log(`\n✅ Carro criado! Implmenta interface Veiculo: ✔`);
                    menuCarro(rl, carro, resolve);
                });
            });
        });
    });
}
