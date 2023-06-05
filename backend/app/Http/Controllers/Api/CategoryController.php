<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();
        return $this->sendResponse('Success', 'Data berhasil didapatkan', $categories);
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
            'title' => 'required',
            'image' => 'string',
        ]);

        if( $validator->fails() ){
            return $this->errorResponse('Failed', $validator->errors());
        }
        
        $category = new Category;
        $category->title = $request->title;
        $category->image = $request->image;
        $category->save();
        return $this->sendResponse('Success', 'Data berhasil ditambahkan', $category);
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
            'title' => 'required',
            'image' => 'string',
        ]);

        if( $validator->fails() ){
            return $this->errorResponse('Failed', $validator->errors());
        }
        
        $category = Category::find($id);
        $category->title = $request->title;
        $category->image = $request->image;
        $category->save();
        return $this->sendResponse('Success', 'Data berhasil diubah', $category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::find($id);
        if($category == null){
            return $this->errorResponse('Failed', "Data yang dihapus tidak ditemukan", 404);
        }
        $category->delete();
        return $this->sendResponse('Success', 'Data berhasil dihapus', $category);
    }
}
