const questions = [
  {
    question: "1. Em Gênesis 1:28, Deus dá cinco ordens ao homem. Quais são essas ordens e o que elas significam em termos de domínio sobre a criação?",
    options: [
      "Cuidem do Éden e obedeçam aos mandamentos", 
      "Dominem sobre os animais e cultivem a terra", 
      "Frutificai, multiplicai-vos, enchei a terra, sujeitai-a, dominai sobre os peixes", 
      "Andem com Deus e sirvam-no com alegria"
    ],
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
    answer: 1
  },
  {
    question: "3. Em Gênesis 2, qual o significado do nome que Adão dá à mulher e qual o princípio estabelecido no versículo 24?",
    options: [
      "Chamada Eva por ser mãe de todos; igualdade entre sexos", 
      "Mulher por ter sido tirada do homem; união de uma só carne", 
      "Ajuda idônea; submissão ao marido", 
      "Adoná; obediência ao Criador"
    ],
    answer: 1
  },
  {
    question: "4. Qual era o estado emocional e físico do homem e da mulher antes da queda, conforme o versículo final do capítulo 2?",
    options: [
      "Felizes e vestidos com peles de animais", 
      "Nus e com medo", 
      "Nus e sem vergonha — símbolo de inocência", 
      "Vestidos com folhas de figueira e inocentes"
    ],
    answer: 2
  },
  {
    question: "5. Em Gênesis 3:6, quais foram as três percepções de Eva ao olhar para o fruto antes de comer?",
    options: [
      "Colorido, cheiroso e grande", 
      "Bom para o estômago, fácil de colher, diferente dos outros", 
      "Agradável para os olhos, bom para comer e desejável para dar sabedoria", 
      "Atraente, brilhante e pesado"
    ],
    answer: 2
  },
  {
    question: "6. Qual foi a maldição dada à serpente, à mulher e ao homem, respectivamente?",
    options: [
      "Ser muda, parir com dor, morrer cedo", 
      "Comer pó, dores na gravidez, trabalho árduo", 
      "Perder os membros, gerar filhos, plantar espinhos", 
      "Virar pó, parir gêmeos, morrer lentamente"
    ],
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
    answer: 1
  },
  {
    question: "8. Qual foi a punição de Caim e a marca de misericórdia que Deus lhe deu?",
    options: [
      "Fugiu para uma caverna; Deus mandou um anjo", 
      "Foi exilado e perdeu a fala", 
      "Se tornou fugitivo e Deus o marcou para não ser morto", 
      "Recebeu lepra e foi escondido"
    ],
    answer: 2
  },
  {
    question: "9. Quem foi Enoque, qual seu diferencial e com quantos anos foi levado por Deus?",
    options: [
      "Sacerdote justo, morreu com 300 anos", 
      "Homem de fé, viveu 900 anos", 
      "Andou com Deus e foi levado com 365 anos", 
      "Construtor da arca, desapareceu com 400 anos"
    ],
    answer: 2
  },
  {
    question: "10. Quais são os três descendentes diretos entre Adão e Noé após Sete?",
    options: [
      "Enos, Quenã, Maalalel", 
      "Cainã, Lameque, Matusalém", 
      "Sem, Cam, Jafé", 
      "Enoque, Noé, Quenã"
    ],
    answer: 0
  },
  {
    question: "11. Que significado Lameque atribuiu ao nome Noé e o que isso revela sobre a terra?",
    options: [
      "Paz — a terra prosperaria", 
      "Consolo — terra estava amaldiçoada", 
      "Força — o homem dominaria", 
      "Esperança — o mundo seria restaurado"
    ],
    answer: 1
  },
  {
    question: "12. Quem eram os 'filhos de Deus' e o que resultou da união com as 'filhas dos homens'?",
    options: [
      "Anjos e humanas; nasceram reis", 
      "Homens de fé e mulheres perversas; geraram pastores", 
      "Descendentes de Sete e Caim; surgiram gigantes e corrupção", 
      "Homens e anjos caídos; houve terremotos"
    ],
    answer: 2
  },
  {
    question: "13. Quais as medidas e materiais da arca conforme Deus ordenou?",
    options: [
      "150x30x20 côvados; madeira de cedro", 
      "200x60x40 côvados; madeira de acácia", 
      "300x50x30 côvados; cipreste e betume", 
      "100x100x100 metros; concreto e ferro"
    ],
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
    answer: 1
  },
  {
    question: "16. Quantas vezes Noé enviou a pomba e qual o sinal de que a terra estava seca?",
    options: [
      "2 vezes; trouxe ramo de figueira", 
      "3 vezes; não voltou na última", 
      "1 vez; voltou com folha de oliveira", 
      "4 vezes; ficou sobre a arca"
    ],
    answer: 1
  },
  {
    question: "17. Qual foi a primeira atitude de Noé ao sair da arca e o que Deus prometeu depois?",
    options: [
      "Construiu casa; Deus prometeu arco-íris", 
      "Ofereceu sacrifício; Deus prometeu não amaldiçoar a terra", 
      "Plantou vinha; Deus prometeu paz", 
      "Fez altar; Deus prometeu vida longa"
    ],
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
    answer: 2
  },
  {
    question: "19. Qual foi o pecado de Cam, a atitude de Sem e Jafé, e a consequência declarada por Noé?",
    options: [
      "Cam zombou; Sem e Jafé cobriram Noé; Canaã foi amaldiçoado", 
      "Cam roubou; Sem orou e Jafé fugiu; Cam foi expulso", 
      "Cam matou um irmão; Sem e Jafé choraram; terra foi dividida", 
      "Cam gritou; Sem e Jafé fugiram; dilúvio voltou"
    ],
    answer: 0
  },
  {
    question: "20. Quantos filhos teve Jafé e quais povos vieram dele?",
    options: [
      "7 filhos; originaram povos europeus e asiáticos", 
      "12 filhos; formaram tribos de Israel", 
      "3 filhos; deram origem aos cananeus", 
      "5 filhos; habitaram na Mesopotâmia"
    ],
    answer: 0
  },
  {
    question: "21. Qual o significado do nome de Pelegue e o que aconteceu em seus dias?",
    options: [
      "Divisão; terra foi repartida", 
      "Esperança; aliança foi renovada", 
      "Glória; Deus apareceu", 
      "Força; humanidade unificada"
    ],
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
