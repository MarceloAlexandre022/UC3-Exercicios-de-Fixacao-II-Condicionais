<script>
  function calcularAdmissao() {
    let idade = document.getElementById('aInput').value;
    let renda = parseFloat(document.getElementById('bInput').value);
    let pessoas = parseInt(document.getElementById('cInput').value);

    const hoje = new Date();
    const nasc = new Date(idade);
    let idadeconver = hoje.getFullYear() - nasc.getFullYear();

    let rendapercapita = renda / pessoas;

    let resultadoDiv = document.getElementById('resultado');

    if (idadeconver >= 16 && rendapercapita <= 1.5) {
      resultadoDiv.innerHTML = `Bem Vindo ao PSG. (0800-777-3622) Sua idade é ${idadeconver} anos.`;
      resultadoDiv.classList.remove('desfavoravel');
      resultadoDiv.classList.add('favoravel');
    } else if (idadeconver < 16) {
      resultadoDiv.innerHTML = "Você Não Tem Idade Suficiente.";
      resultadoDiv.classList.remove('favoravel', 'desfavoravel');
    } else if (rendapercapita > 1.5) {
      resultadoDiv.innerHTML = `Você Ultrapassou O Limite Da Renda Per Capita. Sua idade é ${idadeconver} anos.`;
      resultadoDiv.classList.remove('favoravel');
      resultadoDiv.classList.add('desfavoravel');
    } else {
      resultadoDiv.innerHTML = "Preencha Algum Campo.";
      resultadoDiv.classList.remove('favoravel', 'desfavoravel');
    }
  }

  const tabelaPresencas = document.getElementById('tabela-presencas');
  const tbody = tabelaPresencas.querySelector('tbody');

  // Obter a data atual
  const dataAtual = new Date();
  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth() + 1; // Os meses são indexados em 0, por isso é necessário adicionar 1
  const diasNoMes = new Date(ano, mes, 0).getDate(); // Obter o número de dias no mês atual

  // Criar as células da tabela para cada dia útil do mês
  for (let dia = 1; dia <= diasNoMes; dia++) {
    const data = new Date(ano, mes - 1, dia);
    const diaDaSemana = data.getDay();

    // Verificar se o dia é um dia útil (de segunda a sexta-feira)
    if (diaDaSemana >= 1 && diaDaSemana <= 5) {
      const row = document.createElement('tr');

      const cellData = document.createElement('td');
      cellData.textContent = `${dia}/${mes}/${ano}`;
      row.appendChild(cellData);

      const cellPresenca = document.createElement('td');
      const btnPresenca = document.createElement('button');
      btnPresenca.textContent = 'P';
      btnPresenca.classList.add('btn-presenca');
      btnPresenca.addEventListener('click', () => {
        btnPresenca.textContent = 'X';
        btnPresenca.classList.remove('btn-presenca');
        btnPresenca.classList.add('btn-ausencia');
        calcularFrequencia();
      });
      cellPresenca.appendChild(btnPresenca);
      row.appendChild(cellPresenca);

      const cellAusencia = document.createElement('td');
      const btnAusencia = document.createElement('button');
      btnAusencia.textContent = 'A';
      btnAusencia.classList.add('btn-ausencia');
      btnAusencia.addEventListener('click', () => {
        btnAusencia.textContent = 'X';
        btnAusencia.classList.remove('btn-ausencia');
        btnAusencia.classList.add('btn-presenca');
        calcularFrequencia();
      });
      cellAusencia.appendChild(btnAusencia);
      row.appendChild(cellAusencia);

      tbody.appendChild(row);
    }
  }

  const calcularFrequencia = () => {
    const totalPresencas = document.getElementsByClassName('btn-ausencia').length;
    const totalAusencias = document.getElementsByClassName('btn-presenca').length;
    const frequencia = (totalPresencas / (totalPresencas + totalAusencias)) * 100;
    document.getElementById('frequencia-resultado').textContent = frequencia.toFixed(2);
  };

  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);
    const frequencia = parseFloat(document.getElementById('frequencia').value);

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    const situacao = document.getElementById('situacao');

    if (media >= 6 && frequencia >= 75) {
      situacao.textContent = 'Aprovado';
      situacao.className = 'resultado-aprovado';
    } else {
      situacao.textContent = 'Reprovado';
      situacao.className = 'resultado-reprovado';
    }

    const mediaElement = document.getElementById('media');
    mediaElement.textContent = media.toFixed(2);
  });
</script>
