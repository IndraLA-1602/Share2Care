<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use App\Models\Campaign;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class CampaignController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $campaign = Campaign::all();
        return $this->sendResponse('Success', 'Data berhasil didapatkan', $campaign);
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
            'name' => 'required',
            'alamat' => 'required',
            'desc' => 'required',
            'province' => 'required',
            // 'image' => 'mimes:jpg,jpeg,png',
        ]);

        $campaign = new Campaign;

        if( $validator->fails() ){
            return $this->errorResponse('Failed', $validator->errors(), 400);
        }

        // if($request->hasFile('image')){
        //     $upload = $request->file('image')->store('campaign');
        //     $campaign->image = $upload;
        // }

        $campaign->name = $request->name;
        $campaign->alamat = $request->alamat;
        $campaign->desc = $request->desc;
        $campaign->province = $request->province;
        $campaign->image = $request->image;
        $campaign->save();
        if($campaign){
            return $this->sendResponse('Success', 'Data berhasil ditambahkan', $campaign);
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
            'name' => 'required',
            'alamat' => 'required',
            'desc' => 'required',
            'province' => 'required',
            // 'image' => 'mimes:jpg,jpeg,png',
        ]);

        $campaign = Campaign::find($id);

        if( $validator->fails() ){
            return $this->errorResponse('Failed', $validator->errors(), 400);
        }

        if(!$campaign){
            return $this->errorResponse('Failed', "Data tidak ditemukan", 400);
        }

        // if($request->hasFile('image')){
        //     $upload = $request->file('image')->store('campaign');
        //     $campaign->image = $upload;
        // }

        $campaign->name = $request->name;
        $campaign->alamat = $request->alamat;
        $campaign->desc = $request->desc;
        $campaign->province = $request->province;
        $campaign->image = $request->image;
        $campaign->save();
        if($campaign){
            return $this->sendResponse('Success', 'Data berhasil ditambahkan', $campaign);
        }
        return $this->errorResponse('Failed', 'Data gagal ditambahkan', 400);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $campaign = Campaign::find($id);
        if($campaign){
            $campaign->delete();
            if($campaign->image){
                Storage::disk('public')->delete($campaign->image);
            }
            return $this->sendResponse('Success', 'Data berhasil dihapus', $campaign);
        }
        return $this->errorResponse('Failed', 'Data gagal dihapus', 400);
    }
}
