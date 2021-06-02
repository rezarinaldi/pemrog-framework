<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('create-student', 'App\Http\Controllers\StudentController@createStudent');
Route::get('students', 'App\Http\Controllers\StudentController@studentsListing');
Route::get('student/{id}', 'App\Http\Controllers\StudentController@studentDetail');
Route::delete('student/{id}', 'App\Http\Controllers\StudentController@studentDelete');
