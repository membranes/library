var Highcharts;
var url = "https://raw.githubusercontent.com/membranes/abstracts/refs/heads/master/warehouse/tags.json"

// Generate curves
jQuery.getJSON(url, function (data) {


    Highcharts.chart('container0003', {

        chart: {
            height: '60%'
        },

        // Let the center circle be transparent
        colors: ['transparent'].concat(Highcharts.getOptions().colors),

        title: {
            text: 'An illustration of imbalance'
        },
        series: [{
            type: 'sunburst',
            data: data,
            name: 'Root',
            allowDrillToNode: true,
            borderRadius: 3,
            cursor: 'pointer',
            dataLabels: {
                format: '{point.id}',
                filter: {
                    property: 'innerArcLength',
                    operator: '>',
                    value: 16
                }
            },
            levels: [{
                level: 1,
                levelIsConstant: false,
                dataLabels: {
                    filter: {
                        property: 'outerArcLength',
                        operator: '>',
                        value: 64
                    }
                }
            }, {
                level: 2,
                colorByPoint: true
            },
                {
                    level: 3,
                    colorVariation: {
                        key: 'brightness',
                        to: -0.5
                    }
                }, {
                    level: 4,
                    colorVariation: {
                        key: 'brightness',
                        to: 0.5
                    }
                }]

        }],

        tooltip: {
            headerFormat: '',
            pointFormat: 'The counts of <b>{point.name}</b> is <b>' +
                '{point.value}</b>'
        }
    });

});