<?php

use Illuminate\Support\Facades\Route;

Route::get('test',function(){
	return 'ok';
});






Route::get('/{path}', function () {
    return view('admin.admin_master');
});