const chart = new CanvasJS.Chart('chartContainer', {
  data: [
    {
      type: 'pie',
      startAngle: -80,
      innerRadius: 60,
      indexLabelFontSize: 17,
      indexLabel: '{label} - #percent%',
      toolTipContent: '<b>{label}:</b> {y} (#percent%)',
      dataPoints: Object.values(Countries)
        .map((country) => {
          return {
            y: country.rural + country.urban,
            color: country.color,
            label: country.name,
          };
        })
        .sort((a, b) => a.y - b.y),
    },
  ],
});
chart.render();
