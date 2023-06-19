<?php

namespace App\Http\Controllers;

use App\Models\Campaign;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $product = Product::all()->count();
        $category = Category::all()->count();
        $campaign = Campaign::all()->count();
        return view('dashboard', compact('product', 'campaign', 'category'));
    }
}
