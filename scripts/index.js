(function() {
  var app = angular.module("Sums", ['ngRoute']);
  app.config( function($routeProvider){
    $routeProvider
    .when('/minus',{
      templateUrl: 'minus.html'
      ,controller:'minusController'
    })
    .when('/plus',{
      templateUrl: 'plus.html'
      ,controller:'QuesController'
    })
    .when('/',{
      templateUrl: 'plus.html'
      ,controller:'QuesController'
    })
    ;
    
  });
  
  app.controller ("minusController", function($log,$route){
    $log.info("Minus Controller Start");
    $log.debug($route);
    this.status = "loaded";
    this.attempts=[];
    
  
    //generate the next sum
    this.genSum = function() {
      console.log("minus genSum Triggred ");
      this.quesData={};
      
      var op1 = Math.floor(Math.random() * 88) + 10;
      var op1ones = op1 % 10;
      var op1tens = Math.floor(op1 / 10);
      
      var op2ones = Math.floor(Math.random() * (op1ones));
      
      var op2tens = Math.floor(Math.random() * op1tens);
      var op2 = op2tens * 10 + op2ones;
      
      this.sol   = op1 - op2;
      
      this.quesData.oper01 = op1;
      this.quesData.oper02 = op2;
      this.quesData.oper = '-';
      this.quesData.sol = op1 - op2;
      this.tens=NaN;
      this.ones=NaN;
      this.ans=NaN;
      
      answer.ones.focus(); //focus on the form input ones

      console.log("New numbers " + op1 + ", " + op2 + ", sum " + (op1 + op2));
      console.log("New quesData " + this.quesData.oper01 + ", " + this.quesData.oper02  + ", sum " + this.quesData.sol);
    }; //genSum

    this.genSum();

    // reset the formb
    this.reset = function() {
      console.log("Reset Triggred "); // what is being requested
      this.tens = this.ones = this.feedback = this.vFeedBack = "";
      answer.checkAns.value = "CHECK";
      console.log(answer.checkAns.class ); 
    };
    
    //check the answer
    this.checkAns = function() {
     
      console.log("checking answer ansController Triggred ");           
      console.log("Current quesData " + this.quesData.oper01 + ", " + this.quesData.oper02  + ", sum " + this.quesData.sol);
      
      // not really checking but generating new sum
      if (answer.checkAns.value === "NEXT") {
        // generating new sum
        this.reset();
        this.genSum();        
        return;
      }
      //now really check the answer
      this.ans = parseInt(this.tens) * 10 + parseInt(this.ones);
      console.log("Provided answer "+this.tens+" "+this.ones);
      this.correct = false;
      if (this.ans == this.sol) {
        this.correct = true;
        this.feedback = "Correct. Well Done!";
        this.vFeedBack = "correct";
        console.log("checking answer -- Correct. Well Done! ");
        answer.checkAns.value = "NEXT";
        //answer.checkAns.focus();
        //console.log("answer.checkAns.onClick "+answer.checkAns.onClick);
        //update ans provided
        this.quesData.ans = this.ans;
        this.attempts.unshift(this.quesData);
        console.log(this.attempts);
      } else {
        this.correct = false;
        this.feedback = "Incorrect. Try Again!";
        this.vFeedBack = "in-correct";                                                           
        console.log("checking answer -- Incorrect. Try Again! ");
        console.log(this.attempts);
        
      }
      return this.feedback;
    }; //checkAns
    $log.debug("Minus Controller End");
    
  });//minusController
  
  app.controller("QuesController", function($log, $route) {
  console.log("QuesController Triggred ");
     
    this.attempts=[];
    
  
    //generate the next sum
    this.genSum = function() {
      console.log("genSum Triggred ");
      this.quesData={};
      var op1 = Math.floor(Math.random() * 88) + 10;
      var op1ones = op1 % 10;

      var op2ones = Math.floor(Math.random() * (9 - op1ones));
      var op2tens = Math.floor(Math.random() * 8);
      var op2 = op2tens * 10 + op2ones;
      this.sol   = op1 + op2;
      
      this.quesData.oper01 = op1;
      this.quesData.oper02 = op2;
      this.quesData.oper = '+';
      this.quesData.sol = op1 + op2;
      this.tens=NaN;
      this.ones=NaN;
      this.ans=NaN;
      
      answer.ones.focus(); //focus on the form input ones

      console.log("New numbers " + op1 + ", " + op2 + ", sum " + (op1 + op2));
      console.log("New quesData " + this.quesData.oper01 + ", " + this.quesData.oper02  + ", sum " + this.quesData.sol);
    }; //genSum

    this.genSum();

    // reset the form
    this.reset = function() {
      console.log("Reset Triggred "); // what is being requested
      this.tens = this.ones = this.feedback = this.vFeedBack = "";
      answer.checkAns.value = "CHECK";
      console.log(answer.checkAns.class ); 
    };
    
    //check the answer
    this.checkAns = function() {
     
      console.log("checking answer ansController Triggred ");           
      console.log("Current quesData " + this.quesData.oper01 + ", " + this.quesData.oper02  + ", sum " + this.quesData.sol);
      
      // not really checking but generating new sum
      if (answer.checkAns.value === "NEXT") {
        // generating new sum
        this.reset();
        this.genSum();        
        return;
      }
      //now really check the answer
      this.ans = parseInt(this.tens) * 10 + parseInt(this.ones);
      console.log("Provided answer "+this.tens+" "+this.ones);
      this.correct = false;
      if (this.ans == this.sol) {
        this.correct = true;
        this.feedback = "Correct. Well Done!";
        this.vFeedBack = "correct";
        console.log("checking answer -- Correct. Well Done! ");
        answer.checkAns.value = "NEXT";
        //answer.checkAns.focus();
        //console.log("answer.checkAns.onClick "+answer.checkAns.onClick);
        //update ans provided
        this.quesData.ans = this.ans;
        this.attempts.unshift(this.quesData);
        console.log(this.attempts);
      } else {
        this.correct = false;
        this.feedback = "Incorrect. Try Again!";
        this.vFeedBack = "in-correct";                                                           
        console.log("checking answer -- Incorrect. Try Again! ");
        console.log(this.attempts);
        
      }
      return this.feedback;
    }; //checkAns
  }); //quesController
  
  
  
})(); // closure
