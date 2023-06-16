<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

use Alert;
use Illuminate\Support\Facades\Storage;

class AdminProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $title = 'Hapus Data!';
        $text = "Yakin ingin dihapus?";
        confirmDelete($title, $text);
        $products = Product::all();
        return view('product.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return view('product.add', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'product_name' => 'required',
            'price' => 'required|integer',
            'desc' => 'required',
            'category' => 'required',
            'image' => 'mimes:jpg,jpeg,png',
        ]);

        $product = new Product;
        $category = Category::find($request->category);
        
        if(!$category){
            return redirect()->back();
        }

        if($request->hasFile('image')){
            $upload = $request->file('image')->store('products/image');
            $product->image = $upload;
        }

        $product->product_name = $request->product_name;
        $product->price = $request->price;
        $product->desc = $request->desc;
        $product->category_id = $request->category;
        $product->save();
        if($product){
            Alert::toast('Data Berhasil Disimpan', 'success');
            return redirect()->route('product.index');
        }
        Alert::toast('Data Gagal Disimpan', 'error');
        return redirect()->back();
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
        $categories = Category::all();
        $product = Product::find($id);
        return view('product.edit', compact('categories', 'product'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validate = $request->validate([
            'product_name' => 'required',
            'price' => 'required|integer',
            'desc' => 'required',
            'category' => 'required',
            'image' => 'mimes:jpg,jpeg,png',
        ]);

        $product = Product::find($id);
        $category = Category::find($request->category);
        
        if(!$category){
            Alert::toast('Category Tidak Ditemukan', 'error');
            return redirect()->back();
        }

        if($request->hasFile('image')){
            $upload = $request->file('image')->store('products/image');
            $product->image = $upload;
        }

        $product->product_name = $request->product_name;
        $product->price = $request->price;
        $product->desc = $request->desc;
        $product->category_id = $request->category;
        $product->save();
        if($product){
            Alert::toast('Data Berhasil Disimpan', 'success');
            return redirect()->route('product.index');
        }
        Alert::toast('Data Gagal Disimpan', 'error');
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        $delete = $product->delete();
        if( $delete ){
            Storage::disk('public')->delete($product->image);
            Alert::toast('Data Berhasil Dihapus', 'success');
            return redirect()->route('product.index');
        }else{
            Alert::toast('Data Gagal dihapus', 'error');
            return redirect()->route('product.index');
        }
    }
}
