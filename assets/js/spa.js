/**
 * Created by Thodoris on 10/4/2017.
 */


angular.module('sailsdemo',[]);

angular.module('sailsdemo').controller('control',['$scope', function($scope){

  io.socket.get('/emoji',function(data){
    $scope.emojis = data;
    $scope.$apply();
  });

  io.socket.on('emoji',function(event){
    switch (event.verb){
      case 'created':
        $scope.emojis.push(event.data);
        $scope.$apply();
        break;
    }

  });



/*
  $scope.emojis = [{
    text:'=)',
    id:1
  },
    {
      text:':-)',
      id:2
    },
    {
      text:'8)',
      id:3
    },
    {
      text:':)',
      id:4
    }];
*/


}]);
