
/*==============================================================================*/
/* Casper generated Wed Jul 29 2015 09:39:39 GMT+0800 (中国标准时间) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1366, height: 643};

casper.test.begin('Resurrectio test', function(test) {
   casper.start('http://localhost:8075/WebReport/ReportServer?op=fs');

   casper.waitForSelector(".fs-login-username",
       function success() {
           this.sendKeys(".fs-login-username", "1");
       });

   casper.waitForSelector(".fs-login-password",
       function success() {
           this.sendKeys(".fs-login-password", "1");
       });
       
   casper.waitForSelector(x("//a[normalize-space(text())='登录']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='登录']"),"登录成功");
           this.click(x("//a[normalize-space(text())='登录']"));
       });
   casper.waitForSelector(x(".//*[@id='fs-frame-menu']/div/div[1]/div/ul/li[2]/a/span[2]"),
       function success() {
           test.assertExists(x(".//*[@id='fs-frame-menu']/div/div[1]/div/ul/li[2]/a/span[2]"),"点击参数查询");
           this.click(x(".//*[@id='fs-frame-menu']/div/div[1]/div/ul/li[2]/a/span[2]"));
       });
   casper.waitForSelector(x(".//*[@id='fs-frame-menu']/div/div[1]/div/ul/li[2]/ul/li[3]/a/span"),
       function success() {
           test.assertExists(x(".//*[@id='fs-frame-menu']/div/div[1]/div/ul/li[2]/ul/li[3]/a/span"),"复选框查询");
           this.click(x(".//*[@id='fs-frame-menu']/div/div[1]/div/ul/li[2]/ul/li[3]/a/span"));
       });
   casper.then(function() {
        test.assertTextExists("库存台帐");
       });


   casper.run(function() {test.done();});
});