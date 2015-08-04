casper.options.viewportSize = {width: 1366, height: 768};
var coName,year;

casper.test.begin('season.cpt test', function(test) {
    casper.start('http://localhost:8075/WebReport/ReportServer?reportlet=demo%2Fparameter%2Fseason.cpt');

    casper.then(function() {
               this.evaluate(function() {
               $($(".fr-trigger-texteditor")[0]).attr("value","前两年");
        });
    });
    casper.waitForSelector("#fr-btn-FORMSUBMIT0 button",
       function success() {
          test.assertExists("#fr-btn-FORMSUBMIT0 button");
           this.click("#fr-btn-FORMSUBMIT0 button");
       });
    
    casper.wait(1000, function() {
           casper.then(function() {
               coName =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss blw1 blss btw1 btss")[6].innerHTML;
        });
        this.echo(coName);
               year =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss blw1 blss btw1 btss")[7].innerHTML;
        });
        
        this.test.assertEquals(coName,"思维科技");
        this.test.assertEquals(year,"2013");
    });
});   

    casper.then(function() {
               this.evaluate(function() {
               $($(".fr-trigger-texteditor")[0]).attr("value","前五年");
        });
    });
    casper.waitForSelector("#fr-btn-FORMSUBMIT0 button",
      function success() {
          test.assertExists("#fr-btn-FORMSUBMIT0 button");
          this.click("#fr-btn-FORMSUBMIT0 button");
    });
    
    casper.wait(1000, function() {
           casper.then(function() {
               coName =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss blw1 blss btw1 btss")[6].innerHTML;
        });
        this.echo(coName);
               year =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss blw1 blss btw1 btss")[7].innerHTML;
        });
        
        this.test.assertEquals(coName,"思维科技");
        this.test.assertEquals(year,"2010");
    });
}); 

   casper.run(function() {
       test.done();
   });
});