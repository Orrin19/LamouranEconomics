var chart = new CanvasJS.Chart('chartContainer', {
  animationEnabled: true,
  title: {
    text: 'Население Ламорана',
    horizontalAlign: 'left',
  },
  data: [
    {
      type: 'pie',
      startAngle: 60,
      //innerRadius: 60,
      indexLabelFontSize: 17,
      indexLabel: '{label} - #percent%',
      toolTipContent: '<b>{label}:</b> {y} (#percent%)',
      dataPoints: [
        { y: Countries.eshar.rural + Countries.eshar.urban, label: 'Ешар' },
        {
          y: Countries.shushia.rural + Countries.shushia.urban,
          label: 'Шушия',
        },
        {
          y: Countries.lodogia.rural + Countries.lodogia.urban,
          label: 'Лодогия',
        },
        {
          y: Countries.tsunzhou.rural + Countries.tsunzhou.urban,
          label: 'Цуньжоу',
        },
        {
          y: Countries.suidal.rural + Countries.suidal.urban,
          label: 'Суидал',
        },
        {
          y: Countries.igtanGou.rural + Countries.igtanGou.urban,
          label: 'Игтянь Гоу',
        },
        {
          y: Countries.velmisia.rural + Countries.velmisia.urban,
          label: 'Вельмиссия',
        },
        {
          y: Countries.barvaria.rural + Countries.barvaria.urban,
          label: 'Барвария',
        },
        { y: Countries.kehia.rural + Countries.kehia.urban, label: 'Кехия' },
        {
          y: Countries.brabermain.rural + Countries.brabermain.urban,
          label: 'Брабермейн',
        },
        {
          y: Countries.duliGou.rural + Countries.duliGou.urban,
          label: 'Дули Гоу',
        },
        {
          y: Countries.edildor.rural + Countries.edildor.urban,
          label: 'Эдильдор',
        },
        { y: Countries.faen.rural + Countries.faen.urban, label: 'Фаен' },
        {
          y: Countries.kanakia.rural + Countries.kanakia.urban,
          label: 'Канакия',
        },
        {
          y: Countries.gobania.rural + Countries.gobania.urban,
          label: 'Гобания',
        },
        {
          y: Countries.yamoto.rural + Countries.yamoto.urban,
          label: 'Ямото',
        },
        {
          y: Countries.scorpio.rural + Countries.scorpio.urban,
          label: 'Скорпионы',
        },
        {
          y: Countries.festehus.rural + Countries.festehus.urban,
          label: 'Фёстехус',
        },
        {
          y: Countries.belorabia.rural + Countries.belorabia.urban,
          label: 'Белорабия',
        },
        {
          y: Countries.turchiny.rural + Countries.turchiny.urban,
          label: 'Турчиния',
        },
        {
          y: Countries.sardary.rural + Countries.sardary.urban,
          label: 'Сардары',
        },
        {
          y: Countries.celtania.rural + Countries.celtania.urban,
          label: 'Кельтания',
        },
        {
          y: Countries.syrantur.rural + Countries.syrantur.urban,
          label: 'Сырантур',
        },
        {
          y: Countries.scorobey.rural + Countries.scorobey.urban,
          label: 'Скоробеи',
        },
        {
          y: Countries.arraney.rural + Countries.arraney.urban,
          label: 'Арраней',
        },
        {
          y: Countries.threeCityUnion.rural + Countries.threeCityUnion.urban,
          label: 'Союз трех городов',
        },
        {
          y: Countries.doszhan.rural + Countries.doszhan.urban,
          label: 'Досжан',
        },
        {
          y: Countries.nurkenia.rural + Countries.nurkenia.urban,
          label: 'Нуркения',
        },
        { y: Countries.kude.rural + Countries.kude.urban, label: 'Кудэ' },
        { y: Countries.samat.rural + Countries.samat.urban, label: 'Самат' },
        {
          y: Countries.parahi.rural + Countries.parahi.urban,
          label: 'Парахи',
        },
      ],
    },
  ],
});
chart.render();
