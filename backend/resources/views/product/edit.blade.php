@extends('templates.master')

@section('title', 'Edit Products')

@section('page-title', 'Edit Products')

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
        <form action="{{route('product.update', $product->id)}}" method="post" enctype="multipart/form-data">
            @csrf
            @method("PUT")
            <div class="row">
                <div class="col-6">
                    <div class="mb-3">
                        <label for="name" class="form-label">Product Name</label>
                        <input type="text" value="{{$product->product_name}}" name="product_name" class="form-control" id="name" aria-describedby="name">
                    </div>
                </div>
                <div class="col-6">
                    <div class="mb-3">
                        <label for="price" class="form-label">Product Price</label>
                        <input type="number" value="{{$product->price}}" min="0" name="price" class="form-control" id="price" aria-describedby="name">
                    </div>
                </div>

                <div class="col-6">
                    <div class="mb-3">
                        <label class="form-label">Kategori</label>
                        <select class="form-select" name="category">
                            @if ($product->category_id)
                            <option value="{{$product->category_id}}">{{$product->category->title}}</option>
                            @endif
                            @foreach ($categories as $category)
                                <option value="{{$category->id}}">{{$category->title}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label for="judul" class="form-label">Description</label>
                <textarea type="text" name="desc" class="form-control" id="desc"
                    aria-describedby="desc">{{$product->desc}}</textarea>
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
