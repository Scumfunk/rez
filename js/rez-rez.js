$(document).ready(function(){
    $('.delete-file').click(function () {
        $(this).closest('.fileinput-button').find('input').val("")
        $(this).closest('.fileinput-button').find('span').text('Прикрепить файл ')
        $(this).css('opacity','0')
        $(this).closest('.fileinput-button').find('span').removeClass('italic')
    });
    $('input:file').change(function () {
        if ($(this).val() != '') {
            $(this).parent().find('span').html($(this)[0].files[0].name)
            $(this).parent().find('span').addClass('italic')
            $(this).closest('.fileinput-button').find('i').css('opacity', '1')
        }else {
            $(this).parent().find('span').text('Прикрепить файл')
            $(this).closest('.fileinput-button').find('i').css('opacity', '0')
            $(this).parent().find('span').removeClass('italic')
        }
    });

});

$('#datepicker').datepicker({
    language: 'ru',
    format:"mm-yyyy",
    viewMode: "months",
    minViewMode: "months"
});

$('#run-prediction-button').click(function () {
    window.location.href = '/results.html'
})

var get_data = function (data, borderColor) {return {
    datasets: [
        {
            label: '1-8',
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: borderColor,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data,
            spanGaps: false
        }
    ]
}};
var ctx1 = $('#myChart1')
var myLineChart1 = new Chart(ctx1, {
    type: 'line',
    data: get_data([{x:1,y:0.33},
        {x:2,y:0.29},
        {x:3,y:0.35},
        {x:4,y:0.19},
        {x:5,y:0.22},
        {x:6,y:0.11},
        {x:7,y:0.15},
        {x:8,y:0.17}],
        "rgba(75,192,192,1)"),
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 1.0,
                    min: 0
                }
            }],
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

var ctx2 = $('#myChart2')
var myLineChart2 = new Chart(ctx2, {
    type: 'line',
    data: get_data([{x:1,y:0.33},
            {x:2,y:0.73},
            {x:3,y:0.79},
            {x:4,y:0.69},
            {x:5,y:0.82},
            {x:6,y:0.89},
            {x:7,y:0.95},
            {x:8,y:0.91}],
        "rgba(192,75,75,1)"),
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 1.0,
                    min: 0
                }
            }],
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

var ctx3 = $('#myChart3')
var myLineChart3 = new Chart(ctx3, {
    type: 'line',
    data:  get_data([{x:1,y:0.07},
            {x:2,y:0.11},
            {x:3,y:0.12},
            {x:4,y:0.17},
            {x:5,y:0.25},
            {x:6,y:0.19},
            {x:7,y:0.21},
            {x:8,y:0.23}],
        "rgba(75,192,192,1)"),
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 1.0,
                    min: 0
                }
            }],
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

var ctx4 = $('#myChart4')
var myLineChart4 = new Chart(ctx4, {
    type: 'line',
    data:  get_data([{x:1,y:0.67},
            {x:2,y:0.53},
            {x:3,y:0.51},
            {x:4,y:0.44},
            {x:5,y:0.40},
            {x:6,y:0.45},
            {x:7,y:0.49},
            {x:8,y:0.50}],
        "rgba(75,192,192,1)"),
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 1.0,
                    min: 0
                }
            }],
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});