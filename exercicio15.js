"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Calculadora de IMC com classificação por faixa de peso.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio15 = executarExercicio15;
function classificarIMC(imc) {
    if (imc < 18.5)
        return "⚠️  Abaixo do peso";
    if (imc < 25.0)
        return "✅ Peso normal";
    if (imc < 30.0)
        return "⚠️  Sobrepeso";
    if (imc < 35.0)
        return "🔴 Obesidade Grau I";
    if (imc < 40.0)
        return "🔴 Obesidade Grau II";
    return "🔴 Obesidade Grau III (Mórbida)";
}
function executarExercicio15(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 15 — Calculadora de IMC ===\n");
        rl.question("Digite seu peso (kg): ", (pesoStr) => {
            rl.question("Digite sua altura (m): ", (alturaStr) => {
                const peso = parseFloat(pesoStr);
                const altura = parseFloat(alturaStr);
                if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
                    console.log("\n⚠️  Valores inválidos! Peso e altura devem ser positivos.");
                }
                else {
                    const imc = peso / (altura * altura);
                    const classificacao = classificarIMC(imc);
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
