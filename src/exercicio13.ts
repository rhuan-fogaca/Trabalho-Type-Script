/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  Rhuan Patryck Fogaça Meurer
  Cristofer dos Anjos dos Santos
  Victor Ceolin de Oliveira
  Triziano Garcia Pereira Bravo
  Otávio Augusto Martins de Sá
Data: 24 de Maio de 2026
Descritivo: Interface Veiculo com métodos acelerar() e frear(), implementada na classe Carro.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  Define a interface Veiculo com a assinatura dos métodos acelerar() e frear().
  A classe Carro implementa a interface usando a palavra-chave 'implements',
  sendo obrigada a fornecer a implementação concreta de cada método.
  A classe possui atributos próprios: marca, modelo e velocidadeAtual.
  O método acelerar() incrementa a velocidade respeitando o limite máximo.
  O método frear() decrementa a velocidade, nunca deixando-a negativa.
  O programa simula interações com o carro através de um menu interativo.
*/

import * as readline from "readline";

// Interface que define o contrato que toda classe de veículo deve seguir
interface Veiculo {
  acelerar(incremento: number): void;
  frear(decremento: number): void;
  exibirStatus(): void;
}

// Classe Carro implementa a interface Veiculo
class Carro implements Veiculo {
  marca: string;
  modelo: string;
  private velocidadeAtual: number;
  private readonly velocidadeMaxima: number;

  constructor(marca: string, modelo: string, velMax: number = 220) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadeAtual = 0;
    this.velocidadeMaxima = velMax;
  }

  acelerar(incremento: number): void {
    const novaVel = this.velocidadeAtual + incremento;
    this.velocidadeAtual = Math.min(novaVel, this.velocidadeMaxima);
    console.log(`\n🚀 Acelerando +${incremento} km/h → Velocidade atual: ${this.velocidadeAtual} km/h`);
    if (this.velocidadeAtual === this.velocidadeMaxima) {
      console.log("   ⚠️  Velocidade máxima atingida!");
    }
  }

  frear(decremento: number): void {
    const novaVel = this.velocidadeAtual - decremento;
    this.velocidadeAtual = Math.max(novaVel, 0);
    console.log(`\n🛑 Freando -${decremento} km/h → Velocidade atual: ${this.velocidadeAtual} km/h`);
    if (this.velocidadeAtual === 0) {
      console.log("   🏁 Carro parado.");
    }
  }

  exibirStatus(): void {
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

function menuCarro(rl: readline.Interface, carro: Carro, resolve: () => void): void {
  carro.exibirStatus();
  console.log("\n  [1] Acelerar");
  console.log("  [2] Frear");
  console.log("  [0] Sair para o menu principal");

  rl.question("\nEscolha uma ação: ", (opcao) => {
    if (opcao === "1") {
      rl.question("Quanto acelerar (km/h)? ", (val) => {
        const v = parseFloat(val);
        if (!isNaN(v) && v > 0) carro.acelerar(v);
        else console.log("⚠️  Valor inválido.");
        menuCarro(rl, carro, resolve);
      });
    } else if (opcao === "2") {
      rl.question("Quanto frear (km/h)? ", (val) => {
        const v = parseFloat(val);
        if (!isNaN(v) && v > 0) carro.frear(v);
        else console.log("⚠️  Valor inválido.");
        menuCarro(rl, carro, resolve);
      });
    } else {
      resolve();
    }
  });
}

export function executarExercicio13(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 13 — Interface Veiculo / Classe Carro ===\n");

    rl.question("Marca do carro: ", (marca) => {
      rl.question("Modelo do carro: ", (modelo) => {
        rl.question("Velocidade máxima (km/h) [padrão: 220]: ", (velStr) => {
          const velMax = parseFloat(velStr) || 220;
          const carro = new Carro(
            marca.trim() || "Genérica",
            modelo.trim() || "Modelo X",
            velMax
          );
          console.log(`\n✅ Carro criado! Implmenta interface Veiculo: ✔`);
          menuCarro(rl, carro, resolve);
        });
      });
    });
  });
}
