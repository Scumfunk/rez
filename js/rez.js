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
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
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
                data: [65, 59, 80, 81, 56, 55, 40],
                spanGaps: false,
            }
        ]
    };
    var ctx = $('#myChart')
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    });
});

$('#datepicker').datepicker({
    language: 'ru',
    format:"mm-yyyy",
    viewMode: "months",
    minViewMode: "months"
});