<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Alert;
use Illuminate\Support\Facades\Storage;

class AdminCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $title = 'Hapus Data!';
        $text = "Yakin ingin dihapus?";
        confirmDelete($title, $text);
        $categories = Category::all();
        return view('category.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('category.add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'title' => 'required',
            'image' => 'mimes:jpg,jpeg,png',
        ]);

        $category = new Category;
        $category->title = $request->title;
        if($request->hasFile('image')){
            $upload = $request->file('image')->store('category/image');
            $category->image = $upload;
        }
        $category->save();

        if($category){
            Alert::toast('Data Berhasil Disimpan', 'success');
            return redirect()->route('category.index');
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
        $category = Category::find($id);
        return view('category.edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validate = $request->validate([
            'title' => 'required',
            'image' => 'mimes:jpg,jpeg,png',
        ]);

        $category = Category::find($id);
        $category->title = $request->title;
        if($request->hasFile('image')){
            $upload = $request->file('image')->store('category/image');
            $category->image = $upload;
        }
        $category->save();

        if($category){
            Alert::toast('Data Berhasil Disimpan', 'success');
            return redirect()->route('category.index');
        }
        Alert::toast('Data Gagal Disimpan', 'error');
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::find($id);
        $delete = $category->delete();
        if( $delete ){
            if($category->image){
                Storage::disk('public')->delete($category->image);
            }
            Alert::toast('Data Berhasil Dihapus', 'success');
            return redirect()->route('category.index');
        }else{
            Alert::toast('Data Gagal dihapus', 'error');
            return redirect()->route('category.index');
        }
    }
}
