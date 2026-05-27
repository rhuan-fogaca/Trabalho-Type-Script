"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Arquivo principal — Menu interativo com os 18 exercícios da disciplina.
*******************************************************************************/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  Utiliza o módulo nativo 'readline' do Node.js para entrada/saída no terminal.
  Importa cada exercício como uma função assíncrona de seus arquivos separados.
  O menu principal é exibido em loop (via função recursiva exibirMenu) até que
  o usuário escolha a opção 0 (sair).
  Cada exercício retorna uma Promise, aguardada com await antes de voltar ao menu.
*/
const readline = __importStar(require("readline"));
const exercicio01_1 = require("./exercicio01");
const exercicio02_1 = require("./exercicio02");
const exercicio03_1 = require("./exercicio03");
const exercicio04_1 = require("./exercicio04");
const exercicio05_1 = require("./exercicio05");
const exercicio06_1 = require("./exercicio06");
const exercicio07_1 = require("./exercicio07");
const exercicio08_1 = require("./exercicio08");
const exercicio09_1 = require("./exercicio09");
const exercicio10_1 = require("./exercicio10");
const exercicio11_1 = require("./exercicio11");
const exercicio12_1 = require("./exercicio12");
const exercicio13_1 = require("./exercicio13");
const exercicio14_1 = require("./exercicio14");
const exercicio15_1 = require("./exercicio15");
const exercicio16_1 = require("./exercicio16");
const exercicio17_1 = require("./exercicio17");
const exercicio18_1 = require("./exercicio18");
// Cria a interface readline compartilhada por toda a aplicação
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function limparConsole() {
    process.stdout.write("\x1Bc"); // Limpa o terminal
}
function exibirMenu() {
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
const exercicios = new Map([
    [1, exercicio01_1.executarExercicio01],
    [2, exercicio02_1.executarExercicio02],
    [3, exercicio03_1.executarExercicio03],
    [4, exercicio04_1.executarExercicio04],
    [5, exercicio05_1.executarExercicio05],
    [6, exercicio06_1.executarExercicio06],
    [7, exercicio07_1.executarExercicio07],
    [8, exercicio08_1.executarExercicio08],
    [9, exercicio09_1.executarExercicio09],
    [10, exercicio10_1.executarExercicio10],
    [11, exercicio11_1.executarExercicio11],
    [12, exercicio12_1.executarExercicio12],
    [13, exercicio13_1.executarExercicio13],
    [14, exercicio14_1.executarExercicio14],
    [15, exercicio15_1.executarExercicio15],
    [16, exercicio16_1.executarExercicio16],
    [17, exercicio17_1.executarExercicio17],
    [18, exercicio18_1.executarExercicio18],
]);
async function iniciar() {
    while (true) {
        exibirMenu();
        const opcao = await new Promise((res) => {
            rl.question("\nDigite o número do exercício (0 para sair): ", res);
        });
        const numero = parseInt(opcao, 10);
        if (isNaN(numero)) {
            console.log("\n⚠️  Opção inválida! Digite um número entre 0 e 18.");
            await new Promise((res) => rl.question("Pressione Enter para continuar...", () => res()));
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
            await new Promise((res) => rl.question("Pressione Enter para continuar...", () => res()));
        }
        else {
            await funcao(rl);
        }
    }
}
// Inicia a aplicação
iniciar().catch(console.error);
