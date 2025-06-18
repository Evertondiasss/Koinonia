const questions = [
  {
    question: "1. Deus dá cinco ordens ao homem. Quais são essas ordens e o que elas significam em termos de domínio sobre a criação?",
    options: [
      "Cuidem do Éden e obedeçam aos mandamentos", 
      "Dominem sobre os animais e cultivem a terra", 
      "Frutificai, multiplicai-vos, enchei a terra, sujeitai-a, dominai sobre os peixes", 
      "Andem com Deus e sirvam-no com alegria"
    ],
    explanation: "Gênesis 1:28 — Frutificai, multiplicai-vos, enchei a terra, sujeitai-a e dominai sobre os peixes do mar.",
    answer: 2
  },
  {
    question: "2. Qual o padrão de estrutura que aparece repetidamente no capítulo 1 e em quais dias se repete completamente?",
    options: [
      "Criação, descanso, bênção e ordem; dias 2, 4 e 7", 
      "Comando, execução, avaliação e encerramento; dias 1, 3, 4 e 6", 
      "Luz, separação, nomeação e aprovação; dias 1, 2, 5", 
      "Haja luz, houve luz, separou a luz e houve tarde e manhã; dias 1, 2 e 3"
    ],
    explanation: "Gênesis 1:3-31 — Comando, execução, avaliação e encerramento aparecem nos dias 1, 3, 4 e 6.",
    answer: 1
  },
  {
    question: "3. Qual o significado do nome que Adão dá à mulher e qual o princípio estabelecido no versículo 24?",
    options: [
      "Chamada Eva por ser mãe de todos; igualdade entre sexos", 
      "Ajuda idônea; submissão ao marido", 
      "Adoná; obediência ao Criador",
      "Mulher por ter sido tirada do homem; união de uma só carne", 
    ],
    explanation: "Gênesis 2:23-24 — Ela será chamada mulher, e os dois se tornarão uma só carne.",
    answer: 3
  },
  {
    question: "4. Qual era o estado emocional e físico do homem e da mulher antes da queda, conforme o versículo final do capítulo 2?",
    options: [
      "Felizes e vestidos com peles de animais", 
      "Nus e com medo", 
      "Nus e sem vergonha — símbolo de inocência", 
      "Vestidos com folhas de figueira e inocentes"
    ],
    explanation: "Gênesis 2:25 — Estavam nus e não se envergonhavam.",
    answer: 2
  },
  {
    question: "5. Quais foram as três percepções de Eva ao olhar para o fruto antes de comer?",
    options: [
      "Boa para comer, agradável aos olhos, desejável para dar entendimento.",
      "Colorido, cheiroso e grande", 
      "Bom para o estômago, fácil de colher, diferente dos outros", 
      "Atraente, brilhante e pesado"
    ],
    explanation: "Gênesis 3:6 — Boa para comer, agradável aos olhos, desejável para dar entendimento.",
    answer: 0
  },
  {
    question: "6. Qual foi a maldição dada à serpente, à mulher e ao homem, respectivamente?",
    options: [
      "Ser muda, parir com dor, morrer cedo", 
      "Rastejar e comer pó, dores na gravidez, trabalho árduo", 
      "Perder os membros, gerar filhos, plantar espinhos", 
      "Virar pó, parir gêmeos, morrer lentamente"
    ],
    explanation: "Gênesis 3:14-19 — Serpente rasteja, mulher sofre dores, homem trabalha com fadiga.",
    answer: 1
  },
  {
    question: "7. O que Deus disse a Caim antes do assassinato de Abel e qual alerta Ele deu?",
    options: [
      "Vai e confessa teu pecado", 
      "Por que estás irado? O pecado jaz à porta", 
      "Onde está teu irmão?", 
      "Oferece outro sacrifício e será aceito"
    ],
    explanation: "Gênesis 4:6-7 — Por que estás irado? O pecado jaz à porta, cumpre a ti dominá-lo.",
    answer: 1
  },
  {
    question: "8. Qual foi a punição de Caim e a marca de misericórdia que Deus lhe deu?",
    options: [
      "Fugiu para uma caverna e Deus mandou um anjo", 
      "Foi exilado e perdeu a fala", 
      "Se tornou fugitivo e Deus o marcou para não ser morto", 
      "Recebeu lepra e foi escondido"
    ],
    explanation: "Gênesis 4:12-15 — Serás fugitivo e errante; Deus colocou um sinal para que não fosse morto.",
    answer: 2
  },
  {
    question: "9. Qual o diferencial de Enoque e com quantos anos foi levado por Deus?",
    options: [
      "Sacerdote justo e morreu com 300 anos", 
      "Homem de fé e viveu 900 anos", 
      "Andou com Deus e foi levado com 365 anos", 
      "Andou com Deus e desapareceu com 300 anos"
    ],
    explanation: "Gênesis 5:24 — Enoque andou com Deus e foi levado por Ele.",
    answer: 2
  },
  {
    question: "10. Quais são os três descendentes diretos entre Adão e Noé após Sete?",
    options: [
      "Cainã, Lameque, Matusalém", 
      "Sem, Cam, Jafé", 
      "Enoque, Noé, Quenã",
      "Enos, Quenã, Maalalel"
    ],
    explanation: "Gênesis 5:9-17 — Enos gerou Quenã, Quenã gerou Maalalel.",
    answer: 3
  },
  {
    question: "11. Que significado Lameque atribuiu ao nome Noé e o que isso revela sobre a terra?",
    options: [
      "Consolo — diante da terra amaldiçoada",
      "Paz — a terra prosperaria", 
      "Força — o homem dominaria", 
      "Esperança — o mundo seria restaurado"
    ],
    explanation: "Gênesis 5:29 — Lameque chamou Noé de ‘Consolo’ pela maldição da terra.",
    answer: 0
  },
  {
    question: "12. Quem eram os 'filhos de Deus' e o que resultou da união com as 'filhas dos homens'?",
    options: [
      "Anjos e humanas; nasceram reis", 
      "Homens de fé e mulheres perversas; geraram pastores", 
      "Homens e anjos caídos; houve terremotos",
      "Descendentes de Sete e Caim; surgiram gigantes e corrupção"
    ],
    explanation: "Gênesis 6:2,4 — Filhos de Deus com filhas dos homens; surgiram gigantes e corrupção.",
    answer: 3
  },
  {
    question: "13. Quais as medidas e materiais da arca conforme Deus ordenou?",
    options: [
      "150x30x20 côvados; madeira de cedro", 
      "200x60x40 côvados; madeira de acácia", 
      "300x50x30 côvados; cipreste e betume", 
      "100x100x100 metros; concreto e ferro"
    ],
    explanation: "Gênesis 6:14-15 — Arca de cipreste com 300x50x30 côvados, betumada por dentro e por fora.",
    answer: 2
  },
  {
    question: "14. Quem fechou a porta da arca e qual o significado dessa ação?",
    options: [
      "Noé — proteção da família", 
      "Sem — início do juízo", 
      "Deus — soberania e proteção divina", 
      "Um anjo — julgamento eterno"
    ],
    explanation: "Gênesis 7:16 — O Senhor fechou a porta da arca.",
    answer: 2
  },
  {
    question: "15. Quantos côvados acima das montanhas as águas subiram e o que isso representa?",
    options: [
      "7 côvados — destruição parcial", 
      "15 côvados — juízo total", 
      "30 côvados — justiça divina", 
      "5 côvados — punição leve"
    ],
    explanation: "Gênesis 7:20 — As águas subiram 15 côvados acima das montanhas.",
    answer: 1
  },
  {
    question: "16. Quantas vezes Noé enviou a pomba e qual o sinal de que a terra estava seca?",
    options: [
      "3 vezes; não voltar indicou terra seca",
      "2 vezes; trouxe ramo de figueira", 
      "1 vez; voltou com folha de oliveira", 
      "4 vezes; ficou sobre a arca"
    ],
    explanation: "Gênesis 8:8-12 — A pomba foi enviada três vezes; não voltar indicou terra seca.",
    answer: 0
  },
  {
    question: "17. Qual foi a primeira atitude de Noé ao sair da arca e o que Deus prometeu depois?",
    options: [
      "Construiu casa; Deus prometeu arco-íris", 
      "Ofereceu sacrifício; Deus prometeu não amaldiçoar a terra", 
      "Plantou vinha; Deus prometeu paz", 
      "Fez altar; Deus prometeu vida longa"
    ],
    explanation: "Gênesis 8:20-21 — Noé ofereceu sacrifício e Deus prometeu não amaldiçoar mais a terra.",
    answer: 1
  },
  {
    question: "18. Qual nova ordem Deus deu ao homem sobre animais e alimentação após o dilúvio?",
    options: [
      "Proibido comer peixe e aves", 
      "Liberação total da carne", 
      "Comer carne sem sangue; reafirma domínio humano", 
      "Somente vegetais e frutas"
    ],
    explanation: "Gênesis 9:3-4 — Tudo o que vive servirá de alimento, mas não comam carne com sangue.",
    answer: 2
  },
  {
    question: "19. Qual foi o pecado de Cam, a atitude de Sem e Jafé, e a consequência declarada por Noé?",
    options: [
      "Cam desrespeitou Noé; Sem e Jafé cobriram Noé; Canaã foi amaldiçoado", 
      "Cam roubou; Sem orou e Jafé fugiu; Cam foi expulso", 
      "Cam matou um irmão; Sem e Jafé choraram; terra foi dividida", 
      "Cam gritou; Sem e Jafé fugiram; dilúvio voltou"
    ],
    explanation: "Gênesis 9:22-25 — Cam viu a nudez de Noé; Sem e Jafé o cobriram; Canaã foi amaldiçoado.",
    answer: 0
  },
  {
    question: "20. Quantos filhos teve Jafé e quais povos vieram dele?",
    options: [
      "12 filhos; formaram tribos de Israel", 
      "3 filhos; deram origem aos cananeus", 
      "5 filhos; habitaram na Mesopotâmia",
      "7 filhos; originaram povos europeus e asiáticos"
    ],
    explanation: "Gênesis 10:2 — Jafé teve sete filhos, origem dos povos europeus e asiáticos.",
    answer: 3
  },
  {
    question: "21. Qual o significado do nome de Pelegue e o que aconteceu em seus dias?",
    options: [
      "Divisão; terra foi repartida", 
      "Esperança; aliança foi renovada", 
      "Glória; Deus apareceu", 
      "Força; humanidade unificada"
    ],
    explanation: "Gênesis 10:25 — Em seus dias se repartiu a terra; por isso o nome Pelegue.",
    answer: 0
  },
  {
    question: "22. Qual foi o propósito da torre de Babel e como Deus interveio?",
    options: [
      "Proteger-se de outro dilúvio; Deus destruiu a torre", 
      "Adorar ídolos; Deus enviou fogo", 
      "Exaltar a si; Deus confundiu as línguas", 
      "Buscar o céu; Deus mandou o dilúvio de novo"
    ],
    explanation: "Gênesis 11:4-7 — Fizeram uma torre para se exaltarem; Deus confundiu as línguas.",
    answer: 2
  },
  {
    question: "23. Qual foi o destino da família de Terá e qual a cidade original de destino?",
    options: [
      "Saiu de Harã para Egito", 
      "Partiu de Ur para Canaã, mas parou em Harã", 
      "Saiu de Babel para Jerusalém", 
      "Foi de Canaã para Sodoma"
    ],
    explanation: "Gênesis 11:31 — Terá partiu de Ur para Canaã, mas habitou em Harã.",
    answer: 1
  }
];



let currentQuestion = 0;
let score = 0;
let playerName = "";

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");
const playerNameInput = document.getElementById("player-name");

startBtn.addEventListener("click", () => {
  if (playerNameInput.value.trim() === "") {
    alert("Por favor, digite seu nome.");
    return;
  }

  playerName = playerNameInput.value.trim();
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  loadQuestion();
});

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="radio" name="option" value="${index}"> ${option}
      </label>
    `;
    optionsEl.appendChild(li);
  });
}



function showFinalScreen() {
  fetch("https://script.google.com/macros/s/AKfycbwg-MTpctVK9_iqumk8f2amQWytzXML0LzYsjrQm_P_YcGAr5L2WI2tpucog06O7bQ5ww/exec", {
    method: "POST",
    body: new URLSearchParams({
      nome: playerName,
      pontuacao: score
    })
  });

  if (score >= 9) {
    document.getElementById("score-excelente").textContent = score;
    document.getElementById("final-screen-excelente").classList.remove("hidden");
  } else if (score >= 6) {
    document.getElementById("score-bom").textContent = score;
    document.getElementById("final-screen-bom").classList.remove("hidden");
  } else {
    document.getElementById("score-fraco").textContent = score;
    document.getElementById("final-screen-fraco").classList.remove("hidden");
  }
}

document.querySelectorAll("#show-ranking-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".screen").forEach(el => el.classList.add("hidden"));
    document.getElementById("ranking-screen").classList.remove("hidden");

    fetch("https://script.google.com/macros/s/AKfycbwg-MTpctVK9_iqumk8f2amQWytzXML0LzYsjrQm_P_YcGAr5L2WI2tpucog06O7bQ5ww/exec")
      .then(res => res.json())
      .then(data => {
        const list = document.getElementById("ranking-list-final");
        list.innerHTML = data
          .slice(0, 5)
          .map((item, i) =>
            `<li><strong>${i + 1}º</strong> <span>${item.nome}</span><span>${item.pontuacao} pts</span></li>`
          ).join("");
      });
  });
});

document.getElementById("back-btn").addEventListener("click", () => {
  document.getElementById("ranking-screen").classList.add("hidden");

  if (score >= 18) {
    document.getElementById("final-screen-excelente").classList.remove("hidden");
  } else if (score >= 12) {
    document.getElementById("final-screen-bom").classList.remove("hidden");
  } else {
    document.getElementById("final-screen-fraco").classList.remove("hidden");
  }
});

const selectedAnswers = [];

// Atualize seu nextBtn event listener:
nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="option"]:checked');
  
  if (!selected) {
    alert("Selecione uma opção.");
    return;
  }

  const answer = parseInt(selected.value);
  selectedAnswers.push(answer);

  if (answer === questions[currentQuestion].answer) {
    score++;
  }

  if (currentQuestion === questions.length - 1) {
    document.getElementById("quiz-box").classList.add("hidden");
    showFinalScreen();
  } else {
    currentQuestion++;
    loadQuestion();
  }
});

// Função para gerar tela de revisão
function showReviewScreen() {
  document.querySelectorAll(".screen").forEach(el => el.classList.add("hidden"));
  document.getElementById("review-screen").classList.remove("hidden");

  const reviewList = document.getElementById("review-list");
  reviewList.innerHTML = "";

  questions.forEach((q, index) => {
    const userAnswer = selectedAnswers[index];
    const correct = q.answer;
    const correctText = q.options[correct];
    const userText = q.options[userAnswer];

    const div = document.createElement("div");
    div.classList.add("review-item");

    let result;
    if (userAnswer === correct) {
      result = `<span class="correct">✔ Você acertou!</span>`;
    } else {
      result = `<span class="wrong">✖ Você errou!</span>`;
    }

    div.innerHTML = `
      <h3>${q.question}</h3>
      <p class="option">Sua resposta: <strong>${userText || "Nenhuma"}</strong></p>
      <p class="option">Resposta correta: <strong>${correctText}</strong></p>
      ${result}
      <p class="explanation">📖 ${q.explanation}</p>
    `;

    reviewList.appendChild(div);
  });
}

// Lógica para botões “Ver Detalhes”
document.querySelectorAll("#show-review-btn").forEach(btn => {
  btn.addEventListener("click", showReviewScreen);
});

// Botão “Voltar” da tela de revisão
document.getElementById("back-to-final-btn").addEventListener("click", () => {
  document.getElementById("review-screen").classList.add("hidden");

  if (score >= 18) {
    document.getElementById("final-screen-excelente").classList.remove("hidden");
  } else if (score >= 12) {
    document.getElementById("final-screen-bom").classList.remove("hidden");
  } else {
    document.getElementById("final-screen-fraco").classList.remove("hidden");
  }
});
