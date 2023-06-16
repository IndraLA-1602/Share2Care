@extends('templates.master')

@section('title', 'Edit Category')

@section('page-title', 'Edit Category')

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
        <form action="{{route('category.update', $category->id)}}" method="post" enctype="multipart/form-data">
            @csrf
            @method("PUT")
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" name="title" value="{{$category->title}}" class="form-control" id="title" aria-describedby="title">
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
