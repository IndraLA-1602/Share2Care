<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function sendResponse($status, $message, $result = [], $statusCode = 200)
    {
        $response = [
            'status' => $status,
            'message' => $message,
            'data'    => $result,
        ];

        return response()->json($response, $statusCode);
    }

    public function errorResponse($status, $message, $statusCode = 401)
    {
        $response = [
            'status' => $status,
            'errors' => $message,
        ];

        return response()->json($response, $statusCode);
    }
}
