casper.options.viewportSize = {width: 1366, height: 768};
var querName,coName1,coName2,cop1,cop2;

casper.test.begin('query_like.cpt test', function(test) {
    casper.start('http://localhost:8075/WebReport/ReportServer?reportlet=demo%2Fparameter%2Fquery_like.cpt');
//   casper.waitForSelector("#fr-btn-FORMSUBMIT0 button",
//       function success() {
//           test.assertExists("#fr-btn-FORMSUBMIT0 button");
//           this.click("#fr-btn-FORMSUBMIT0 button");
//       });
    casper.wait(1000, function() {
           casper.then(function() {
               querName =this.evaluate(function() {
               return  $($(".fr-texteditor")[0]).val();
        });
               coName1 =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss bl0 btw1 btss")[0].innerHTML;
        });
               coName2 =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss bl0 btw1 btss")[9].innerHTML;
        });
        
        this.test.assertEquals(querName,"佳");
        this.test.assertEquals(coName1,"佳佳乐");
        this.test.assertEquals(coName2,"佳佳");
    });
});   

    casper.then(function() {
               this.evaluate(function() {
               $($(".fr-texteditor")[0]).attr("value","普");
        });
    });
    casper.waitForSelector("#fr-btn-FORMSUBMIT0 button",
      function success() {
          test.assertExists("#fr-btn-FORMSUBMIT0 button");
          this.click("#fr-btn-FORMSUBMIT0 button");
    });
    
    casper.wait(1000, function() {
           casper.then(function() {
               querName =this.evaluate(function() {
               return  $($(".fr-texteditor")[0]).val();
        });
               coName1 =this.evaluate(function() {
               return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss bl0 btw1 btss")[0].innerHTML;
        });
        
        this.test.assertEquals(querName,"普");
        this.test.assertEquals(coName1,"普三");
        });
    }); 

   casper.run(function() {
       test.done();
   });
});