casper.options.viewportSize = {width: 1366, height: 643};
var title1,seqLength;

casper.test.begin('divcolumn.cpt test', function(test) {
   casper.start('http://localhost:8075/WebReport/ReportServer?reportlet=demo%2Fparameter%2Fdivcolumn.cpt');
   casper.waitForSelector("#fr-btn-FORMSUBMIT0 button",
       function success() {
           test.assertExists("#fr-btn-FORMSUBMIT0 button");
           this.click("#fr-btn-FORMSUBMIT0 button");
       });
    casper.wait(1000, function() {
           casper.then(function() {
               title1 =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw f11-0 pl2 brw1 brss bbw1 bbss blw1 blss btw1 btss")[0].innerHTML;
        });
               seqLength =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss bl0 btw1 btss").length;
        });
        casper.echo(title1);
        this.test.assertEquals(title1,"序号");
        this.test.assertEquals(seqLength,38);
    });
});   
   casper.run(function() {
       test.done();
   });
});