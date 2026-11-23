export const friendsData = [
  {
    id: 'maxim',
    name: 'Максим Соколов',
    firstName: 'Максим',
    pairTitle: 'Александр + Максим',
    initials: 'МС',
    match: 89,
    meta: 'Слушал 12 мин назад • Инди, поп-рок',
    common: 'Общие артисты: Три дня дождя, Комната культуры, Beowulf',
    avatarGradient: 'linear-gradient(135deg, #E646B6, #7B3FE4)',
    waveGradient: 'radial-gradient(circle at 50% 25%, #E646B6 0%, #6C3CE9 50%, #2D81E0 85%, transparent 100%)',
    tracks: [
      { title: 'Поезда', artist: 'Женя Трофимов, Комната культуры', owner: 'both', ownerText: 'Нравится обоим', color: ['#2D81E0', '#4F46E5'], src: '/music/track_2_poezda.mp3' },
      { title: 'Отпускай', artist: 'Три дня дождя', owner: 'both', ownerText: 'Нравится обоим', color: ['#10B981', '#0F766E'], src: '/music/track_1_otpuskay.mp3' },
      { title: 'Феникс', artist: 'Beowulf', owner: 'friend', ownerText: 'Из треков Максима', color: ['#D97706', '#B91C1C'], src: '/music/track_4_feniks.mp3' },
      { title: 'Better', artist: 'Lena & Santos', owner: 'me', ownerText: 'Из ваших треков', color: ['#D946EF', '#DB2777'], src: '/music/track_3_better.mp3' },
      { title: 'Вставай', artist: 'Пара нормальных', owner: 'friend', ownerText: 'Из треков Максима', color: ['#06B6D4', '#2563EB'], src: '/music/track_5_vstavay.mp3' }
    ]
  },
  {
    id: 'alina',
    name: 'Алина Морозова',
    firstName: 'Алин',
    pairTitle: 'Александр + Алина',
    initials: 'АМ',
    match: 94,
    meta: 'В сети • Поп, инди',
    common: 'Общие артисты: Пара нормальных, Lena & Santos, Комната культуры',
    avatarGradient: 'linear-gradient(135deg, #2D81E0, #00D2FF)',
    waveGradient: 'radial-gradient(circle at 50% 25%, #FF4D8D 0%, #2D81E0 55%, #00D2FF 90%, transparent 100%)',
    tracks: [
      { title: 'Вставай', artist: 'Пара нормальных', owner: 'both', ownerText: 'Нравится обоим', color: ['#06B6D4', '#2563EB'], src: '/music/track_5_vstavay.mp3' },
      { title: 'Better', artist: 'Lena & Santos', owner: 'both', ownerText: 'Нравится обоим', color: ['#D946EF', '#DB2777'], src: '/music/track_3_better.mp3' },
      { title: 'Поезда', artist: 'Женя Трофимов, Комната культуры', owner: 'me', ownerText: 'Из ваших треков', color: ['#2D81E0', '#4F46E5'], src: '/music/track_2_poezda.mp3' },
      { title: 'Отпускай', artist: 'Три дня дождя', owner: 'friend', ownerText: 'Из треков Алины', color: ['#F43F5E', '#F97316'], src: '/music/track_1_otpuskay.mp3' }
    ]
  },
  {
    id: 'dmitry',
    name: 'Дмитрий Волков',
    firstName: 'Дмитрий',
    pairTitle: 'Александр + Дмитрий',
    initials: 'ДВ',
    match: 78,
    meta: 'Был вчера • Рок, лирика',
    common: 'Общие артисты: Три дня дождя, Beowulf',
    avatarGradient: 'linear-gradient(135deg, #10B981, #0F766E)',
    waveGradient: 'radial-gradient(circle at 50% 25%, #10B981 0%, #2D81E0 55%, #7B3FE4 90%, transparent 100%)',
    tracks: [
      { title: 'Отпускай', artist: 'Три дня дождя', owner: 'both', ownerText: 'Нравится обоим', color: ['#10B981', '#0F766E'], src: '/music/track_1_otpuskay.mp3' },
      { title: 'Феникс', artist: 'Beowulf', owner: 'both', ownerText: 'Нравится обоим', color: ['#D97706', '#B91C1C'], src: '/music/track_4_feniks.mp3' },
      { title: 'Поезда', artist: 'Женя Трофимов, Комната культуры', owner: 'me', ownerText: 'Из ваших треков', color: ['#2D81E0', '#4F46E5'], src: '/music/track_2_poezda.mp3' },
      { title: 'Вставай', artist: 'Пара нормальных', owner: 'friend', ownerText: 'Из треков Дмитрия', color: ['#06B6D4', '#2563EB'], src: '/music/track_5_vstavay.mp3' }
    ]
  }
];
export const friends = friendsData;
