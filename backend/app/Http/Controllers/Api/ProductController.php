<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProductController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if(request()->limit){
            $query = Product::limit(request()->limit)->get();
            $products = ProductResource::collection($query);
            return $this->sendResponse('Success', 'Data berhasil didapatkan', $products);
        }
        $products = ProductResource::collection(Product::all());
        return $this->sendResponse('Success', 'Data berhasil didapatkan', $products);
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
        $validator = Validator::make($request->all(),[
            'product_name' => 'required',
            'price' => 'required|integer',
            'desc' => 'required',
            'category' => 'required',
            'image' => 'mimes:jpg,jpeg,png',
        ]);

        $product = new Product;
        $category = Category::find($request->category);

        if( $validator->fails() ){
            return $this->errorResponse('Failed', $validator->errors(), 400);
        }

        if($request->hasFile('image')){
            $upload = $request->file('image')->store('products');
            $product->image = $upload;
        }
        
        if(!$category){
            return $this->errorResponse('Failed', 'Category tidak tersedia', 400);
        }

        $product->product_name = $request->product_name;
        $product->price = $request->price;
        $product->desc = $request->desc;
        $product->category_id = $request->category;
        $product->save();
        if($product){
            return $this->sendResponse('Success', 'Data berhasil ditambahkan', $product);
        }
        return $this->errorResponse('Failed', 'Data gagal ditambahkan', 400);
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
        $validator = Validator::make($request->all(),[
            'product_name' => 'required',
            'price' => 'required|integer',
            'desc' => 'required',
            'category' => 'required',
            'image' => 'mimes:jpg,jpeg,png',
        ]);

        $product = Product::find($id);
        $category = Category::find($request->category);

        if( $validator->fails() ){
            return $this->errorResponse('Failed', $validator->errors(), 400);
        }

        if($request->hasFile('image')){
            $upload = $request->file('image')->store('products');
            $product->image = $upload;
        }
        
        if(!$category){
            return $this->errorResponse('Failed', 'Category tidak tersedia', 400);
        }

        $product->product_name = $request->product_name;
        $product->price = $request->price;
        $product->desc = $request->desc;
        $product->category_id = $request->category;
        $product->save();
        if($product){
            return $this->sendResponse('Success', 'Data berhasil diubah', $product);
        }
        return $this->errorResponse('Failed', 'Data gagal diubah', 400);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        if($product){
            $product->delete();
            if($product->image){
                Storage::disk('public')->delete($product->image);
            }
            return $this->sendResponse('Success', 'Data berhasil dihapus', $product);
        }
        return $this->errorResponse('Failed', 'Data gagal dihapus', 400);
    }
}
