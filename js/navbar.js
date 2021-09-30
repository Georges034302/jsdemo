$(function() {
    var bar = '';
    bar += '<nav class="navbar navbar-default" role="navigation">';
    bar += '<div class="container-fluid navbar-inverse bg-info">';
    bar += '<div>';
    bar += '<ul class="nav navbar-nav navbar-inverse">';
    bar += '<li id="home"><a href="/index.html">Home</a></li>';
    bar += '<li id="regular"><a href="/html/regular.html">Regular</a></li>';
    bar += '<li id="expression"><a href="/html/expression.html">Expression</a></li>';
    bar += '<li id="arrow"><a href="/html/arrow.html">Arrow</a></li>';
    bar += '<li id="asynchronous"><a href="/html/asynchronous.html">Asynchronous</a></li>';
    bar += '</ul>';
    bar += '</div>';
    bar += '</div>';
    bar += '</nav>';

    $("#main-bar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        var items = source.split("&");
        for (let i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}