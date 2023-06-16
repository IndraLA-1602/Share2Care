@extends('templates.master')

@section('title', 'Campaign')

@section('page-title', 'Campaign')

@section('content')
<a href="{{route('campaign.create')}}" class="btn btn-info text-light float-end mb-3">Tambah Campaign</a>
<table class="table table-light table-striped shadow">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Province</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($campaigns as $index => $campaign)
        <tr>
            <th scope="row">{{$index+1}}</th>
            <td>{{$campaign->name}}</td>
            <td>{{$campaign->alamat}}</td>
            <td>
                <img src="{{$campaign->image ? asset('storage/'.$campaign->image) : asset('assets/image/no-image.png')}}" alt="thumb" style="width: 50px;">
            </td>
            <td>{{$campaign->desc}}</td>
            <td>{{$campaign->province}}</td>
            <td>
                <div class="d-flex gap-2">
                    <a href="{{route("campaign.edit", $campaign->id)}}" class="btn btn-primary">Edit</a>
                    <a class="btn btn-danger" href="{{route('campaign.destroy', $campaign->id)}}" data-confirm-delete="true">Delete</a>
                </div>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
