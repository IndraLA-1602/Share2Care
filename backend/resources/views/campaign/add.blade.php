@extends('templates.master')

@section('title', 'Add Campaign')

@section('page-title', 'Add Campaign')

@section('content')
<div class="card">
    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif
    <div class="card-body">
        <form action="{{route('campaign.store')}}" method="post" enctype="multipart/form-data">
            @csrf
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="campaign_name" class="form-control" id="name" aria-describedby="name">
            </div>
            <div class="mb-3">
                <label for="city" class="form-label">City</label>
                <select name="city" id="city" class="form-control">
                    <option value="jakarta">Jakarta</option>
                    <option value="bogor">Bogor</option>
                    <option value="yogyakarta">Yogyakarta</option>
                    <option value="surabaya">Surabaya</option>
                    <option value="malang">Malang</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <textarea name="address" class="form-control" id="address"></textarea>
            </div>

            <div class="mb-3">
                <label for="judul" class="form-label">Description</label>
                <textarea type="text" name="desc" class="form-control" id="desc"
                    aria-describedby="desc"></textarea>
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Image</label>
                <input type="file" name="image" class="form-control" id="image" aria-describedby="image">
            </div>

            <button class="btn btn-info text-light float-end mb-3">Simpan</button>
        </form>
    </div>
</div>
@endsection
