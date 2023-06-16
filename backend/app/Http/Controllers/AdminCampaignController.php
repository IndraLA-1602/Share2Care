<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Alert;
use App\Models\Campaign;
use Illuminate\Support\Facades\Storage;

class AdminCampaignController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $title = 'Hapus Data!';
        $text = "Yakin ingin dihapus?";
        confirmDelete($title, $text);
        $campaigns = Campaign::all();
        return view('campaign.index', compact('campaigns'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('campaign.add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'campaign_name' => 'required',
            'city' => 'required',
            'address' => 'required',
            'desc' => 'required',
            'image' => 'mimes:jpg,jpeg,png',
        ]);

        $campaign = new Campaign;
        $campaign->name = $request->campaign_name;
        if($request->hasFile('image')){
            $upload = $request->file('image')->store('campaign/image');
            $campaign->image = $upload;
        }
        $campaign->city = $request->city;
        $campaign->alamat = $request->address;
        $campaign->desc = $request->desc;
        $campaign->save();

        if($campaign){
            Alert::toast('Data Berhasil Disimpan', 'success');
            return redirect()->route('campaign.index');
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
        $campaign = Campaign::find($id);
        return view('campaign.edit', compact('campaign'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validate = $request->validate([
            'campaign_name' => 'required',
            'city' => 'required',
            'address' => 'required',
            'desc' => 'required',
            'image' => 'mimes:jpg,jpeg,png',
        ]);

        $campaign = Campaign::find($id);
        $campaign->name = $request->campaign_name;
        if($request->hasFile('image')){
            $upload = $request->file('image')->store('campaign/image');
            $campaign->image = $upload;
        }
        $campaign->city = $request->city;
        $campaign->alamat = $request->address;
        $campaign->desc = $request->desc;
        $campaign->save();

        if($campaign){
            Alert::toast('Data Berhasil Disimpan', 'success');
            return redirect()->route('campaign.index');
        }
        Alert::toast('Data Gagal Disimpan', 'error');
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $campaign = Campaign::find($id);
        $delete = $campaign->delete();
        if( $delete ){
            if($campaign->image){
                Storage::disk('public')->delete($campaign->image);
            }
            Alert::toast('Data Berhasil Dihapus', 'success');
            return redirect()->route('campaign.index');
        }else{
            Alert::toast('Data Gagal dihapus', 'error');
            return redirect()->route('campaign.index');
        }
    }
}
