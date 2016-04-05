angular.module('starter.controllers', [])

.controller('drawerController', function($scope,$location) {
	$('body').find('.sideMenu').css('display','none');
	$scope.passView = function(viewName){
		$scope.closeDrawer();
		$location.path('/'+viewName)
	}
})

.controller('MainCtrl', function($scope,$location) {
	$scope.passView = function(viewName){
		$location.path('/'+viewName)
	}
})

.controller('HomeCtrl', function($scope) {
	$('body').find('.sideMenu').css('display','block');
	if(window.StatusBar) {
	  StatusBar.overlaysWebView( false );
	  StatusBar.backgroundColorByHexString('#5f9ea0');
	  StatusBar.styleLightContent();
    }
	
	$('.bxslider').bxSlider({
		auto : true,
		captions: true
	});
	
})

.controller('LoginCtrl', function($scope) {
	
})

.controller('RegistrationCtrl', function($scope) {
	
})

.controller('BookingHistoryCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('OfferCouponsCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ReferEarnCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('HelpFaqCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ContactUsCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});
