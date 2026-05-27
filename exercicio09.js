"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Criar uma calculadora simples de quatro operações (+ - * /).
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio09 = executarExercicio09;
function executarExercicio09(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 09 — Calculadora Quatro Operações ===\n");
        rl.question("Digite o primeiro número: ", (n1) => {
            rl.question("Digite o operador (+, -, *, /): ", (op) => {
                rl.question("Digite o segundo número: ", (n2) => {
                    const num1 = parseFloat(n1);
                    const num2 = parseFloat(n2);
                    const operador = op.trim();
                    if (isNaN(num1) || isNaN(num2)) {
                        console.log("\n⚠️  Números inválidos!");
                    }
                    else {
                        let resultado;
                        switch (operador) {
                            case "+":
                                resultado = num1 + num2;
                                break;
                            case "-":
                                resultado = num1 - num2;
                                break;
                            case "*":
                                resultado = num1 * num2;
                                break;
                            case "/":
                                resultado = num2 === 0 ? "Erro: divisão por zero!" : num1 / num2;
                                break;
                            default:
                                resultado = "Operador inválido!";
                        }
                        console.log(`\n✅ ${num1} ${operador} ${num2} = ${typeof resultado === "number" ? resultado.toFixed(4).replace(/\.?0+$/, "") : resultado}`);
                    }
                    rl.question("\nPressione Enter para voltar ao menu...", () => {
                        resolve();
                    });
                });
            });
        });
    });
}
