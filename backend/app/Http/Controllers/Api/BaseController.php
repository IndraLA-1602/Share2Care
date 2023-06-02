<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function sendResponse($status, $message, $result = [])
    {
        $response = [
            'status' => $status,
            'message' => $message,
            'data'    => $result,
        ];

        return $response;
    }
}
