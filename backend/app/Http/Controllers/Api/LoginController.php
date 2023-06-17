<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends BaseController
{
    public function __construct()
    {
        $this->middleware('auth:sanctum', ['except' => ['authenticate', 'register']]);
    }

    public function authenticate(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];
        
        if( $validator->fails() ){
            return $this->sendResponse('Failed', $validator->errors());
        }
 
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            // dd($user);
            $token =  $user->createToken('ApiToken')->plainTextToken;
            $data['token'] = $token;
            $data['tipe'] = 'bearer';
            return $this->sendResponse('Success', 'Login Berhasil', $data);
        }
 
        return $this->errorResponse('Failed', 'Login Gagal', 400);
    }

    public function logout()
    {
        $user = Auth::guard('users')->user();
        if($user){
            $user->tokens()->delete();
            return $this->sendResponse('Success', 'Logout Successfully');
        }
        return $this->sendResponse('Failed', 'Invalid Token');
    }
}
