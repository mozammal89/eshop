<!DOCTYPE html>
<html>
<head>
	<title>admin</title>
	<link rel="stylesheet" type="text/css" href="{{asset('css/admin.css')}}">
</head>
<body class="sidebar-mini layout-fixed">
<div id="appadmin">
	@{{test}}
	<p>
		<admin-master></admin-master>
	</p>
</div>
<script src="{{asset('assets/admin/js/jquery.min.js')}}"></script>
<script src="{{asset('assets/admin/js/adminlte.js')}}"></script>
<script src="{{asset('js/admin.js')}}"></script>
</body>
</html>