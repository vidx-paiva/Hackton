document.addEventListener('DOMContentLoaded', () => {
  const areas = document.querySelectorAll('.area');
  const infoBox = document.getElementById('infoBox');

  areas.forEach(area => {
    area.addEventListener('click', () => {
      const nome = area.classList[1]; // segunda classe define a área (ex: .banheiro)
      let texto = '';
      switch (nome) {
        case 'entrada-recepcao':
          texto = 'Entrada principal e recepção do evento.';
          break;
        case 'saida-topo':
          texto = 'Saída superior do espaço principal.';
          break;
        case 'cantina':
          texto = 'Área da cantina aberta ao público.';
          break;
        case 'cantina-func':
          texto = 'Cantina exclusiva para funcionários.';
          break;
        case 'banheiro':
          texto = 'Banheiro público disponível.';
          break;
        case 'banheiro-func':
          texto = 'Banheiro exclusivo para funcionários.';
          break;
        case 'palco':
          texto = 'Palco principal do evento.';
          break;
        case 'estacionamento':
          texto = 'Estacionamento para visitantes e staff.';
          break;
        default:
          texto = 'Clique em uma área para ver mais informações.';
      }
      infoBox.textContent = texto;
    });
  });

  // Botões da direita
  const btnSaude = document.querySelector('.btn:nth-child(1)');
  const btnTecnologia = document.querySelector('.btn:nth-child(2)');

  btnSaude.addEventListener('click', () => {
    infoBox.textContent = 'Saúde e Educação: Informações e atividades relacionadas à saúde e educação no evento.';
  });

  btnTecnologia.addEventListener('click', () => {
    infoBox.textContent = 'Tecnologia: Uso seguro da internet, ética nas redes sociais, combate às fake news, identidade digital e privacidade, algoritmos, programação básica (Scratch, Python, etc.), robótica educacional, gamificação, soluções digitais, economia criativa digital, design de produtos e experiências digitais, fundamentos da IA, chatbots e assistentes virtuais, machine learning, impactos sociais da automação, ferramentas digitais para aprendizagem, ambientes virtuais de aprendizagem (AVA, Google Sala de Aula), produção de conteúdos digitais, avaliações e feedback com tecnologia.';
  });
});

  