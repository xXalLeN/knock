angular.module('starter.controllers', [])
.controller('Search', function($scope,$http){
	var url = "conn.php";
	$http.get(url).success(function(response){
		$scope.items = response;
	});
})
.controller('TodoController', function($scope){
	$scope.saved = localStorage.getItem('musics');
	$scope.musics = (localStorage.getItem('musics')!=null)? JSON.parse($scope.saved) : [{title:'', done:false}];

	localStorage.setItem('musics', JSON.stringify($scope.musics));

	$scope.addMusic = function(){
		var music = $scope.musicTitle;
			$scope.musics.push({
					title: $scope.musicTitle,
					done: false
			});
			$scope.musicTitle='';
			localStorage.setItem('musics', JSON.stringify($scope.musics));
	};
	$scope.remove = function(index,data){
		var oldmusic = [];
		angular.forEach(oldmusic,function(music){
			if(!music.done)
				$scope.musics.push(music);
		});
		$scope.musics.splice(index, 1);
		localStorage.setItem('musics', JSON.stringify($scope.musics));
	}
})

.controller('MyCtrl', function($scope, $ionicSlideBoxDelegate) {
   $scope.nextSlide = function() {
      $ionicSlideBoxDelegate.next();
   };
      $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
   }
})

.controller('MyCtrlr', function($scope, $ionicPopup) {

   $scope.showAlert = function() {
	
      var alertPopup = $ionicPopup.confirm({
         title: 'Unlock the door?',
         template: 'Are you sure?'
      });

      alertPopup.then(function(res) {
         // Custom functionality....
      });
   };

});