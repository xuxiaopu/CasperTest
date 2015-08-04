casper.options.viewportSize = {width: 1366, height: 768};
var ID;

casper.test.begin('connect.cpt test', function(test) {
casper.start('http://localhost:8075/WebReport/ReportServer?reportlet=demo%2Fparameter%2Fconnect.cpt');

   casper.then(function() {
        this.evaluate(function() {
            $($(".fr-trigger-texteditor")[0]).attr("value",'华北');
            $($(".fr-trigger-texteditor")[1]).attr("value",'天津');
            $($(".fr-trigger-texteditor")[2]).attr("value",'三川实业有限公司');
        });
    });
   casper.waitForSelector("#fr-btn-FORMSUBMIT0 button",
       function success() {
           test.assertExists("#fr-btn-FORMSUBMIT0 button","点击查询");
           this.click("#fr-btn-FORMSUBMIT0 button");
       });
    casper.wait(1000, function() {
             this.echo("加载完毕");
});   
    casper.then(function() {
        ID =this.evaluate(function() {
            return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss bl0 btw1 btss")[0].innerHTML;
        });
        casper.echo(ID);
        this.test.assertEquals(ID,"10952");
    });
    
    casper.reload(function() {
     this.echo("loaded again");
    });
    
    casper.then(function() {
        this.evaluate(function() {
            $($(".fr-trigger-texteditor")[0]).attr("value",'华东');
            $($(".fr-trigger-texteditor")[1]).attr("value",'南京');
            $($(".fr-trigger-texteditor")[2]).attr("value",'通恒机械');
        });
    });
   casper.waitForSelector("#fr-btn-FORMSUBMIT0 button",
       function success() {
           test.assertExists("#fr-btn-FORMSUBMIT0 button","点击查询");
           this.click("#fr-btn-FORMSUBMIT0 button");
       });
    casper.wait(1000, function() {
             this.echo("another");
});   
    casper.then(function() {
        ID =this.evaluate(function() {
            return  document.getElementsByClassName("fh bw pl2 brw1 brss bbw1 bbss bl0 btw1 btss")[0].innerHTML;
        });
        casper.echo(ID);
        this.test.assertEquals(ID,"10278");
    });
    
   casper.run(function() {
       test.done();
   });
});