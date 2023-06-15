<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'user' => $this->user->name,
            'qty' => $this->qty,
            'total' => $this->total,
            'products' => $this->product,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}