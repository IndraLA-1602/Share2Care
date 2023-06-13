<?php

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\CampaignController;
use App\Http\Controllers\Api\CartController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('user/register', [RegisterController::class, 'store'])->name('register.store');
Route::post('user/login', [LoginController::class, 'authenticate'])->name('login');

Route::post('admin/login', [AdminController::class, 'authenticate'])->name('admin.login');
Route::post('admin/register', [AdminController::class, 'register'])->name('admin.register');

Route::middleware('auth:sanctum')->group(function (){
    Route::post('user/logout', [LoginController::class, 'logout'])->name('logout');
    Route::post('admin/logout', [AdminController::class, 'logout'])->name('admin.logout');
});

Route::middleware('auth:api-admins')->prefix('admin')->group(function (){
    Route::resource('category', CategoryController::class);
    Route::resource('product', ProductController::class);
    Route::resource('campaign', CampaignController::class);
});
Route::middleware('auth:users')->group(function (){
    Route::get('user/test', function() {
        return "User";
    });
    Route::resource('cart', CartController::class);
});
