window.onload = function () {
  var chart = new CanvasJS.Chart('chartContainer', {
    exportEnabled: true,
    data: [
      {
        type: 'pyramid',
        indexLabelFontSize: 18,
        valueRepresents: 'area',
        indexLabel: '{indexLabel} - #percent%',
        toolTipContent: '<b>{indexLabel}:</b> {y} (#percent%)',
        dataPoints: [
          { y: peasant, indexLabel: 'Крестьяне' },
          { y: worker, indexLabel: 'Рабочие' },
          { y: merchant, indexLabel: 'Торговцы' },
          { y: noble, indexLabel: 'Аристократия' },
          { y: priest, indexLabel: 'Духовенство' },
        ],
      },
    ],
  });
  chart.render();
};
