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

Route::get('/', function () {
    return view('welcome');
});
Route::get('admin', function () {
    return view('admin.admin_master');
});
Route::get('public', function () {
    return view('public.public_master');
});


Route::prefix('admin')->group(base_path('routes/admin.php'));

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');






Route::get('/{path}', function () {
    return view('public.public_master');
});