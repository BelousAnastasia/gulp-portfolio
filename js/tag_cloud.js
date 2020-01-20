am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    chart.fontFamily = "Asap";
    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;
    series.rotationThreshold = 0.5;

    series.data = [{
        "tag": "javascript",
        "count": "1765836"
    }, {
        "tag": "html",
        "count": "1517355"
    }, {
        "tag": "jquery",
        "count": "1287629"
    }, {
        "tag": "sass",
        "count": "1263946"
    }, {
        "tag": "bootstrap",
        "count": "1174721"
    }, {
        "tag": "gulp",
        "count": "1116769"
    }, {
        "tag": "grunt",
        "count": "944983"
    }, {
        "tag": "svg",
        "count": "805679"
    }, {
        "tag": "git",
        "count": "606051"
    }, {
        "tag": "zeplin",
        "count": "591410"
    }, {
        "tag": "figma",
        "count": "574684"
    }, {
        "tag": "css",
        "count": "550916"
    }, {
        "tag": "js",
        "count": "479892"
    }, {
        "tag": "vscode",
        "count": "343092"
    }, {
        "tag": "wordpress",
        "count": "303311"
    }, {
        "tag": "angular",
        "count": "296963"
    }, {
        "tag": "amcharts",
        "count": "288445"
    }, {
        "tag": "hightcharts",
        "count": "286823"
    }, {
        "tag": "adobe photoshop",
        "count": "280079"
    }, {
        "tag": "adobe illustrator",
        "count": "277144"
    }, {
        "tag": "node.js",
        "count": "263451"
    }, {
        "tag": "angular2+",
        "count": "257159"
    }, {
        "tag": "flexbox",
        "count": "255661"
    }, {
        "tag": "bitbucket",
        "count": "253824"
    }, {
        "tag": "PS",
        "count": "222387"
    }, {
        "tag": "AI",
        "count": "219827"
    }, {
        "tag": "adaptive",
        "count": "203121"
    }, {
        "tag": "crossbrowser",
        "count": "202547"
    }, {
        "tag": "email",
        "count": "196727"
    }, {
        "tag": "animations",
        "count": "191174"
    }, {
        "tag": "canvas",
        "count": "188787"
    }, {
        "tag": "linux",
        "count": "173278"
    }, {
        "tag": "windows",
        "count": "127680"
    }, {
        "tag": "html5",
        "count": "118810"
    },  {
        "tag": "twitter-bootstrap",
        "count": "94348"
    }, {
        "tag": "forms",
        "count": "92995"
    }, {
        "tag": "image",
        "count": "92131"
    }, {
        "tag": "macos",
        "count": "90327"
    }, {
        "tag": "facebook",
        "count": "83212"
    }, {
        "tag": "icons",
        "count": "82452"
    }, {
        "tag": "fontawesome",
        "count": "81443"
    }, {
        "tag": "material",
        "count": "78250"
    },  {
        "tag": "material icons",
        "count": "76123"
    }, {
        "tag": "fonts",
        "count": "74867"
    }, {
        "tag": "img",
        "count": "66158"
    }, {
        "tag": "crossplatform",
        "count": "66113"
    }, {
        "tag": "mediaquories",
        "count": "65467"
    }, {
        "tag": "gradient",
        "count": "65014"
    }, {
        "tag": "color",
        "count": "64888"
    }, {
        "tag": "styles",
        "count": "62783"
    }, {
        "tag": "scripts",
        "count": "62393"
    }, {
        "tag": "google-maps",
        "count": "59616"
    }, {
        "tag": "class",
        "count": "58055"
    }, {
        "tag": "google-chrome",
        "count": "56836"
    }, {
        "tag": "validation",
        "count": "55531"
    }];

    series.dataFields.word = "tag";
    series.dataFields.value = "count";

    series.heatRules.push({
        "target": series.labels.template,
        "property": "fill",
        "min": am4core.color("#131313"),
        "max": am4core.color("#4c4c4c"),
        "dataField": "value"
    });

    series.labels.template.url = "https://stackoverflow.com/questions/tagged/{word}";
    series.labels.template.urlTarget = "_blank";
    // series.labels.template.tooltipText = "{word}: {value}";

    var hoverState = series.labels.template.states.create("hover");
    hoverState.properties.fill = am4core.color("#c5c5c5");


}); // end am4core.ready()