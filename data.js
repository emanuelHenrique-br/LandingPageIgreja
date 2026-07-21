export const church = {
  name: 'Igreja Quadrangular',
  city: 'São Paulo',
  state: 'SP',
  unit: 'Centro',
  // Adicione apenas números, com DDI e DDD. Exemplo: 5511999999999
  whatsapp: '',
}

export const meetings = [
  { icon: 'book', day: 'Terça-feira', name: 'Culto de Ensino', time: '19h', datetime: '19:00' },
  { icon: 'prayer', day: 'Quarta-feira', name: 'Culto de Oração', time: '19h30', datetime: '19:30' },
  { icon: 'compass', day: 'Quinta-feira', name: 'Culto de Doutrina', time: '19h', datetime: '19:00' },
  { icon: 'children', day: 'Domingo', name: 'Escola Dominical', time: '8h30', datetime: '08:30' },
  { icon: 'water', day: 'Mensal', name: 'Batismo & Ceia', time: 'Agende pelo WhatsApp', action: true },
]

export const pillars = [
  { icon: 'cross', number: '01', tone: 'red', doctrine: 'Salvação em Jesus Cristo', title: 'Jesus salva', text: 'Graça que perdoa, restaura e abre um novo começo.' },
  { icon: 'bird', number: '02', tone: 'gold', doctrine: 'Batismo no Espírito Santo', title: 'Jesus batiza', text: 'O Espírito Santo nos capacita para uma vida de propósito.' },
  { icon: 'heart', number: '03', tone: 'blue', doctrine: 'Cura Divina', title: 'Jesus cura', text: 'Esperança para o corpo, a mente, a alma e os relacionamentos.' },
  { icon: 'crown', number: '04', tone: 'purple', doctrine: 'Segunda Vinda de Cristo', title: 'Jesus voltará', text: 'Vivemos com os olhos na eternidade e as mãos no presente.' },
]

export const ministries = [
  { icon: 'music', eyebrow: 'Adoração', title: 'Louvor & Adoração', text: 'Música que toca a alma, servindo com excelência e conduzindo a igreja em adoração.', featured: true },
  { icon: 'children', eyebrow: '0 a 12 anos', title: 'Infantil', text: 'Ensinando os pequeninos em um ambiente seguro, alegre e cheio da Palavra.' },
  { icon: 'sparkles', eyebrow: 'Nova geração', title: 'Jovens', text: 'Fé e amizade verdadeira para viver com propósito.' },
  { icon: 'home', eyebrow: 'Relacionamentos', title: 'Casais & Famílias', text: 'Fortalecendo famílias pela graça e pelo diálogo.' },
  { icon: 'hands', eyebrow: 'Amor em movimento', title: 'Ação Social', text: 'Amor em forma de serviço, alcançando nossa cidade de forma concreta.', dark: true },
  { icon: 'waves', eyebrow: 'Próximos passos', title: 'Batismo', text: 'Uma decisão pública para quem escolheu seguir Jesus.' },
]

export const faqTopics = {
  horarios: {
    label: 'Horários dos cultos',
    answer: 'Domingo: celebrações às 9h e 19h, além da Escola Dominical às 8h30. Terça às 19h, quarta às 19h30 e quinta às 19h.',
    next: ['endereco', 'infantil', 'whatsapp'],
  },
  endereco: {
    label: 'Onde fica a igreja?',
    answer: 'Estamos em São Paulo, SP. Nossa equipe pode enviar a localização exata e a melhor rota pelo WhatsApp.',
    next: ['horarios', 'primeiraVisita', 'whatsapp'],
  },
  primeiraVisita: {
    label: 'É minha primeira visita',
    answer: 'Que alegria receber você! Venha como está e, se puder, chegue alguns minutos antes. Procure nossa equipe de recepção para conhecer o espaço com calma.',
    next: ['horarios', 'infantil', 'whatsapp'],
  },
  infantil: {
    label: 'Tem espaço infantil?',
    answer: 'Sim. Nosso Ministério Infantil recebe crianças de 0 a 12 anos durante os cultos de domingo. A Escola Dominical também possui classes divididas por idade para crianças, jovens e adultos.',
    next: ['primeiraVisita', 'horarios', 'whatsapp'],
  },
  pastor: {
    label: 'Quero falar com um pastor',
    answer: 'Será um prazer ouvir você. Para assuntos espirituais, aconselhamento ou emergências, nossa equipe conecta você com um pastor. O aconselhamento pastoral funciona de segunda a sábado.',
    next: ['whatsapp', 'horarios', 'aconselhamento'],
  },
  batismo: {
    label: 'Quero saber sobre batismo',
    answer: 'O batismo é um testemunho público de fé. Realizamos batismos regularmente e oferecemos um curso preparatório para quem deseja compreender e dar esse passo. Fale com nossa equipe para saber a próxima data.',
    next: ['ceia', 'whatsapp', 'pastor'],
  },
  ceia: {
    label: 'Quem pode participar da Ceia?',
    answer: 'A Ceia do Senhor é celebrada mensalmente e é aberta a membros e frequentadores que fazem parte da comunhão da igreja, compartilham da mesma fé e estão em paz com Deus e com o próximo.',
    next: ['batismo', 'pastor', 'whatsapp'],
  },
  aconselhamento: {
    label: 'Agendar aconselhamento',
    answer: 'O aconselhamento pastoral funciona de segunda a sábado. Fale com nossa equipe para solicitar um horário e explicar brevemente como podemos ajudar.',
    next: ['whatsapp', 'pastor'],
  },
  whatsapp: {
    label: 'Falar no WhatsApp',
    action: 'whatsapp',
  },
}
