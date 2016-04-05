// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.contrib.drawer','starter.controllers', 'starter.services','ngCordova'])

.run(function($ionicPlatform,$ionicPopup) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
	if(window.Connection) {
        if(navigator.connection.type == Connection.NONE) {
            $ionicPopup.confirm({
                title: "Internet Disconnected",
                ontent: "The internet is disconnected on your device."
            })
            .then(function(result) {
                if(!result) {
                    ionic.Platform.exitApp();
                    }else{
					ionic.Platform.exitApp();
					}
                });
			}
    }
	
	$ionicPlatform.registerBackButtonAction(function(event) {
    if (true) { // your check here
      ionic.Platform.exitApp();
    }
  }, 100);
  
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'MainCtrl'
  })
  
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  
  .state('registration', {
    url: '/registration',
    templateUrl: 'templates/registration.html',
    controller: 'RegistrationCtrl'
  })

  .state('bookingHistory', {
    url: '/bookingHistory',
    templateUrl: 'templates/booking-history.html',
    controller: 'BookingHistoryCtrl'
  })
  
  .state('offerCoupons', {
    url: '/offerCoupons',
    templateUrl: 'templates/offer-coupons.html',
    controller: 'OfferCouponsCtrl'
  })
  
  .state('referEarn', {
    url: '/referEarn',
    templateUrl: 'templates/refer-earn.html',
    controller: 'ReferEarnCtrl'
  })
  
  .state('helpFaq', {
    url: '/helpFaq',
    templateUrl: 'templates/help-faq.html',
    controller: 'HelpFaqCtrl'
  })
  
  .state('contactUs', {
    url: '/contactUs',
    templateUrl: 'templates/contact-us.html',
    controller: 'ContactUsCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});
