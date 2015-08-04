casper.options.viewportSize = {width: 1366, height: 768};
var startDate,endDate,area,id;

casper.test.begin('query_custom.cpt test', function(test) {
   casper.start('http://localhost:8075/WebReport/ReportServer?reportlet=demo%2Fparameter%2Fquery_custom.cpt');
   casper.then(function() {
        startDate =this.evaluate(function() {
            return  $($(".fr-trigger-texteditor")[0]).val();
        });
        endDate =this.evaluate(function() {
            return  $($(".fr-trigger-texteditor")[2]).val();
        });
        area =this.evaluate(function() {
            return  $($(".fr-trigger-texteditor")[4]).val();
        });

        this.test.assertEquals(startDate, "2012-01-01");
        this.test.assertEquals(endDate, "2012-12-31");
        this.test.assertEquals(area, "华北");
    });
   casper.waitForSelector("#fr-btn-SEARCH button",
       function success() {
           test.assertExists("#fr-btn-SEARCH button");
           this.click("#fr-btn-SEARCH button");
       },
       function fail() {
           test.assertExists("#fr-btn-SEARCH button");
   });
   casper.wait(1000, function() {
            id =this.evaluate(function() {
            return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss bl0 btw1 btss")[0].innerHTML;
        });
        this.test.assertEquals(id, "10811");
   });

   casper.run(function() {
       test.done();
       
   });
});