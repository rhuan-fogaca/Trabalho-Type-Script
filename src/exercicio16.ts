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
Descritivo: Valida uma senha conforme critérios de segurança.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  Recebe a senha digitada pelo usuário.
  Usa expressões regulares (regex) para verificar cada critério:
    - Mínimo de 8 caracteres: verifica length >= 8
    - Letra maiúscula: /[A-Z]/
    - Letra minúscula: /[a-z]/
    - Número: /[0-9]/
  Exibe quais critérios foram atendidos e qual é o resultado final.
*/

import * as readline from "readline";

interface CriterioSenha {
  descricao: string;
  valido: boolean;
}

function validarSenha(senha: string): CriterioSenha[] {
  return [
    { descricao: "Pelo menos 8 caracteres",    valido: senha.length >= 8 },
    { descricao: "Pelo menos uma maiúscula",    valido: /[A-Z]/.test(senha) },
    { descricao: "Pelo menos uma minúscula",    valido: /[a-z]/.test(senha) },
    { descricao: "Pelo menos um número",        valido: /[0-9]/.test(senha) },
  ];
}

export function executarExercicio16(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 16 — Validação de Senha ===\n");

    rl.question("Digite a senha a ser validada: ", (senha) => {
      const criterios = validarSenha(senha);
      const todosValidos = criterios.every((c) => c.valido);

      console.log("\n📋 Verificação dos critérios:");
      criterios.forEach((c) => {
        const icone = c.valido ? "✅" : "❌";
        console.log(`   ${icone} ${c.descricao}`);
      });

      console.log(`\n${todosValidos ? "✅ SENHA VÁLIDA!" : "❌ SENHA INVÁLIDA — corrija os critérios acima."}`);

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        resolve();
      });
    });
  });
}
