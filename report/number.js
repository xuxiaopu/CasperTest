casper.options.viewportSize = {width: 1366, height: 768};
var rowSet,rowLength;

casper.test.begin('number.cpt test', function(test) {
    casper.start('http://localhost:8075/WebReport/ReportServer?reportlet=demo%2Fparameter%2Fnumber.cpt');
  casper.waitForSelector("#fr-btn-FORMSUBMIT0 button",
      function success() {
          test.assertExists("#fr-btn-FORMSUBMIT0 button");
          this.click("#fr-btn-FORMSUBMIT0 button");
      });
    casper.wait(1000, function() {
           casper.then(function() {
               rowSet =this.evaluate(function() {
               return  $($(".fr-texteditor")[1]).val();
        });
               rowLength =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss bl0 btw1 btss").length;
        });
        
        this.test.assertEquals(rowSet,"20");
        this.test.assertEquals(rowLength,20);
    });
}); 
   casper.reload(function() {
    this.echo("刷新页面");
});
   casper.then(function() {
               rowSet =this.evaluate(function() {
               return  $($(".fr-texteditor")[1]).attr("value","6");
        });
   });
     casper.waitForSelector("#fr-btn-FORMSUBMIT0 button",
      function success() {
          test.assertExists("#fr-btn-FORMSUBMIT0 button");
          this.click("#fr-btn-FORMSUBMIT0 button");
      });
    casper.wait(1000, function() {
           casper.then(function() {
               rowSet =this.evaluate(function() {
               return  $($(".fr-texteditor")[1]).val();
        });
               rowLength =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss bl0 btw1 btss").length;
        });
        
        this.test.assertEquals(rowSet,"6");
        this.test.assertEquals(rowLength,6);
    });
}); 
   casper.run(function() {
       test.done();
   });
});