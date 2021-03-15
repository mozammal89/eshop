<!DOCTYPE html>
<html>
<head>
	<title>public</title>
</head>
<body>
	<div id="app">
		@{{test}}

		<p>
		    <router-link to="/test1">Go to Test one</router-link>
		</p>
		<p>
		    <router-link to="/test2">Go to Test two</router-link>
	  	</p>
	  	<router-view></router-view>
	</div>
<script src="{{asset('js/app.js')}}"></script>
</body>
</html>