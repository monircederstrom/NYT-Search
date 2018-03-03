$(document).ready(function() {
// $("row").text("test!")
// console.log("test link");






$("#search-button").on("click", function(event) {
    event.preventDefault();

    var q = $("#search-term").val().trim();;
    var beginDate = $("#begin-date").val().trim();;
    var endDate = $("#end-date").val().trim();;

    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryUrl += '?' + $.param({
        'api-key': "299ec933b3b6456a8ee387a9775a9c6d",
        'q': q,
        'begin_date': beginDate,
        'end_date': endDate,

// END OF: queryUrl += '?' + $.param({
});

    console.log(q);

    $.get(queryUrl).then(function(data){
        console.log(data);
        console.log(data.response.docs[0].snippet)
        var articleTest = data.response.docs[0].snippet
        $("#top-article").text( JSON.stringify(articleTest)) ;

    // END OF: $.get(queryUrl).then(function(data){
    });

// END OF: $("#search-button").on("click", function(event) {
});


// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "299ec933b3b6456a8ee387a9775a9c6d",
//   'q': "tax reform",
//   'begin_date': "20160101",
//   'end_date': "20180303"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });

// var year = 2016;
// var yearSuffix = 0101;
// year+yearSuffix



// END OF: $(document).ready(function() { line 1
});