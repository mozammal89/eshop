<?php

use Illuminate\Support\Facades\Route;

Route::get('login','Admin\LoginController@ShowLoginForm')->name('admin.login');
Route::post('/login','Admin\LoginController@login')->name('admin.login.post');


Route::group(['middleware' => 'auth:admin'], function(){
    Route::get('/', function () {
        return view('admin.admin_master');
    })->name('admin.deshboard');

    Route::get('/data','HomeController@Adminindex')->name('admin.data.index');

    Route::get('/logout','Admin\LoginController@logout')->name('admin.logout');

    // Category Controller 
    Route::resource('category','CategoryController');

    Route::post('/multiple-category/delete','CategoryController@MultipleCatDelete')->name('admin.multiple.category.delete');
});



Route::get('test',function(){
	return 'ok';
});






Route::get('/{path}', function () {
    return view('admin.admin_master');
});