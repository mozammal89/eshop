<?php

use Illuminate\Support\Facades\Route;

Route::get('login','Admin\LoginController@ShowLoginForm')->name('admin.login');

Route::group(['middleware' => 'auth:admin'], function(){
    Route::get('/', function () {
        return view('admin.admin_master');
    })->name('admin.deshboard');
});



Route::get('test',function(){
	return 'ok';
});






Route::get('/{path}', function () {
    return view('admin.admin_master');
});