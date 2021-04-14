<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth'], function(){
    Route::get('/deshboard','HomeController@index')->name('deshboard');
    Route::get('/','HomeController@Userindex')->name('data.index');
});

