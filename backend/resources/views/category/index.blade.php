@extends('templates.master')

@section('title', 'Categories')

@section('page-title', 'Categories')

@section('content')
<a href="{{route('category.create')}}" class="btn btn-info text-light float-end mb-3">Tambah Category</a>
<table class="table table-light table-striped shadow">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($categories as $index => $category)
        <tr>
            <th scope="row">{{$index+1}}</th>
            <td>{{$category->title}}</td>
            <td>
                <img src="{{$category->image ? asset('storage/'.$category->image) : asset('assets/image/no-image.png')}}" alt="thumb" style="width: 50px;">
            </td>
            <td>
                <div class="d-flex gap-2">
                    <a href="{{route("category.edit", $category->id)}}" class="btn btn-primary">Edit</a>
                    <a class="btn btn-danger" href="{{route('category.destroy', $category->id)}}" data-confirm-delete="true">Delete</a>
                </div>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
