<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminController extends BaseController
{
    public function authenticate(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = [
            'username' => $request->username,
            'password' => $request->password,
        ];
        
        if( $validator->fails() ){
            return $this->sendResponse('Failed', $validator->errors());
        }
 
        if (Auth::guard('admins')->attempt($credentials)) {
            $user = Auth::guard('admins')->user();
            // dd($user);
            $token =  $user->createToken('ApiToken')->plainTextToken;
            $data['token'] = $token;
            $data['tipe'] = 'bearer';
            return $this->sendResponse('Success', 'Login Berhasil', $data);
        }
 
        return $this->sendResponse('Failed', 'Login Gagal');
    }

    public function register(Request $request)
    {
        $user = new Admin;
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $user->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil diregistrasi',
        ]);
    }

    public function logout()
    {
        $removeToken = Auth::guard('api-admins')->user();
        if($removeToken){
            $removeToken->tokens()->delete();
            return $this->sendResponse('Success', 'Logout Successfully');
        }
        return $this->sendResponse('Failed', 'Invalid Token');
    }
}
