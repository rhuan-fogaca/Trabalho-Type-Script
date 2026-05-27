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
Descritivo: Arquivo principal — Menu interativo com os 18 exercícios da disciplina.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  Utiliza o módulo nativo 'readline' do Node.js para entrada/saída no terminal.
  Importa cada exercício como uma função assíncrona de seus arquivos separados.
  O menu principal é exibido em loop (via função recursiva exibirMenu) até que
  o usuário escolha a opção 0 (sair).
  Cada exercício retorna uma Promise, aguardada com await antes de voltar ao menu.
*/

import * as readline from "readline";

import { executarExercicio01 } from "./exercicio01";
import { executarExercicio02 } from "./exercicio02";
import { executarExercicio03 } from "./exercicio03";
import { executarExercicio04 } from "./exercicio04";
import { executarExercicio05 } from "./exercicio05";
import { executarExercicio06 } from "./exercicio06";
import { executarExercicio07 } from "./exercicio07";
import { executarExercicio08 } from "./exercicio08";
import { executarExercicio09 } from "./exercicio09";
import { executarExercicio10 } from "./exercicio10";
import { executarExercicio11 } from "./exercicio11";
import { executarExercicio12 } from "./exercicio12";
import { executarExercicio13 } from "./exercicio13";
import { executarExercicio14 } from "./exercicio14";
import { executarExercicio15 } from "./exercicio15";
import { executarExercicio16 } from "./exercicio16";
import { executarExercicio17 } from "./exercicio17";
import { executarExercicio18 } from "./exercicio18";

// Cria a interface readline compartilhada por toda a aplicação
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function limparConsole(): void {
  process.stdout.write("\x1Bc"); // Limpa o terminal
}

function exibirMenu(): void {
  limparConsole();
  console.log("╔══════════════════════════════════════════════════════╗");
  console.log("║       LISTA DE EXERCÍCIOS — PROGRAMAÇÃO FRONT-END    ║");
  console.log("║         Tecnologia em ADS — Turma ADS3A              ║");
  console.log("╠══════════════════════════════════════════════════════╣");
  console.log("║  01 — Soma de dois números                           ║");
  console.log("║  02 — Par ou Ímpar                                   ║");
  console.log("║  03 — Média de três notas                            ║");
  console.log("║  04 — Celsius para Fahrenheit                        ║");
  console.log("║  05 — Números pares de 1 a 20                        ║");
  console.log("║  06 — Array com 5 números                            ║");
  console.log("║  07 — Maior número em array                          ║");
  console.log("║  08 — Contagem de vogais                             ║");
  console.log("║  09 — Calculadora quatro operações                   ║");
  console.log("║  10 — Ordenar array crescente                        ║");
  console.log("║  11 — Classe Pessoa                                  ║");
  console.log("║  12 — Herança: Aluno extends Pessoa                  ║");
  console.log("║  13 — Interface Veiculo / Classe Carro               ║");
  console.log("║  14 — Tabuada                                        ║");
  console.log("║  15 — Calculadora de IMC                             ║");
  console.log("║  16 — Validação de Senha                             ║");
  console.log("║  17 — Jogo: Adivinhe o Número                        ║");
  console.log("║  18 — Contagem de Palavras                           ║");
  console.log("╠══════════════════════════════════════════════════════╣");
  console.log("║   0 — Sair do programa                               ║");
  console.log("╚══════════════════════════════════════════════════════╝");
}

// Mapa de exercícios: número → função executora
type FuncaoExercicio = (rl: readline.Interface) => Promise<void>;

const exercicios: Map<number, FuncaoExercicio> = new Map([
  [1,  executarExercicio01],
  [2,  executarExercicio02],
  [3,  executarExercicio03],
  [4,  executarExercicio04],
  [5,  executarExercicio05],
  [6,  executarExercicio06],
  [7,  executarExercicio07],
  [8,  executarExercicio08],
  [9,  executarExercicio09],
  [10, executarExercicio10],
  [11, executarExercicio11],
  [12, executarExercicio12],
  [13, executarExercicio13],
  [14, executarExercicio14],
  [15, executarExercicio15],
  [16, executarExercicio16],
  [17, executarExercicio17],
  [18, executarExercicio18],
]);

async function iniciar(): Promise<void> {
  while (true) {
    exibirMenu();

    const opcao = await new Promise<string>((res) => {
      rl.question("\nDigite o número do exercício (0 para sair): ", res);
    });

    const numero = parseInt(opcao, 10);

    if (isNaN(numero)) {
      console.log("\n⚠️  Opção inválida! Digite um número entre 0 e 18.");
      await new Promise<void>((res) => rl.question("Pressione Enter para continuar...", () => res()));
      continue;
    }

    if (numero === 0) {
      console.log("\n👋 Encerrando o programa. Até logo!\n");
      rl.close();
      process.exit(0);
    }

    const funcao = exercicios.get(numero);
    if (!funcao) {
      console.log("\n⚠️  Exercício não encontrado! Escolha entre 1 e 18.");
      await new Promise<void>((res) => rl.question("Pressione Enter para continuar...", () => res()));
    } else {
      await funcao(rl);
    }
  }
}

// Inicia a aplicação
iniciar().catch(console.error);
