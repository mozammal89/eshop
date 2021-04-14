<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::prefix('admin')->group(base_path('routes/admin.php'));
Route::prefix('user')->group(base_path('routes/public.php'));



Route::get('/', function () {
    return view('public.public_master');
});
// Route::get('/user','HomeController@Userindex')->name('user.data.index');


Route::get('admin', function () {
    return view('admin.admin_master');
});


Route::get('public', function () {
    return view('public.public_master');
});



Auth::routes();


Route::get('/login', 'HomeController@index')->name('login');
Route::get('/register', 'HomeController@index')->name('register');
// Route::get('/home', 'HomeController@index')->name('home');






Route::get('/{path}', function () {
    return view('public.public_master');
});