function loadi18n() {
    $.i18n().load({
        pt: 'i18n/pt.json',
        en: 'i18n/en.json',
        es: 'i18n/es.json',
    }).done(updateText);
}

function updateText() {
    var locale = $("#language option:selected").val();

    $.i18n({
        locale: locale
    });

    $("html").i18n();
}

$(document).ready(function() {
    $("#language").chosen({
        width:"100px",
        html_template: '<img style="padding:0px;margin-right:4px"  class="{class_name}" src="{url}" /> {text} '
    });

    loadi18n();
    $("#language").change(updateText);
});