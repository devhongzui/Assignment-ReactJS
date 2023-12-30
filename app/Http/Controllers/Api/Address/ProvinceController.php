<?php

namespace App\Http\Controllers\Api\Address;

use App\Http\Controllers\Controller;
use App\Models\Address\Province;

class ProvinceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Province::all();
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Province|null
     */
    public function show(int $id)
    {
        return Province::where('code', $id)->first();
    }
}
