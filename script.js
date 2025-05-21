function mostrarResultado() {
    const respostas = [
      document.querySelector('input[name="q1"]:checked'),
      document.querySelector('input[name="q2"]:checked'),
      document.querySelector('input[name="q3"]:checked'),
      document.querySelector('input[name="tempo"]:checked'),
      document.querySelector('input[name="desafio"]:checked'),
      document.querySelector('input[name="revisao"]:checked'),
      document.querySelector('input[name="materiais"]:checked'),
      document.querySelector('input[name="sentimento"]:checked')
    ];
  
    if (respostas.includes(null)) {
      alert("Responda todas as perguntas!");
      return;
    }
  
    const contagem = { A: 0, B: 0, C: 0, D: 0 };
  
    respostas.forEach(r => {
      contagem[r.value]++;
    });
  
    let perfil = Object.keys(contagem).reduce((a, b) => contagem[a] > contagem[b] ? a : b);
  
    const resultados = {
      A: `
        <h2>Seu perfil: 😬 O Ansioso</h2>
        <p>Você quer estudar tudo de uma vez e acaba se sobrecarregando.</p>
        <ul>
          <li>Monte um plano semanal simples e visual (use papel ou apps).</li>
          <li>Use técnicas de respiração para manter o foco.</li>
          <li>Evite comparar seu ritmo com o dos outros.</li>
        </ul>
      `,
      B: `
        <h2>Seu perfil: 🧠 O Estratégico</h2>
        <p>Você é planejado e busca constância. Excelente!</p>
        <ul>
          <li>Continue seguindo seu plano com ajustes semanais.</li>
          <li>Cuidado com o perfeccionismo: nem tudo precisa estar 100% pra funcionar.</li>
          <li>Ajude outros colegas: ensinar reforça seu próprio aprendizado.</li>
        </ul>
      `,
      C: `
        <h2>Seu perfil: 🏃 O Maratonista</h2>
        <p>Você mergulha nos estudos com intensidade!</p>
        <ul>
          <li>Respeite seus limites: pausas são tão importantes quanto o estudo.</li>
          <li>Use a técnica Pomodoro para manter o foco sem se desgastar.</li>
          <li>Revisar é tão importante quanto estudar novos conteúdos.</li>
        </ul>
      `,
      D: `
        <h2>Seu perfil: 🤯 O Desorganizado</h2>
        <p>Você tem vontade, mas ainda falta estrutura.</p>
        <ul>
          <li>Comece com metas pequenas, tipo "20 minutos por dia".</li>
          <li>Use mapas mentais ou post-its para lembrar o que precisa estudar.</li>
          <li>Transforme o estudo em rotina: mesmo horário, mesmo lugar.</li>
        </ul>
      `
    };
  
    document.getElementById("result").innerHTML = resultados[perfil];
  }
  