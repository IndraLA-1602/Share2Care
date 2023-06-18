<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends BaseController
{
    public function index()
    {
        $user = Auth::guard()->user();
        return $this->sendResponse('Success', 'Data User Berhasil Di dapatkan', $user);
    }
}
