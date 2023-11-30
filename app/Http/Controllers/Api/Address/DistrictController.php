<?php

namespace App\Http\Controllers\Api\Address;

use App\Http\Controllers\Controller;
use App\Models\District;

class DistrictController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return District::all();
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return District|null
     */
    public function show(int $id)
    {
        return District::where('code', $id)->first();
    }
}
