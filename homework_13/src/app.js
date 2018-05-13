const app = angular.module('App', []);
app.controller('Ctrl', [
	'$scope', function ($scope) {
		$scope.posts = data;
		$scope.currentPosts = $scope.posts;

		$scope.makeCategoriesList = () => {
			let categories = ['All'];
			$scope.posts.forEach(item => {
				item.categories.forEach(categorie => {
					if (categories.includes(categorie) === false) {
						categories.push(categorie);
					}
				})
			});
			return categories;
		}

		$scope.filterPosts = (categorie) => {
			if(categorie === 'All') {
				return($scope.currentPosts = $scope.posts);
			} else {
				$scope.currentPosts = [];
				$scope.posts.forEach(post => {
					if(post.categories.includes(categorie) === true) {
						$scope.currentPosts.push(post);
					}
				})
			}
		}

		$scope.addPost = (title, categories, description, url) => {
			if(title && categories && description){
				$scope.showError = false;
				if (!url) {
					url = 'assets/default.jpg';
				};
				categories= categories.replace(/,/g , "");
				categories = categories.split(" ");
				let newPost = {
					title: title,
					categories: categories,
					description: description,
					url: url
				};
				$scope.posts.push(newPost);
				$scope.categories = $scope.makeCategoriesList();
				$scope.addActive = false;
			}else{
				$scope.showError=true;
			}

		}

		$scope.editPost = (post) => {
			if(post.title && post.categories && post.description){
				post.categories= post.categories.toString().replace(/,/g , " ");
				post.categories = post.categories.split(" ");
				post.description = post.description;
				post.title = post.title;
				$scope.categories = $scope.makeCategoriesList();
				post.edit = false;
				post.editError = false;
			}else{
				post.editError = true;
			}
		}

		$scope.categories = $scope.makeCategoriesList();
		$scope.addActive = false;
		$scope.showError = false;

	}]);
