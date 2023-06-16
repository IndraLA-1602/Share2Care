@extends('templates.master')

@section('title', 'Products')

@section('page-title', 'Products')

@section('content')
<a href="{{route('product.create')}}" class="btn btn-info text-light float-end mb-3">Tambah Product</a>
<table class="table table-light table-striped shadow">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($products as $index => $product)
        <tr>
            <th scope="row">{{$index+1}}</th>
            <td>{{$product->product_name}}</td>
            <td>{{$product->price}}</td>
            <td>
                <img src="{{$product->image ? asset('storage/'.$product->image) : asset('assets/image/no-image.png')}}" alt="thumb" style="width: 50px;">
            </td>
            <td>{{$product->desc}}</td>
            <td>{{$product->category ? $product->category->title : ""}}</td>
            <td>
                <div class="d-flex gap-2">
                    <a href="{{route("product.edit", $product->id)}}" class="btn btn-primary">Edit</a>
                    <a class="btn btn-danger" href="{{route('product.destroy', $product->id)}}" data-confirm-delete="true">Delete</a>
                </div>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
