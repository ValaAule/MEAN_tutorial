angular.module("app",["ngRoute"]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(t,e){t.login=function(t,o){e.login(t,o).then(function(t){console.log(t)})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,e){t.addPost=function(){t.postBody&&e.create({username:"Add Post Button",body:t.postBody}).success(function(e){t.posts.unshift(e),t.postBody=null})},e.fetch().success(function(e){t.posts=e})}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(e){return t.post("/api/posts",e)}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"/templates/posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"/templates/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"templates/login.html"})}]),angular.module("app").service("UserSvc",["$http",function(t){var e=this;e.getUser=function(){return t.get("/api/users",{headers:{"X-Auth":this.token}})},e.login=function(o,n){return t.post("/api/sessions",{username:o,password:n}).then(function(t){return e.token=t.data,e.getUser()})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImxvZ2luLmN0cmwuanMiLCJwb3N0cy5jdHJsLmpzIiwicG9zdHMuc3ZjLmpzIiwicm91dGVzLmpzIiwidXNlci5zdmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJVc2VyU3ZjIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidGhlbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5Iiwic3VjY2VzcyIsInBvc3QiLCJwb3N0cyIsInVuc2hpZnQiLCJmZXRjaCIsInNlcnZpY2UiLCIkaHR0cCIsInRoaXMiLCJnZXQiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsInN2YyIsImdldFVzZXIiLCJoZWFkZXJzIiwiWC1BdXRoIiwidG9rZW4iLCJ2YWwiLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFHQUEsUUFBUUMsT0FBTyxPQUNYLFlDQUpELFFBQVFDLE9BQU8sT0FDZEMsV0FBVyxhQUFBLFNBQUEsVUFBYSxTQUFVQyxFQUFRQyxHQUNuQ0QsRUFBT0UsTUFBUSxTQUFVQyxFQUFVQyxHQUMvQkgsRUFBUUMsTUFBTUMsRUFBVUMsR0FDbkJDLEtBQUssU0FBVUMsR0FDaEJDLFFBQVFDLElBQUlGLFNDTjVCVCxRQUFRQyxPQUFPLE9BSWRDLFdBQVcsYUFBQSxTQUFBLFdBQVksU0FBVUMsRUFBUVMsR0FDdENULEVBQU9VLFFBQVUsV0FDVFYsRUFBT1csVUFDUEYsRUFBU0csUUFDTFQsU0FBVSxrQkFDVlUsS0FBTWIsRUFBT1csV0FDZEcsUUFBUSxTQUFVQyxHQUNqQmYsRUFBT2dCLE1BQU1DLFFBQVFGLEdBQ3JCZixFQUFPVyxTQUFXLFFBSzlCRixFQUFTUyxRQUNKSixRQUFRLFNBQVVFLEdBQ2ZoQixFQUFPZ0IsTUFBUUEsT0N0QjNCbkIsUUFBUUMsT0FBTyxPQUNkcUIsUUFBUSxZQUFBLFFBQVksU0FBVUMsR0FDM0JDLEtBQUtILE1BQVEsV0FDVCxNQUFPRSxHQUFNRSxJQUFJLGVBRXJCRCxLQUFLVCxPQUFTLFNBQVVHLEdBQ3BCLE1BQU9LLEdBQU1MLEtBQUssYUFBY0EsT0NEeENsQixRQUFRQyxPQUFPLE9BQ2R5QixRQUFBLGlCQUFPLFNBQVVDLEdBQ1ZBLEVBQ0tDLEtBQUssS0FBTTFCLFdBQVksWUFBYTJCLFlBQWEsMEJBQ2pERCxLQUFLLGFBQWMxQixXQUFZLGVBQWdCMkIsWUFBYSw2QkFDNURELEtBQUssVUFBVzFCLFdBQVksWUFBYTJCLFlBQWEsNEJDTm5FN0IsUUFBUUMsT0FBTyxPQUNkcUIsUUFBUSxXQUFBLFFBQVcsU0FBU0MsR0FDckIsR0FBSU8sR0FBTU4sSUFDVk0sR0FBSUMsUUFBVSxXQUNWLE1BQU9SLEdBQU1FLElBQUksY0FDYk8sU0FBV0MsU0FBU1QsS0FBS1UsVUFHakNKLEVBQUl6QixNQUFNLFNBQVNDLEVBQVVDLEdBQ3pCLE1BQU9nQixHQUFNTCxLQUFLLGlCQUNkWixTQUFVQSxFQUFVQyxTQUFVQSxJQUMvQkMsS0FBSyxTQUFVMkIsR0FFZCxNQURBTCxHQUFJSSxNQUFRQyxFQUFJQyxLQUNUTixFQUFJQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgQXVsZSBvbiAyLzcvMTUuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdhcHAnLFtcbiAgICAnbmdSb3V0ZSdcbl0pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEF1bGUgb24gMi85LzE1LlxuICovXG5cbmFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcbiAgICAgICAgJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICAgICAgVXNlclN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEF1bGUgb24gMi82LzE1LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnYXBwJylcblxuLy9jcmVhdGUgdGhlIFBvc3RzQ3RybCBtb2R1bGUgYW5kIGRlcGVuZGVuY3kgaW5qZWN0ICRzY29wZSwgdGhlIHNjb3BlIHRpZXMvZ2x1ZXMgdGhlIGNvbnRyb2xsZXIgdG8gdGhlIHZpZXdcbi8vaW50ZWdyYXRlIHRvIHRoZSBSRVNUIEFQSSB0byBwb3N0IGJhY2sgdG8gTW9uZ29EQi4gIE9ubHkgdGhlIHN1Y2Nlc3MgZnVuY3Rpb24gaXMgcG9zdGVkIGFuZCBpdCBudWxscyB0aGUgdmFsdWUgZm9yIHRoZSBuZXh0IHRpbWVcbi5jb250cm9sbGVyKFwiUG9zdHNDdHJsXCIsZnVuY3Rpb24gKCRzY29wZSwgUG9zdHNTdmMpIHtcbiAgICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XG4gICAgICAgICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAnQWRkIFBvc3QgQnV0dG9uJyxcbiAgICAgICAgICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcbiAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3QpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KVxuICAgICAgICAgICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBQb3N0c1N2Yy5mZXRjaCgpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChwb3N0cykge1xuICAgICAgICAgICAgJHNjb3BlLnBvc3RzID0gcG9zdHNcbiAgICAgICAgfSlcbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuICAgIHRoaXMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKVxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdClcbiAgICB9XG59KSIsIi8qKlxuICogQ3JlYXRlZCBieSBBdWxlIG9uIDIvOS8xNS5cbiAqXG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAgICAgLndoZW4oJy8nLCB7Y29udHJvbGxlcjogJ1Bvc3RzQ3RybCcsIHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9wb3N0cy5odG1sJ30pXG4gICAgICAgICAgICAud2hlbignL3JlZ2lzdGVyJywge2NvbnRyb2xsZXI6ICdSZWdpc3RlckN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvcmVnaXN0ZXIuaHRtbCd9KVxuICAgICAgICAgICAgLndoZW4oJy9sb2dpbicsIHtjb250cm9sbGVyOiAnTG9naW5DdHJsJywgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbG9naW4uaHRtbCd9KVxuICAgIH0pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEF1bGUgb24gMi85LzE1LlxuICovXG5cbmFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLnNlcnZpY2UoJ1VzZXJTdmMnLCBmdW5jdGlvbigkaHR0cCl7XG4gICAgICAgIHZhciBzdmMgPSB0aGlzXG4gICAgICAgIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMnLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnWC1BdXRoJzp0aGlzLnRva2VufVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBzdmMubG9naW49ZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZXNzaW9ucycsIHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgc3ZjLnRva2VuID0gdmFsLmRhdGFcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICB9KSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==