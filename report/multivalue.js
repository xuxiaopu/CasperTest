casper.options.viewportSize = {width: 1366, height: 768};
var exp,startTime,endTime;

casper.test.begin('multivalue.cpt test', function(test) {
    casper.start('http://localhost:8075/WebReport/ReportServer?reportlet=demo%2Fparameter%2Fmultivalue.cpt');
//   casper.waitForSelector("#fr-btn-FORMSUBMIT0 button",
//       function success() {
//           test.assertExists("#fr-btn-FORMSUBMIT0 button");
//           this.click("#fr-btn-FORMSUBMIT0 button");
//       });
    casper.wait(100, function() {
           casper.then(function() {
               exp =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss blw1 blss btw1 btss")[0].innerHTML;
        });
               startTime =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss blw1 blss btw1 btss")[2].innerHTML;
        });
               endTime =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw pl2 br0 bbw1 bbss blw1 blss btw1 btss")[0].innerHTML;
        });
        
        this.test.assertEquals(exp,"仓库1,仓库3");
        this.test.assertEquals(startTime,"2010-02-01");
        this.test.assertEquals(endTime,"2010-07-30");
    });
});   
   casper.run(function() {
       test.done();
   });
});