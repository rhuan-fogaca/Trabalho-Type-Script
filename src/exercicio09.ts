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
Descritivo: Criar uma calculadora simples de quatro operações (+ - * /).
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  O programa solicita dois números e o operador desejado (+, -, *, /).
  Utiliza um switch para selecionar a operação correta.
  Para divisão, verifica se o divisor é zero antes de calcular.
  O resultado é exibido com até quatro casas decimais.
*/

import * as readline from "readline";

export function executarExercicio09(rl: readline.Interface): Promise<void> {
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
          } else {
            let resultado: number | string;
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
