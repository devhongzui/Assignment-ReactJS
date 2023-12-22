<?php

namespace App\Http\Controllers\Api\Study;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Course::inRandomOrder('id')
            ->paginate($request->get('limit', 8))
            ->onEachSide(1);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }
}
