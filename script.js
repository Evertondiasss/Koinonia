const questions = [
  {
    question: "1. Qual foi a ordem dada por Deus ao homem e à mulher logo após criá-los?",
    options: [
      "Cuidem do Éden", "Dominarás sobre todos os animais",
      "Frutificai, multiplicai-vos, enchei a terra e sujeitai-a",
      "Não comam do fruto da árvore do bem e do mal"
    ],
    answer: 2,
    explanation: "Deus ordenou que o homem e a mulher frutificassem, se multiplicassem e dominassem a terra (Gênesis 1:28)."
  },
  {
    question: "2. Qual foi a consequência imediata da desobediência de Adão e Eva?",
    options: [
      " Foram expulsos do jardim imediatamente",
      "Foram amaldiçoados junto com a serpente e a terra",
      "Tiveram consciência da nudez",
      "Deixaram de se comunicar com Deus"
    ],
    answer: 2,
    explanation: "Logo após desobedecerem, Adão e Eva perceberam que estavam nus, revelando a consciência do pecado (Gênesis 3:7)."
  },
  {
    question: "3. O que Deus colocou na entrada do Éden após expulsar o homem?",
    options: [
      "Um muro de fogo",
      "Querubins e uma espada flamejante",
      "Um portão de ferro",
      "Um anjo com trombeta"
    ],
    answer: 1,
    explanation: "Deus colocou querubins e uma espada flamejante para guardar o caminho da árvore da vida (Gênesis 3:24)."
  },
  {
    question: "4. O que Caim respondeu quando Deus lhe perguntou sobre Abel?",
    options: [
      "Fui eu quem o matou",
      "O que queres de mim?",
      "Sou eu o guardador do meu irmão?",
      "Não sei onde ele está"
    ],
    answer: 2,
    explanation: "Caim respondeu com ironia: 'Sou eu o guardador do meu irmão?' (Gênesis 4:9)."
  },
  {
    question: "5. Qual é o nome do filho de Adão que nasceu após o assassinato de Abel?",
    options: [
      "Lameque", "Noé", "Sete", "Enos"
    ],
    answer: 2,
    explanation: "Após a morte de Abel, Eva deu à luz Sete, dizendo que Deus lhe concedera outro descendente (Gênesis 4:25)."
  },
  {
    question: "6. Qual foi a profissão de Caim e qual a de Abel, respectivamente?",
    options: [
      "lavrador da terra e Caçador",
      "Pastor de ovelhas e lavrador da terra",
      "Pastor de bois e pescador",
      "Lavrador da terra e pastor de ovelhas"
    ],
    answer: 3,
    explanation: "Caim foi lavrador da terra, e Abel pastor de ovelhas (Gênesis 4:2)."
  },
  {
    question: "7. Quais eram os nomes dos quatro rios que saíam do Éden?",
    options: [
      "Jordão, Nilo, Tigre, Eufrates",
      "Nilo, Jordão, Tigre, Eufrates",
      "Eufrates, Nilo, Gibeom, Jordão",
      "Pisom, Giom, Tigre, Eufrates"
    ],
    answer: 3,
    explanation: "Os quatro rios citados são Pisom, Giom, Tigre e Eufrates (Gênesis 2:10-14)."
  },
  {
    question: "8. Quantas vezes aparece a expressão “E viu Deus que era bom” no capítulo 1?",
    options: [
      "3", "5", "6", "7"
    ],
    answer: 2,
    explanation: "A frase aparece 6 vezes em Gênesis 1, ressaltando a bondade da criação."
  },
  {
    question: "9. Qual material precioso era encontrado na terra de Havilá, mencionada em Gênesis 2?",
    options: [
      "Prata", "Bronze", "Incenso", "Ouro"
    ],
    answer: 3,
    explanation: "A terra de Havilá era rica em ouro, conforme Gênesis 2:11-12."
  },
  {
    question: "10. Após a queda, qual punição específica foi dada à serpente por Deus?",
    options: [
      "Passar a rastejar sobre o ventre e comer pó",
      "Ter sua fala removida para sempre",
      "Ser esmagada pela descendência da mulher",
      "Ser exilada do Jardim do Éden"
    ],
    answer: 0,
    explanation: "Deus amaldiçoou a serpente, condenando-a a rastejar sobre o ventre e comer pó (Gênesis 3:14)."
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

  if (score >= 9) {
    document.getElementById("final-screen-excelente").classList.remove("hidden");
  } else if (score >= 6) {
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

  if (score >= 9) {
    document.getElementById("final-screen-excelente").classList.remove("hidden");
  } else if (score >= 6) {
    document.getElementById("final-screen-bom").classList.remove("hidden");
  } else {
    document.getElementById("final-screen-fraco").classList.remove("hidden");
  }
});
