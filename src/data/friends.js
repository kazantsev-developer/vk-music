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
    avatarGradient: "linear-gradient(135deg, #2C2C30, #1C1C1F)",
    waveGradient: "radial-gradient(circle at 50% 25%, #18181B 0%, #000000 75%)",
    tracks: [
      { title: 'Поезда', artist: 'Женя Трофимов, Комната культуры', owner: 'both', ownerText: 'Нравится обоим', color: ["#242428", "#18181B"], src: '/music/track_2_poezda.mp3' },
      { title: 'Отпускай', artist: 'Три дня дождя', owner: 'both', ownerText: 'Нравится обоим', color: ["#242428", "#18181B"], src: '/music/track_1_otpuskay.mp3' },
      { title: 'Феникс', artist: 'Beowulf', owner: 'friend', ownerText: 'Из треков Максима', color: ["#242428", "#18181B"], src: '/music/track_4_feniks.mp3' },
      { title: 'Better', artist: 'Lena & Santos', owner: 'me', ownerText: 'Из ваших треков', color: ["#242428", "#18181B"], src: '/music/track_3_better.mp3' },
      { title: 'Вставай', artist: 'Пара нормальных', owner: 'friend', ownerText: 'Из треков Максима', color: ["#242428", "#18181B"], src: '/music/track_5_vstavay.mp3' }
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
    avatarGradient: "linear-gradient(135deg, #2C2C30, #1C1C1F)",
    waveGradient: "radial-gradient(circle at 50% 25%, #18181B 0%, #000000 75%)",
    tracks: [
      { title: 'Вставай', artist: 'Пара нормальных', owner: 'both', ownerText: 'Нравится обоим', color: ["#242428", "#18181B"], src: '/music/track_5_vstavay.mp3' },
      { title: 'Better', artist: 'Lena & Santos', owner: 'both', ownerText: 'Нравится обоим', color: ["#242428", "#18181B"], src: '/music/track_3_better.mp3' },
      { title: 'Поезда', artist: 'Женя Трофимов, Комната культуры', owner: 'me', ownerText: 'Из ваших треков', color: ["#242428", "#18181B"], src: '/music/track_2_poezda.mp3' },
      { title: 'Отпускай', artist: 'Три дня дождя', owner: 'friend', ownerText: 'Из треков Алины', color: ["#242428", "#18181B"], src: '/music/track_1_otpuskay.mp3' }
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
    avatarGradient: "linear-gradient(135deg, #2C2C30, #1C1C1F)",
    waveGradient: "radial-gradient(circle at 50% 25%, #18181B 0%, #000000 75%)",
    tracks: [
      { title: 'Отпускай', artist: 'Три дня дождя', owner: 'both', ownerText: 'Нравится обоим', color: ["#242428", "#18181B"], src: '/music/track_1_otpuskay.mp3' },
      { title: 'Феникс', artist: 'Beowulf', owner: 'both', ownerText: 'Нравится обоим', color: ["#242428", "#18181B"], src: '/music/track_4_feniks.mp3' },
      { title: 'Поезда', artist: 'Женя Трофимов, Комната культуры', owner: 'me', ownerText: 'Из ваших треков', color: ["#242428", "#18181B"], src: '/music/track_2_poezda.mp3' },
      { title: 'Вставай', artist: 'Пара нормальных', owner: 'friend', ownerText: 'Из треков Дмитрия', color: ["#242428", "#18181B"], src: '/music/track_5_vstavay.mp3' }
    ]
  }
];
export const friends = friendsData;
