<?php

namespace App\Http\Controllers\Api\Address;

use App\Http\Controllers\Controller;
use App\Models\Address\SubDistrict;

class SubDistrictController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return SubDistrict::all();
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return SubDistrict|null
     */
    public function show(int $id)
    {
        return SubDistrict::where('code', $id)->first();
    }
}
