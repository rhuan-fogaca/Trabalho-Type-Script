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
Descritivo: Calculadora de IMC com classificação por faixa de peso.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  Recebe peso (kg) e altura (m) do usuário.
  Calcula o IMC com a fórmula: IMC = peso / (altura²).
  Determina a classificação usando uma cadeia de if/else if conforme tabela da OMS.
  Exibe o resultado e a classificação correspondente.
*/

import * as readline from "readline";

function classificarIMC(imc: number): string {
  if (imc < 18.5)  return "⚠️  Abaixo do peso";
  if (imc < 25.0)  return "✅ Peso normal";
  if (imc < 30.0)  return "⚠️  Sobrepeso";
  if (imc < 35.0)  return "🔴 Obesidade Grau I";
  if (imc < 40.0)  return "🔴 Obesidade Grau II";
  return "🔴 Obesidade Grau III (Mórbida)";
}

export function executarExercicio15(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 15 — Calculadora de IMC ===\n");

    rl.question("Digite seu peso (kg): ", (pesoStr) => {
      rl.question("Digite sua altura (m): ", (alturaStr) => {
        const peso = parseFloat(pesoStr);
        const altura = parseFloat(alturaStr);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
          console.log("\n⚠️  Valores inválidos! Peso e altura devem ser positivos.");
        } else {
          const imc: number = peso / (altura * altura);
          const classificacao: string = classificarIMC(imc);
          console.log(`\n📊 IMC calculado: ${imc.toFixed(2)}`);
          console.log(`📋 Classificação: ${classificacao}`);
        }

        rl.question("\nPressione Enter para voltar ao menu...", () => {
          resolve();
        });
      });
    });
  });
}
