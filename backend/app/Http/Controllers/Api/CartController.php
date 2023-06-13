<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CartController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $cart = Cart::whereHas('product', function ($query){
            return $query->where('id', 1);
        })->get();
        dd($cart);
        return $this->sendResponse('Success', 'Cart berhasil didapatkan', $cart);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $product = Product::find($request->product);

        $validator = Validator::make($request->all(),[
            'product' => 'required',
            'qty' => 'required',
            'total' => 'required',
        ]);

        if( $validator->fails() ){
            return $this->errorResponse('Failed', $validator->errors());
        }

        if(!$product){
            return $this->errorResponse('Failed', 'Product tidak ditemukan', 400);
        }

        $cart = new Cart;
        $cart->user_id = $user->id;
        $cart->product_id = $request->product;
        $cart->qty = $request->qty;
        $cart->total = $request->total;
        $cart->save();

        if(!$cart){
            return $this->errorResponse('Failed', 'Data gagal ditambahkan', 400);
        }

        return $this->sendResponse('Success', 'Data berhasil ditambahkan', $cart);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
