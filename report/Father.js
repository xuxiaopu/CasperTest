casper.options.viewportSize = {width: 1366, height: 768};
var value,test1;

casper.test.begin('Father.cpt', function(test) {
   casper.start('http://localhost:8075/WebReport/ReportServer?reportlet=demo%2Fparameter%2FFather.cpt');
   casper.then(function() {
        value =this.evaluate(function() {
            return  $($(".fr-texteditor")[0]).val();
        });

        this.test.assertEquals(value, "ALFKI");
    });
   casper.waitForSelector("#fr-btn-BUTTON0 button",
       function success() {
           test.assertExists("#fr-btn-BUTTON0 button");
           this.click("#fr-btn-BUTTON0 button");
       },
       function fail() {
           test.assertExists("#fr-btn-BUTTON0 button");
   });
   casper.run(function() {
       test.done();
       
   });
});
