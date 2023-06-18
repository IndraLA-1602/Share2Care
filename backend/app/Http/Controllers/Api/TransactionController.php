<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use App\Models\Cart;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Response;

class TransactionController extends BaseController
{
    public function index(Request $request)
    {
        $user = Auth::user();
        $product = Product::find($request->prodId);
        $order = Order::create([
            "user_id" => $user->id,
            "product_id" => $product->id,
            "amount" => $product->price,
            "status" => "pending",
        ]);

        \Midtrans\Config::$serverKey = 'SB-Mid-server-_QLRrgV4QCQc-hdbh1uEeQyZ';
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $params = array(
            'transaction_details' => array(
                'order_id' => $order->id,
                'gross_amount' => $order->amount,
            ),
            'customer_details' => array(
                'first_name' => $user ? $user->name : "test",
                'email' => $user ? $user->email : "test@test.com",
                'phone' => '08111222333',
            ),
        );

        $snapToken = \Midtrans\Snap::getSnapToken($params);
        return Response::json(['client_key' => $snapToken]);
    }

    public function store(Request $request)
    {
        $order = Order::find($request->order_id);
        $order->status = "success";
        $order->save();

        if($request->has('cart_id')){
            $cart = Cart::destroy($request->cart_id);
            return $this->sendResponse('Success', 'Data berhasil di checkout', $order);
        }
        return $this->sendResponse('Success', 'Data berhasi di order', $order);
    }
}
