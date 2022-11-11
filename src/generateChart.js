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
          const dataPoint = {
            y: country.rural + country.urban,
            color: country.color,
            label: country.name,
            click: function () {
              window.open(
                `/countries/${Object.keys(Countries).find(
                  (key) => Countries[key].name == this.label
                )}.html`,
                '_blank'
              );
            },
            mousemove: function () {
              document
                .querySelectorAll(
                  '.canvasjs-chart-container, .canvasjs-chart-container *'
                )
                .forEach((canvas) => (canvas.style.cursor = 'pointer'));
            },
          };
          return dataPoint;
        })
        .sort((a, b) => a.y - b.y),
    },
  ],
});
chart.render();
