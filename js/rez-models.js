/**
 * Created by yury on 23.05.17.
 */
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

var myVar;

function runLoader() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("loader").style.display = "block";
    myVar = setTimeout(goToResults, 3000);
}

function goToResults() {
    window.location.href = '/rez/results.html'
}

$('#run-prediction-button').click(function () {
    runLoader()
})