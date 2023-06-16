@extends('templates.master')

@section('title', 'Dashboard')

@section('page-title', 'Dashboard')

@section('content')
<div class="row">
    <div class="col-xl-4 col-md-6">
        <div class="card bg-primary text-white mb-4">
            <div class="card-body">
                <div class="card-title">Total Product</div>
                0
            </div>
        </div>
    </div>
    <div class="col-xl-4 col-md-6">
        <div class="card bg-warning text-white mb-4">
            <div class="card-body">
                <div class="card-title">Total Campaign</div>
                0
            </div>
        </div>
    </div>
    <div class="col-xl-4 col-md-6">
        <div class="card bg-success text-white mb-4">
            <div class="card-body">
                <div class="card-title">Total Category</div>
                0
            </div>
        </div>
    </div>
</div>

@endsection
