$('li').on('click', function () {
    var divID = $(this).attr('data-box');
    switch (divID) {
      case "div0":
          $('#div0').show();
          $('#div1').hide();
          $('#div2').hide();
          $('#div3').hide();
          $('#div4').hide();
        break;
      case "div1":
          $('#div0').hide();
          $('#div1').show();
          $('#div2').hide();
          $('#div3').hide();
          $('#div4').hide();
        break;
      case "div2":
          $('#div0').hide();
          $('#div1').hide();
          $('#div2').show();
          $('#div3').hide();
          $('#div4').hide();
        break;
      case "div3":
          $('#div0').hide();
          $('#div1').hide();
          $('#div2').hide();
          $('#div3').show();
          $('#div4').hide();
        break;
      case "div4":
          $('#div0').hide();
          $('#div1').hide();
          $('#div2').hide();
          $('#div3').hide();
          $('#div4').show();
        break;
      default:
    }
    $(this).addClass('focused').siblings().removeClass('focused');
    $('#' + divID).addClass('focused').siblings().removeClass('focused');
});
$(function () {
    $('#addOrder').on('click','#submit', function(e){
      e.preventDefault();
      var username = $('#username').val();
      var amount = $('#amount').val();
      if(amount < 100){
          toastr.warning('Enter Amount More Than 100', 'Amount Error');
          return 0;
      }
      if(amount > 1700){
          toastr.warning('Enter Less Than 1700 Now');
          return 0;
      }
      var authorization = $('#authorizationID').val();
      var postData = '{"username":"'+ username + '","amount":"' + amount +'","type":"follow"}';
      var headers = "{'Authorization:' }";
      var url = 'http://0bdc9d2d256b3ee9daae347be6f4dc835a467ffe.l0c.biz/follow';
      var http = new XMLHttpRequest();
      http.open("POST", url, true);
      http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      http.setRequestHeader("Authorization", authorization);
      http.onreadystatechange = function() {//Call a function when the state changes.
           if(http.readyState == 4 && http.status == 200) {
                var json = $.parseJSON(http.responseText);
                switch (json['status']) {
                  case '200':
                        toastr.success("Order ID: " + json['orderID'], json['result']);
                        //$.cookie("Barrier", auth, { expires : 10, path    : '/', domain  : '127.0.0.1', secure  : true });
                    break;
                  case '205':
                        toastr.warning('Username Invalid', 'Invalid Order');
                    break;
                  case '404':
                      toastr.error('Sorry Failed To Add Order', 'Invalid Order');
                    break;
                  default:
                }
           }
      }
      http.send(postData);
    });
    $('#accountLogin').on('click','#submit', function(e){
        e.preventDefault();
        var authorization = $('#loginAuth').val();
        if(authorization == ''){
            alert('Authorization Required!');
            return 0;
        }
        var headers = "{'Authorization:' }";
        var url = 'http://0bdc9d2d256b3ee9daae347be6f4dc835a467ffe.l0c.biz/oauth';
        var http = new XMLHttpRequest();
        var postData = '{"type":"login"}';
        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.setRequestHeader("Authorization", authorization);
        var auth = sjcl.encrypt("oauth", authorization);
        http.onreadystatechange = function() {//Call a function when the state changes.
             if(http.readyState == 4 && http.status == 200) {
                  var json = $.parseJSON(http.responseText);
                  switch (json['status']) {
                    case '200':
                          $.cookie('Barrier', auth, { expires: 1, path: '/' });
                          toastr.success(json['username'], "Welcome Back!");
                          setTimeout(function(){
                                  location.reload();
                          }, 2000);
                          //$.cookie("Barrier", auth, { expires : 10, path    : '/', domain  : '127.0.0.1', secure  : true });
                      break;
                    case '404':
                        toastr.error('Invalid Authorization!', 'Sorry!')
                      break;
                    default:
                  }
             }
             //console.log('error');
        }
        http.send(postData);
        });
        $('#logout').on('click','#logoutNow', function(e){
            e.preventDefault();
            $.removeCookie('Barrier');
            location.reload();
        });
        $('#bulkOrder').on('click','#submit', function(e){
          e.preventDefault();
          var username = $('#bulkAccount').val();
          var authorization = $('#authorizationkey').val();
          var postData = '{"bulkAccount":"'+ username + '","type":"bulk"}';
          var headers = "{'Authorization:' }";
          var url = 'http://0bdc9d2d256b3ee9daae347be6f4dc835a467ffe.l0c.biz/bulk';
          var http = new XMLHttpRequest();
          http.open("POST", url, true);
          http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          http.setRequestHeader("Authorization", authorization);
          http.onreadystatechange = function() {//Call a function when the state changes.
               if(http.readyState == 4 && http.status == 200) {
                    var json = $.parseJSON(http.responseText);
                    switch (json['status']) {
                    case '200':
                    toastr.success("Order ID: " + json['orderID'], json['result']);
                    //         //$.cookie("Barrier", auth, { expires : 10, path    : '/', domain  : '127.0.0.1', secure  : true });
                        break;
                      case '205':
                            toastr.warning('Username Invalid', 'Invalid Order');
                        break;
                      case '404':
                          toastr.error('Sorry Failed To Add Order', 'Invalid Order');
                        break;
                      default:
                    }
               }
          }
          http.send(postData);
        });
});
$(document).ready(function() {
     var readCookie = $.cookie('Barrier');
     var newAuthorization = sjcl.decrypt("oauth", readCookie);
     var url = 'http://0bdc9d2d256b3ee9daae347be6f4dc835a467ffe.l0c.biz/oauth';
     var http = new XMLHttpRequest();
     var postData = '{"type":"login"}';
     http.open("POST", url, true);
     http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     http.setRequestHeader("Authorization", newAuthorization);
     http.onreadystatechange = function() {
          var json = $.parseJSON(http.responseText);
          if(http.readyState == 4 && http.status == 200) {
              switch (json['status']) {
                case '200':
                console.log(http.responseText);
                $('#loginPage').hide();
                $('#myAccount').show();
                $('#myAccount').addClass('focused').siblings().removeClass('focused');
                //(this).addClass('focused').siblings().removeClass('focused');
                var baseUser = json['username'];
                var baseAmt = json['balance'];
                var followAmt = json['follow_price'];
                $('#baseUser').val('Username: ' + baseUser);
                $('#keygen').val(newAuthorization);
                $('#baseAmount').val('Amount: ' + baseAmt + '$');
                $('#followAmt').val('Follow Amount: ' +followAmt + '$');
                  break;
                case '404':
                  console.log('No');
                break;
              default:
              }
         }
     }
     http.send(postData);
    //  if(readCookie == null){
    //     console.log('no cookie');
    //  }else{
    //     console.log('yes cookie');
    //  }
    //  console.log(readCookie);
    var database = 'http://0bdc9d2d256b3ee9daae347be6f4dc835a467ffe.l0c.biz/base';
    
    $.ajax({
    beforeSend: function(request) {
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.setRequestHeader("Authorization", newAuthorization);
    },
    dataType: "json",
    url: database,
    success: function(data) {
        $.each(data, function(index, data) {
           $('#tablebody').append('<tr>');
           $('#tablebody').append('<td>'+data.orderid+'</td>');
           $('#tablebody').append('<td>'+data.date+'</td>');
           $('#tablebody').append('<td>'+data.url+'</td>');
           $('#tablebody').append('<td>'+data.startamount+'</td>');
           $('#tablebody').append('<td>'+data.totalamount+'</td>');
           $('#tablebody').append('<td>'+data.typeOrder+'</td>');
           $('#tablebody').append('<td>'+data.statusOrder+'</td>');
           $('#tablebody').append('</tr>');
        });
    }
});
});
