function checkLoginState() {
}

window.fbAsyncInit = function() {
  Parse.FacebookUtils.init({
    appId      : '1496372537247600',
    channelUrl : '//hujiko.sakura.ne.jp/test/ParseTodo/channel.html',
    status     : true,
    xfbml      : true
  });

  /*
     FB.getLoginStatus(function(response) {
     if (response.status !== 'connected') {
     Parse.FacebookUtils.logIn(null, {
     error: function(user, error) {
     alert("User cancelled the Facebook login or did not fully authorize.");
     }
     });
     }
     });

     FB.Event.subscribe('auth.authResponseChange', function(response) {
     if (response.status === 'connected') {
     if (!Parse.User.current()) {
     Parse.FacebookUtils.logIn(null, {
     success: function(user) {
     new ManageTodosView;
     }
     });
     }
     } else {
     new LogInView;
     }
     });
     */
};
